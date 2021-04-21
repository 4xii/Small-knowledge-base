function uri_curring(protocol) {
  return function (hostname, pathname) {
    return `${protocol}${hostname}${pathname}`
  }
}
const uri_https = uri_curring('https://')
const uri2 = uri_https('wwww.4xi.com', '/开心')
const uri3 = uri_https('wwww.4xi.com', '/快乐')
const uri4 = uri_https('wwww.4xi.com', '/hhh')
console.log(uri2, uri3, uri4);
//https://wwww.4xi.com/开心 https://wwww.4xi.com/快乐 https://wwww.4xi.com/hhh


function add() {
  let args = Array.prototype.slice.call(arguments);
  let inner = function () {
    args.push(...arguments);
    return inner;
  }
  inner.toString = function () {
    return args.reduce((prev, cur) => prev + cur)
  }

  return inner
}
console.log(add(1)(2)(3),add(1, 2, 3)(4));