describe('ch3:',function(){
  var s = "hello,world";
  it('strings',function(){
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

  it('regex',function(){
    var text = 'testing: 1, 2, 3';
    var pattern = /\d+/g;
    expect(pattern.test(text))      .toEqual(true);
    expect(text.search(pattern))    .toEqual(9);
    expect(text.match(pattern))     .toEqual(['1', '2', '3']);
    expect(text.replace(pattern, '#')).toEqual('testing: #, #, #');
    expect(text.split(/\D+/))       .toEqual(['','1','2','3']);
  });

});
