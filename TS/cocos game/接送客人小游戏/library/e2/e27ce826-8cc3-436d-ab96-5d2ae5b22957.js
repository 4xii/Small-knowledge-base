System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, _dec, _class, _class2, _temp, _crd, ccclass, property, EventName, CustomerState, AudioSource, CarGroup, Constants;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  _export({
    _dec: void 0,
    _class: void 0,
    _class2: void 0,
    _temp: void 0,
    EventName: void 0,
    CustomerState: void 0,
    AudioSource: void 0,
    CarGroup: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "e27cegmjMNDbauWXSrlsilX", "Constants", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      (function (EventName) {
        EventName["GREETING"] = "greeting";
        EventName["GOODBYE"] = "goodbye";
        EventName["FINISHED_WALK"] = "finished-walk";
        EventName["START_BRAKING"] = "start-braking";
        EventName["END_BRAKING"] = "end-braking";
        EventName["SHOW_COIN"] = "show-coin";
        EventName["GAME_START"] = "game-start";
        EventName["GAME_OVER"] = "game-over";
      })(EventName || (EventName = {}));

      (function (CustomerState) {
        CustomerState[CustomerState["NONE"] = 0] = "NONE";
        CustomerState[CustomerState["GREETING"] = 1] = "GREETING";
        CustomerState[CustomerState["GOODBYE"] = 2] = "GOODBYE";
      })(CustomerState || (CustomerState = {}));

      (function (AudioSource) {
        AudioSource["BACKGROUND"] = "background";
        AudioSource["CLICK"] = "click";
        AudioSource["CRASH"] = "crash";
        AudioSource["GETMONEY"] = "getMoney";
        AudioSource["INCAR"] = "inCar";
        AudioSource["NEWORDER"] = "newOrder";
        AudioSource["START"] = "start";
        AudioSource["STOP"] = "stop";
        AudioSource["TOOTONG1"] = "tooting1";
        AudioSource["TOOTONG2"] = "tooting2";
        AudioSource["WIN"] = "win";
      })(AudioSource || (AudioSource = {}));

      (function (CarGroup) {
        CarGroup[CarGroup["NORMAL"] = 1] = "NORMAL";
        CarGroup[CarGroup["MAIN_CAR"] = 2] = "MAIN_CAR";
        CarGroup[CarGroup["OTHER_CAR"] = 4] = "OTHER_CAR";
      })(CarGroup || (CarGroup = {}));

      _export("Constants", Constants = (_dec = ccclass("Constants"), _dec(_class = (_temp = _class2 = function Constants() {
        _classCallCheck(this, Constants);
      }, _class2.EventName = EventName, _class2.CustomerState = CustomerState, _class2.AudioSource = AudioSource, _class2.CarGroup = CarGroup, _temp)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L+ivu+S5pi/liY3nq68vSlPpq5jnuqfkuI5Ucy9UUy9jb2NvcyBnYW1lL+aOpemAgeWuouS6uuWwj+a4uOaIjy9hc3NldHMvc2NyaXB0L2RhdGEvQ29uc3RhbnRzLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJFdmVudE5hbWUiLCJDdXN0b21lclN0YXRlIiwiQXVkaW9Tb3VyY2UiLCJDYXJHcm91cCIsIkNvbnN0YW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTs7Ozs7O0FBQ0RDLE1BQUFBLE8sR0FBc0JELFUsQ0FBdEJDLE87QUFBU0MsTUFBQUEsUSxHQUFhRixVLENBQWJFLFE7O2lCQUVaQyxTO0FBQUFBLFFBQUFBLFM7QUFBQUEsUUFBQUEsUztBQUFBQSxRQUFBQSxTO0FBQUFBLFFBQUFBLFM7QUFBQUEsUUFBQUEsUztBQUFBQSxRQUFBQSxTO0FBQUFBLFFBQUFBLFM7QUFBQUEsUUFBQUEsUztTQUFBQSxTLEtBQUFBLFM7O2lCQVlBQyxhO0FBQUFBLFFBQUFBLGEsQ0FBQUEsYTtBQUFBQSxRQUFBQSxhLENBQUFBLGE7QUFBQUEsUUFBQUEsYSxDQUFBQSxhO1NBQUFBLGEsS0FBQUEsYTs7aUJBT0FDLFc7QUFBQUEsUUFBQUEsVztBQUFBQSxRQUFBQSxXO0FBQUFBLFFBQUFBLFc7QUFBQUEsUUFBQUEsVztBQUFBQSxRQUFBQSxXO0FBQUFBLFFBQUFBLFc7QUFBQUEsUUFBQUEsVztBQUFBQSxRQUFBQSxXO0FBQUFBLFFBQUFBLFc7QUFBQUEsUUFBQUEsVztBQUFBQSxRQUFBQSxXO1NBQUFBLFcsS0FBQUEsVzs7aUJBZUFDLFE7QUFBQUEsUUFBQUEsUSxDQUFBQSxRO0FBQUFBLFFBQUFBLFEsQ0FBQUEsUTtBQUFBQSxRQUFBQSxRLENBQUFBLFE7U0FBQUEsUSxLQUFBQSxROzsyQkFRUUMsUyxXQURaTixPQUFPLENBQUMsV0FBRCxDOztpQkFFVUUsUyxHQUFZQSxTLFVBQ1pDLGEsR0FBZ0JBLGEsVUFDaEJDLFcsR0FBY0EsVyxVQUNkQyxRLEdBQVdBLFEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUgfSBmcm9tIFwiY2NcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbmVudW0gRXZlbnROYW1le1xyXG4gICAgR1JFRVRJTkcgPSAnZ3JlZXRpbmcnLFxyXG4gICAgR09PREJZRSA9ICdnb29kYnllJyxcclxuICAgIEZJTklTSEVEX1dBTEsgPSAnZmluaXNoZWQtd2FsaycsXHJcbiAgICBTVEFSVF9CUkFLSU5HID0gJ3N0YXJ0LWJyYWtpbmcnLFxyXG4gICAgRU5EX0JSQUtJTkcgPSAnZW5kLWJyYWtpbmcnLFxyXG4gICAgU0hPV19DT0lOID0gJ3Nob3ctY29pbicsXHJcbiAgICBHQU1FX1NUQVJUID0gJ2dhbWUtc3RhcnQnLFxyXG4gICAgR0FNRV9PVkVSID0gJ2dhbWUtb3ZlcidcclxufVxyXG5cclxuLy/kuZjlrqLnirbmgIFcclxuZW51bSBDdXN0b21lclN0YXRlIHtcclxuICAgIE5PTkUsXHJcbiAgICBHUkVFVElORyxcclxuICAgIEdPT0RCWUUsXHJcbn1cclxuXHJcbi8v6Z+z5LmQXHJcbmVudW0gQXVkaW9Tb3VyY2V7XHJcbiAgICBCQUNLR1JPVU5EID0gJ2JhY2tncm91bmQnLFxyXG4gICAgQ0xJQ0sgPSAnY2xpY2snLFxyXG4gICAgQ1JBU0ggPSAnY3Jhc2gnLFxyXG4gICAgR0VUTU9ORVkgPSAnZ2V0TW9uZXknLFxyXG4gICAgSU5DQVIgPSAnaW5DYXInLFxyXG4gICAgTkVXT1JERVIgPSAnbmV3T3JkZXInLFxyXG4gICAgU1RBUlQgPSAnc3RhcnQnLFxyXG4gICAgU1RPUCA9ICdzdG9wJyxcclxuICAgIFRPT1RPTkcxID0gJ3Rvb3RpbmcxJyxcclxuICAgIFRPT1RPTkcyID0gJ3Rvb3RpbmcyJyxcclxuICAgIFdJTiA9ICd3aW4nLFxyXG4gICAgXHJcbn1cclxuXHJcbmVudW0gQ2FyR3JvdXAge1xyXG4gICAgTk9STUFMID0gMTw8MCxcclxuICAgIE1BSU5fQ0FSID0gMSA8PCAxLFxyXG4gICAgT1RIRVJfQ0FSID0gMSA8PCAyLFxyXG5cclxufVxyXG5cclxuQGNjY2xhc3MoXCJDb25zdGFudHNcIilcclxuZXhwb3J0IGNsYXNzIENvbnN0YW50c3tcclxuICAgIHB1YmxpYyBzdGF0aWMgRXZlbnROYW1lID0gRXZlbnROYW1lO1xyXG4gICAgcHVibGljIHN0YXRpYyBDdXN0b21lclN0YXRlID0gQ3VzdG9tZXJTdGF0ZTtcclxuICAgIHB1YmxpYyBzdGF0aWMgQXVkaW9Tb3VyY2UgPSBBdWRpb1NvdXJjZTtcclxuICAgIHB1YmxpYyBzdGF0aWMgQ2FyR3JvdXAgPSBDYXJHcm91cDtcclxufVxyXG4iXX0=