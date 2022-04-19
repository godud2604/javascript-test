const ProductService = require('../product_service_no_di');
const ProductClient = require('../product_client');
// 이 파일에서는, ProductService에 대해서만 test를 한다. 다른 파일과의 의존성을 배제시켜야 한다.
// 따라서, ProductClient는 mock functions으로 처리를 해주는 것
jest.mock('../product_client.js'); 

describe('ProductService', () => {
  // fetchItems를 실행하면 mock 함수가 비동기적으로 array를 return 한다.
  const fetchItems = jest.fn(async () => [
    { item: 'Milk', available: true},
    { item: 'apple', available: false },
  ]);
  ProductClient.mockImplementation(() => {
    return {
      fetchItems,
    };
  });
  let productService;

  beforeEach(() => {
    productService = new ProductService();
  });

  it('should filter out only available items', async () => {
    const items = await productService.fetchAvailableItems();

    expect(items.length).toBe(1); // length 확인
    expect(items).toEqual([{ item: 'Milk', available: true }]);
  });
});