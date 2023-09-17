var peg = require("pegjs");
var parser = peg.generate("start = ('a' / 'b')+");

console.log(parser.parse("abba"));
