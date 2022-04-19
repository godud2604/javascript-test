const ProductClient = require('./product_client');

// Dependency Injection (의존관계 주입) 이 없는 version
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