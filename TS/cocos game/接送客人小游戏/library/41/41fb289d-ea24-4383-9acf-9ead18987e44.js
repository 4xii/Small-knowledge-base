System.register(["cc", "code-quality:cr", "../data/Constants.js", "../data/CustomEventListener.js", "../data/PoolManager.js", "./Car.js", "./RoadPoint.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Node, loader, Prefab, Vec3, Constants, CustomEventListener, PoolManager, Car, RoadPoint, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, CarManager;

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

  function _reportPossibleCrUseOfCustomEventListener(extras) {
    _reporterNs.report("CustomEventListener", "../data/CustomEventListener", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPoolManager(extras) {
    _reporterNs.report("PoolManager", "../data/PoolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCar(extras) {
    _reporterNs.report("Car", "./Car", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoadPoint(extras) {
    _reporterNs.report("RoadPoint", "./RoadPoint", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      loader = _cc.loader;
      Prefab = _cc.Prefab;
      Vec3 = _cc.Vec3;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_dataConstantsJs) {
      Constants = _dataConstantsJs.Constants;
    }, function (_dataCustomEventListenerJs) {
      CustomEventListener = _dataCustomEventListenerJs.CustomEventListener;
    }, function (_dataPoolManagerJs) {
      PoolManager = _dataPoolManagerJs.PoolManager;
    }, function (_CarJs) {
      Car = _CarJs.Car;
    }, function (_RoadPointJs) {
      RoadPoint = _RoadPointJs.RoadPoint;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "41fb2id6iRDg5rPnq0YmH5E", "CarManager", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("CarManager", CarManager = (_dec = ccclass("CarManager"), _dec2 = property({
        type: _crd && Car === void 0 ? (_reportPossibleCrUseOfCar({
          error: Error()
        }), Car) : Car
      }), _dec3 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        _inherits(CarManager, _Component);

        function CarManager() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, CarManager);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CarManager)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "mainCar", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "camera", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "cameraPos", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "cameraRotation", _descriptor4, _assertThisInitialized(_this));

          _this._currPath = [];
          _this._aiCars = [];
          return _this;
        }

        _createClass(CarManager, [{
          key: "start",
          //记录小车
          value: function start() {
            (_crd && CustomEventListener === void 0 ? (_reportPossibleCrUseOfCustomEventListener({
              error: Error()
            }), CustomEventListener) : CustomEventListener).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).EventName.GAME_OVER, this._gameOver, this);
          }
        }, {
          key: "reset",
          value: function reset(points) {
            if (points.length <= 0) {
              console.warn('There is no points in this map');
              return;
            }

            this._recycleAllAICar();

            this._currPath = points;

            this._createMainerCar(points[0]);

            this._startSchedule();
          }
        }, {
          key: "controlMoving",
          value: function controlMoving() {
            var isRunning = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            if (isRunning) {
              this.mainCar.startRunning();
            } else {
              this.mainCar.stopRunning();
            }
          }
        }, {
          key: "_createMainerCar",
          value: function _createMainerCar(point) {
            this.mainCar.setEntry(point, true);
            this.mainCar.setCamera(this.camera, this.cameraPos, this.cameraRotation);
          }
        }, {
          key: "_gameOver",
          value: function _gameOver() {
            this._stopSchedule();

            this.mainCar.stopImmediaterly();
            this.camera.setParent(this.node.parent, true);

            for (var i = 0; i < this._aiCars.length; i++) {
              var car = this._aiCars[i];
              car.stopImmediaterly();
            }
          } //AI小车

        }, {
          key: "_startSchedule",
          value: function _startSchedule() {
            //开始回调
            for (var i = 1; i < this._currPath.length; i++) {
              var node = this._currPath[i];
              var roadPoint = node.getComponent(_crd && RoadPoint === void 0 ? (_reportPossibleCrUseOfRoadPoint({
                error: Error()
              }), RoadPoint) : RoadPoint);
              roadPoint.startSchedule(this._createEnemy.bind(this));
            }
          }
        }, {
          key: "_stopSchedule",
          value: function _stopSchedule() {
            for (var i = 1; i < this._currPath.length; i++) {
              var node = this._currPath[i];
              var roadPoint = node.getComponent(_crd && RoadPoint === void 0 ? (_reportPossibleCrUseOfRoadPoint({
                error: Error()
              }), RoadPoint) : RoadPoint);
              roadPoint.stopSchedule();
            }
          } //创建敌人

        }, {
          key: "_createEnemy",
          value: function _createEnemy(road, carID) {
            var _this2 = this;

            var self = this;
            loader.loadRes("car/car".concat(carID), Prefab, function (err, prefab) {
              if (err) {
                console.warn(err);
                return;
              }

              var car = (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
                error: Error()
              }), PoolManager) : PoolManager).getNode(prefab, self.node);
              var carComp = car.getComponent(_crd && Car === void 0 ? (_reportPossibleCrUseOfCar({
                error: Error()
              }), Car) : Car);

              _this2._aiCars.push(carComp);

              carComp.setEntry(road.node); //入口点

              carComp.maxSpeed = road.speed;
              carComp.startRunning();
              carComp.moveAfterFinished(_this2._recycleAICar.bind(_this2));
            });
          }
        }, {
          key: "_recycleAICar",
          value: function _recycleAICar(car) {
            var index = this._aiCars.indexOf(car);

            if (index >= 0) {
              (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
                error: Error()
              }), PoolManager) : PoolManager).setNode(car.node);

              this._aiCars.splice(index, 1);
            }
          }
        }, {
          key: "_recycleAllAICar",
          value: function _recycleAllAICar() {
            for (var i = 0; i < this._aiCars.length; i++) {
              var car = this._aiCars[i];
              (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
                error: Error()
              }), PoolManager) : PoolManager).setNode(car.node); //回收
            }

            this._aiCars.length = 0;
          }
        }]);

        return CarManager;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mainCar", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "camera", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "cameraPos", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3(0, 4, 8);
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "cameraRotation", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return -60;
        }
      })), _class2)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L+ivu+S5pi/liY3nq68vSlPpq5jnuqfkuI5Ucy9UUy9jb2NvcyBnYW1lL+aOpemAgeWuouS6uuWwj+a4uOaIjy9hc3NldHMvc2NyaXB0L2dhbWUvQ2FyTWFuYWdlci50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiTm9kZSIsImxvYWRlciIsIlByZWZhYiIsIlZlYzMiLCJDb25zdGFudHMiLCJDdXN0b21FdmVudExpc3RlbmVyIiwiUG9vbE1hbmFnZXIiLCJDYXIiLCJSb2FkUG9pbnQiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJDYXJNYW5hZ2VyIiwidHlwZSIsIl9jdXJyUGF0aCIsIl9haUNhcnMiLCJvbiIsIkV2ZW50TmFtZSIsIkdBTUVfT1ZFUiIsIl9nYW1lT3ZlciIsInBvaW50cyIsImxlbmd0aCIsImNvbnNvbGUiLCJ3YXJuIiwiX3JlY3ljbGVBbGxBSUNhciIsIl9jcmVhdGVNYWluZXJDYXIiLCJfc3RhcnRTY2hlZHVsZSIsImlzUnVubmluZyIsIm1haW5DYXIiLCJzdGFydFJ1bm5pbmciLCJzdG9wUnVubmluZyIsInBvaW50Iiwic2V0RW50cnkiLCJzZXRDYW1lcmEiLCJjYW1lcmEiLCJjYW1lcmFQb3MiLCJjYW1lcmFSb3RhdGlvbiIsIl9zdG9wU2NoZWR1bGUiLCJzdG9wSW1tZWRpYXRlcmx5Iiwic2V0UGFyZW50Iiwibm9kZSIsInBhcmVudCIsImkiLCJjYXIiLCJyb2FkUG9pbnQiLCJnZXRDb21wb25lbnQiLCJzdGFydFNjaGVkdWxlIiwiX2NyZWF0ZUVuZW15IiwiYmluZCIsInN0b3BTY2hlZHVsZSIsInJvYWQiLCJjYXJJRCIsInNlbGYiLCJsb2FkUmVzIiwiZXJyIiwicHJlZmFiIiwiZ2V0Tm9kZSIsImNhckNvbXAiLCJwdXNoIiwibWF4U3BlZWQiLCJzcGVlZCIsIm1vdmVBZnRlckZpbmlzaGVkIiwiX3JlY3ljbGVBSUNhciIsImluZGV4IiwiaW5kZXhPZiIsInNldE5vZGUiLCJzcGxpY2UiXSwibWFwcGlu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LENBQUM1QixZQUFSO0FBQ0E0QixjQUFBQSxPQUFPLENBQUNJLGlCQUFSLENBQTBCLE1BQUksQ0FBQ0MsYUFBTCxDQUFtQmQsSUFBbkIsQ0FBd0IsTUFBeEIsQ0FBMUI7QUFDSCxhQWJEO0FBY0g7Ozt3Q0FFcUJMLEcsRUFBUTtBQUMxQixnQkFBTW9CLEtBQUssR0FBRyxLQUFLaEQsT0FBTCxDQUFhaUQsT0FBYixDQUFxQnJCLEdBQXJCLENBQWQ7O0FBQ0EsZ0JBQUdvQixLQUFLLElBQUksQ0FBWixFQUFjO0FBQ1Y7QUFBQTtBQUFBLDhDQUFZRSxPQUFaLENBQW9CdEIsR0FBRyxDQUFDSCxJQUF4Qjs7QUFDQSxtQkFBS3pCLE9BQUwsQ0FBYW1ELE1BQWIsQ0FBb0JILEtBQXBCLEVBQTBCLENBQTFCO0FBQ0g7QUFDSjs7OzZDQUV5QjtBQUN0QixpQkFBSSxJQUFJckIsQ0FBQyxHQUFHLENBQVosRUFBY0EsQ0FBQyxHQUFDLEtBQUszQixPQUFMLENBQWFNLE1BQTdCLEVBQW9DcUIsQ0FBQyxFQUFyQyxFQUF3QztBQUNwQyxrQkFBTUMsR0FBRyxHQUFHLEtBQUs1QixPQUFMLENBQWEyQixDQUFiLENBQVo7QUFDQTtBQUFBO0FBQUEsOENBQVl1QixPQUFaLENBQW9CdEIsR0FBRyxDQUFDSCxJQUF4QixFQUZvQyxDQUVOO0FBQ2pDOztBQUNELGlCQUFLekIsT0FBTCxDQUFhTSxNQUFiLEdBQXNCLENBQXRCO0FBQ0g7Ozs7UUE3RzJCckIsUzs7Ozs7aUJBSWQsSTs7Ozs7OztpQkFLQSxJOztvRkFFYlcsUTs7Ozs7aUJBQ1csSUFBSVAsSUFBSixDQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixDOzt5RkFFWE8sUTs7Ozs7aUJBQ2dCLENBQUMsRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgbG9hZGVyLCBQcmVmYWIsIFZlYzMgfSBmcm9tIFwiY2NcIjtcclxuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL2RhdGEvQ29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IEN1c3RvbUV2ZW50TGlzdGVuZXIgfSBmcm9tIFwiLi4vZGF0YS9DdXN0b21FdmVudExpc3RlbmVyXCI7XHJcbmltcG9ydCB7IFBvb2xNYW5hZ2VyIH0gZnJvbSBcIi4uL2RhdGEvUG9vbE1hbmFnZXJcIjtcclxuaW1wb3J0IHsgQ2FyIH0gZnJvbSBcIi4vQ2FyXCI7XHJcbmltcG9ydCB7IFJvYWRQb2ludCB9IGZyb20gXCIuL1JvYWRQb2ludFwiO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoXCJDYXJNYW5hZ2VyXCIpXHJcbmV4cG9ydCBjbGFzcyBDYXJNYW5hZ2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTpDYXJcclxuICAgIH0pXHJcbiAgICBtYWluQ2FyOkNhciA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOk5vZGVcclxuICAgIH0pXHJcbiAgICBjYW1lcmE6Tm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBjYW1lcmFQb3MgPSBuZXcgVmVjMygwLDQsOCk7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBjYW1lcmFSb3RhdGlvbiA9IC02MDtcclxuXHJcbiAgICBwcml2YXRlIF9jdXJyUGF0aDpOb2RlW10gPSBbXTsvL+iusOW9leW9k+WJjei3r+W+hFxyXG4gICAgcHJpdmF0ZSBfYWlDYXJzOkNhcltdID0gW107Ly/orrDlvZXlsI/ovaZcclxuXHJcbiAgICBwdWJsaWMgc3RhcnQoKXtcclxuICAgICAgICBDdXN0b21FdmVudExpc3RlbmVyLm9uKENvbnN0YW50cy5FdmVudE5hbWUuR0FNRV9PVkVSLHRoaXMuX2dhbWVPdmVyLHRoaXMpXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgcmVzZXQocG9pbnRzOk5vZGVbXSl7XHJcbiAgICAgICAgaWYocG9pbnRzLmxlbmd0aCA8PSAwKXtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdUaGVyZSBpcyBubyBwb2ludHMgaW4gdGhpcyBtYXAnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fcmVjeWNsZUFsbEFJQ2FyKCk7XHJcbiAgICAgICAgdGhpcy5fY3VyclBhdGggPSBwb2ludHM7XHJcbiAgICAgICAgdGhpcy5fY3JlYXRlTWFpbmVyQ2FyKHBvaW50c1swXSk7XHJcbiAgICAgICAgdGhpcy5fc3RhcnRTY2hlZHVsZSgpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGNvbnRyb2xNb3ZpbmcoaXNSdW5uaW5nID0gdHJ1ZSl7XHJcbiAgICAgICAgaWYoaXNSdW5uaW5nKXtcclxuICAgICAgICAgICAgdGhpcy5tYWluQ2FyLnN0YXJ0UnVubmluZygpO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tYWluQ2FyLnN0b3BSdW5uaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NyZWF0ZU1haW5lckNhcihwb2ludDpOb2RlKXtcclxuICAgICAgICB0aGlzLm1haW5DYXIuc2V0RW50cnkocG9pbnQsdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5tYWluQ2FyLnNldENhbWVyYSh0aGlzLmNhbWVyYSx0aGlzLmNhbWVyYVBvcyx0aGlzLmNhbWVyYVJvdGF0aW9uKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2dhbWVPdmVyKCl7XHJcbiAgICAgICAgdGhpcy5fc3RvcFNjaGVkdWxlKCk7XHJcbiAgICAgICAgdGhpcy5tYWluQ2FyLnN0b3BJbW1lZGlhdGVybHkoKTtcclxuICAgICAgICB0aGlzLmNhbWVyYS5zZXRQYXJlbnQodGhpcy5ub2RlLnBhcmVudCx0cnVlKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2FpQ2Fycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBjYXIgPSB0aGlzLl9haUNhcnNbaV07XHJcbiAgICAgICAgICAgIGNhci5zdG9wSW1tZWRpYXRlcmx5KCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL0FJ5bCP6L2mXHJcbiAgICBwcml2YXRlIF9zdGFydFNjaGVkdWxlKCl7XHJcbiAgICAgICAgLy/lvIDlp4vlm57osINcclxuICAgICAgICBmb3IobGV0IGkgPSAxOyBpIDx0aGlzLl9jdXJyUGF0aC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuX2N1cnJQYXRoW2ldO1xyXG4gICAgICAgICAgICBjb25zdCByb2FkUG9pbnQgPSBub2RlLmdldENvbXBvbmVudChSb2FkUG9pbnQpO1xyXG4gICAgICAgICAgICByb2FkUG9pbnQuc3RhcnRTY2hlZHVsZSh0aGlzLl9jcmVhdGVFbmVteS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfc3RvcFNjaGVkdWxlKCl7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMTsgaSA8dGhpcy5fY3VyclBhdGgubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLl9jdXJyUGF0aFtpXTtcclxuICAgICAgICAgICAgY29uc3Qgcm9hZFBvaW50ID0gbm9kZS5nZXRDb21wb25lbnQoUm9hZFBvaW50KTtcclxuICAgICAgICAgICAgcm9hZFBvaW50LnN0b3BTY2hlZHVsZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+WIm+W7uuaVjOS6ulxyXG4gICAgcHJpdmF0ZSBfY3JlYXRlRW5lbXkocm9hZDpSb2FkUG9pbnQsY2FySUQ6c3RyaW5nKXtcclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICBsb2FkZXIubG9hZFJlcyhgY2FyL2NhciR7Y2FySUR9YCxQcmVmYWIsKGVycjphbnkscHJlZmFiOlByZWZhYik9PntcclxuICAgICAgICAgICAgaWYoZXJyKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihlcnIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjYXIgPSBQb29sTWFuYWdlci5nZXROb2RlKHByZWZhYixzZWxmLm5vZGUpO1xyXG4gICAgICAgICAgICBjb25zdCBjYXJDb21wID0gY2FyLmdldENvbXBvbmVudChDYXIpO1xyXG4gICAgICAgICAgICB0aGlzLl9haUNhcnMucHVzaChjYXJDb21wKTtcclxuICAgICAgICAgICAgY2FyQ29tcC5zZXRFbnRyeShyb2FkLm5vZGUpOy8v5YWl5Y+j54K5XHJcbiAgICAgICAgICAgIGNhckNvbXAubWF4U3BlZWQgPSByb2FkLnNwZWVkO1xyXG4gICAgICAgICAgICBjYXJDb21wLnN0YXJ0UnVubmluZygpO1xyXG4gICAgICAgICAgICBjYXJDb21wLm1vdmVBZnRlckZpbmlzaGVkKHRoaXMuX3JlY3ljbGVBSUNhci5iaW5kKHRoaXMpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9yZWN5Y2xlQUlDYXIoY2FyOkNhcil7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLl9haUNhcnMuaW5kZXhPZihjYXIpO1xyXG4gICAgICAgIGlmKGluZGV4ID49IDApe1xyXG4gICAgICAgICAgICBQb29sTWFuYWdlci5zZXROb2RlKGNhci5ub2RlKTtcclxuICAgICAgICAgICAgdGhpcy5fYWlDYXJzLnNwbGljZShpbmRleCwxKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9yZWN5Y2xlQWxsQUlDYXIoKXtcclxuICAgICAgICBmb3IobGV0IGkgPSAwO2k8dGhpcy5fYWlDYXJzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBjb25zdCBjYXIgPSB0aGlzLl9haUNhcnNbaV07XHJcbiAgICAgICAgICAgIFBvb2xNYW5hZ2VyLnNldE5vZGUoY2FyLm5vZGUpOy8v5Zue5pS2XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2FpQ2Fycy5sZW5ndGggPSAwO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==