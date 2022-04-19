class StubProductClient {
  // network에 의존하지 않는 형태
  async fetchItems() {
    return [
      { item: 'Milk', available: true},
      { item: 'apple', available: false },
    ]
  }
}

module.exports = StubProductClient;