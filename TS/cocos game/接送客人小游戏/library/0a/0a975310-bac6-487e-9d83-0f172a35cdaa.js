System.register(["cc", "code-quality:cr", "./GameMap.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, GameMap, _dec, _class, _temp, _crd, ccclass, property, MapManager;

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _reportPossibleCrUseOfGameMap(extras) {
    _reporterNs.report("GameMap", "./GameMap", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _class: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_GameMapJs) {
      GameMap = _GameMapJs.GameMap;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "0a975MQusZIfp2DDxcqNc2q", "MapManager", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("MapManager", MapManager = (_dec = ccclass("MapManager"), _dec(_class = (_temp =
      /*#__PURE__*/
      function (_Component) {
        _inherits(MapManager, _Component);

        function MapManager() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, MapManager);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MapManager)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.currPath = [];
          return _this;
        }

        _createClass(MapManager, [{
          key: "resetMap",
          value: function resetMap() {
            var currMap = this.node.children[0].getComponent(_crd && GameMap === void 0 ? (_reportPossibleCrUseOfGameMap({
              error: Error()
            }), GameMap) : GameMap);
            this.currPath = currMap.path;
          }
        }]);

        return MapManager;
      }(Component), _temp)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L+ivu+S5pi/liY3nq68vSlPpq5jnuqfkuI5Ucy9UUy9jb2NvcyBnYW1lL+aOpemAgeWuouS6uuWwj+a4uOaIjy9hc3NldHMvc2NyaXB0L2dhbWUvTWFwTWFuYWdlci50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiR2FtZU1hcCIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIk1hcE1hbmFnZXIiLCJjdXJyUGF0aCIsImN1cnJNYXAiLCJub2RlIiwiY2hpbGRyZW4iLCJnZXRDb21wb25lbnQiLCJwYXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUzs7OztBQUNaQyxNQUFBQSxPLGNBQUFBLE87Ozs7OztBQUNEQyxNQUFBQSxPLEdBQXNCSCxVLENBQXRCRyxPO0FBQVNDLE1BQUFBLFEsR0FBYUosVSxDQUFiSSxROzs0QkFHSkMsVSxXQURaRixPQUFPLENBQUMsWUFBRCxDOzs7Ozs7Ozs7Ozs7Ozs7OztnQkFFR0csUSxHQUFrQixFOzs7Ozs7cUNBRVI7QUFDYixnQkFBTUMsT0FBTyxHQUFHLEtBQUtDLElBQUwsQ0FBVUMsUUFBVixDQUFtQixDQUFuQixFQUFzQkMsWUFBdEI7QUFBQTtBQUFBLG1DQUFoQjtBQUNBLGlCQUFLSixRQUFMLEdBQWdCQyxPQUFPLENBQUNJLElBQXhCO0FBQ0g7Ozs7UUFOMkJWLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUgfSBmcm9tIFwiY2NcIjtcclxuaW1wb3J0IHsgR2FtZU1hcCB9IGZyb20gXCIuL0dhbWVNYXBcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKFwiTWFwTWFuYWdlclwiKVxyXG5leHBvcnQgY2xhc3MgTWFwTWFuYWdlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgY3VyclBhdGg6Tm9kZVtdID0gW107XHJcblxyXG4gICAgcHVibGljIHJlc2V0TWFwKCl7XHJcbiAgICAgICAgY29uc3QgY3Vyck1hcCA9IHRoaXMubm9kZS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoR2FtZU1hcCk7XHJcbiAgICAgICAgdGhpcy5jdXJyUGF0aCA9IGN1cnJNYXAucGF0aDtcclxuICAgIH1cclxufVxyXG4iXX0=