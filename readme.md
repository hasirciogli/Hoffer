Tabii, işte Markdown formatında `README.txt` dosyası:

```
# Hoffer Class

`Hoffer` is a versatile TypeScript class designed to handle various data types and manage binary data efficiently. It provides methods to write and read different data types such as numbers, strings, doubles, bytes, and byte arrays. Additionally, it includes functionality to send data over a network socket.

## Features

- Write and read integers, strings, doubles, bytes, and byte arrays
- Dynamic handling of different data types with `putValue` and `getValue` methods
- Efficient binary data management with a Buffer
- Send data over a network socket

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
import { Hoffer } from './hoffer';
import * as net from 'net';
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
```

Bu Markdown formatındaki README dosyasını bir `README.txt` dosyasına kopyalayabilir ve kaydedebilirsiniz.