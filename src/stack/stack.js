class Stack {
  constructor(array) {
    this.array = array;
  }

  size() {
    return this.array.length;
  }

  push(number) {
    return this.array.push(number);
  }

  pop() {
    if (this.array.length === 0) {
      throw new Error('Stack is empty')
    }
    return this.array.pop();
  }

  peek() {
    if (this.array.length === 0) {
      throw new Error('Stack is empty')
    }
    return this.array[this.size() - 1];
  }
}

module.exports = Stack;