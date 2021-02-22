System.register(["cc", "code-quality:cr", "../data/Constants.js", "./AudioManager.js", "./CarManager.js", "./MapManager.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Node, BoxColliderComponent, Constants, AudioManager, CarManager, MapManager, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, GameCtril;

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.'); }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../data/Constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "./AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCarManager(extras) {
    _reporterNs.report("CarManager", "./CarManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapManager(extras) {
    _reporterNs.report("MapManager", "./MapManager", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      BoxColliderComponent = _cc.BoxColliderComponent;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_dataConstantsJs) {
      Constants = _dataConstantsJs.Constants;
    }, function (_AudioManagerJs) {
      AudioManager = _AudioManagerJs.AudioManager;
    }, function (_CarManagerJs) {
      CarManager = _CarManagerJs.CarManager;
    }, function (_MapManagerJs) {
      MapManager = _MapManagerJs.MapManager;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "48493mY/DBMY5b5gUdTe+wc", "GameCtril", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("GameCtril", GameCtril = (_dec = ccclass("GameCtril"), _dec2 = property({
        type: _crd && MapManager === void 0 ? (_reportPossibleCrUseOfMapManager({
          error: Error()
        }), MapManager) : MapManager
      }), _dec3 = property({
        type: _crd && CarManager === void 0 ? (_reportPossibleCrUseOfCarManager({
          error: Error()
        }), CarManager) : CarManager
      }), _dec4 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        _inherits(GameCtril, _Component);

        function GameCtril() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, GameCtril);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GameCtril)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "mapManager", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "carManager", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "group", _descriptor3, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(GameCtril, [{
          key: "onLoad",
          //生命周期onLoad初始化阶段
          value: function onLoad() {
            this.mapManager.resetMap();
            this.carManager.reset(this.mapManager.currPath);
            var collider = this.group.getComponent(BoxColliderComponent);
            collider.setGroup((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).CarGroup.NORMAL);
            collider.setMask(-1); //所有组都检测
          } //屏幕点击事件

        }, {
          key: "start",
          value: function start() {
            this.node.on(Node.EventType.TOUCH_START, this._touchStart, this);
            this.node.on(Node.EventType.TOUCH_END, this._touchEnd, this);
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).playMusic((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).AudioSource.BACKGROUND);
          }
        }, {
          key: "_touchStart",
          value: function _touchStart(touch, event) {
            this.carManager.controlMoving();
          }
        }, {
          key: "_touchEnd",
          value: function _touchEnd(touch, event) {
            this.carManager.controlMoving(false);
          }
        }]);

        return GameCtril;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mapManager", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "carManager", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "group", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L+ivu+S5pi/liY3nq68vSlPpq5jnuqfkuI5Ucy9UUy9jb2NvcyBnYW1lL+aOpemAgeWuouS6uuWwj+a4uOaIjy9hc3NldHMvc2NyaXB0L2dhbWUvR2FtZUN0cmlsLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJOb2RlIiwiQm94Q29sbGlkZXJDb21wb25lbnQiLCJDb25zdGFudHMiLCJBdWRpb01hbmFnZXIiLCJDYXJNYW5hZ2VyIiwiTWFwTWFuYWdlciIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkdhbWVDdHJpbCIsInR5cGUiLCJtYXBNYW5hZ2VyIiwicmVzZXRNYXAiLCJjYXJNYW5hZ2VyIiwicmVzZXQiLCJjdXJyUGF0aCIsImNvbGxpZGVyIiwiZ3JvdXAiLCJnZXRDb21wb25lbnQiLCJzZXRHcm91cCIsIkNhckdyb3VwIiwiTk9STUFMIiwic2V0TWFzayIsIm5vZGUiLCJvbiIsIkV2ZW50VHlwZSIsIlRPVUNIX1NUQVJUIiwiX3RvdWNoU3RhcnQiLCJUT1VDSF9FTkQiLCJfdG91Y2hFbmQiLCJwbGF5TXVzaWMiLCJBdWRpb1NvdXJjZSIsIkJBQ0tHUk9VTkQiLCJ0b3VjaCIsImV2ZW50IiwiY29udHJvbE1vdmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLEksT0FBQUEsSTtBQUF1QkMsTUFBQUEsb0IsT0FBQUEsb0I7Ozs7QUFDOUNDLE1BQUFBLFMsb0JBQUFBLFM7O0FBQ0FDLE1BQUFBLFksbUJBQUFBLFk7O0FBQ0FDLE1BQUFBLFUsaUJBQUFBLFU7O0FBQ0FDLE1BQUFBLFUsaUJBQUFBLFU7Ozs7OztBQUNEQyxNQUFBQSxPLEdBQXNCUixVLENBQXRCUSxPO0FBQVNDLE1BQUFBLFEsR0FBYVQsVSxDQUFiUyxROzsyQkFHSkMsUyxXQURaRixPQUFPLENBQUMsV0FBRCxDLFVBRUhDLFFBQVEsQ0FBQztBQUNORSxRQUFBQSxJQUFJO0FBQUE7QUFBQTtBQURFLE9BQUQsQyxVQUtSRixRQUFRLENBQUM7QUFDTkUsUUFBQUEsSUFBSTtBQUFBO0FBQUE7QUFERSxPQUFELEMsVUFLUkYsUUFBUSxDQUFDO0FBQ05FLFFBQUFBLElBQUksRUFBQ1Q7QUFEQyxPQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS1Q7bUNBQ2U7QUFDWCxpQkFBS1UsVUFBTCxDQUFnQkMsUUFBaEI7QUFDQSxpQkFBS0MsVUFBTCxDQUFnQkMsS0FBaEIsQ0FBc0IsS0FBS0gsVUFBTCxDQUFnQkksUUFBdEM7QUFDQSxnQkFBTUMsUUFBUSxHQUFHLEtBQUtDLEtBQUwsQ0FBV0MsWUFBWCxDQUF3QmhCLG9CQUF4QixDQUFqQjtBQUNBYyxZQUFBQSxRQUFRLENBQUNHLFFBQVQsQ0FBa0I7QUFBQTtBQUFBLHdDQUFVQyxRQUFWLENBQW1CQyxNQUFyQztBQUNBTCxZQUFBQSxRQUFRLENBQUNNLE9BQVQsQ0FBaUIsQ0FBQyxDQUFsQixFQUxXLENBS1U7QUFDeEIsVyxDQUVEOzs7O2tDQUNjO0FBQ1YsaUJBQUtDLElBQUwsQ0FBVUMsRUFBVixDQUFhdkIsSUFBSSxDQUFDd0IsU0FBTCxDQUFlQyxXQUE1QixFQUF3QyxLQUFLQyxXQUE3QyxFQUF5RCxJQUF6RDtBQUNBLGlCQUFLSixJQUFMLENBQVVDLEVBQVYsQ0FBYXZCLElBQUksQ0FBQ3dCLFNBQUwsQ0FBZUcsU0FBNUIsRUFBc0MsS0FBS0MsU0FBM0MsRUFBcUQsSUFBckQ7QUFFQTtBQUFBO0FBQUEsOENBQWFDLFNBQWIsQ0FBdUI7QUFBQTtBQUFBLHdDQUFVQyxXQUFWLENBQXNCQyxVQUE3QztBQUNIOzs7c0NBRW1CQyxLLEVBQVlDLEssRUFBaUI7QUFDN0MsaUJBQUtyQixVQUFMLENBQWdCc0IsYUFBaEI7QUFDSDs7O29DQUVpQkYsSyxFQUFZQyxLLEVBQWlCO0FBQzNDLGlCQUFLckIsVUFBTCxDQUFnQnNCLGFBQWhCLENBQThCLEtBQTlCO0FBQ0g7Ozs7UUF2QzBCbkMsUzs7Ozs7aUJBSUYsSTs7Ozs7OztpQkFLQSxJOzs7Ozs7O2lCQUtaLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsVG91Y2gsRXZlbnRUb3VjaCwgQm94Q29sbGlkZXJDb21wb25lbnQgfSBmcm9tIFwiY2NcIjtcclxuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL2RhdGEvQ29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IEF1ZGlvTWFuYWdlciB9IGZyb20gXCIuL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBDYXJNYW5hZ2VyIH0gZnJvbSBcIi4vQ2FyTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBNYXBNYW5hZ2VyIH0gZnJvbSBcIi4vTWFwTWFuYWdlclwiO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoXCJHYW1lQ3RyaWxcIilcclxuZXhwb3J0IGNsYXNzIEdhbWVDdHJpbCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6TWFwTWFuYWdlcixcclxuICAgIH0pXHJcbiAgICBtYXBNYW5hZ2VyOiBNYXBNYW5hZ2VyID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6Q2FyTWFuYWdlcixcclxuICAgIH0pXHJcbiAgICBjYXJNYW5hZ2VyOiBDYXJNYW5hZ2VyID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6Tm9kZSxcclxuICAgIH0pXHJcbiAgICBncm91cDpOb2RlID0gbnVsbDtcclxuXHJcbiAgICAvL+eUn+WRveWRqOacn29uTG9hZOWIneWni+WMlumYtuautVxyXG4gICAgcHVibGljIG9uTG9hZCgpe1xyXG4gICAgICAgIHRoaXMubWFwTWFuYWdlci5yZXNldE1hcCgpO1xyXG4gICAgICAgIHRoaXMuY2FyTWFuYWdlci5yZXNldCh0aGlzLm1hcE1hbmFnZXIuY3VyclBhdGgpXHJcbiAgICAgICAgY29uc3QgY29sbGlkZXIgPSB0aGlzLmdyb3VwLmdldENvbXBvbmVudChCb3hDb2xsaWRlckNvbXBvbmVudCk7XHJcbiAgICAgICAgY29sbGlkZXIuc2V0R3JvdXAoQ29uc3RhbnRzLkNhckdyb3VwLk5PUk1BTCk7XHJcbiAgICAgICAgY29sbGlkZXIuc2V0TWFzaygtMSk7Ly/miYDmnInnu4Tpg73mo4DmtYtcclxuICAgIH1cclxuXHJcbiAgICAvL+Wxj+W5leeCueWHu+S6i+S7tlxyXG4gICAgcHVibGljIHN0YXJ0KCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKE5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULHRoaXMuX3RvdWNoU3RhcnQsdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKE5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCx0aGlzLl90b3VjaEVuZCx0aGlzKVxyXG5cclxuICAgICAgICBBdWRpb01hbmFnZXIucGxheU11c2ljKENvbnN0YW50cy5BdWRpb1NvdXJjZS5CQUNLR1JPVU5EKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcml2YXRlIF90b3VjaFN0YXJ0KHRvdWNoOlRvdWNoLGV2ZW50OkV2ZW50VG91Y2gpe1xyXG4gICAgICAgIHRoaXMuY2FyTWFuYWdlci5jb250cm9sTW92aW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfdG91Y2hFbmQodG91Y2g6VG91Y2gsZXZlbnQ6RXZlbnRUb3VjaCl7XHJcbiAgICAgICAgdGhpcy5jYXJNYW5hZ2VyLmNvbnRyb2xNb3ZpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==