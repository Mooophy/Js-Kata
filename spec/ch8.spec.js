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
});
