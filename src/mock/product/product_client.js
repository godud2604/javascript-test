// 백엔드에서 api를 받아오는 로직
class ProductClient {
  fetchItems() {
    return fetch('http://example.com/login/id+password').then((response) => response.json());
  }
}

module.exports = ProductClient;