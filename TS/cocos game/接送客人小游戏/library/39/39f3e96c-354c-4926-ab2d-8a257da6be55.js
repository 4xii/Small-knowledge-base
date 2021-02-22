System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, Vec3, Enum, macro, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _class3, _temp, _crd, ccclass, property, ROAD_POINT_TYPE, ROAD_MOVE_TYPE, RoadPoint;

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

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _dec5: void 0,
    _dec6: void 0,
    _dec7: void 0,
    _dec8: void 0,
    _dec9: void 0,
    _dec10: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _descriptor5: void 0,
    _descriptor6: void 0,
    _descriptor7: void 0,
    _descriptor8: void 0,
    _descriptor9: void 0,
    _class3: void 0,
    _temp: void 0,
    ROAD_POINT_TYPE: void 0,
    ROAD_MOVE_TYPE: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      Enum = _cc.Enum;
      macro = _cc.macro;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "39f3elsNUxJJqstiiV9pr5V", "RoadPoint", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      (function (ROAD_POINT_TYPE) {
        ROAD_POINT_TYPE[ROAD_POINT_TYPE["NORMAL"] = 1] = "NORMAL";
        ROAD_POINT_TYPE[ROAD_POINT_TYPE["START"] = 2] = "START";
        ROAD_POINT_TYPE[ROAD_POINT_TYPE["GREETING"] = 3] = "GREETING";
        ROAD_POINT_TYPE[ROAD_POINT_TYPE["GOODBYE"] = 4] = "GOODBYE";
        ROAD_POINT_TYPE[ROAD_POINT_TYPE["END"] = 5] = "END";
        ROAD_POINT_TYPE[ROAD_POINT_TYPE["AI_START"] = 6] = "AI_START";
      })(ROAD_POINT_TYPE || (ROAD_POINT_TYPE = {}));

      Enum(ROAD_POINT_TYPE);

      (function (ROAD_MOVE_TYPE) {
        ROAD_MOVE_TYPE[ROAD_MOVE_TYPE["LINE"] = 1] = "LINE";
        ROAD_MOVE_TYPE[ROAD_MOVE_TYPE["BEND"] = 2] = "BEND";
      })(ROAD_MOVE_TYPE || (ROAD_MOVE_TYPE = {}));

      Enum(ROAD_MOVE_TYPE);

      _export("RoadPoint", RoadPoint = (_dec = ccclass("RoadPoint"), _dec2 = property({
        type: ROAD_POINT_TYPE,
        displayOrder: 1
      }), _dec3 = property({
        type: Node,
        displayOrder: 2
      }), _dec4 = property({
        type: ROAD_MOVE_TYPE,
        displayOrder: 3
      }), _dec5 = property({
        displayOrder: 4,
        visible: function visible() {
          return this.moveType === ROAD_MOVE_TYPE.BEND;
        }
      }), _dec6 = property({
        visible: function visible() {
          return this.type === ROAD_POINT_TYPE.GREETING || this.type === ROAD_POINT_TYPE.GOODBYE;
        }
      }), _dec7 = property({
        displayOrder: 5,
        visible: function visible() {
          return this.type === ROAD_POINT_TYPE.AI_START;
        }
      }), _dec8 = property({
        displayOrder: 6,
        visible: function visible() {
          return this.type === ROAD_POINT_TYPE.AI_START;
        }
      }), _dec9 = property({
        displayOrder: 7,
        visible: function visible() {
          return this.type === ROAD_POINT_TYPE.AI_START;
        }
      }), _dec10 = property({
        displayOrder: 8,
        visible: function visible() {
          return this.type === ROAD_POINT_TYPE.AI_START;
        }
      }), _dec(_class = (_class2 = (_temp = _class3 =
      /*#__PURE__*/
      function (_Component) {
        _inherits(RoadPoint, _Component);

        function RoadPoint() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, RoadPoint);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RoadPoint)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "type", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "nextStation", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "moveType", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "clockwise", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "direction", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "delayTime", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "interval", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "speed", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "cars", _descriptor9, _assertThisInitialized(_this));

          _this._arrCars = [];
          _this._cd = null;
          return _this;
        }

        _createClass(RoadPoint, [{
          key: "start",
          value: function start() {
            this._arrCars = this.cars.split(',');
          }
        }, {
          key: "startSchedule",
          value: function startSchedule(cd) {
            if (this.type !== ROAD_POINT_TYPE.AI_START) {
              return;
            }

            this.stopSchedule();
            this._cd = cd;
            this.scheduleOnce(this._startDelay, this.delayTime);
          }
        }, {
          key: "stopSchedule",
          value: function stopSchedule() {
            this.unschedule(this._startDelay);
            this.unschedule(this._scheduleCD); //取消定时器
          }
        }, {
          key: "_startDelay",
          value: function _startDelay() {
            this._scheduleCD();

            this.schedule(this._scheduleCD, this.interval, macro.REPEAT_FOREVER);
          }
        }, {
          key: "_scheduleCD",
          value: function _scheduleCD() {
            var index = Math.floor(Math.random() * this._arrCars.length);

            if (this._cd) {
              this._cd(this, this._arrCars[index]);
            }
          }
        }]);

        return RoadPoint;
      }(Component), _class3.RoadPointType = ROAD_POINT_TYPE, _class3.RoadMoveType = ROAD_MOVE_TYPE, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "type", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return ROAD_POINT_TYPE.NORMAL;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nextStation", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "moveType", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return ROAD_MOVE_TYPE.LINE;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "clockwise", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "direction", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3();
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "delayTime", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "interval", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 3;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "speed", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.05;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "cars", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '201';
        }
      })), _class2)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L+ivu+S5pi/liY3nq68vSlPpq5jnuqfkuI5Ucy9UUy9jb2NvcyBnYW1lL+aOpemAgeWuouS6uuWwj+a4uOaIjy9hc3NldHMvc2NyaXB0L2dhbWUvUm9hZFBvaW50LnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJOb2RlIiwiVmVjMyIsIkVudW0iLCJtYWNybyIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlJPQURfUE9JTlRfVFlQRSIsIlJPQURfTU9WRV9UWVBFIiwiUm9hZFBvaW50IiwidHlwZSIsImRpc3BsYXlPcmRlciIsInZpc2libGUiLCJtb3ZlVHlwZSIsIkJFTkQiLCJHUkVFVElORyIsIkdPT0RCWUUiLCJBSV9TVEFSVCIsIl9hcnJDYXJzIiwiX2NkIiwiY2FycyIsInNwbGl0IiwiY2QiLCJzdG9wU2NoZWR1bGUiLCJzY2hlZHVsZU9uY2UiLCJfc3RhcnREZWxheSIsImRlbGF5VGltZSIsInVuc2NoZWR1bGUiLCJfc2NoZWR1bGVDRCIsInNjaGVkdWxlIiwiaW50ZXJ2YWwiLCJSRVBFQVRfRk9SRVZFUiIsImluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwiUm9hZFBvaW50VHlwZSIsIlJvYWRNb3ZlVHlwZSIsIk5PUk1BTCIsIkxJTkUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLEssT0FBQUEsSzs7Ozs7O0FBQzFDQyxNQUFBQSxPLEdBQXNCTixVLENBQXRCTSxPO0FBQVNDLE1BQUFBLFEsR0FBYVAsVSxDQUFiTyxROztpQkFFWkMsZTtBQUFBQSxRQUFBQSxlLENBQUFBLGU7QUFBQUEsUUFB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LGlCQUFLQSxXQUFMOztBQUNBLGlCQUFLQyxRQUFMLENBQWMsS0FBS0QsV0FBbkIsRUFBK0IsS0FBS0UsUUFBcEMsRUFBNkMxQixLQUFLLENBQUMyQixjQUFuRDtBQUNIOzs7d0NBRW9CO0FBQ2pCLGdCQUFNQyxLQUFLLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsS0FBS2pCLFFBQUwsQ0FBY2tCLE1BQXpDLENBQWQ7O0FBQ0EsZ0JBQUcsS0FBS2pCLEdBQVIsRUFBWTtBQUNSLG1CQUFLQSxHQUFMLENBQVMsSUFBVCxFQUFjLEtBQUtELFFBQUwsQ0FBY2MsS0FBZCxDQUFkO0FBQ0g7QUFDSjs7OztRQW5GMEJoQyxTLFdBQ2JxQyxhLEdBQWdCOUIsZSxVQUNoQitCLFksR0FBZTlCLGM7Ozs7O2lCQU10QkQsZUFBZSxDQUFDZ0MsTTs7Ozs7OztpQkFNSCxJOzs7Ozs7O2lCQUdUL0IsY0FBYyxDQUFDZ0MsSTs7Ozs7OztpQkFLTCxLOzs7Ozs7O2lCQU9ULElBQUl0QyxJQUFKLEU7Ozs7Ozs7aUJBS0EsQzs7Ozs7OztpQkFLRCxDOzs7Ozs7O2lCQUtILEk7Ozs7Ozs7aUJBS0QsSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgVmVjMywgRW51bSwgbWFjcm99IGZyb20gXCJjY1wiO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuZW51bSBST0FEX1BPSU5UX1RZUEUge1xyXG4gICAgTk9STUFMID0gMSxcclxuICAgIFNUQVJULFxyXG4gICAgR1JFRVRJTkcsXHJcbiAgICBHT09EQllFLFxyXG4gICAgRU5ELFxyXG4gICAgQUlfU1RBUlQsLy/ljLrliIblsI/ovabooYzkuLotQUnlsI/ovaZcclxufVxyXG5cclxuRW51bShST0FEX1BPSU5UX1RZUEUpO1xyXG5cclxuZW51bSBST0FEX01PVkVfVFlQRXtcclxuICAgIExJTkUgPSAxLFxyXG4gICAgQkVORFxyXG59XHJcblxyXG5FbnVtKFJPQURfTU9WRV9UWVBFKTtcclxuQGNjY2xhc3MoXCJSb2FkUG9pbnRcIilcclxuZXhwb3J0IGNsYXNzIFJvYWRQb2ludCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgc3RhdGljIFJvYWRQb2ludFR5cGUgPSBST0FEX1BPSU5UX1RZUEU7XHJcbiAgICBwdWJsaWMgc3RhdGljIFJvYWRNb3ZlVHlwZSA9IFJPQURfTU9WRV9UWVBFO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogUk9BRF9QT0lOVF9UWVBFLFxyXG4gICAgICAgIGRpc3BsYXlPcmRlcjogMSxcclxuICAgIH0pXHJcbiAgICB0eXBlID0gUk9BRF9QT0lOVF9UWVBFLk5PUk1BTDtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IE5vZGUsXHJcbiAgICAgICAgZGlzcGxheU9yZGVyOiAyLFxyXG4gICAgfSlcclxuICAgIG5leHRTdGF0aW9uOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBST0FEX01PVkVfVFlQRSwgZGlzcGxheU9yZGVyOiAzfSlcclxuICAgIG1vdmVUeXBlID0gUk9BRF9NT1ZFX1RZUEUuTElORTtcclxuXHJcbiAgICBAcHJvcGVydHkoe2Rpc3BsYXlPcmRlcjogNCwgdmlzaWJsZTogIGZ1bmN0aW9uICh0aGlzOiBSb2FkUG9pbnQpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1vdmVUeXBlID09PSBST0FEX01PVkVfVFlQRS5CRU5EO1xyXG4gICAgfX0pXHJcbiAgICBjbG9ja3dpc2U6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHZpc2libGU6IGZ1bmN0aW9uICh0aGlzOiBSb2FkUG9pbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gUk9BRF9QT0lOVF9UWVBFLkdSRUVUSU5HIHx8IHRoaXMudHlwZSA9PT0gUk9BRF9QT0lOVF9UWVBFLkdPT0RCWUU7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIGRpcmVjdGlvbiA9IG5ldyBWZWMzKCk7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgZGlzcGxheU9yZGVyOiA1LCB2aXNpYmxlOiAgZnVuY3Rpb24gKHRoaXM6IFJvYWRQb2ludCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gUk9BRF9QT0lOVF9UWVBFLkFJX1NUQVJUO1xyXG4gICAgfX0pXHJcbiAgICBkZWxheVRpbWUgPSAwO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IGRpc3BsYXlPcmRlcjogNiwgdmlzaWJsZTogIGZ1bmN0aW9uICh0aGlzOiBSb2FkUG9pbnQpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnR5cGUgPT09IFJPQURfUE9JTlRfVFlQRS5BSV9TVEFSVDtcclxuICAgIH19KVxyXG4gICAgaW50ZXJ2YWwgPSAzO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7ZGlzcGxheU9yZGVyOiA3LCB2aXNpYmxlOiAgZnVuY3Rpb24gKHRoaXM6IFJvYWRQb2ludCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gUk9BRF9QT0lOVF9UWVBFLkFJX1NUQVJUO1xyXG4gICAgfX0pXHJcbiAgICBzcGVlZCA9IDAuMDU7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgZGlzcGxheU9yZGVyOiA4LCB2aXNpYmxlOiAgZnVuY3Rpb24gKHRoaXM6IFJvYWRQb2ludCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gUk9BRF9QT0lOVF9UWVBFLkFJX1NUQVJUO1xyXG4gICAgfX0pXHJcbiAgICBjYXJzID0gJzIwMSc7XHJcblxyXG4gICAgcHJpdmF0ZSBfYXJyQ2FyczpzdHJpbmdbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBfY2Q6RnVuY3Rpb24gPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBzdGFydCAoKXtcclxuICAgICAgICB0aGlzLl9hcnJDYXJzID0gdGhpcy5jYXJzLnNwbGl0KCcsJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXJ0U2NoZWR1bGUoY2Q6RnVuY3Rpb24pe1xyXG4gICAgICAgIGlmKHRoaXMudHlwZSAhPT0gUk9BRF9QT0lOVF9UWVBFLkFJX1NUQVJUKXtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zdG9wU2NoZWR1bGUoKTtcclxuICAgICAgICB0aGlzLl9jZCA9IGNkO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKHRoaXMuX3N0YXJ0RGVsYXksdGhpcy5kZWxheVRpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdG9wU2NoZWR1bGUoKXtcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5fc3RhcnREZWxheSk7XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuX3NjaGVkdWxlQ0QpOy8v5Y+W5raI5a6a5pe25ZmoXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfc3RhcnREZWxheSgpe1xyXG4gICAgICAgIHRoaXMuX3NjaGVkdWxlQ0QoKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuX3NjaGVkdWxlQ0QsdGhpcy5pbnRlcnZhbCxtYWNyby5SRVBFQVRfRk9SRVZFUik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfc2NoZWR1bGVDRCgpe1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5fYXJyQ2Fycy5sZW5ndGgpO1xyXG4gICAgICAgIGlmKHRoaXMuX2NkKXtcclxuICAgICAgICAgICAgdGhpcy5fY2QodGhpcyx0aGlzLl9hcnJDYXJzW2luZGV4XSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==