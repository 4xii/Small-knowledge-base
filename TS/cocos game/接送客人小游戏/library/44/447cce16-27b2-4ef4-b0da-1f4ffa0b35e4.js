System.register(["cc", "code-quality:cr", "../data/CustomEventListener.js", "../data/Constants.js", "./AudioManager.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Node, Vec3, AnimationComponent, CustomEventListener, Constants, AudioManager, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, EventName, _tempVec, C;

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

  function _reportPossibleCrUseOfCustomEventListener(extras) {
    _reporterNs.report("CustomEventListener", "../data/CustomEventListener", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../data/Constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "./AudioManager", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      AnimationComponent = _cc.AnimationComponent;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_dataCustomEventListenerJs) {
      CustomEventListener = _dataCustomEventListenerJs.CustomEventListener;
    }, function (_dataConstantsJs) {
      Constants = _dataConstantsJs.Constants;
    }, function (_AudioManagerJs) {
      AudioManager = _AudioManagerJs.AudioManager;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "447cc4WJ7JO9LDaH0/6CzXk", "CustomerManager", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;
      EventName = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
        error: Error()
      }), Constants) : Constants).EventName;
      _tempVec = new Vec3();

      _export("C", C = (_dec = ccclass("C"), _dec2 = property({
        type: [Node]
      }), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        _inherits(C, _Component);

        function C() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, C);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(C)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "customers", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "walkTime", _descriptor2, _assertThisInitialized(_this));

          _this._currCustomer = null;
          _this._startPos = new Vec3();
          _this._endPos = new Vec3();
          _this._inTheOrder = false;
          _this._deltaTime = 0;
          _this._state = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CustomerState.NONE;
          return _this;
        }

        _createClass(C, [{
          key: "start",
          value: function start() {
            (_crd && CustomEventListener === void 0 ? (_reportPossibleCrUseOfCustomEventListener({
              error: Error()
            }), CustomEventListener) : CustomEventListener).on(EventName.GREETING, this._greetingCustomer, this);
            (_crd && CustomEventListener === void 0 ? (_reportPossibleCrUseOfCustomEventListener({
              error: Error()
            }), CustomEventListener) : CustomEventListener).on(EventName.GOODBYE, this._takingCustomer, this);
          }
        }, {
          key: "update",
          value: function update(dt) {
            //在订单中
            if (this._inTheOrder) {
              this._deltaTime += dt;

              if (this._deltaTime > this.walkTime) {
                this._deltaTime = 0; //结束了

                this._inTheOrder = false;
                this._currCustomer.active = false;

                if (this._state === (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).CustomerState.GOODBYE) {
                  this._currCustomer = null; //当触发GOODBYE 当前乘客消失
                }

                (_crd && CustomEventListener === void 0 ? (_reportPossibleCrUseOfCustomEventListener({
                  error: Error()
                }), CustomEventListener) : CustomEventListener).dispatchEvent(EventName.FINISHED_WALK);

                if (this._state === (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).CustomerState.GREETING) {
                  (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                    error: Error()
                  }), AudioManager) : AudioManager).playSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                    error: Error()
                  }), Constants) : Constants).AudioSource.INCAR);
                }
              } else {
                Vec3.lerp(_tempVec, this._startPos, this._endPos, this._deltaTime / this.walkTime); //多少秒完成运动时间

                this._currCustomer.setWorldPosition(_tempVec);
              }
            }
          }
        }, {
          key: "_greetingCustomer",
          value: function _greetingCustomer() {
            //随机出一个乘客
            this._currCustomer = this.customers[Math.floor(Math.random() * this.customers.length)];
            this._state = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).CustomerState.GREETING;
            this._inTheOrder = true;

            if (!this._currCustomer) {
              return; //如果当前没有乘客
            }

            var carPos = arguments.length <= 0 ? undefined : arguments[0];
            var direction = arguments.length <= 1 ? undefined : arguments[1];
            Vec3.multiplyScalar(this._startPos, direction, 1.4);

            this._startPos.add(carPos); //顾客开始位置


            Vec3.multiplyScalar(this._endPos, direction, 0.5);

            this._endPos.add(carPos);

            this._currCustomer.setWorldPosition(this._startPos);

            this._currCustomer.active = true;

            if (direction.x !== 0) {
              if (direction.x > 0) {
                this._currCustomer.eulerAngles = new Vec3(0, -90, 0);
              } else {
                this._currCustomer.eulerAngles = new Vec3(0, 90, 0);
              }
            } else {
              if (direction.z > 0) {
                this._currCustomer.eulerAngles = new Vec3(0, 180, 0);
              } else {
                this._currCustomer.eulerAngles = new Vec3();
              }
            } //播放动画


            var animComp = this._currCustomer.getComponent(AnimationComponent);

            animComp.play('walk');
          }
        }, {
          key: "_takingCustomer",
          value: function _takingCustomer() {
            this._state = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).CustomerState.GOODBYE;
            this._inTheOrder = true;
            var carPos = arguments.length <= 0 ? undefined : arguments[0];
            var direction = arguments.length <= 1 ? undefined : arguments[1];
            Vec3.multiplyScalar(this._startPos, direction, 0.5);

            this._startPos.add(carPos); //顾客开始位置


            Vec3.multiplyScalar(this._endPos, direction, 1.4);

            this._endPos.add(carPos);

            this._currCustomer.setWorldPosition(this._startPos);

            this._currCustomer.active = true;

            if (direction.x !== 0) {
              if (direction.x > 0) {
                this._currCustomer.eulerAngles = new Vec3(0, 90, 0);
              } else {
                this._currCustomer.eulerAngles = new Vec3(0, -90, 0);
              }
            } else {
              if (direction.z > 0) {
                this._currCustomer.eulerAngles = new Vec3();
              } else {
                this._currCustomer.eulerAngles = new Vec3(0, 180, 0);
              }
            } //播放动画


            var animComp = this._currCustomer.getComponent(AnimationComponent);

            animComp.play('walk');
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).playSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).AudioSource.GETMONEY);
          }
        }]);

        return C;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "customers", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "walkTime", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2;
        }
      })), _class2)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L+ivu+S5pi/liY3nq68vSlPpq5jnuqfkuI5Ucy9UUy9jb2NvcyBnYW1lL+aOpemAgeWuouS6uuWwj+a4uOaIjy9hc3NldHMvc2NyaXB0L2dhbWUvQ3VzdG9tZXJNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJOb2RlIiwiVmVjMyIsIkFuaW1hdGlvbkNvbXBvbmVudCIsIkN1c3RvbUV2ZW50TGlzdGVuZXIiLCJDb25zdGFudHMiLCJBdWRpb01hbmFnZXIiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJFdmVudE5hbWUiLCJfdGVtcFZlYyIsIkMiLCJ0eXBlIiwiX2N1cnJDdXN0b21lciIsIl9zdGFydFBvcyIsIl9lbmRQb3MiLCJfaW5UaGVPcmRlciIsIl9kZWx0YVRpbWUiLCJfc3RhdGUiLCJDdXN0b21lclN0YXRlIiwiTk9ORSIsIm9uIiwiR1JFRVRJTkciLCJfZ3JlZXRpbmdDdXN0b21lciIsIkdPT0RCWUUiLCJfdGFraW5nQ3VzdG9tZXIiLCJkdCIsIndhbGtUaW1lIiwiYWN0aXZlIiwiZGlzcGF0Y2hFdmVudCIsIkZJTklTSEVEX1dBTEsiLCJwbGF5U291bmQiLCJBdWRpb1NvdXJjZSIsIklOQ0FSIiwibGVycCIsInNldFdvcmxkUG9zaXRpb24iLCJjdXN0b21lcnMiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJjYXJQb3MiLCJkaXJlY3Rpb24iLCJtdWx0aXBseVNjYWxhciIsImFkZCIsIngiLCJldWxlckFuZ2xlcyIsInoiLCJhbmltQ29tcCIsImdldENvbXBvbmVudCIsInBsYXkiLCJHRVRNT05FWSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBV0MsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxrQixPQUFBQSxrQjs7OztBQUNuQ0MsTUFBQUEsbUIsOEJBQUFBLG1COztBQUNEQyxNQUFBQSxTLG9CQUFBQSxTOztBQUNDQyxNQUFBQSxZLG1CQUFBQSxZOzs7Ozs7QUFDREMsTUFBQUEsTyxHQUFzQlIsVSxDQUF0QlEsTztBQUFTQyxNQUFBQSxRLEdBQWFULFUsQ0FBYlMsUTtBQUVYQyxNQUFBQSxTLEdBQVk7QUFBQTtBQUFBLGtDQUFVQSxTO0FBQ3RCQyxNQUFBQSxRLEdBQVcsSUFBSVIsSUFBSixFOzttQkFHSlMsQyxXQURaSixPQUFPLENBQUMsR0FBRCxDLFVBRUhDLFFBQVEsQ0FBQztBQUNOSSxRQUFBQSxJQUFJLEVBQUMsQ0FBQ1gsSUFBRDtBQURDLE9BQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFPRFksYSxHQUFxQixJO2dCQUNyQkMsUyxHQUFZLElBQUlaLElBQUosRTtnQkFDWmEsTyxHQUFVLElBQUliLElBQUosRTtnQkFDVmMsVyxHQUFjLEs7Z0JBQ2RDLFUsR0FBYSxDO2dCQUNiQyxNLEdBQVM7QUFBQTtBQUFBLHNDQUFVQyxhQUFWLENBQXdCQyxJOzs7Ozs7a0NBRzNCO0FBQ1Y7QUFBQTtBQUFBLDREQUFvQkMsRUFBcEIsQ0FBdUJaLFNBQVMsQ0FBQ2EsUUFBakMsRUFBMEMsS0FBS0MsaUJBQS9DLEVBQWlFLElBQWpFO0FBQ0E7QUFBQTtBQUFBLDREQUFvQkYsRUFBcEIsQ0FBdUJaLFNBQVMsQ0FBQ2UsT0FBakMsRUFBeUMsS0FBS0MsZUFBOUMsRUFBOEQsSUFBOUQ7QUFDSDs7O2lDQUVhQyxFLEVBQVU7QUFFcEI7QUFDQSxnQkFBRyxLQUFLVixXQUFSLEVBQW9CO0FBQ2hCLG1CQUFLQyxVQUFMLElBQW1CUyxFQUFuQjs7QUFDQSxrQkFBRyxLQUFLVCxVQUFMLEdBQWtCLEtBQUtVLFFBQTFCLEVBQW1DO0FBQy9CLHFCQUFLVixVQUFMLEdBQWtCLENBQWxCLENBRCtCLENBQ1g7O0FBQ3BCLHFCQUFLRCxXQUFMLEdBQW1CLEtBQW5CO0FBQ0EscUJBQUtILGFBQUwsQ0FBbUJlLE1BQW5CLEdBQTRCLEtBQTVCOztBQUNBLG9CQUFHLEtBQUtWLE1BQUwsS0FBZ0I7QUFBQTtBQUFBLDRDQUFVQyxhQUFWLENBQXdCSyxPQUEzQyxFQUFtRDtBQUMvQyx1QkFBS1gsYUFBTCxHQUFxQixJQUFyQixDQUQrQyxDQUNyQjtBQUM3Qjs7QUFFRDtBQUFBO0FBQUEsZ0VBQW9CZ0IsYUFBcEIsQ0FBa0NwQixTQUFTLENBQUNxQixhQUE1Qzs7QUFDQSxvQkFBRyxLQUFLWixNQUFMLEtBQWdCO0FBQUE7QUFBQSw0Q0FBVUMsYUFBVixDQUF3QkcsUUFBM0MsRUFBb0Q7QUFDaEQ7QUFBQTtBQUFBLG9EQUFhUyxTQUFiLENBQXVCO0FBQUE7QUFBQSw4Q0FBVUMsV0FBVixDQUFzQkMsS0FBN0M7QUFDSDtBQUNKLGVBWkQsTUFZSztBQUNEL0IsZ0JBQUFBLElBQUksQ0FBQ2dDLElBQUwsQ0FBVXhCLFFBQVYsRUFBbUIsS0FBS0ksU0FBeEIsRUFBa0MsS0FBS0MsT0FBdkMsRUFBK0MsS0FBS0UsVUFBTCxHQUFnQixLQUFLVSxRQUFwRSxFQURDLENBQzZFOztBQUM5RSxxQkFBS2QsYUFBTCxDQUFtQnNCLGdCQUFuQixDQUFvQ3pCLFFBQXBDO0FBQ0g7QUFDSjtBQUNKOzs7OENBRXVDO0FBQ3BDO0FBQ0EsaUJBQUtHLGFBQUwsR0FBcUIsS0FBS3VCLFNBQUwsQ0FBZUMsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFjLEtBQUtILFNBQUwsQ0FBZUksTUFBeEMsQ0FBZixDQUFyQjtBQUNBLGlCQUFLdEIsTUFBTCxHQUFjO0FBQUE7QUFBQSx3Q0FBVUMsYUFBVixDQUF3QkcsUUFBdEM7QUFDQSxpQkFBS04sV0FBTCxHQUFtQixJQUFuQjs7QUFDQSxnQkFBRyxDQUFDLEtBQUtILGFBQVQsRUFBdUI7QUFDbkIscUJBRG1CLENBQ1o7QUFDVjs7QUFDRCxnQkFBTTRCLE1BQU0sbURBQVo7QUFDQSxnQkFBTUMsU0FBUyxtREFBZjtBQUNBeEMsWUFBQUEsSUFBSSxDQUFDeUMsY0FBTCxDQUFvQixLQUFLN0IsU0FBekIsRUFBbUM0QixTQUFuQyxFQUE2QyxHQUE3Qzs7QUFDQSxpQkFBSzVCLFNBQUwsQ0FBZThCLEdBQWYsQ0FBbUJILE1BQW5CLEVBWG9DLENBV1Q7OztBQUMzQnZDLFlBQUFBLElBQUksQ0FBQ3lDLGNBQUwsQ0FBb0IsS0FBSzVCLE9BQXpCLEVBQWlDMkIsU0FBakMsRUFBMkMsR0FBM0M7O0FBQ0EsaUJBQUszQixPQUFMLENBQWE2QixHQUFiLENBQWlCSCxNQUFqQjs7QUFFQSxpQkFBSzVCLGFBQUwsQ0FBbUJzQixnQkFBbkIsQ0FBb0MsS0FBS3JCLFNBQXpDOztBQUNBLGlCQUFLRCxhQUFMLENBQW1CZSxNQUFuQixHQUE0QixJQUE1Qjs7QUFFQSxnQkFBSWMsU0FBUyxDQUFDRyxDQUFWLEtBQWdCLENBQXBCLEVBQXVCO0FBQ25CLGtCQUFJSCxTQUFTLENBQUNHLENBQVYsR0FBYyxDQUFsQixFQUFxQjtBQUNqQixxQkFBS2hDLGFBQUwsQ0FBbUJpQyxXQUFuQixHQUFpQyxJQUFJNUMsSUFBSixDQUFTLENBQVQsRUFBWSxDQUFDLEVBQWIsRUFBaUIsQ0FBakIsQ0FBakM7QUFDSCxlQUZELE1BRU87QUFDSCxxQkFBS1csYUFBTCxDQUFtQmlDLFdBQW5CLEdBQWlDLElBQUk1QyxJQUFKLENBQVMsQ0FBVCxFQUFZLEVBQVosRUFBZ0IsQ0FBaEIsQ0FBakM7QUFDSDtBQUNKLGFBTkQsTUFNTztBQUNILGtCQUFJd0MsU0FBUyxDQUFDSyxDQUFWLEdBQWMsQ0FBbEIsRUFBcUI7QUFDakIscUJBQUtsQyxhQUFMLENBQW1CaUMsV0FBbkIsR0FBaUMsSUFBSTVDLElBQUosQ0FBUyxDQUFULEVBQVksR0FBWixFQUFpQixDQUFqQixDQUFqQztBQUNILGVBRkQsTUFFTztBQUNILHFCQUFLVyxhQUFMLENBQW1CaUMsV0FBbkIsR0FBaUMsSUFBSTVDLElBQUosRUFBakM7QUFDSDtBQUNKLGFBOUJtQyxDQStCcEM7OztBQUNBLGdCQUFNOEMsUUFBUSxHQUFHLEtBQUtuQyxhQUFMLENBQW1Cb0MsWUFBbkIsQ0FBZ0M5QyxrQkFBaEMsQ0FBakI7O0FBQ0E2QyxZQUFBQSxRQUFRLENBQUNFLElBQVQsQ0FBYyxNQUFkO0FBRUg7Ozs0Q0FFcUM7QUFDbEMsaUJBQUtoQyxNQUFMLEdBQWM7QUFBQTtBQUFBLHdDQUFVQyxhQUFWLENBQXdCSyxPQUF0QztBQUNBLGlCQUFLUixXQUFMLEdBQW1CLElBQW5CO0FBRUEsZ0JBQU15QixNQUFNLG1EQUFaO0FBQ0EsZ0JBQU1DLFNBQVMsbURBQWY7QUFDQXhDLFlBQUFBLElBQUksQ0FBQ3lDLGNBQUwsQ0FBb0IsS0FBSzdCLFNBQXpCLEVBQW1DNEIsU0FBbkMsRUFBNkMsR0FBN0M7O0FBQ0EsaUJBQUs1QixTQUFMLENBQWU4QixHQUFmLENBQW1CSCxNQUFuQixFQVBrQyxDQU9QOzs7QUFDM0J2QyxZQUFBQSxJQUFJLENBQUN5QyxjQUFMLENBQW9CLEtBQUs1QixPQUF6QixFQUFpQzJCLFNBQWpDLEVBQTJDLEdBQTNDOztBQUNBLGlCQUFLM0IsT0FBTCxDQUFhNkIsR0FBYixDQUFpQkgsTUFBakI7O0FBRUEsaUJBQUs1QixhQUFMLENBQW1Cc0IsZ0JBQW5CLENBQW9DLEtBQUtyQixTQUF6Qzs7QUFDQSxpQkFBS0QsYUFBTCxDQUFtQmUsTUFBbkIsR0FBNEIsSUFBNUI7O0FBRUEsZ0JBQUljLFNBQVMsQ0FBQ0csQ0FBVixLQUFnQixDQUFwQixFQUF1QjtBQUNuQixrQkFBSUgsU0FBUyxDQUFDRyxDQUFWLEdBQWMsQ0FBbEIsRUFBcUI7QUFDakIscUJBQUtoQyxhQUFMLENBQW1CaUMsV0FBbkIsR0FBaUMsSUFBSTVDLElBQUosQ0FBUyxDQUFULEVBQVksRUFBWixFQUFnQixDQUFoQixDQUFqQztBQUNILGVBRkQsTUFFTztBQUNILHFCQUFLVyxhQUFMLENBQW1CaUMsV0FBbkIsR0FBaUMsSUFBSTVDLElBQUosQ0FBUyxDQUFULEVBQVksQ0FBQyxFQUFiLEVBQWlCLENBQWpCLENBQWpDO0FBQ0g7QUFDSixhQU5ELE1BTU87QUFDSCxrQkFBSXdDLFNBQVMsQ0FBQ0ssQ0FBVixHQUFjLENBQWxCLEVBQXFCO0FBQ2pCLHFCQUFLbEMsYUFBTCxDQUFtQmlDLFdBQW5CLEdBQWlDLElBQUk1QyxJQUFKLEVBQWpDO0FBQ0gsZUFGRCxNQUVPO0FBQ0gscUJBQUtXLGFBQUwsQ0FBbUJpQyxXQUFuQixHQUFpQyxJQUFJNUMsSUFBSixDQUFTLENBQVQsRUFBWSxHQUFaLEVBQWlCLENBQWpCLENBQWpDO0FBQ0g7QUFDSixhQTFCaUMsQ0EyQmxDOzs7QUFDQSxnQkFBTThDLFFBQVEsR0FBRyxLQUFLbkMsYUFBTCxDQUFtQm9DLFlBQW5CLENBQWdDOUMsa0JBQWhDLENBQWpCOztBQUNBNkMsWUFBQUEsUUFBUSxDQUFDRSxJQUFULENBQWMsTUFBZDtBQUNBO0FBQUE7QUFBQSw4Q0FBYW5CLFNBQWIsQ0FBdUI7QUFBQTtBQUFBLHdDQUFVQyxXQUFWLENBQXNCbUIsUUFBN0M7QUFDSDs7OztRQWpIa0JuRCxTOzs7OztpQkFJRixFOzttRkFDaEJRLFE7Ozs7O2lCQUNVLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFZlYzMsIEFuaW1hdGlvbkNvbXBvbmVudCB9IGZyb20gXCJjY1wiO1xyXG5pbXBvcnQgeyBDdXN0b21FdmVudExpc3RlbmVyIH0gZnJvbSBcIi4uL2RhdGEvQ3VzdG9tRXZlbnRMaXN0ZW5lclwiO1xyXG5pbXBvcnQge0NvbnN0YW50c30gZnJvbSBcIi4uL2RhdGEvQ29uc3RhbnRzXCJcclxuaW1wb3J0IHsgQXVkaW9NYW5hZ2VyIH0gZnJvbSBcIi4vQXVkaW9NYW5hZ2VyXCI7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5jb25zdCBFdmVudE5hbWUgPSBDb25zdGFudHMuRXZlbnROYW1lO1xyXG5jb25zdCBfdGVtcFZlYyA9IG5ldyBWZWMzKCk7XHJcblxyXG5AY2NjbGFzcyhcIkNcIilcclxuZXhwb3J0IGNsYXNzIEMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOltOb2RlXVxyXG4gICAgfSlcclxuICAgIGN1c3RvbWVyczpOb2RlW109W107XHJcbiAgICBAcHJvcGVydHlcclxuICAgIHdhbGtUaW1lID0gMjtcclxuXHJcbiAgICBwcml2YXRlIF9jdXJyQ3VzdG9tZXI6Tm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9zdGFydFBvcyA9IG5ldyBWZWMzKCk7XHJcbiAgICBwcml2YXRlIF9lbmRQb3MgPSBuZXcgVmVjMygpO1xyXG4gICAgcHJpdmF0ZSBfaW5UaGVPcmRlciA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfZGVsdGFUaW1lID0gMDsvL+W3ruWAvOS9jee9rlxyXG4gICAgcHJpdmF0ZSBfc3RhdGUgPSBDb25zdGFudHMuQ3VzdG9tZXJTdGF0ZS5OT05FO1xyXG4gICAgXHJcblxyXG4gICAgcHVibGljIHN0YXJ0KCl7XHJcbiAgICAgICAgQ3VzdG9tRXZlbnRMaXN0ZW5lci5vbihFdmVudE5hbWUuR1JFRVRJTkcsdGhpcy5fZ3JlZXRpbmdDdXN0b21lcix0aGlzKTtcclxuICAgICAgICBDdXN0b21FdmVudExpc3RlbmVyLm9uKEV2ZW50TmFtZS5HT09EQllFLHRoaXMuX3Rha2luZ0N1c3RvbWVyLHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoZHQ6bnVtYmVyKXtcclxuICAgICAgICBcclxuICAgICAgICAvL+WcqOiuouWNleS4rVxyXG4gICAgICAgIGlmKHRoaXMuX2luVGhlT3JkZXIpe1xyXG4gICAgICAgICAgICB0aGlzLl9kZWx0YVRpbWUgKz0gZHQ7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuX2RlbHRhVGltZSA+IHRoaXMud2Fsa1RpbWUpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZGVsdGFUaW1lID0gMDsvL+e7k+adn+S6hlxyXG4gICAgICAgICAgICAgICAgdGhpcy5faW5UaGVPcmRlciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY3VyckN1c3RvbWVyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5fc3RhdGUgPT09IENvbnN0YW50cy5DdXN0b21lclN0YXRlLkdPT0RCWUUpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJDdXN0b21lciA9IG51bGw7Ly/lvZPop6blj5FHT09EQllFIOW9k+WJjeS5mOWuoua2iOWksVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEN1c3RvbUV2ZW50TGlzdGVuZXIuZGlzcGF0Y2hFdmVudChFdmVudE5hbWUuRklOSVNIRURfV0FMSylcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuX3N0YXRlID09PSBDb25zdGFudHMuQ3VzdG9tZXJTdGF0ZS5HUkVFVElORyl7XHJcbiAgICAgICAgICAgICAgICAgICAgQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuQXVkaW9Tb3VyY2UuSU5DQVIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIFZlYzMubGVycChfdGVtcFZlYyx0aGlzLl9zdGFydFBvcyx0aGlzLl9lbmRQb3MsdGhpcy5fZGVsdGFUaW1lL3RoaXMud2Fsa1RpbWUpOy8v5aSa5bCR56eS5a6M5oiQ6L+Q5Yqo5pe26Ze0XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jdXJyQ3VzdG9tZXIuc2V0V29ybGRQb3NpdGlvbihfdGVtcFZlYyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZ3JlZXRpbmdDdXN0b21lciguLi5hcmdzOmFueVtdKXtcclxuICAgICAgICAvL+maj+acuuWHuuS4gOS4quS5mOWuolxyXG4gICAgICAgIHRoaXMuX2N1cnJDdXN0b21lciA9IHRoaXMuY3VzdG9tZXJzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSp0aGlzLmN1c3RvbWVycy5sZW5ndGgpXVxyXG4gICAgICAgIHRoaXMuX3N0YXRlID0gQ29uc3RhbnRzLkN1c3RvbWVyU3RhdGUuR1JFRVRJTkc7XHJcbiAgICAgICAgdGhpcy5faW5UaGVPcmRlciA9IHRydWU7XHJcbiAgICAgICAgaWYoIXRoaXMuX2N1cnJDdXN0b21lcil7XHJcbiAgICAgICAgICAgIHJldHVybjsvL+WmguaenOW9k+WJjeayoeacieS5mOWuolxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjYXJQb3MgPSBhcmdzWzBdO1xyXG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9YXJnc1sxXTtcclxuICAgICAgICBWZWMzLm11bHRpcGx5U2NhbGFyKHRoaXMuX3N0YXJ0UG9zLGRpcmVjdGlvbiwxLjQpO1xyXG4gICAgICAgIHRoaXMuX3N0YXJ0UG9zLmFkZChjYXJQb3MpOy8v6aG+5a6i5byA5aeL5L2N572uXHJcbiAgICAgICAgVmVjMy5tdWx0aXBseVNjYWxhcih0aGlzLl9lbmRQb3MsZGlyZWN0aW9uLDAuNSk7XHJcbiAgICAgICAgdGhpcy5fZW5kUG9zLmFkZChjYXJQb3MpO1xyXG5cclxuICAgICAgICB0aGlzLl9jdXJyQ3VzdG9tZXIuc2V0V29ybGRQb3NpdGlvbih0aGlzLl9zdGFydFBvcyk7XHJcbiAgICAgICAgdGhpcy5fY3VyckN1c3RvbWVyLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIGlmIChkaXJlY3Rpb24ueCAhPT0gMCkge1xyXG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uLnggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jdXJyQ3VzdG9tZXIuZXVsZXJBbmdsZXMgPSBuZXcgVmVjMygwLCAtOTAsIDApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY3VyckN1c3RvbWVyLmV1bGVyQW5nbGVzID0gbmV3IFZlYzMoMCwgOTAsIDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbi56ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY3VyckN1c3RvbWVyLmV1bGVyQW5nbGVzID0gbmV3IFZlYzMoMCwgMTgwLCAwKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJDdXN0b21lci5ldWxlckFuZ2xlcyA9IG5ldyBWZWMzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/mkq3mlL7liqjnlLtcclxuICAgICAgICBjb25zdCBhbmltQ29tcCA9IHRoaXMuX2N1cnJDdXN0b21lci5nZXRDb21wb25lbnQoQW5pbWF0aW9uQ29tcG9uZW50KTtcclxuICAgICAgICBhbmltQ29tcC5wbGF5KCd3YWxrJyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3Rha2luZ0N1c3RvbWVyKC4uLmFyZ3M6YW55W10pe1xyXG4gICAgICAgIHRoaXMuX3N0YXRlID0gQ29uc3RhbnRzLkN1c3RvbWVyU3RhdGUuR09PREJZRTtcclxuICAgICAgICB0aGlzLl9pblRoZU9yZGVyID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgY29uc3QgY2FyUG9zID0gYXJnc1swXTtcclxuICAgICAgICBjb25zdCBkaXJlY3Rpb24gPWFyZ3NbMV07XHJcbiAgICAgICAgVmVjMy5tdWx0aXBseVNjYWxhcih0aGlzLl9zdGFydFBvcyxkaXJlY3Rpb24sMC41KTtcclxuICAgICAgICB0aGlzLl9zdGFydFBvcy5hZGQoY2FyUG9zKTsvL+mhvuWuouW8gOWni+S9jee9rlxyXG4gICAgICAgIFZlYzMubXVsdGlwbHlTY2FsYXIodGhpcy5fZW5kUG9zLGRpcmVjdGlvbiwxLjQpO1xyXG4gICAgICAgIHRoaXMuX2VuZFBvcy5hZGQoY2FyUG9zKTtcclxuXHJcbiAgICAgICAgdGhpcy5fY3VyckN1c3RvbWVyLnNldFdvcmxkUG9zaXRpb24odGhpcy5fc3RhcnRQb3MpO1xyXG4gICAgICAgIHRoaXMuX2N1cnJDdXN0b21lci5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICBpZiAoZGlyZWN0aW9uLnggIT09IDApIHtcclxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbi54ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY3VyckN1c3RvbWVyLmV1bGVyQW5nbGVzID0gbmV3IFZlYzMoMCwgOTAsIDApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY3VyckN1c3RvbWVyLmV1bGVyQW5nbGVzID0gbmV3IFZlYzMoMCwgLTkwLCAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24ueiA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJDdXN0b21lci5ldWxlckFuZ2xlcyA9IG5ldyBWZWMzKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jdXJyQ3VzdG9tZXIuZXVsZXJBbmdsZXMgPSBuZXcgVmVjMygwLCAxODAsIDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5pKt5pS+5Yqo55S7XHJcbiAgICAgICAgY29uc3QgYW5pbUNvbXAgPSB0aGlzLl9jdXJyQ3VzdG9tZXIuZ2V0Q29tcG9uZW50KEFuaW1hdGlvbkNvbXBvbmVudCk7XHJcbiAgICAgICAgYW5pbUNvbXAucGxheSgnd2FsaycpO1xyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLkF1ZGlvU291cmNlLkdFVE1PTkVZKTtcclxuICAgIH1cclxufVxyXG4iXX0=