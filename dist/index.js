import { Hoffer } from "./hoffer.js";
// Örnek kullanım
const hoffer = new Hoffer();
// Veri yazma
hoffer.putNumber(123);
hoffer.putString("John Doe");
hoffer.putDouble(4567.89);
hoffer.putByte(0x1f);
hoffer.putByteArray([0x01, 0x02, 0x03, 0x04]);
// Tüm veri türlerinde veri yazma
hoffer.putValue("number", 42);
hoffer.putValue("string", "Hello, World!");
hoffer.putValue("double", 3.14159);
hoffer.putValue("byte", 0x2a);
hoffer.putValue("byteArray", [0x10, 0x20, 0x30]);
// Buffer'dan veri okuma
const data = hoffer.getData();
const readHoffer = new Hoffer();
readHoffer.setData(data);
const id = readHoffer.getNumber();
const name = readHoffer.getString();
const balance = readHoffer.getDouble();
const byteValue = readHoffer.getByte();
const byteArrayValue = readHoffer.getByteArray();
console.log("ID:", id);
console.log("Name:", name);
console.log("Balance:", balance);
console.log("Byte Value:", byteValue);
console.log("Byte Array Value:", byteArrayValue);
// Tüm veri türlerinde veri okuma
console.log("Generic Number:", readHoffer.getValue("number"));
console.log("Generic String:", readHoffer.getValue("string"));
console.log("Generic Double:", readHoffer.getValue("double"));
console.log("Generic Byte:", readHoffer.getValue("byte"));
console.log("Generic Byte Array:", readHoffer.getValue("byteArray"));
// Veriyi socket üzerinden gönderme
// const client = new net.Socket();
// client.connect(12345, "localhost", () => {
//   readHoffer.sendData(client);
//   client.end();
// });
