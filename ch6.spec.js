describe('ch6', function(){
  it('Object.create() from ES5', function(){
    //
    //  Object.create() creates a new object using its first argument as the
    //  prototype.
    //
    var o = Object.create({x:1, y:2});
    expect(o.x).toBe(1);
    expect(Object.getPrototypeOf(o).x).toBe(1);
    expect(o.__proto__.x).toBe(1);
  });

  function inherit(p){
    if(p == null)
      throw TypeError();
    if(Object.create)
      return Object.create(p);
    var t = typeof p;
    if(t !== 'object' && t !== 'function')
      throw TypeError();
    function f(){}
    f.prototype = p;
    return new f();
  }

  it('inheritance', function(){
    var o = {};
    o.x = 42;
    var p = inherit(o);
    expect(p.x).toBe(42);
    expect(p.y).toBeUndefined();
    o.y = 99;
    expect(p.y).toBe(99);
    expect(p.__proto__).toBe(o);
    expect(Object.getPrototypeOf(p)).toBe(o);
  });

  it('serializing',function(){
    var o = {x: 1, y : {z:42}};
    expect(JSON.stringify(o)).toBe('{"x":1,"y":{"z":42}}');
    expect(JSON.parse(JSON.stringify(o))).toEqual(o);
  });
});
