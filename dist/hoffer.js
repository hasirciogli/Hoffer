export class Hoffer {
    constructor() {
        this.buffer = Buffer.alloc(0);
        this.readOffset = 0;
    }
    // Veri yazma metodları
    putNumber(value) {
        const tempBuffer = Buffer.alloc(4);
        tempBuffer.writeInt32BE(value);
        this.buffer = Buffer.concat([this.buffer, tempBuffer]);
    }
    putString(value) {
        const stringBuffer = Buffer.from(value, "utf-8");
        const lengthBuffer = Buffer.alloc(4);
        lengthBuffer.writeInt32BE(stringBuffer.length);
        this.buffer = Buffer.concat([this.buffer, lengthBuffer, stringBuffer]);
    }
    putDouble(value) {
        const tempBuffer = Buffer.alloc(8);
        tempBuffer.writeDoubleBE(value);
        this.buffer = Buffer.concat([this.buffer, tempBuffer]);
    }
    putByte(value) {
        const tempBuffer = Buffer.alloc(1);
        tempBuffer.writeUInt8(value);
        this.buffer = Buffer.concat([this.buffer, tempBuffer]);
    }
    putByteArray(value) {
        const lengthBuffer = Buffer.alloc(4);
        lengthBuffer.writeInt32BE(value.length);
        const byteArrayBuffer = Buffer.from(value);
        this.buffer = Buffer.concat([this.buffer, lengthBuffer, byteArrayBuffer]);
    }
    putValue(type, value) {
        switch (type) {
            case "number":
                this.putNumber(value);
                break;
            case "string":
                this.putString(value);
                break;
            case "double":
                this.putDouble(value);
                break;
            case "byte":
                this.putByte(value);
                break;
            case "byteArray":
                this.putByteArray(value);
                break;
            default:
                throw new Error(`Unsupported type: ${type}`);
        }
    }
    // Veri okuma metodları
    getNumber() {
        const value = this.buffer.readInt32BE(this.readOffset);
        this.readOffset += 4;
        return value;
    }
    getString() {
        const length = this.buffer.readInt32BE(this.readOffset);
        this.readOffset += 4;
        const value = this.buffer.toString("utf-8", this.readOffset, this.readOffset + length);
        this.readOffset += length;
        return value;
    }
    getDouble() {
        const value = this.buffer.readDoubleBE(this.readOffset);
        this.readOffset += 8;
        return value;
    }
    getByte() {
        const value = this.buffer.readUInt8(this.readOffset);
        this.readOffset += 1;
        return value;
    }
    getByteArray() {
        const length = this.buffer.readInt32BE(this.readOffset);
        this.readOffset += 4;
        const value = Array.from(this.buffer.slice(this.readOffset, this.readOffset + length));
        this.readOffset += length;
        return value;
    }
    getValue(type) {
        switch (type) {
            case "number":
                return this.getNumber();
            case "string":
                return this.getString();
            case "double":
                return this.getDouble();
            case "byte":
                return this.getByte();
            case "byteArray":
                return this.getByteArray();
            default:
                throw new Error(`Unsupported type: ${type}`);
        }
    }
    // Buffer'ı yeniden kullanmak için sıfırlama
    reset() {
        this.buffer = Buffer.alloc(0);
        this.readOffset = 0;
    }
    // Data byte dizisini almak için
    getData() {
        return this.buffer;
    }
    // Data byte dizisini ayarlamak için
    setData(data) {
        this.buffer = Buffer.from(data);
        this.readOffset = 0;
    }
    // Veriyi socket üzerinden göndermek için
    sendData(socket) {
        socket.write(this.buffer);
    }
}
