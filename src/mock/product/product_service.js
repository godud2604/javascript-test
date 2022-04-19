// Dependency Injection (의존관계 주입) 형태의 version
// 1. 의존성이 줄어든다.
// 2. 재사용성이 높은 코드가 된다.
// 3. 테스트하기 좋은 코드가 된다.
// 4. 가독성이 높아진다.

class ProductService {
  constructor(productClient) {
    this.productClient = productClient;
  }

  fetchAvailableItems() {
    return this.productClient
      .fetchItems()
      .then((items) => items.filter((item) => item.available));
  }
}

module.exports = ProductService;