describe('ch3:', function(){
  it('strings', function(){
    var s = "hello, world";
    expect(s.charAt(0))             .toEqual('h');
    expect(s.charAt(s.length - 1))  .toEqual('d');
    expect(s.substring(1,4))        .toEqual('ell');
    expect(s.slice(1,4))            .toEqual('ell');
    expect(s.slice(-3))             .toEqual('rld');
    expect(s.indexOf('l'))          .toEqual(2);
    expect(s.lastIndexOf('l'))      .toEqual(10);
    expect(s.indexOf('l',3))        .toEqual(3);
    expect(s.split(', '))           .toEqual(['hello', 'world']);
    expect(s.replace('h','H'))      .toEqual('Hello, world');
    expect(s.toUpperCase())         .toEqual('HELLO, WORLD');
  });

  it('regex', function(){
    var text = 'testing: 1, 2, 3';
    var pattern = /\d+/g;
    expect(pattern.test(text))      .toEqual(true);
    expect(text.search(pattern))    .toEqual(9);
    expect(text.match(pattern))     .toEqual(['1', '2', '3']);
    expect(text.replace(pattern, '#')).toEqual('testing: #, #, #');
    expect(text.split(/\D+/))       .toEqual(['','1','2','3']);
  });

  //
  //  in Js, variables are visible within the funcion in which they defined and
  //  within any function nested.
  //
  it('function scope', function(){
    (function(){
      //
      //  the tests below show that variables i, j, k have been hoisted but not
      //  'defined' yet. @Yue
      //
      [i, j, k].forEach(function(item){
        expect(item)      .toBeUndefined();
        expect(item).not  .toBeDefined();
      });

      var i = {}
      if(true){
        var j = 0;
        for(var k = 0; k < 10; ++k);
        expect(k).toBeDefined();
      }
      expect(k).toBeDefined();
    })();

    //
    //  variables hidding
    //
    var scope = 'global';
    (function(){
      expect(scope).toEqual('global');  //no hidding
    })();

    (function(){
      expect(scope).toBeUndefined();    //hidding by hoisting
      var scope = 'local';
      expect(scope).toBe('local');      //hidding
    })();
    expect(scope).toBe('global');
  });

  //
  //  When a global variable is declared, what is actually done is defining a
  //  property of the global object.
  //
  it('variables as properties', function(){
    var i = 1;  //nondeletable
    expect(delete i)  .toBe(false);

    j = 42;     //deletable
    expect(j)         .toBeDefined();
    expect(delete j)  .toBe(true);
    expect(typeof j)  .toBe('undefined');

    this.k = 42;
    expect(this.k)    .toBeDefined();
    expect(delete this.k).toBe(true);
  });
});
