describe('ch4:', function(){
  it('undefined elements can be includded in an array literal',function(){
    expect([1,,,5].length).toBe(4);
  });

  it('in operator', function(){
    var o = {x:1,y:1};
    expect('x' in o).toBe(true);
    expect('z' in o).toBe(false);
    expect('toString' in o).toBe(true);

    var arr = [7,8,9];
    expect('0' in arr).toBe(true);
    expect(1 in arr).toBe(true);
    expect(3 in arr).toBe(false);
  });

  it('comma operator', function(){
    expect((i = 42, j = 34, k = 0.5)).toBe(0.5);
  })
});
