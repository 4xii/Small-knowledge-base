System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, loader, AudioClip, _dec, _class, _crd, ccclass, property, AudioManager;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      loader = _cc.loader;
      AudioClip = _cc.AudioClip;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "4e640IG4RxEEokinojGc5ri", "AudioManager", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("AudioManager", AudioManager = (_dec = ccclass("AudioManager"), _dec(_class =
      /*#__PURE__*/
      function () {
        function AudioManager() {
          _classCallCheck(this, AudioManager);
        }

        _createClass(AudioManager, null, [{
          key: "playMusic",
          value: function playMusic(name) {
            var path = "audio/music/".concat(name);
            loader.loadRes(path, AudioClip, function (err, clip) {
              if (err) {
                console.warn(err);
                return;
              }

              clip.setLoop(true);
              clip.play();
            });
          }
        }, {
          key: "playSound",
          value: function playSound(name) {
            var path = "audio/sound/".concat(name);
            loader.loadRes(path, AudioClip, function (err, clip) {
              if (err) {
                console.warn(err);
                return;
              }

              clip.setLoop(false);
              clip.playOneShot(1);
            });
          }
        }]);

        return AudioManager;
      }()) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L+ivu+S5pi/liY3nq68vSlPpq5jnuqfkuI5Ucy9UUy9jb2NvcyBnYW1lL+aOpemAgeWuouS6uuWwj+a4uOaIjy9hc3NldHMvc2NyaXB0L2dhbWUvQXVkaW9NYW5hZ2VyLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJsb2FkZXIiLCJBdWRpb0NsaXAiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJBdWRpb01hbmFnZXIiLCJuYW1lIiwicGF0aCIsImxvYWRSZXMiLCJlcnIiLCJjbGlwIiwiY29uc29sZSIsIndhcm4iLCJzZXRMb29wIiwicGxheSIsInBsYXlPbmVTaG90Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUE2QkMsTUFBQUEsTSxPQUFBQSxNO0FBQVFDLE1BQUFBLFMsT0FBQUEsUzs7Ozs7O0FBQ3RDQyxNQUFBQSxPLEdBQXNCSCxVLENBQXRCRyxPO0FBQVNDLE1BQUFBLFEsR0FBYUosVSxDQUFiSSxROzs4QkFHSkMsWSxXQURaRixPQUFPLENBQUMsY0FBRCxDOzs7Ozs7Ozs7b0NBRW9CRyxJLEVBQVk7QUFDaEMsZ0JBQU1DLElBQUkseUJBQWdCRCxJQUFoQixDQUFWO0FBQ0FMLFlBQUFBLE1BQU0sQ0FBQ08sT0FBUCxDQUFlRCxJQUFmLEVBQW9CTCxTQUFwQixFQUE4QixVQUFDTyxHQUFELEVBQVNDLElBQVQsRUFBMEI7QUFDcEQsa0JBQUdELEdBQUgsRUFBTztBQUNIRSxnQkFBQUEsT0FBTyxDQUFDQyxJQUFSLENBQWFILEdBQWI7QUFDQTtBQUNIOztBQUNEQyxjQUFBQSxJQUFJLENBQUNHLE9BQUwsQ0FBYSxJQUFiO0FBQ0FILGNBQUFBLElBQUksQ0FBQ0ksSUFBTDtBQUNILGFBUEQ7QUFTSDs7O29DQUV1QlIsSSxFQUFZO0FBQ2hDLGdCQUFNQyxJQUFJLHlCQUFnQkQsSUFBaEIsQ0FBVjtBQUNBTCxZQUFBQSxNQUFNLENBQUNPLE9BQVAsQ0FBZUQsSUFBZixFQUFvQkwsU0FBcEIsRUFBOEIsVUFBQ08sR0FBRCxFQUFTQyxJQUFULEVBQTBCO0FBQ3BELGtCQUFHRCxHQUFILEVBQU87QUFDSEUsZ0JBQUFBLE9BQU8sQ0FBQ0MsSUFBUixDQUFhSCxHQUFiO0FBQ0E7QUFDSDs7QUFDREMsY0FBQUEsSUFBSSxDQUFDRyxPQUFMLENBQWEsS0FBYjtBQUNBSCxjQUFBQSxJQUFJLENBQUNLLFdBQUwsQ0FBaUIsQ0FBakI7QUFDSCxhQVBEO0FBU0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIGxvYWRlciwgQXVkaW9DbGlwICB9IGZyb20gXCJjY1wiO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoXCJBdWRpb01hbmFnZXJcIilcclxuZXhwb3J0IGNsYXNzIEF1ZGlvTWFuYWdlcntcclxuICAgIHB1YmxpYyBzdGF0aWMgcGxheU11c2ljKG5hbWU6c3RyaW5nKXtcclxuICAgICAgICBjb25zdCBwYXRoPWBhdWRpby9tdXNpYy8ke25hbWV9YDtcclxuICAgICAgICBsb2FkZXIubG9hZFJlcyhwYXRoLEF1ZGlvQ2xpcCwoZXJyOmFueSxjbGlwOkF1ZGlvQ2xpcCk9PntcclxuICAgICAgICAgICAgaWYoZXJyKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihlcnIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2xpcC5zZXRMb29wKHRydWUpO1xyXG4gICAgICAgICAgICBjbGlwLnBsYXkoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBwbGF5U291bmQobmFtZTpzdHJpbmcpe1xyXG4gICAgICAgIGNvbnN0IHBhdGg9YGF1ZGlvL3NvdW5kLyR7bmFtZX1gO1xyXG4gICAgICAgIGxvYWRlci5sb2FkUmVzKHBhdGgsQXVkaW9DbGlwLChlcnI6YW55LGNsaXA6QXVkaW9DbGlwKT0+e1xyXG4gICAgICAgICAgICBpZihlcnIpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGVycik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjbGlwLnNldExvb3AoZmFsc2UpO1xyXG4gICAgICAgICAgICBjbGlwLnBsYXlPbmVTaG90KDEpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxufVxyXG4iXX0=