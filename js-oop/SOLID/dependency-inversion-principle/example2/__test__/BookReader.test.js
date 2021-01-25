const { EBookReader, PDFBook } = require('../BookReader');

test('it reads book!', () => {
  const b = new PDFBook();
  const r = new EBookReader(b);

  expect(r.read()).toContain('pdf book');
});
