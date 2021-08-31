class EBookReader {
  constructor(book) {
    this.book = book;
  }

  read() {
    return this.book.read();
  }
}

class PDFBook {
  read() {
    return 'reading a pdf book.';
  }
}

/**
 * so now EBookReader is generic, but it depends on a PDFBook which is too detailed.
 * Instead, refactor EBookReader to depend on an interface EBook, which has a read method.
 * Then, let PDFBook and all kinds of books to implement Ebook interface.
 * Problem solves!
 * Now, JavaScript, go
 */

module.exports = { EBookReader, PDFBook };
