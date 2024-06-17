# Hoffer Library

**Hoffer.ts: Network Data Serialization and Deserialization Library**

This TypeScript library, `Hoffer.ts`, provides a convenient and efficient way to serialize and deserialize various data types for network communication. It offers functionalities for both writing and reading data in a structured format, making it ideal for building network protocols or exchanging data between applications.

**Key Features:**

- **Supported Data Types:** Handles numbers, strings, doubles, bytes, and byte arrays.
- **Write Methods:**
    - `putNumber(value: number)`: Writes an integer value.
    - `putString(value: string)`: Writes a string, preceded by its length.
    - `putDouble(value: number)`: Writes a double-precision floating-point number.
    - `putByte(value: number)`: Writes a single byte value.
    - `putByteArray(value: number[])`: Writes an array of bytes.
    - `putValue(type: string, value: any)`: Generic method for writing data based on type.
- **Read Methods:**
    - `getNumber()`: Reads an integer value.
    - `getString()`: Reads a string, respecting its preceding length.
    - `getDouble()`: Reads a double-precision floating-point number.
    - `getByte()`: Reads a single byte value.
    - `getByteArray()`: Reads an array of bytes.
    - `getValue(type: string)`: Generic method for reading data based on type.
- **Buffer Management:**
    - `reset()`: Clears the internal buffer for reuse.
    - `getData()`: Retrieves the current data buffer for sending.
    - `setData(data: Buffer)`: Sets the internal buffer with received data for reading.
- **Network Integration:**
    - `sendData(socket: net.Socket)`: Sends the data buffer through a provided socket connection (example usage provided, but requires `net` module import).

## Installation

Ensure you have Node.js and TypeScript installed. You can install the required dependencies using npm or yarn:

```
npm install
# or
yarn install
```

## Usage

### Importing the Class

First, import the `Hoffer` class in your TypeScript file:

```typescript
import { Hoffer } from 'hoffer';
```
or
```js
const { Hoffer } = require("hoffer")
```

### Writing Data

You can write various data types to the buffer using the provided methods:

```typescript
const hoffer = new Hoffer();

hoffer.putNumber(123);
hoffer.putString("John Doe");
hoffer.putDouble(4567.89);
hoffer.putByte(0x1F);
hoffer.putByteArray([0x01, 0x02, 0x03, 0x04]);

// Using putValue for dynamic type handling
hoffer.putValue('number', 42);
hoffer.putValue('string', "Hello, World!");
hoffer.putValue('double', 3.14159);
hoffer.putValue('byte', 0x2A);
hoffer.putValue('byteArray', [0x10, 0x20, 0x30]);
```

### Reading Data

Read the data back from the buffer:

```typescript
const readHoffer = new Hoffer();
readHoffer.setData(data); // the data == buffer

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

// Using getValue for dynamic type handling
console.log("Generic Number:", readHoffer.getValue('number'));
console.log("Generic String:", readHoffer.getValue('string'));
console.log("Generic Double:", readHoffer.getValue('double'));
console.log("Generic Byte:", readHoffer.getValue('byte'));
console.log("Generic Byte Array:", readHoffer.getValue('byteArray'));
```

### Sending Data Over a Socket

To send data over a network socket, use the `sendData` method:

```typescript
const client = new net.Socket();
client.connect(12345, 'localhost', () => {
    readHoffer.sendData(client);
    client.end();
});
```

## API

### Methods

#### `putNumber(value: number): void`
Writes a 32-bit integer to the buffer.

#### `putString(value: string): void`
Writes a UTF-8 encoded string to the buffer.

#### `putDouble(value: number): void`
Writes a 64-bit double to the buffer.

#### `putByte(value: number): void`
Writes a single byte to the buffer.

#### `putByteArray(value: number[]): void`
Writes an array of bytes to the buffer.

#### `putValue(type: string, value: any): void`
Dynamically writes a value to the buffer based on the specified type.

#### `getNumber(): number`
Reads a 32-bit integer from the buffer.

#### `getString(): string`
Reads a UTF-8 encoded string from the buffer.

#### `getDouble(): number`
Reads a 64-bit double from the buffer.

#### `getByte(): number`
Reads a single byte from the buffer.

#### `getByteArray(): number[]`
Reads an array of bytes from the buffer.

#### `getValue(type: string): any`
Dynamically reads a value from the buffer based on the specified type.

#### `reset(): void`
Resets the buffer and read offset.

#### `getData(): Buffer`
Returns the current buffer.

#### `setData(data: Buffer): void`
Sets the buffer with the provided data and resets the read offset.

#### `sendData(socket: net.Socket): void`
Sends the buffer data over the provided network socket.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.