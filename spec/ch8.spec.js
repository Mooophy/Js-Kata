describe('ch8',function(){
  it('nested functions and keyword "this"',function(){
    var o = {
      m: function(){
        expect(this).toBe(o);
        var self = this;
        expect(this).toBe(self);
        f();
        function f(){
          'use strict';
          expect(this).not.toBe(o);
          expect(this).toBeUndefined(); // 'this is global object in non strict'
          expect(self).toBe(o);
        }
      }
    };
    o.m();
  });

  it('higher order functions', function(){
    function not(f){
      return function(){
        return !f.apply(this, arguments);
      };
    }
    var even = function(x){ return x % 2 === 0; };
    var odd = not(even);

    expect([1,3,5].every(odd)).toBe(true);
  });

  it('function with apply', function(){
    var john = {age: 14};
    var addName = function(name){
      this.name = name;
      return this;
    };

    var returned = addName.apply(john, ['John']);
    expect(returned).toBe(john);
    expect(john.name).toBe('John');
  });

  it('function with call', function(){
    var john = {age: 14};
    var addName = function(name){
      this.name = name;
      return this;
    };

    var returned = addName.call(john, 'John');
    expect(returned).toBe(john);
    expect(john.name).toBe('John');
  });

});
