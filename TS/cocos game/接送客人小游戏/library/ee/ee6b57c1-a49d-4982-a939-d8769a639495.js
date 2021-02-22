System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, instantiate, _dec, _class, _class2, _temp, _crd, ccclass, property, PoolManager;

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
      instantiate = _cc.instantiate;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "ee6b5fBpJ1Jgqk52HaaY5SV", "PoolManager", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("PoolManager", PoolManager = (_dec = ccclass("PoolManager"), _dec(_class = (_temp = _class2 =
      /*#__PURE__*/
      function () {
        function PoolManager() {
          _classCallCheck(this, PoolManager);
        }

        _createClass(PoolManager, null, [{
          key: "getNode",
          value: function getNode(prefab, parent) {
            var name = prefab.name;
            var node = null; //判断有没有当前节点词

            if (this.handle.has(name)) {
              node = this.handle.get(name).pop(); //取出当前池里的对象词
            } else {
              node = instantiate(prefab);
            }

            node.setParent(parent);
            return node;
          }
        }, {
          key: "setNode",
          value: function setNode(target) {
            var name = target.name;
            target.parent = null;

            if (this.handle.has(name)) {
              this.handle.get(name).push(target);
            } else {
              this.handle.set(name, [target]);
            }
          }
        }]);

        return PoolManager;
      }(), _class2.handle = new Map(), _temp)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L+ivu+S5pi/liY3nq68vSlPpq5jnuqfkuI5Ucy9UUy9jb2NvcyBnYW1lL+aOpemAgeWuouS6uuWwj+a4uOaIjy9hc3NldHMvc2NyaXB0L2RhdGEvUG9vbE1hbmFnZXIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsImluc3RhbnRpYXRlIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiUG9vbE1hbmFnZXIiLCJwcmVmYWIiLCJwYXJlbnQiLCJuYW1lIiwibm9kZSIsImhhbmRsZSIsImhhcyIsImdldCIsInBvcCIsInNldFBhcmVudCIsInRhcmdldCIsInB1c2giLCJzZXQiLCJNYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBcUNDLE1BQUFBLFcsT0FBQUEsVzs7Ozs7O0FBQ3RDQyxNQUFBQSxPLEdBQXNCRixVLENBQXRCRSxPO0FBQVNDLE1BQUFBLFEsR0FBYUgsVSxDQUFiRyxROzs2QkFHSkMsVyxXQURaRixPQUFPLENBQUMsYUFBRCxDOzs7Ozs7Ozs7a0NBSWtCRyxNLEVBQWNDLE0sRUFBWTtBQUM1QyxnQkFBTUMsSUFBSSxHQUFHRixNQUFNLENBQUNFLElBQXBCO0FBQ0EsZ0JBQUlDLElBQVMsR0FBRyxJQUFoQixDQUY0QyxDQUc1Qzs7QUFDQSxnQkFBRyxLQUFLQyxNQUFMLENBQVlDLEdBQVosQ0FBZ0JILElBQWhCLENBQUgsRUFBeUI7QUFDckJDLGNBQUFBLElBQUksR0FBRyxLQUFLQyxNQUFMLENBQVlFLEdBQVosQ0FBZ0JKLElBQWhCLEVBQXNCSyxHQUF0QixFQUFQLENBRHFCLENBQ2E7QUFDckMsYUFGRCxNQUVLO0FBQ0RKLGNBQUFBLElBQUksR0FBR1AsV0FBVyxDQUFDSSxNQUFELENBQWxCO0FBQ0g7O0FBRURHLFlBQUFBLElBQUksQ0FBQ0ssU0FBTCxDQUFlUCxNQUFmO0FBQ0EsbUJBQU9FLElBQVA7QUFDSDs7O2tDQUVxQk0sTSxFQUFZO0FBQzlCLGdCQUFNUCxJQUFJLEdBQUdPLE1BQU0sQ0FBQ1AsSUFBcEI7QUFDQU8sWUFBQUEsTUFBTSxDQUFDUixNQUFQLEdBQWdCLElBQWhCOztBQUNBLGdCQUFHLEtBQUtHLE1BQUwsQ0FBWUMsR0FBWixDQUFnQkgsSUFBaEIsQ0FBSCxFQUF5QjtBQUNyQixtQkFBS0UsTUFBTCxDQUFZRSxHQUFaLENBQWdCSixJQUFoQixFQUFzQlEsSUFBdEIsQ0FBMkJELE1BQTNCO0FBQ0gsYUFGRCxNQUVLO0FBQ0QsbUJBQUtMLE1BQUwsQ0FBWU8sR0FBWixDQUFnQlQsSUFBaEIsRUFBcUIsQ0FBQ08sTUFBRCxDQUFyQjtBQUNIO0FBQ0o7Ozs7bUJBeEJhTCxNLEdBQVMsSUFBSVEsR0FBSixFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBQcmVmYWIsIGluc3RhbnRpYXRlIH0gZnJvbSBcImNjXCI7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcyhcIlBvb2xNYW5hZ2VyXCIpXHJcbmV4cG9ydCBjbGFzcyBQb29sTWFuYWdlcntcclxuICAgIHB1YmxpYyBzdGF0aWMgaGFuZGxlID0gbmV3IE1hcDxzdHJpbmcsTm9kZVtdPigpO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0Tm9kZShwcmVmYWI6UHJlZmFiLHBhcmVudDpOb2RlKXtcclxuICAgICAgICBjb25zdCBuYW1lID0gcHJlZmFiLm5hbWU7XHJcbiAgICAgICAgbGV0IG5vZGU6Tm9kZSA9IG51bGw7XHJcbiAgICAgICAgLy/liKTmlq3mnInmsqHmnInlvZPliY3oioLngrnor41cclxuICAgICAgICBpZih0aGlzLmhhbmRsZS5oYXMobmFtZSkpe1xyXG4gICAgICAgICAgICBub2RlID0gdGhpcy5oYW5kbGUuZ2V0KG5hbWUpLnBvcCgpLy/lj5blh7rlvZPliY3msaDph4znmoTlr7nosaHor41cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbm9kZSA9IGluc3RhbnRpYXRlKHByZWZhYikgYXMgTm9kZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5vZGUuc2V0UGFyZW50KHBhcmVudCk7XHJcbiAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzZXROb2RlKHRhcmdldDpOb2RlKXtcclxuICAgICAgICBjb25zdCBuYW1lID0gdGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgdGFyZ2V0LnBhcmVudCA9IG51bGw7XHJcbiAgICAgICAgaWYodGhpcy5oYW5kbGUuaGFzKG5hbWUpKXtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGUuZ2V0KG5hbWUpLnB1c2godGFyZ2V0KTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGUuc2V0KG5hbWUsW3RhcmdldF0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=