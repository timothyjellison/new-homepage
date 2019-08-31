---
title: Streams, Chunks, & Buffers
date: "2018-09-27T22:12:03.284Z"
---

Streams are one of Node's most powerful features, but (like so much in computer science) they're victims of their own counterintuitive vocabulary. *Streams* process *chunks* of data in the form of *Buffers*.

Ah yes, just like a real stream 😜

Let's explore each of these terms. By the end you should have a strong enough sense of the basics to start exploring streams on your own.

## Streams
Unlike batch processing, in which a whole file is loaded into memory and processed all in one big batch, a stream breaks data into arbitrarily sized chunks and processes them sequentially.

[The Wikipedia article on streams](https://en.wikipedia.org/wiki/Stream_(computing)) puts it well: "A stream is a sequence of data elements made available over time." In similar terms, a batch would be one data element made available all at once.

How do you know when to stream data rather than process it in one big batch? You can find out by answering a couple questions.

* How large is your source data? If it's something that would strain your random access memory — for example, a 1GB video — you're better off streaming it so that it can be broken into sensibly sized chunks. Each chunk will be loaded into memory, processed, and then deleted from memory to make room for the next chunk.

* Do you need processed data right away or can you wait until everything has been processed? If you want to display video or a constantly updating stockmarket ticker you simply don't have time to wait for all the data to come in — you need to start processing the data and displaying results right away.

In Node you would stream data from or to the disk using `fs.createReadStream` or `fs.createWriteStream`. The batch processing equivalents are `fs.readFile` and `fs.writeFile`;

## Chunks
How does Node decide where to end one chunk and begin the next? If I'm streaming a 1000kb file, does it break it into ten 100kb chunks? Two hundred 5kb chunks?

The stream decides chunk size by using the highWaterMark property specified in its constructor. **By default the highWaterMark is 64kb**, but we can set it to whatever we want. Here's how we would stream a .txt file 2 bytes at a time.

```javascript
fs.createReadStream('./test.txt', {
  highWaterMark: 2
});
```
## Buffers
A Buffer represents space allocated in random access memory (RAM). When the stream breaks a chunk off the incoming data it stores the bytes in a Buffer. (More specifics in the example below.)

Buffers have significant *memory* advantages. Buffers are fixed length so they don't have the potential to gobble up memory like dynamic arrays. Buffers are stored outside the V8 heap, meaning they don't live in the same memory space as your other JavaScript variables. They live in the rarefied C++ realm that Node itself is made of.

So what does a Buffer look like?

Say I have a file `test.txt` that I want to stream.
```
abc
```
I'll create a new read stream using Node's file system (`fs`) utility.
```javascript
const fs = require('fs');

const example = fs.createReadStream('./test.txt', {
  highWaterMark: 2
});

example.on('data', (chunk) => {
  console.log(chunk);
});
```
When the `example` read stream receives data 'abc' it breaks it into one 2 byte chunk `<Buffer 61 62>` and one 1 byte chunk `<Buffer 63>`.

The numbers inside the `<Buffer>` objects are hexadecimal representations of binary data called *octets*. An octet is an 8 bit byte. For example: the hexadecimal `61` is equivalent to the eight bit `01100001` byte. Look `61` up in an ASCII table and you'll see that it corresponds to the letter 'a'.

This helps us make sense of the Buffers our example stream logged out. The `61` hex is the ASCII value for `a`. Likewise `62` is `b` and `63` is `c`.