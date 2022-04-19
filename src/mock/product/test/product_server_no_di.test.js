const ProductService = require('../product_service_no_di');
const ProductClient = require('../product_client');
jest.mock('../product_client.js'); 

describe('ProductService', () => {
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

    expect(items).toEqual([{ item: 'Milk', available: true }]);
  });
});