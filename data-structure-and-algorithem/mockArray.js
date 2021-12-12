class ArrayList { 
  constructor() {
    this.length = 0;
    this.data = {};
  }
  push(value) {
    this.data[this.length] = value;
    this.length++;
  }
  pop() {
    const result = this.data[this.length-1];
    delete this.data[this.length-1];
    this.length--;
    return result;
  }
  get(index) {
    return this.data[index];
  }
  delete(index) {
    const result = this.data[index];
    this._collapseTo(index);
    return result;
  }
  _collapseTo(index) {
    for (let i=index; i<this.length; i++) {
      this.data[i] = this.data(i+1);
    }
    delete this.data[this.length-1];
    this.length--;
  }
}

const array = new ArrayList();

array.push(100);

console.info('array', array);

module.exports = array;
