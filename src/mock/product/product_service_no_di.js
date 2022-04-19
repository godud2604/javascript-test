const ProductClient = require('./product_client');

// 받아온 데이터를, 클라이언트 로직과 같이 사용
class ProductService {
  constructor() {
    this.productClient = new ProductClient();
  }

  fetchAvailableItems() {
    return this.productClient
      .fetchItems()
      .then((items) => items.filter((item) => item.available));
  }
}

module.exports = ProductService;