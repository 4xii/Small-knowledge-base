System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, _dec, _class, _class2, _temp, _crd, ccclass, property, CustomEventListener;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  _export({
    _dec: void 0,
    _class: void 0,
    _class2: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "4071fGhR69ERr4FWG3r+ae/", "CustomEventListener", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("CustomEventListener", CustomEventListener = (_dec = ccclass("CustomEventListener"), _dec(_class = (_temp = _class2 =
      /*#__PURE__*/
      function () {
        function CustomEventListener() {
          _classCallCheck(this, CustomEventListener);
        }

        _createClass(CustomEventListener, null, [{
          key: "on",
          value: function on(eventName, cb, target) {
            if (!this.handle[eventName]) {
              this.handle[eventName] = [];
            }

            var data = {
              func: cb,
              target: target
            };
            this.handle[eventName].push(data);
          }
        }, {
          key: "off",
          value: function off(eventName, cb, target) {
            var list = this.handle[eventName];

            if (!list || list.length <= 0) {
              return;
            }

            for (var i = 0; i < list.length; i++) {
              var event = list[i];

              if (event.func === cb && (!target || target === event.target)) {
                list.splice(i, 1);
                break;
              }
            }
          }
        }, {
          key: "dispatchEvent",
          value: function dispatchEvent(eventName) {
            var list = this.handle[eventName];

            if (!list || list.length <= 0) {
              return;
            }

            for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }

            for (var i = 0; i < list.length; i++) {
              var event = list[i];
              event.func.apply(event.target, args);
            }
          }
        }]);

        return CustomEventListener;
      }(), _class2.handle = {}, _temp)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L+ivu+S5pi/liY3nq68vSlPpq5jnuqfkuI5Ucy9UUy9jb2NvcyBnYW1lL+aOpemAgeWuouS6uuWwj+a4uOaIjy9hc3NldHMvc2NyaXB0L2RhdGEvQ3VzdG9tRXZlbnRMaXN0ZW5lci50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiQ3VzdG9tRXZlbnRMaXN0ZW5lciIsImV2ZW50TmFtZSIsImNiIiwidGFyZ2V0IiwiaGFuZGxlIiwiZGF0YSIsImZ1bmMiLCJwdXNoIiwibGlzdCIsImxlbmd0aCIsImkiLCJldmVudCIsInNwbGljZSIsImFyZ3MiLCJhcHBseSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTs7Ozs7O0FBQ0RDLE1BQUFBLE8sR0FBc0JELFUsQ0FBdEJDLE87QUFBU0MsTUFBQUEsUSxHQUFhRixVLENBQWJFLFE7O3FDQVlKQyxtQixXQURaRixPQUFPLENBQUMscUJBQUQsQzs7Ozs7Ozs7OzZCQUlhRyxTLEVBQW1CQyxFLEVBQWFDLE0sRUFBYTtBQUMxRCxnQkFBRyxDQUFDLEtBQUtDLE1BQUwsQ0FBWUgsU0FBWixDQUFKLEVBQTJCO0FBQ3ZCLG1CQUFLRyxNQUFMLENBQVlILFNBQVosSUFBeUIsRUFBekI7QUFDSDs7QUFFRCxnQkFBTUksSUFBZ0IsR0FBRztBQUFFQyxjQUFBQSxJQUFJLEVBQUVKLEVBQVI7QUFBWUMsY0FBQUEsTUFBTSxFQUFOQTtBQUFaLGFBQXpCO0FBQ0EsaUJBQUtDLE1BQUwsQ0FBWUgsU0FBWixFQUF1Qk0sSUFBdkIsQ0FBNEJGLElBQTVCO0FBQ0g7Ozs4QkFFaUJKLFMsRUFBbUJDLEUsRUFBY0MsTSxFQUFhO0FBQzVELGdCQUFNSyxJQUFJLEdBQUcsS0FBS0osTUFBTCxDQUFZSCxTQUFaLENBQWI7O0FBQ0EsZ0JBQUcsQ0FBQ08sSUFBRCxJQUFTQSxJQUFJLENBQUNDLE1BQUwsSUFBYyxDQUExQixFQUE0QjtBQUN4QjtBQUNIOztBQUVELGlCQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdGLElBQUksQ0FBQ0MsTUFBekIsRUFBaUNDLENBQUMsRUFBbEMsRUFBc0M7QUFDbEMsa0JBQU1DLEtBQUssR0FBR0gsSUFBSSxDQUFDRSxDQUFELENBQWxCOztBQUNBLGtCQUFHQyxLQUFLLENBQUNMLElBQU4sS0FBZUosRUFBZixLQUFzQixDQUFDQyxNQUFELElBQVdBLE1BQU0sS0FBS1EsS0FBSyxDQUFDUixNQUFsRCxDQUFILEVBQTZEO0FBQ3pESyxnQkFBQUEsSUFBSSxDQUFDSSxNQUFMLENBQVlGLENBQVosRUFBZSxDQUFmO0FBQ0E7QUFDSDtBQUNKO0FBQ0o7Ozt3Q0FFNEJULFMsRUFBK0I7QUFDeEQsZ0JBQU1PLElBQUksR0FBRyxLQUFLSixNQUFMLENBQVlILFNBQVosQ0FBYjs7QUFDQSxnQkFBSSxDQUFDTyxJQUFELElBQVNBLElBQUksQ0FBQ0MsTUFBTCxJQUFlLENBQTVCLEVBQStCO0FBQzNCO0FBQ0g7O0FBSnVELDhDQUFUSSxJQUFTO0FBQVRBLGNBQUFBLElBQVM7QUFBQTs7QUFNeEQsaUJBQUssSUFBSUgsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0YsSUFBSSxDQUFDQyxNQUF6QixFQUFpQ0MsQ0FBQyxFQUFsQyxFQUFzQztBQUNsQyxrQkFBTUMsS0FBSyxHQUFHSCxJQUFJLENBQUNFLENBQUQsQ0FBbEI7QUFDQUMsY0FBQUEsS0FBSyxDQUFDTCxJQUFOLENBQVdRLEtBQVgsQ0FBaUJILEtBQUssQ0FBQ1IsTUFBdkIsRUFBK0JVLElBQS9CO0FBQ0g7QUFDSjs7OzttQkFwQ2FULE0sR0FBaUIsRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSB9IGZyb20gXCJjY1wiO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuaW50ZXJmYWNlIElFdmVudERhdGEge1xyXG4gICAgZnVuYzogRnVuY3Rpb247XHJcbiAgICB0YXJnZXQ6IGFueTtcclxufVxyXG5cclxuaW50ZXJmYWNlIElFdmVudCB7XHJcbiAgICBbZXZlbnROYW1lOiBzdHJpbmddOiBJRXZlbnREYXRhW107XHJcbn1cclxuXHJcbkBjY2NsYXNzKFwiQ3VzdG9tRXZlbnRMaXN0ZW5lclwiKVxyXG5leHBvcnQgY2xhc3MgQ3VzdG9tRXZlbnRMaXN0ZW5lcntcclxuICAgIHB1YmxpYyBzdGF0aWMgaGFuZGxlOiBJRXZlbnQgPSB7fTtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG9uKGV2ZW50TmFtZTogc3RyaW5nLCBjYjpGdW5jdGlvbiwgdGFyZ2V0PzogYW55KXtcclxuICAgICAgICBpZighdGhpcy5oYW5kbGVbZXZlbnROYW1lXSl7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlW2V2ZW50TmFtZV0gPSBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGE6IElFdmVudERhdGEgPSB7IGZ1bmM6IGNiLCB0YXJnZXQgfTtcclxuICAgICAgICB0aGlzLmhhbmRsZVtldmVudE5hbWVdLnB1c2goZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBvZmYoZXZlbnROYW1lOiBzdHJpbmcsIGNiOiBGdW5jdGlvbiwgdGFyZ2V0PzogYW55KXtcclxuICAgICAgICBjb25zdCBsaXN0ID0gdGhpcy5oYW5kbGVbZXZlbnROYW1lXTtcclxuICAgICAgICBpZighbGlzdCB8fCBsaXN0Lmxlbmd0aCA8PTApe1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBsaXN0W2ldO1xyXG4gICAgICAgICAgICBpZihldmVudC5mdW5jID09PSBjYiAmJiAoIXRhcmdldCB8fCB0YXJnZXQgPT09IGV2ZW50LnRhcmdldCkpe1xyXG4gICAgICAgICAgICAgICAgbGlzdC5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGRpc3BhdGNoRXZlbnQgKGV2ZW50TmFtZTogc3RyaW5nLCAuLi5hcmdzOmFueSl7XHJcbiAgICAgICAgY29uc3QgbGlzdCA9IHRoaXMuaGFuZGxlW2V2ZW50TmFtZV07XHJcbiAgICAgICAgaWYgKCFsaXN0IHx8IGxpc3QubGVuZ3RoIDw9IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gbGlzdFtpXTtcclxuICAgICAgICAgICAgZXZlbnQuZnVuYy5hcHBseShldmVudC50YXJnZXQsIGFyZ3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=