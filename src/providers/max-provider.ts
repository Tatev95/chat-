class Stack {
  private store: number[] = [];
  private maxNumbers: number[] = [];

  push(item: number) {
    this.store.push(item);
    this.maxNumbers.push(item);
  }

  pop(item: number) {
    this.store.pop();
  }

  getMax() {}
}

// 3 2  4 7 8 2 8 9 6 7
// 3 3 4 7 8 8 8 9 9

// to do
