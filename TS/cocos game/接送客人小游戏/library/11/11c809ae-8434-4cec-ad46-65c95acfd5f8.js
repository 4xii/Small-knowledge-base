System.register(["cc", "code-quality:cr", "../data/CustomEventListener.js", "../data/Constants.js", "../data/PoolManager.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Prefab, ParticleUtils, ParticleSystemComponent, instantiate, CustomEventListener, Constants, PoolManager, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, EffectManager;

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

  function _reportPossibleCrUseOfPoolManager(extras) {
    _reporterNs.report("PoolManager", "../data/PoolManager", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
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
      Prefab = _cc.Prefab;
      ParticleUtils = _cc.ParticleUtils;
      ParticleSystemComponent = _cc.ParticleSystemComponent;
      instantiate = _cc.instantiate;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_dataCustomEventListenerJs) {
      CustomEventListener = _dataCustomEventListenerJs.CustomEventListener;
    }, function (_dataConstantsJs) {
      Constants = _dataConstantsJs.Constants;
    }, function (_dataPoolManagerJs) {
      PoolManager = _dataPoolManagerJs.PoolManager;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "11c80muhDRM7K1GZclaz9X4", "EffectManager", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("EffectManager", EffectManager = (_dec = ccclass("EffectManager"), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: Prefab
      }), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        _inherits(EffectManager, _Component);

        function EffectManager() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, EffectManager);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EffectManager)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "brakeTrail", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "coin", _descriptor2, _assertThisInitialized(_this));

          _this._followTarget = null;
          _this._currBraking = null;
          _this._coin = null;
          return _this;
        }

        _createClass(EffectManager, [{
          key: "start",
          value: function start() {
            (_crd && CustomEventListener === void 0 ? (_reportPossibleCrUseOfCustomEventListener({
              error: Error()
            }), CustomEventListener) : CustomEventListener).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).EventName.START_BRAKING, this._startBraking, this);
            (_crd && CustomEventListener === void 0 ? (_reportPossibleCrUseOfCustomEventListener({
              error: Error()
            }), CustomEventListener) : CustomEventListener).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).EventName.END_BRAKING, this._endBraking, this);
            (_crd && CustomEventListener === void 0 ? (_reportPossibleCrUseOfCustomEventListener({
              error: Error()
            }), CustomEventListener) : CustomEventListener).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).EventName.SHOW_COIN, this._showCoin, this);
          } //更新当前

        }, {
          key: "update",
          value: function update() {
            if (this._currBraking && this._followTarget) {
              this._currBraking.setWorldPosition(this._followTarget.worldPosition);
            }
          }
        }, {
          key: "_startBraking",
          value: function _startBraking() {
            var follow = this._followTarget = arguments.length <= 0 ? undefined : arguments[0];
            this._currBraking = (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
              error: Error()
            }), PoolManager) : PoolManager).getNode(this.brakeTrail, this.node);

            this._currBraking.setWorldPosition(follow);

            ParticleUtils.play(this._currBraking); //把当前节点对象的粒子系统执行play操作
          }
        }, {
          key: "_endBraking",
          value: function _endBraking() {
            var currBraking = this._currBraking;
            ParticleUtils.stop(currBraking); //把当前节点对象的粒子系统停止操作

            this.scheduleOnce(function () {
              (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
                error: Error()
              }), PoolManager) : PoolManager).setNode(currBraking); //2秒后回收
            }, 2);
            this._currBraking = null;
            this._followTarget = null;
          }
        }, {
          key: "_showCoin",
          value: function _showCoin() {
            var pos = arguments.length <= 0 ? undefined : arguments[0];

            if (!this._coin) {
              var coin = instantiate(this.coin);
              coin.setParent(this.node);
              this._coin = coin.getComponent(ParticleSystemComponent);
            }

            this._coin.node.setWorldPosition(pos);

            this._coin.play();
          }
        }]);

        return EffectManager;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "brakeTrail", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "coin", [_dec3], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L+ivu+S5pi/liY3nq68vSlPpq5jnuqfkuI5Ucy9UUy9jb2NvcyBnYW1lL+aOpemAgeWuouS6uuWwj+a4uOaIjy9hc3NldHMvc2NyaXB0L2dhbWUvRWZmZWN0TWFuYWdlci50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiUHJlZmFiIiwiUGFydGljbGVVdGlscyIsIlBhcnRpY2xlU3lzdGVtQ29tcG9uZW50IiwiaW5zdGFudGlhdGUiLCJDdXN0b21FdmVudExpc3RlbmVyIiwiQ29uc3RhbnRzIiwiUG9vbE1hbmFnZXIiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJFZmZlY3RNYW5hZ2VyIiwidHlwZSIsIl9mb2xsb3dUYXJnZXQiLCJfY3VyckJyYWtpbmciLCJfY29pbiIsIm9uIiwiRXZlbnROYW1lIiwiU1RBUlRfQlJBS0lORyIsIl9zdGFydEJyYWtpbmciLCJFTkRfQlJBS0lORyIsIl9lbmRCcmFraW5nIiwiU0hPV19DT0lOIiwiX3Nob3dDb2luIiwic2V0V29ybGRQb3NpdGlvbiIsIndvcmxkUG9zaXRpb24iLCJmb2xsb3ciLCJnZXROb2RlIiwiYnJha2VUcmFpbCIsIm5vZGUiLCJwbGF5IiwiY3VyckJyYWtpbmciLCJzdG9wIiwic2NoZWR1bGVPbmNlIiwic2V0Tm9kZSIsInBvcyIsImNvaW4iLCJzZXRQYXJlbnQiLCJnZXRDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFpQkMsTUFBQUEsTSxPQUFBQSxNO0FBQVFDLE1BQUFBLGEsT0FBQUEsYTtBQUFlQyxNQUFBQSx1QixPQUFBQSx1QjtBQUF5QkMsTUFBQUEsVyxPQUFBQSxXOzs7O0FBQzdFQyxNQUFBQSxtQiw4QkFBQUEsbUI7O0FBQ0RDLE1BQUFBLFMsb0JBQUFBLFM7O0FBQ0NDLE1BQUFBLFcsc0JBQUFBLFc7Ozs7OztBQUNEQyxNQUFBQSxPLEdBQXNCVCxVLENBQXRCUyxPO0FBQVNDLE1BQUFBLFEsR0FBYVYsVSxDQUFiVSxROzsrQkFHSkMsYSxXQURaRixPQUFPLENBQUMsZUFBRCxDLFVBR0hDLFFBQVEsQ0FBQztBQUNORSxRQUFBQSxJQUFJLEVBQUNWO0FBREMsT0FBRCxDLFVBS1JRLFFBQVEsQ0FBQztBQUNORSxRQUFBQSxJQUFJLEVBQUNWO0FBREMsT0FBRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQUtEVyxhLEdBQXFCLEk7Z0JBQ3JCQyxZLEdBQW9CLEk7Z0JBQ3BCQyxLLEdBQWdDLEk7Ozs7OztrQ0FFMUI7QUFDVjtBQUFBO0FBQUEsNERBQW9CQyxFQUFwQixDQUF1QjtBQUFBO0FBQUEsd0NBQVVDLFNBQVYsQ0FBb0JDLGFBQTNDLEVBQXlELEtBQUtDLGFBQTlELEVBQTRFLElBQTVFO0FBQ0E7QUFBQTtBQUFBLDREQUFvQkgsRUFBcEIsQ0FBdUI7QUFBQTtBQUFBLHdDQUFVQyxTQUFWLENBQW9CRyxXQUEzQyxFQUF1RCxLQUFLQyxXQUE1RCxFQUF3RSxJQUF4RTtBQUNBO0FBQUE7QUFBQSw0REFBb0JMLEVBQXBCLENBQXVCO0FBQUE7QUFBQSx3Q0FBVUMsU0FBVixDQUFvQkssU0FBM0MsRUFBcUQsS0FBS0MsU0FBMUQsRUFBb0UsSUFBcEU7QUFDSCxXLENBRUQ7Ozs7bUNBQ2U7QUFDWCxnQkFBRyxLQUFLVCxZQUFMLElBQXFCLEtBQUtELGFBQTdCLEVBQTJDO0FBQ3ZDLG1CQUFLQyxZQUFMLENBQWtCVSxnQkFBbEIsQ0FBbUMsS0FBS1gsYUFBTCxDQUFtQlksYUFBdEQ7QUFDSDtBQUNKOzs7MENBRW1DO0FBQ2hDLGdCQUFNQyxNQUFNLEdBQUcsS0FBS2IsYUFBTCxtREFBZjtBQUNBLGlCQUFLQyxZQUFMLEdBQW9CO0FBQUE7QUFBQSw0Q0FBWWEsT0FBWixDQUFvQixLQUFLQyxVQUF6QixFQUFvQyxLQUFLQyxJQUF6QyxDQUFwQjs7QUFDQSxpQkFBS2YsWUFBTCxDQUFrQlUsZ0JBQWxCLENBQW1DRSxNQUFuQzs7QUFDQXZCLFlBQUFBLGFBQWEsQ0FBQzJCLElBQWQsQ0FBbUIsS0FBS2hCLFlBQXhCLEVBSmdDLENBSU07QUFDekM7Ozt3Q0FFb0I7QUFDakIsZ0JBQU1pQixXQUFXLEdBQUcsS0FBS2pCLFlBQXpCO0FBQ0FYLFlBQUFBLGFBQWEsQ0FBQzZCLElBQWQsQ0FBbUJELFdBQW5CLEVBRmlCLENBRWU7O0FBQ2hDLGlCQUFLRSxZQUFMLENBQWtCLFlBQUk7QUFDbEI7QUFBQTtBQUFBLDhDQUFZQyxPQUFaLENBQW9CSCxXQUFwQixFQURrQixDQUNlO0FBQ3BDLGFBRkQsRUFFRSxDQUZGO0FBSUEsaUJBQUtqQixZQUFMLEdBQW9CLElBQXBCO0FBQ0EsaUJBQUtELGFBQUwsR0FBcUIsSUFBckI7QUFDSDs7O3NDQUUrQjtBQUM1QixnQkFBTXNCLEdBQUcsbURBQVQ7O0FBQ0EsZ0JBQUcsQ0FBQyxLQUFLcEIsS0FBVCxFQUFlO0FBQ1gsa0JBQU1xQixJQUFJLEdBQUcvQixXQUFXLENBQUMsS0FBSytCLElBQU4sQ0FBeEI7QUFDQUEsY0FBQUEsSUFBSSxDQUFDQyxTQUFMLENBQWUsS0FBS1IsSUFBcEI7QUFDQSxtQkFBS2QsS0FBTCxHQUFhcUIsSUFBSSxDQUFDRSxZQUFMLENBQWtCbEMsdUJBQWxCLENBQWI7QUFDSDs7QUFFRCxpQkFBS1csS0FBTCxDQUFXYyxJQUFYLENBQWdCTCxnQkFBaEIsQ0FBaUNXLEdBQWpDOztBQUNBLGlCQUFLcEIsS0FBTCxDQUFXZSxJQUFYO0FBQ0g7Ozs7UUF6RDhCN0IsUzs7Ozs7aUJBS1YsSTs7Ozs7OztpQkFLTixJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBQcmVmYWIsIFBhcnRpY2xlVXRpbHMsIFBhcnRpY2xlU3lzdGVtQ29tcG9uZW50LCBpbnN0YW50aWF0ZSB9IGZyb20gXCJjY1wiO1xyXG5pbXBvcnQgeyBDdXN0b21FdmVudExpc3RlbmVyIH0gZnJvbSBcIi4uL2RhdGEvQ3VzdG9tRXZlbnRMaXN0ZW5lclwiO1xyXG5pbXBvcnQge0NvbnN0YW50c30gZnJvbSBcIi4uL2RhdGEvQ29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IFBvb2xNYW5hZ2VyIH0gZnJvbSBcIi4uL2RhdGEvUG9vbE1hbmFnZXJcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKFwiRWZmZWN0TWFuYWdlclwiKVxyXG5leHBvcnQgY2xhc3MgRWZmZWN0TWFuYWdlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICAvL+iOt+WPlueuoeeQhueJueaViFxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOlByZWZhYlxyXG4gICAgfSlcclxuICAgIGJyYWtlVHJhaWw6IFByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOlByZWZhYlxyXG4gICAgfSlcclxuICAgIGNvaW46IFByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBfZm9sbG93VGFyZ2V0Ok5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfY3VyckJyYWtpbmc6Tm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9jb2luOlBhcnRpY2xlU3lzdGVtQ29tcG9uZW50ID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgc3RhcnQoKXtcclxuICAgICAgICBDdXN0b21FdmVudExpc3RlbmVyLm9uKENvbnN0YW50cy5FdmVudE5hbWUuU1RBUlRfQlJBS0lORyx0aGlzLl9zdGFydEJyYWtpbmcsdGhpcyk7XHJcbiAgICAgICAgQ3VzdG9tRXZlbnRMaXN0ZW5lci5vbihDb25zdGFudHMuRXZlbnROYW1lLkVORF9CUkFLSU5HLHRoaXMuX2VuZEJyYWtpbmcsdGhpcyk7XHJcbiAgICAgICAgQ3VzdG9tRXZlbnRMaXN0ZW5lci5vbihDb25zdGFudHMuRXZlbnROYW1lLlNIT1dfQ09JTix0aGlzLl9zaG93Q29pbix0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIC8v5pu05paw5b2T5YmNXHJcbiAgICBwdWJsaWMgdXBkYXRlKCl7XHJcbiAgICAgICAgaWYodGhpcy5fY3VyckJyYWtpbmcgJiYgdGhpcy5fZm9sbG93VGFyZ2V0KXtcclxuICAgICAgICAgICAgdGhpcy5fY3VyckJyYWtpbmcuc2V0V29ybGRQb3NpdGlvbih0aGlzLl9mb2xsb3dUYXJnZXQud29ybGRQb3NpdGlvbilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfc3RhcnRCcmFraW5nKC4uLmFyZ3M6YW55W10pe1xyXG4gICAgICAgIGNvbnN0IGZvbGxvdyA9IHRoaXMuX2ZvbGxvd1RhcmdldCA9IGFyZ3NbMF07XHJcbiAgICAgICAgdGhpcy5fY3VyckJyYWtpbmcgPSBQb29sTWFuYWdlci5nZXROb2RlKHRoaXMuYnJha2VUcmFpbCx0aGlzLm5vZGUpXHJcbiAgICAgICAgdGhpcy5fY3VyckJyYWtpbmcuc2V0V29ybGRQb3NpdGlvbihmb2xsb3cpO1xyXG4gICAgICAgIFBhcnRpY2xlVXRpbHMucGxheSh0aGlzLl9jdXJyQnJha2luZyk7Ly/miorlvZPliY3oioLngrnlr7nosaHnmoTnspLlrZDns7vnu5/miafooYxwbGF55pON5L2cXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZW5kQnJha2luZygpe1xyXG4gICAgICAgIGNvbnN0IGN1cnJCcmFraW5nID0gdGhpcy5fY3VyckJyYWtpbmc7XHJcbiAgICAgICAgUGFydGljbGVVdGlscy5zdG9wKGN1cnJCcmFraW5nKTsvL+aKiuW9k+WJjeiKgueCueWvueixoeeahOeykuWtkOezu+e7n+WBnOatouaTjeS9nFxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT57XHJcbiAgICAgICAgICAgIFBvb2xNYW5hZ2VyLnNldE5vZGUoY3VyckJyYWtpbmcpOy8vMuenkuWQjuWbnuaUtlxyXG4gICAgICAgIH0sMik7XHJcblxyXG4gICAgICAgIHRoaXMuX2N1cnJCcmFraW5nID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9mb2xsb3dUYXJnZXQgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3Nob3dDb2luKC4uLmFyZ3M6YW55W10pe1xyXG4gICAgICAgIGNvbnN0IHBvcyA9IGFyZ3NbMF07XHJcbiAgICAgICAgaWYoIXRoaXMuX2NvaW4pe1xyXG4gICAgICAgICAgICBjb25zdCBjb2luID0gaW5zdGFudGlhdGUodGhpcy5jb2luKSBhcyBOb2RlO1xyXG4gICAgICAgICAgICBjb2luLnNldFBhcmVudCh0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICB0aGlzLl9jb2luID0gY29pbi5nZXRDb21wb25lbnQoUGFydGljbGVTeXN0ZW1Db21wb25lbnQpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9jb2luLm5vZGUuc2V0V29ybGRQb3NpdGlvbihwb3MpO1xyXG4gICAgICAgIHRoaXMuX2NvaW4ucGxheSgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==