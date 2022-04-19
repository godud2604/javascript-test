const check = require('../check');

describe('check', () => {
  let onSuccess;
  let onFail;

  // 초기화
  beforeEach(() => {
    onSuccess = jest.fn(); // mock function 
    onFail = jest.fn(); // // mock function 
  });

  it('should call onSuccess when predicate is true', () => {
    check(() => true, onSuccess, onFail);

    // expect(onSuccess.mock.calls.length).toBe(1);
    // toHaveBeenCalledTimes : 호출된 횟수
    expect(onSuccess).toHaveBeenCalledTimes(1);
    
    // expect(onSuccess.mock.calls[0][0]).toBe('yes');
    // toHaveBeenCalledWith : 이 인자와 함께 호출되어야 한다.
    expect(onSuccess).toHaveBeenCalledWith('yes');

    // expect(onFail.mock.calls.length).toBe(0);
    expect(onFail).toHaveBeenCalledTimes(0);
  });

  it('should call onFail when predicate is false', () => {
    check(() => false, onSuccess, onFail);

    // expect(onSuccess.mock.calls.length).toBe(1);
    expect(onFail).toHaveBeenCalledTimes(1);
    
    // expect(onSuccess.mock.calls[0][0]).toBe('yes');
    expect(onFail).toHaveBeenCalledWith('no');

    // expect(onFail.mock.calls.length).toBe(0);
    expect(onSuccess).toHaveBeenCalledTimes(0);
  });
});
