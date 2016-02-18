describe('array',function(){
  it('created with length specified', function(){
    var arr = new Array(42);
    expect(arr.length).toBe(42);

    //all elements expect to be undefined, no matter indexes ar within 0 - 41
    //or not.
    var i = 0;
    for(var j = 0; j != 42; ++j, ++i){
      expect(arr[j]).toBeUndefined();
    }
    expect(i).toBe(42);
    expect(arr[88]).toBeUndefined();
  });

  it('Array methods', function(){
    var arr = [1,2,3];
    expect(arr.join()).toBe('1,2,3');
    expect(arr.join("")).toBe('123');
    expect(arr.join(' ')).toBe('1 2 3');

    expect(arr.filter(function(x){return x < 2})).toEqual([1]);
  });
});
