System.register(["cc", "code-quality:cr", "../data/CustomEventListener.js", "./RoadPoint.js", "../data/Constants.js", "./AudioManager.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Vec3, ParticleSystemComponent, BoxColliderComponent, RigidBodyComponent, CustomEventListener, RoadPoint, Constants, AudioManager, _dec, _class, _class2, _descriptor, _temp, _crd, ccclass, property, EventName, _tempVec, Car;

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

  function _reportPossibleCrUseOfRoadPoint(extras) {
    _reporterNs.report("RoadPoint", "./RoadPoint", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../data/Constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "./AudioManager", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
      ParticleSystemComponent = _cc.ParticleSystemComponent;
      BoxColliderComponent = _cc.BoxColliderComponent;
      RigidBodyComponent = _cc.RigidBodyComponent;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_dataCustomEventListenerJs) {
      CustomEventListener = _dataCustomEventListenerJs.CustomEventListener;
    }, function (_RoadPointJs) {
      RoadPoint = _RoadPointJs.RoadPoint;
    }, function (_dataConstantsJs) {
      Constants = _dataConstantsJs.Constants;
    }, function (_AudioManagerJs) {
      AudioManager = _AudioManagerJs.AudioManager;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "872b4R3xgtJOaXwiNwabQKL", "Car", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;
      EventName = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
        error: Error()
      }), Constants) : Constants).EventName;
      _tempVec = new Vec3();

      _export("Car", Car = (_dec = ccclass("Car"), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        _inherits(Car, _Component);

        function Car() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, Car);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Car)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "maxSpeed", _descriptor, _assertThisInitialized(_this));

          _this._currRoadPoint = null;
          _this._pointA = new Vec3();
          _this._pointB = new Vec3();
          _this._currSpeed = 0;
          _this._isMoving = false;
          _this._offset = new Vec3();
          _this._originRotation = 0;
          _this._targetRotation = 0;
          _this._centerPoint = new Vec3();
          _this._rotMeasure = 0;
          _this._acceleration = 0.2;
          _this._isMain = false;
          _this._isInOrder = false;
          _this._isBraking = false;
          _this._gas = null;
          _this._overCD = null;
          _this._camera = null;
          return _this;
        }

        _createClass(Car, [{
          key: "start",
          //监听动画播放结束的回调
          value: function start() {
            (_crd && CustomEventListener === void 0 ? (_reportPossibleCrUseOfCustomEventListener({
              error: Error()
            }), CustomEventListener) : CustomEventListener).on(EventName.FINISHED_WALK, this._finishedWalk, this);
          }
        }, {
          key: "update",
          value: function update(dt) {
            if (!this._isMoving || this._isInOrder) {
              return;
            }

            this._offset.set(this.node.worldPosition); //加速


            this._currSpeed += this._acceleration * dt;

            if (this._currSpeed > this.maxSpeed) {
              this._currSpeed = this.maxSpeed;
            }

            if (this._currSpeed <= 0.001) {
              this._isMoving = false; //刹车到0.001 就停止

              if (this._isBraking) {
                this._isBraking = false;
                (_crd && CustomEventListener === void 0 ? (_reportPossibleCrUseOfCustomEventListener({
                  error: Error()
                }), CustomEventListener) : CustomEventListener).dispatchEvent(EventName.END_BRAKING); //派发刹车事件
              }
            } //向朝向方向运动


            switch (this._currRoadPoint.moveType) {
              case (_crd && RoadPoint === void 0 ? (_reportPossibleCrUseOfRoadPoint({
                error: Error()
              }), RoadPoint) : RoadPoint).RoadMoveType.BEND:
                var offsetRotation = this._targetRotation - this._originRotation; //总需要旋转的角度

                var currRotation = this._conversion(this.node.eulerAngles.y); //已经旋转的角度
                //当前进度值+（速度*度量值）>角度  得出下一站运动的角度


                var nextStation = currRotation - this._originRotation + this._currSpeed * this._rotMeasure * (this._targetRotation > this._originRotation ? 1 : -1); //容错处理

                if (Math.abs(nextStation) > Math.abs(offsetRotation)) {
                  nextStation = offsetRotation;
                } //应该旋转的角度


                var target = nextStation + this._originRotation;

                _tempVec.set(0, target, 0);

                this.node.eulerAngles = _tempVec; //运动
                // const sin = Math.sin(nextStation*Math.PI/180);
                // const cos = Math.cos(nextStation*Math.PI/180);
                // const xLength = this._pointA.x - this._centerPoint.x;
                // const zLength = this. _pointA.z - this._centerPoint.z;
                // //求出目标x轴坐标
                // const xPos = xLength * cos + zLength*sin + this._centerPoint.x;
                // const zPos = -xLength * sin + zLength*cos + this._centerPoint.z; 

                Vec3.rotateY(this._offset, this._pointA, this._centerPoint, nextStation * Math.PI / 180); //this._offset.set(xPos,0,zPos);

                break;

              default:
                var z = this._pointB.z - this._pointA.z;

                if (z !== 0) {
                  if (z > 0) {
                    //制定一个范围
                    this._offset.z += this._currSpeed; //容错处理

                    if (this._offset.z > this._pointB.z) {
                      this._offset.z = this._pointB.z;
                    }
                  } else {
                    this._offset.z -= this._currSpeed; //容错处理

                    if (this._offset.z < this._pointB.z) {
                      this._offset.z = this._pointB.z;
                    }
                  }
                } else {
                  var x = this._pointB.x - this._pointA.x;

                  if (x > 0) {
                    this._offset.x += this._currSpeed; //容错处理

                    if (this._offset.x > this._pointB.x) {
                      this._offset.x = this._pointB.x;
                    }
                  } else {
                    this._offset.x -= this._currSpeed; //容错处理

                    if (this._offset.x < this._pointB.x) {
                      this._offset.x = this._pointB.x;
                    }
                  }
                }

                break;
            }

            this.node.setWorldPosition(this._offset);
            Vec3.subtract(_tempVec, this._pointB, this._offset);

            if (_tempVec.length() <= 0.01) {
              this._arrivalSataion();
            }
          }
        }, {
          key: "setEntry",
          value: function setEntry(entry) {
            var isMain = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            this.node.setWorldPosition(entry.worldPosition);
            this._currRoadPoint = entry.getComponent(_crd && RoadPoint === void 0 ? (_reportPossibleCrUseOfRoadPoint({
              error: Error()
            }), RoadPoint) : RoadPoint);
            this._isMain = isMain;

            if (!this._currRoadPoint) {
              console.warn('This is no RoadPoint in' + entry.name);
            } //通过下一个点与本点的差计算小车朝向


            this._pointA.set(entry.worldPosition);

            this._pointB.set(this._currRoadPoint.nextStation.worldPosition);

            var z = this._pointB.z - this._pointA.z;

            if (z !== 0) {
              if (z < 0) {
                this.node.eulerAngles = new Vec3();
              } else {
                this.node.eulerAngles = new Vec3(0, 180, 0);
              }
            } else {
              var x = this._pointB.x - this._pointA.x;

              if (x > 0) {
                this.node.eulerAngles = new Vec3(0, 270, 0);
              } else {
                this.node.eulerAngles = new Vec3(0, 90, 0);
              }
            }

            var collider = this.node.getComponent(BoxColliderComponent);

            if (this._isMain) {
              var gasNode = this.node.getChildByName('gas');
              this._gas = gasNode.getComponent(ParticleSystemComponent);

              this._gas.play();

              collider.on('onCollisionEnter', this._onCollisionEnter, this);
              collider.setGroup((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).CarGroup.MAIN_CAR); //玩家分组

              collider.setMask((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).CarGroup.OTHER_CAR); //要碰撞的组
            } else {
              collider.setGroup((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).CarGroup.OTHER_CAR);
              collider.setMask(-1); //所有组都检测为-1
            }

            this._resetPhysical(); //激活一次刚体组件

          }
        }, {
          key: "setCamera",
          value: function setCamera(camera, pos, rotation) {
            if (this._isMain) {
              this._camera = camera;
              this._camera.parent = this.node;

              this._camera.setPosition(pos);

              this._camera.eulerAngles = new Vec3(rotation, 0, 0);
            }
          }
        }, {
          key: "startRunning",
          value: function startRunning() {
            if (this._currRoadPoint) {
              this._isMoving = true;
              this._currSpeed = 0;
              this._acceleration = 0.2;
            }
          }
        }, {
          key: "stopRunning",
          value: function stopRunning() {
            this._acceleration = -0.3;
            (_crd && CustomEventListener === void 0 ? (_reportPossibleCrUseOfCustomEventListener({
              error: Error()
            }), CustomEventListener) : CustomEventListener).dispatchEvent(EventName.START_BRAKING, this.node); //执行START_BRAKING

            this._isBraking = true; //this._isMoving = false;

            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).playSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).AudioSource.STOP);
          }
        }, {
          key: "moveAfterFinished",
          value: function moveAfterFinished(cd) {
            this._overCD = cd;
          }
        }, {
          key: "stopImmediaterly",
          value: function stopImmediaterly() {
            this._isMoving = false;
            this._currSpeed = 0;
          } //到站

        }, {
          key: "_arrivalSataion",
          value: function _arrivalSataion() {
            this._pointA.set(this._pointB);

            this._currRoadPoint = this._currRoadPoint.nextStation.getComponent(_crd && RoadPoint === void 0 ? (_reportPossibleCrUseOfRoadPoint({
              error: Error()
            }), RoadPoint) : RoadPoint);

            if (this._currRoadPoint.nextStation) {
              this._pointB.set(this._currRoadPoint.nextStation.worldPosition); //到站乘客事件


              if (this._isMain) {
                //触发刹车动画
                if (this._isBraking) {
                  this._isBraking = false;
                  (_crd && CustomEventListener === void 0 ? (_reportPossibleCrUseOfCustomEventListener({
                    error: Error()
                  }), CustomEventListener) : CustomEventListener).dispatchEvent(EventName.END_BRAKING);
                }

                if (this._currRoadPoint.type === (_crd && RoadPoint === void 0 ? (_reportPossibleCrUseOfRoadPoint({
                  error: Error()
                }), RoadPoint) : RoadPoint).RoadPointType.GREETING) {
                  this._greetingCustomer();
                } else if (this._currRoadPoint.type === (_crd && RoadPoint === void 0 ? (_reportPossibleCrUseOfRoadPoint({
                  error: Error()
                }), RoadPoint) : RoadPoint).RoadPointType.GOODBYE) {
                  this._takingCustomer();
                } else if (this._currRoadPoint.type === (_crd && RoadPoint === void 0 ? (_reportPossibleCrUseOfRoadPoint({
                  error: Error()
                }), RoadPoint) : RoadPoint).RoadPointType.END) {
                  (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                    error: Error()
                  }), AudioManager) : AudioManager).playSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                    error: Error()
                  }), Constants) : Constants).AudioSource.WIN); //到达终点播放胜利
                }
              } //转弯,到达某一个站


              if (this._currRoadPoint.moveType === (_crd && RoadPoint === void 0 ? (_reportPossibleCrUseOfRoadPoint({
                error: Error()
              }), RoadPoint) : RoadPoint).RoadMoveType.BEND) {
                //判断是顺逆时针
                if (this._currRoadPoint.clockwise) {
                  this._originRotation = this._conversion(this.node.eulerAngles.y);
                  this._targetRotation = this._originRotation - 90; //找出顺时针的圆心

                  if (this._pointB.z < this._pointA.z && this._pointB.x > this._pointA.x || this._pointB.z > this._pointA.z && this._pointB.x < this._pointA.x) {
                    this._centerPoint.set(this._pointB.x, 0, this._pointA.z);
                  } else {
                    this._centerPoint.set(this._pointA.x, 0, this._pointB.z);
                  }
                }
              } else {
                this._originRotation = this._conversion(this.node.eulerAngles.y);
                this._targetRotation = this._originRotation - 90;

                if (this._pointB.z > this._pointA.z && this._pointB.x > this._pointA.x || this._pointB.z < this._pointA.z && this._pointB.x < this._pointA.x) {
                  this._centerPoint.set(this._pointB.x, 0, this._pointA.z);
                } else {
                  this._centerPoint.set(this._pointA.x, 0, this._pointB.z);
                }
              }

              Vec3.subtract(_tempVec, this._pointA, this._centerPoint);

              var r = _tempVec.length();

              this._rotMeasure = 90 / (Math.PI * r / 2);
            } else {
              this._isMoving = false;
              this._currRoadPoint = null;

              if (this._overCD) {
                this._overCD(this);

                this._overCD = null;
              }
            }
          }
        }, {
          key: "_onCollisionEnter",
          value: function _onCollisionEnter(event) {
            console.log('碰撞了');
            var otherCollider = event.otherCollider;

            if (otherCollider.node.name === 'group') {
              return;
            }

            var otherRigidBody = otherCollider.node.getComponent(RigidBodyComponent); //获取刚体

            otherRigidBody.useGravity = true; //使用重力

            otherRigidBody.applyForce(new Vec3(0, 3000, -1500), new Vec3(0, 0.5, 0)); //添加推力

            var collider = event.selfCollider;
            collider.addMask((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).CarGroup.NORMAL);
            var rigidBody = this.node.getComponent(RigidBodyComponent);
            rigidBody.useGravity = true;

            this._gameover();
          }
        }, {
          key: "_greetingCustomer",
          value: function _greetingCustomer() {
            //接客
            this._isInOrder = true;
            this._currSpeed = 0; //清除速度
            //dispatchEvent派发 小车的位置 当前的方向

            this._gas.stop();

            (_crd && CustomEventListener === void 0 ? (_reportPossibleCrUseOfCustomEventListener({
              error: Error()
            }), CustomEventListener) : CustomEventListener).dispatchEvent(EventName.GREETING, this.node.worldPosition, this._currRoadPoint.direction);
          }
        }, {
          key: "_takingCustomer",
          value: function _takingCustomer() {
            this._isInOrder = true;
            this._currSpeed = 0; //清除速度

            this._gas.stop();

            (_crd && CustomEventListener === void 0 ? (_reportPossibleCrUseOfCustomEventListener({
              error: Error()
            }), CustomEventListener) : CustomEventListener).dispatchEvent(EventName.GOODBYE, this.node.worldPosition, this._currRoadPoint.direction);
            (_crd && CustomEventListener === void 0 ? (_reportPossibleCrUseOfCustomEventListener({
              error: Error()
            }), CustomEventListener) : CustomEventListener).dispatchEvent(EventName.SHOW_COIN, this.node.worldPosition); //送客弹金币
          }
        }, {
          key: "_finishedWalk",
          value: function _finishedWalk() {
            if (this._isMain) {
              this._isInOrder = false;

              this._gas.play();
            }
          }
        }, {
          key: "_gameover",
          value: function _gameover() {
            (_crd && CustomEventListener === void 0 ? (_reportPossibleCrUseOfCustomEventListener({
              error: Error()
            }), CustomEventListener) : CustomEventListener).dispatchEvent(EventName.GAME_OVER);
          }
        }, {
          key: "_resetPhysical",
          value: function _resetPhysical() {
            //只有在碰撞时需要重力，重置重力
            var rigidBody = this.node.getComponent(RigidBodyComponent);
            rigidBody.useGravity = false;
            rigidBody.sleep();
            rigidBody.wakeUp(); //节点池拿出来刚体可能休眠
          } //转换角度正负

        }, {
          key: "_conversion",
          value: function _conversion(value) {
            var a = value;

            if (a <= 0) {
              a += 360;
            }

            return a;
          }
        }]);

        return Car;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "maxSpeed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.2;
        }
      })), _class2)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L+ivu+S5pi/liY3nq68vSlPpq5jnuqfkuI5Ucy9UUy9jb2NvcyBnYW1lL+aOpemAgeWuouS6uuWwj+a4uOaIjy9hc3NldHMvc2NyaXB0L2dhbWUvQ2FyLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJWZWMzIiwiUGFydGljbGVTeXN0ZW1Db21wb25lbnQiLCJCb3hDb2xsaWRlckNvbXBvbmVudCIsIlJpZ2lkQm9keUNvbXBvbmVudCIsIkN1c3RvbUV2ZW50TGlzdGVuZXIiLCJSb2FkUG9pbnQiLCJDb25zdGFudHMiLCJBdWRpb01hbmFnZXIiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJFdmVudE5hbWUiLCJfdGVtcFZlYyIsIkNhciIsIl9jdXJyUm9hZFBvaW50IiwiX3BvaW50QSIsIl9wb2ludEIiLCJfY3VyclNwZWVkIiwiX2lzTW92aW5nIiwiX29mZnNldCIsIl9vcmlnaW5Sb3RhdGlvbiIsIl90YXJnZXRSb3RhdGlvbiIsIl9jZW50ZXJQb2ludCIsIl9yb3RNZWFzdXJlIiwiX2FjY2VsZXJhdGlvbiIsIl9pc01haW4iLCJfaXNJbk9yZGVyIiwiX2lzQnJha2luZyIsIl9nYXMiLCJfb3ZlckNEIiwiX2NhbWVyYSIsIm9uIiwiRklOSVNIRURfV0FMSyIsIl9maW5pc2hlZFdhbGsiLCJkdCIsInNldCIsIm5vZGUiLCJ3b3JsZFBvc2l0aW9uIiwibWF4U3BlZWQiLCJkaXNwYXRjaEV2ZW50IiwiRU5EX0JSQUtJTkciLCJtb3ZlVHlwZSIsIlJvYWRNb3ZlVHlwZSIsIkJFTkQiLCJvZmZzZXRSb3RhdGlvbiIsImN1cnJSb3RhdGlvbiIsIl9jb252ZXJzaW9uIiwiZXVsZXJBbmdsZXMiLCJ5IiwibmV4dFN0YXRpb24iLCJNYXRoIiwiYWJzIiwidGFyZ2V0Iiwicm90YXRlWSIsIlBJIiwieiIsIngiLCJzZXRXb3JsZFBvc2l0aW9uIiwic3VidHJhY3QiLCJsZW5ndGgiLCJfYXJyaXZhbFNhdGFpb24iLCJlbnRyeSIsImlzTWFpbiIsImdldENvbXBvbmVudCIsImNvbnNvbGUiLCJ3YXJuIiwibmFtZSIsImNvbGxpZGVyIiwiZ2FzTm9kZSIsImdldENoaWxkQnlOYW1lIiwicGxheSIsIl9vbkNvbGxpc2lvbkVudGVyIiwic2V0R3JvdXAiLCJDYXJHcm91cCIsIk1BSU5fQ0FSIiwic2V0TWFzayIsIk9USEVSX0NBUiIsIl9yZXNldFBoeXNpY2FsIiwiY2FtZXJhIiwicG9zIiwicm90YXRpb24iLCJwYXJlbnQiLCJzZXRQb3NpdGlvbiIsIlNUQVJUX0JSQUtJTkciLCJwbGF5U291bmQiLCJBdWRpb1NvdXJjZSIsIlNUT1AiLCJjZCIsInR5cGUiLCJSb2FkUG9pbnRUeXBlIiwiR1JFRVRJTkciLCJfZ3JlZXRpbmdDdXN0b21lciIsIkdPT0RCWUUiLCJfdGFraW5nQ3VzdG9tZXIiLCJFTkQiLCJXSU4iLCJjbG9ja3dpc2UiLCJyIiwiZXZlbnQiLCJsb2ciLCJvdGhlckNvbGxpZGVyIiwib3RoZXJSaWdpZEJvZHkiLCJ1c2VHcmF2aXR5IiwiYXBwbHlGb3JjZSIsInNlbGZDb2xsaWRlciIsImFkZE1hc2siLCJOT1JNQUwiLCJyaWdpZEJvZHkiLCJfZ2FtZW92ZXIiLCJzdG9wIiwiZGlyZWN0aW9uIiwiU0hPV19DT0lOIiwiR0FNRV9PVkVSIiwic2xlZXAiLCJ3YWtlVXAiLCJ2YWx1ZSIsImEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBaUJDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSx1QixPQUFBQSx1QjtBQUF5QkMsTUFBQUEsb0IsT0FBQUEsb0I7QUFBc0JDLE1BQUFBLGtCLE9BQUFBLGtCOzs7O0FBQ2xGQyxNQUFBQSxtQiw4QkFBQUEsbUI7O0FBQ0RDLE1BQUFBLFMsZ0JBQUFBLFM7O0FBQ0FDLE1BQUFBLFMsb0JBQUFBLFM7O0FBQ0NDLE1BQUFBLFksbUJBQUFB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LFVBQUwsR0FBa0IsS0FBbEI7O0FBQ0EsbUJBQUtFLElBQUwsQ0FBVTBDLElBQVY7QUFDSDtBQUNKOzs7c0NBRWtCO0FBQ2Y7QUFBQTtBQUFBLDREQUFvQi9CLGFBQXBCLENBQWtDNUIsU0FBUyxDQUFDcUcsU0FBNUM7QUFDSDs7OzJDQUV1QjtBQUNwQjtBQUNBLGdCQUFNTCxTQUFTLEdBQUcsS0FBS3ZFLElBQUwsQ0FBVTJCLFlBQVYsQ0FBdUIzRCxrQkFBdkIsQ0FBbEI7QUFDQXVHLFlBQUFBLFNBQVMsQ0FBQ0wsVUFBVixHQUF1QixLQUF2QjtBQUNBSyxZQUFBQSxTQUFTLENBQUNNLEtBQVY7QUFDQU4sWUFBQUEsU0FBUyxDQUFDTyxNQUFWLEdBTG9CLENBS0Q7QUFDdEIsVyxDQUNEOzs7O3NDQUNvQkMsSyxFQUFhO0FBQzdCLGdCQUFJQyxDQUFDLEdBQUdELEtBQVI7O0FBQ0EsZ0JBQUdDLENBQUMsSUFBRSxDQUFOLEVBQVE7QUFDSkEsY0FBQUEsQ0FBQyxJQUFFLEdBQUg7QUFDSDs7QUFDRCxtQkFBT0EsQ0FBUDtBQUNIOzs7O1FBalVvQnBILFMsb0ZBQ3BCVSxROzs7OztpQkFDVSxHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBWZWMzLCBQYXJ0aWNsZVN5c3RlbUNvbXBvbmVudCwgQm94Q29sbGlkZXJDb21wb25lbnQsIFJpZ2lkQm9keUNvbXBvbmVudCwgSUNvbGxpc2lvbkV2ZW50IH0gZnJvbSBcImNjXCI7XHJcbmltcG9ydCB7IEN1c3RvbUV2ZW50TGlzdGVuZXIgfSBmcm9tIFwiLi4vZGF0YS9DdXN0b21FdmVudExpc3RlbmVyXCI7XHJcbmltcG9ydCB7Um9hZFBvaW50fSBmcm9tIFwiLi9Sb2FkUG9pbnRcIjtcclxuaW1wb3J0IHtDb25zdGFudHN9IGZyb20gJy4uL2RhdGEvQ29uc3RhbnRzJztcclxuaW1wb3J0IHsgQXVkaW9NYW5hZ2VyIH0gZnJvbSBcIi4vQXVkaW9NYW5hZ2VyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5jb25zdCBFdmVudE5hbWUgPSBDb25zdGFudHMuRXZlbnROYW1lO1xyXG5cclxuY29uc3QgX3RlbXBWZWMgPSBuZXcgVmVjMygpO1xyXG5cclxuQGNjY2xhc3MoXCJDYXJcIilcclxuZXhwb3J0IGNsYXNzIENhciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHlcclxuICAgIG1heFNwZWVkID0gMC4yOy8v5Y+v6YWN572u55qE5pyA5aSn6YCf5bqmXHJcbiAgICAvL+Wwj+i9puacneWQkemXrumimFxyXG4gICAgcHJpdmF0ZSBfY3VyclJvYWRQb2ludDogUm9hZFBvaW50ID0gbnVsbDtcclxuICAgIHByaXZhdGUgX3BvaW50QSA9IG5ldyBWZWMzKCk7XHJcbiAgICBwcml2YXRlIF9wb2ludEIgPSBuZXcgVmVjMygpO1xyXG4gICAgcHJpdmF0ZSBfY3VyclNwZWVkID0gMDsvL+mAn+W6plxyXG4gICAgcHJpdmF0ZSBfaXNNb3ZpbmcgPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX29mZnNldCA9IG5ldyBWZWMzKCk7XHJcbiAgICBwcml2YXRlIF9vcmlnaW5Sb3RhdGlvbiA9IDA7XHJcbiAgICBwcml2YXRlIF90YXJnZXRSb3RhdGlvbiA9IDA7XHJcbiAgICBwcml2YXRlIF9jZW50ZXJQb2ludCA9IG5ldyBWZWMzKCk7XHJcbiAgICBwcml2YXRlIF9yb3RNZWFzdXJlID0gMDsvL+W6pumHj+WAvFxyXG4gICAgcHJpdmF0ZSBfYWNjZWxlcmF0aW9uID0gMC4yOyAvL+WKoOmAn+W6plxyXG4gICAgcHJpdmF0ZSBfaXNNYWluID0gZmFsc2U7Ly/nlLHkuo5BSeWwj+i9puWSjOS4u+inkuWwj+i9puWFrOeUqOS4gOWll+mAu+i+ke+8jOeUqOS6juWMuuWIhlxyXG4gICAgcHJpdmF0ZSBfaXNJbk9yZGVyID0gZmFsc2U7Ly/orqLljZXop6blj5E+5LmY5a6i5Zyo6L+Q5YqoXHJcbiAgICBwcml2YXRlIF9pc0JyYWtpbmcgPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX2dhczpQYXJ0aWNsZVN5c3RlbUNvbXBvbmVudCA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9vdmVyQ0Q6IEZ1bmN0aW9uID0gbnVsbDtcclxuICAgIHByaXZhdGUgX2NhbWVyYTpOb2RlID0gbnVsbDtcclxuXHJcbiAgICAvL+ebkeWQrOWKqOeUu+aSreaUvue7k+adn+eahOWbnuiwg1xyXG4gICAgcHVibGljIHN0YXJ0ICgpe1xyXG4gICAgICAgIEN1c3RvbUV2ZW50TGlzdGVuZXIub24oRXZlbnROYW1lLkZJTklTSEVEX1dBTEssdGhpcy5fZmluaXNoZWRXYWxrLHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZShkdDpudW1iZXIpe1xyXG4gICAgICAgIGlmICghdGhpcy5faXNNb3ZpbmcgfHwgdGhpcy5faXNJbk9yZGVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fb2Zmc2V0LnNldCh0aGlzLm5vZGUud29ybGRQb3NpdGlvbik7XHJcblxyXG4gICAgICAgIC8v5Yqg6YCfXHJcbiAgICAgICAgdGhpcy5fY3VyclNwZWVkICs9IHRoaXMuX2FjY2VsZXJhdGlvbiAqIGR0O1xyXG4gICAgICAgIGlmICh0aGlzLl9jdXJyU3BlZWQgPiB0aGlzLm1heFNwZWVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2N1cnJTcGVlZCA9IHRoaXMubWF4U3BlZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9jdXJyU3BlZWQgPD0gMC4wMDEpIHtcclxuICAgICAgICAgICAgdGhpcy5faXNNb3ZpbmcgPSBmYWxzZTsvL+WIuei9puWIsDAuMDAxIOWwseWBnOatolxyXG4gICAgICAgICAgICBpZih0aGlzLl9pc0JyYWtpbmcpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faXNCcmFraW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBDdXN0b21FdmVudExpc3RlbmVyLmRpc3BhdGNoRXZlbnQoRXZlbnROYW1lLkVORF9CUkFLSU5HKTsvL+a0vuWPkeWIuei9puS6i+S7tlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5ZCR5pyd5ZCR5pa55ZCR6L+Q5YqoXHJcbiAgICAgICAgc3dpdGNoICh0aGlzLl9jdXJyUm9hZFBvaW50Lm1vdmVUeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgUm9hZFBvaW50LlJvYWRNb3ZlVHlwZS5CRU5EOlxyXG4gICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2V0Um90YXRpb24gPSB0aGlzLl90YXJnZXRSb3RhdGlvbiAtIHRoaXMuX29yaWdpblJvdGF0aW9uOy8v5oC76ZyA6KaB5peL6L2s55qE6KeS5bqmXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyUm90YXRpb24gPSB0aGlzLl9jb252ZXJzaW9uKHRoaXMubm9kZS5ldWxlckFuZ2xlcy55KTsvL+W3sue7j+aXi+i9rOeahOinkuW6plxyXG4gICAgICAgICAgICAgICAgLy/lvZPliY3ov5vluqblgLwr77yI6YCf5bqmKuW6pumHj+WAvO+8iT7op5LluqYgIOW+l+WHuuS4i+S4gOermei/kOWKqOeahOinkuW6plxyXG4gICAgICAgICAgICAgICAgbGV0IG5leHRTdGF0aW9uID0gKGN1cnJSb3RhdGlvbiAtIHRoaXMuX29yaWdpblJvdGF0aW9uKSArICh0aGlzLl9jdXJyU3BlZWQgKiB0aGlzLl9yb3RNZWFzdXJlICogKHRoaXMuX3RhcmdldFJvdGF0aW9uID4gdGhpcy5fb3JpZ2luUm90YXRpb24gPyAxIDogLTEpKVxyXG4gICAgICAgICAgICAgICAgLy/lrrnplJnlpITnkIZcclxuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhuZXh0U3RhdGlvbikgPiBNYXRoLmFicyhvZmZzZXRSb3RhdGlvbikpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXh0U3RhdGlvbiA9IG9mZnNldFJvdGF0aW9uO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8v5bqU6K+l5peL6L2s55qE6KeS5bqmXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBuZXh0U3RhdGlvbiArIHRoaXMuX29yaWdpblJvdGF0aW9uO1xyXG4gICAgICAgICAgICAgICAgX3RlbXBWZWMuc2V0KDAsIHRhcmdldCwgMCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZXVsZXJBbmdsZXMgPSBfdGVtcFZlYztcclxuXHJcbiAgICAgICAgICAgICAgICAvL+i/kOWKqFxyXG4gICAgICAgICAgICAgICAgLy8gY29uc3Qgc2luID0gTWF0aC5zaW4obmV4dFN0YXRpb24qTWF0aC5QSS8xODApO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgY29zID0gTWF0aC5jb3MobmV4dFN0YXRpb24qTWF0aC5QSS8xODApO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgeExlbmd0aCA9IHRoaXMuX3BvaW50QS54IC0gdGhpcy5fY2VudGVyUG9pbnQueDtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IHpMZW5ndGggPSB0aGlzLiBfcG9pbnRBLnogLSB0aGlzLl9jZW50ZXJQb2ludC56O1xyXG4gICAgICAgICAgICAgICAgLy8gLy/msYLlh7rnm67moId46L205Z2Q5qCHXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zdCB4UG9zID0geExlbmd0aCAqIGNvcyArIHpMZW5ndGgqc2luICsgdGhpcy5fY2VudGVyUG9pbnQueDtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IHpQb3MgPSAteExlbmd0aCAqIHNpbiArIHpMZW5ndGgqY29zICsgdGhpcy5fY2VudGVyUG9pbnQuejsgXHJcbiAgICAgICAgICAgICAgICBWZWMzLnJvdGF0ZVkodGhpcy5fb2Zmc2V0LCB0aGlzLl9wb2ludEEsIHRoaXMuX2NlbnRlclBvaW50LCBuZXh0U3RhdGlvbiAqIE1hdGguUEkgLyAxODApO1xyXG4gICAgICAgICAgICAgICAgLy90aGlzLl9vZmZzZXQuc2V0KHhQb3MsMCx6UG9zKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgY29uc3QgeiA9IHRoaXMuX3BvaW50Qi56IC0gdGhpcy5fcG9pbnRBLno7XHJcbiAgICAgICAgICAgICAgICBpZiAoeiAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh6ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+WItuWumuS4gOS4quiMg+WbtFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9vZmZzZXQueiArPSB0aGlzLl9jdXJyU3BlZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v5a656ZSZ5aSE55CGXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9vZmZzZXQueiA+IHRoaXMuX3BvaW50Qi56KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9vZmZzZXQueiA9IHRoaXMuX3BvaW50Qi56O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fb2Zmc2V0LnogLT0gdGhpcy5fY3VyclNwZWVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+WuuemUmeWkhOeQhlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fb2Zmc2V0LnogPCB0aGlzLl9wb2ludEIueikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fb2Zmc2V0LnogPSB0aGlzLl9wb2ludEIuejtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeCA9IHRoaXMuX3BvaW50Qi54IC0gdGhpcy5fcG9pbnRBLng7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX29mZnNldC54ICs9IHRoaXMuX2N1cnJTcGVlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy/lrrnplJnlpITnkIZcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX29mZnNldC54ID4gdGhpcy5fcG9pbnRCLngpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX29mZnNldC54ID0gdGhpcy5fcG9pbnRCLng7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9vZmZzZXQueCAtPSB0aGlzLl9jdXJyU3BlZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v5a656ZSZ5aSE55CGXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9vZmZzZXQueCA8IHRoaXMuX3BvaW50Qi54KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9vZmZzZXQueCA9IHRoaXMuX3BvaW50Qi54O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm5vZGUuc2V0V29ybGRQb3NpdGlvbih0aGlzLl9vZmZzZXQpO1xyXG4gICAgICAgIFZlYzMuc3VidHJhY3QoX3RlbXBWZWMsIHRoaXMuX3BvaW50QiwgdGhpcy5fb2Zmc2V0KTtcclxuICAgICAgICBpZiAoX3RlbXBWZWMubGVuZ3RoKCkgPD0gMC4wMSkge1xyXG4gICAgICAgICAgICB0aGlzLl9hcnJpdmFsU2F0YWlvbigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBwdWJsaWMgc2V0RW50cnkoZW50cnk6Tm9kZSxpc01haW49ZmFsc2Upe1xyXG4gICAgICAgIHRoaXMubm9kZS5zZXRXb3JsZFBvc2l0aW9uKGVudHJ5LndvcmxkUG9zaXRpb24pO1xyXG4gICAgICAgIHRoaXMuX2N1cnJSb2FkUG9pbnQgPSBlbnRyeS5nZXRDb21wb25lbnQoUm9hZFBvaW50KTsgXHJcbiAgICAgICAgdGhpcy5faXNNYWluID0gaXNNYWluOyBcclxuICAgICAgICBpZighdGhpcy5fY3VyclJvYWRQb2ludCl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignVGhpcyBpcyBubyBSb2FkUG9pbnQgaW4nICsgZW50cnkubmFtZSk7XHJcbiAgICAgICAgfSBcclxuXHJcbiAgICAgICAgLy/pgJrov4fkuIvkuIDkuKrngrnkuI7mnKzngrnnmoTlt67orqHnrpflsI/ovabmnJ3lkJFcclxuICAgICAgICB0aGlzLl9wb2ludEEuc2V0KGVudHJ5LndvcmxkUG9zaXRpb24pXHJcbiAgICAgICAgdGhpcy5fcG9pbnRCLnNldCh0aGlzLl9jdXJyUm9hZFBvaW50Lm5leHRTdGF0aW9uLndvcmxkUG9zaXRpb24pO1xyXG4gICAgICAgIGNvbnN0IHogPSB0aGlzLl9wb2ludEIueiAtIHRoaXMuX3BvaW50QS56O1xyXG4gICAgICAgIGlmKHogIT09IDApe1xyXG4gICAgICAgICAgICBpZih6PDApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmV1bGVyQW5nbGVzID0gbmV3IFZlYzMoKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZXVsZXJBbmdsZXMgPSBuZXcgVmVjMygwLDE4MCwwKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNvbnN0IHggPSB0aGlzLl9wb2ludEIueCAtIHRoaXMuX3BvaW50QS54O1xyXG4gICAgICAgICAgICBpZih4PjApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmV1bGVyQW5nbGVzID0gbmV3IFZlYzMoMCwyNzAsMCk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmV1bGVyQW5nbGVzID0gbmV3IFZlYzMoMCw5MCwwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGNvbnN0IGNvbGxpZGVyID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChCb3hDb2xsaWRlckNvbXBvbmVudCk7XHJcbiAgICAgICAgaWYodGhpcy5faXNNYWluKXtcclxuICAgICAgICAgICAgY29uc3QgZ2FzTm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnZ2FzJyk7XHJcbiAgICAgICAgICAgIHRoaXMuX2dhcyA9IGdhc05vZGUuZ2V0Q29tcG9uZW50KFBhcnRpY2xlU3lzdGVtQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgdGhpcy5fZ2FzLnBsYXkoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbGxpZGVyLm9uKCdvbkNvbGxpc2lvbkVudGVyJyx0aGlzLl9vbkNvbGxpc2lvbkVudGVyLHRoaXMpO1xyXG4gICAgICAgICAgICBjb2xsaWRlci5zZXRHcm91cChDb25zdGFudHMuQ2FyR3JvdXAuTUFJTl9DQVIpLy/njqnlrrbliIbnu4RcclxuICAgICAgICAgICAgY29sbGlkZXIuc2V0TWFzayhDb25zdGFudHMuQ2FyR3JvdXAuT1RIRVJfQ0FSKS8v6KaB56Kw5pKe55qE57uEXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNvbGxpZGVyLnNldEdyb3VwKENvbnN0YW50cy5DYXJHcm91cC5PVEhFUl9DQVIpXHJcbiAgICAgICAgICAgIGNvbGxpZGVyLnNldE1hc2soLTEpLy/miYDmnInnu4Tpg73mo4DmtYvkuLotMVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9yZXNldFBoeXNpY2FsKCk7Ly/mv4DmtLvkuIDmrKHliJrkvZPnu4Tku7ZcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0Q2FtZXJhKGNhbWVyYTpOb2RlLHBvczpWZWMzLHJvdGF0aW9uOm51bWJlcil7XHJcbiAgICAgICAgaWYodGhpcy5faXNNYWluKXtcclxuICAgICAgICAgICAgdGhpcy5fY2FtZXJhID0gY2FtZXJhO1xyXG4gICAgICAgICAgICB0aGlzLl9jYW1lcmEucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgICAgICB0aGlzLl9jYW1lcmEuc2V0UG9zaXRpb24ocG9zKTtcclxuICAgICAgICAgICAgdGhpcy5fY2FtZXJhLmV1bGVyQW5nbGVzID0gbmV3IFZlYzMocm90YXRpb24sMCwwKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGFydFJ1bm5pbmcoKXtcclxuICAgICAgICBpZih0aGlzLl9jdXJyUm9hZFBvaW50KXtcclxuICAgICAgICAgICAgdGhpcy5faXNNb3ZpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLl9jdXJyU3BlZWQgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLl9hY2NlbGVyYXRpb24gPSAwLjI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIHN0b3BSdW5uaW5nKCl7XHJcbiAgICAgICAgdGhpcy5fYWNjZWxlcmF0aW9uID0gLTAuMztcclxuICAgICAgICBDdXN0b21FdmVudExpc3RlbmVyLmRpc3BhdGNoRXZlbnQoRXZlbnROYW1lLlNUQVJUX0JSQUtJTkcsdGhpcy5ub2RlKTsvL+aJp+ihjFNUQVJUX0JSQUtJTkdcclxuICAgICAgICB0aGlzLl9pc0JyYWtpbmcgPSB0cnVlO1xyXG4gICAgICAgIC8vdGhpcy5faXNNb3ZpbmcgPSBmYWxzZTtcclxuICAgICAgICBBdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5BdWRpb1NvdXJjZS5TVE9QKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbW92ZUFmdGVyRmluaXNoZWQoY2Q6RnVuY3Rpb24pe1xyXG4gICAgICAgIHRoaXMuX292ZXJDRCA9IGNkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdG9wSW1tZWRpYXRlcmx5KCl7XHJcbiAgICAgICAgdGhpcy5faXNNb3ZpbmcgPWZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2N1cnJTcGVlZCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLy/liLDnq5lcclxuICAgIHByaXZhdGUgX2Fycml2YWxTYXRhaW9uKCl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5fcG9pbnRBLnNldCh0aGlzLl9wb2ludEIpO1xyXG4gICAgICAgIHRoaXMuX2N1cnJSb2FkUG9pbnQgPSB0aGlzLl9jdXJyUm9hZFBvaW50Lm5leHRTdGF0aW9uLmdldENvbXBvbmVudChSb2FkUG9pbnQpO1xyXG4gICAgICAgIGlmKHRoaXMuX2N1cnJSb2FkUG9pbnQubmV4dFN0YXRpb24pe1xyXG4gICAgICAgICAgICB0aGlzLl9wb2ludEIuc2V0KHRoaXMuX2N1cnJSb2FkUG9pbnQubmV4dFN0YXRpb24ud29ybGRQb3NpdGlvbik7XHJcblxyXG4gICAgICAgICAgICAvL+WIsOermeS5mOWuouS6i+S7tlxyXG4gICAgICAgICAgICBpZih0aGlzLl9pc01haW4pe1xyXG4gICAgICAgICAgICAgICAgLy/op6blj5HliLnovabliqjnlLtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuX2lzQnJha2luZyl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faXNCcmFraW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgQ3VzdG9tRXZlbnRMaXN0ZW5lci5kaXNwYXRjaEV2ZW50KEV2ZW50TmFtZS5FTkRfQlJBS0lORyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jdXJyUm9hZFBvaW50LnR5cGUgPT09IFJvYWRQb2ludC5Sb2FkUG9pbnRUeXBlLkdSRUVUSU5HKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ3JlZXRpbmdDdXN0b21lcigpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9jdXJyUm9hZFBvaW50LnR5cGUgPT09IFJvYWRQb2ludC5Sb2FkUG9pbnRUeXBlLkdPT0RCWUUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl90YWtpbmdDdXN0b21lcigpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9jdXJyUm9hZFBvaW50LnR5cGUgPT09IFJvYWRQb2ludC5Sb2FkUG9pbnRUeXBlLkVORCl7XHJcbiAgICAgICAgICAgICAgICAgICAgQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuQXVkaW9Tb3VyY2UuV0lOKTsvL+WIsOi+vue7iOeCueaSreaUvuiDnOWIqVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgLy/ovazlvK8s5Yiw6L6+5p+Q5LiA5Liq56uZXHJcbiAgICAgICAgICAgIGlmKHRoaXMuX2N1cnJSb2FkUG9pbnQubW92ZVR5cGUgPT09IFJvYWRQb2ludC5Sb2FkTW92ZVR5cGUuQkVORCl7XHJcbiAgICAgICAgICAgICAgICAvL+WIpOaWreaYr+mhuumAhuaXtumSiFxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5fY3VyclJvYWRQb2ludC5jbG9ja3dpc2Upe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX29yaWdpblJvdGF0aW9uID0gdGhpcy5fY29udmVyc2lvbih0aGlzLm5vZGUuZXVsZXJBbmdsZXMueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdGFyZ2V0Um90YXRpb24gPSB0aGlzLl9vcmlnaW5Sb3RhdGlvbiAtIDkwO1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5om+5Ye66aG65pe26ZKI55qE5ZyG5b+DXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoKHRoaXMuX3BvaW50Qi56IDwgdGhpcy5fcG9pbnRBLnogJiYgdGhpcy5fcG9pbnRCLnggPiB0aGlzLl9wb2ludEEueCkgfHwgKHRoaXMuX3BvaW50Qi56ID50aGlzLl9wb2ludEEueiAmJiB0aGlzLl9wb2ludEIueCA8IHRoaXMuX3BvaW50QS54KSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NlbnRlclBvaW50LnNldCh0aGlzLl9wb2ludEIueCwwLHRoaXMuX3BvaW50QS56KVxyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jZW50ZXJQb2ludC5zZXQodGhpcy5fcG9pbnRBLngsMCx0aGlzLl9wb2ludEIueilcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX29yaWdpblJvdGF0aW9uID0gdGhpcy5fY29udmVyc2lvbih0aGlzLm5vZGUuZXVsZXJBbmdsZXMueSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl90YXJnZXRSb3RhdGlvbiA9IHRoaXMuX29yaWdpblJvdGF0aW9uIC0gOTA7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoKHRoaXMuX3BvaW50Qi56ID4gdGhpcy5fcG9pbnRBLnogJiYgdGhpcy5fcG9pbnRCLnggPiB0aGlzLl9wb2ludEEueCkgfHwgKHRoaXMuX3BvaW50Qi56IDwgdGhpcy5fcG9pbnRBLnogJiYgdGhpcy5fcG9pbnRCLnggPCB0aGlzLl9wb2ludEEueCkpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NlbnRlclBvaW50LnNldCh0aGlzLl9wb2ludEIueCwwLHRoaXMuX3BvaW50QS56KVxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2VudGVyUG9pbnQuc2V0KHRoaXMuX3BvaW50QS54LDAsdGhpcy5fcG9pbnRCLnopXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIFZlYzMuc3VidHJhY3QoX3RlbXBWZWMsdGhpcy5fcG9pbnRBLHRoaXMuX2NlbnRlclBvaW50KTtcclxuICAgICAgICAgICAgY29uc3QgciA9IF90ZW1wVmVjLmxlbmd0aCgpO1xyXG4gICAgICAgICAgICB0aGlzLl9yb3RNZWFzdXJlID0gOTAvKE1hdGguUEkgKiByIC8yKTtcclxuXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuX2lzTW92aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuX2N1cnJSb2FkUG9pbnQgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5fb3ZlckNEKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuX292ZXJDRCh0aGlzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX292ZXJDRCA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfb25Db2xsaXNpb25FbnRlcihldmVudDpJQ29sbGlzaW9uRXZlbnQpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfnorDmkp7kuoYnKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IG90aGVyQ29sbGlkZXIgPSBldmVudC5vdGhlckNvbGxpZGVyO1xyXG4gICAgICAgIGlmKG90aGVyQ29sbGlkZXIubm9kZS5uYW1lID09PSAnZ3JvdXAnKXtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBvdGhlclJpZ2lkQm9keSA9IG90aGVyQ29sbGlkZXIubm9kZS5nZXRDb21wb25lbnQoUmlnaWRCb2R5Q29tcG9uZW50KTsvL+iOt+WPluWImuS9k1xyXG4gICAgICAgIG90aGVyUmlnaWRCb2R5LnVzZUdyYXZpdHkgPSB0cnVlOy8v5L2/55So6YeN5YqbXHJcbiAgICAgICAgb3RoZXJSaWdpZEJvZHkuYXBwbHlGb3JjZShuZXcgVmVjMygwLDMwMDAsLTE1MDApLG5ldyBWZWMzKDAsMC41LDApKTsvL+a3u+WKoOaOqOWKm1xyXG5cclxuICAgICAgICBjb25zdCBjb2xsaWRlciA9IGV2ZW50LnNlbGZDb2xsaWRlcjtcclxuICAgICAgICBjb2xsaWRlci5hZGRNYXNrKENvbnN0YW50cy5DYXJHcm91cC5OT1JNQUwpO1xyXG4gICAgICAgIGNvbnN0IHJpZ2lkQm9keSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoUmlnaWRCb2R5Q29tcG9uZW50KTtcclxuICAgICAgICByaWdpZEJvZHkudXNlR3Jhdml0eSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fZ2FtZW92ZXIoKTtcclxuXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHByaXZhdGUgX2dyZWV0aW5nQ3VzdG9tZXIoKXtcclxuICAgICAgICAvL+aOpeWuolxyXG4gICAgICAgIHRoaXMuX2lzSW5PcmRlciA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fY3VyclNwZWVkID0gMDsvL+a4hemZpOmAn+W6plxyXG4gICAgICAgIC8vZGlzcGF0Y2hFdmVudOa0vuWPkSDlsI/ovabnmoTkvY3nva4g5b2T5YmN55qE5pa55ZCRXHJcbiAgICAgICAgdGhpcy5fZ2FzLnN0b3AoKTtcclxuICAgICAgICBDdXN0b21FdmVudExpc3RlbmVyLmRpc3BhdGNoRXZlbnQoRXZlbnROYW1lLkdSRUVUSU5HLHRoaXMubm9kZS53b3JsZFBvc2l0aW9uLHRoaXMuX2N1cnJSb2FkUG9pbnQuZGlyZWN0aW9uKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3Rha2luZ0N1c3RvbWVyKCl7XHJcbiAgICAgICAgdGhpcy5faXNJbk9yZGVyID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9jdXJyU3BlZWQgPSAwOy8v5riF6Zmk6YCf5bqmXHJcbiAgICAgICAgdGhpcy5fZ2FzLnN0b3AoKTtcclxuICAgICAgICBDdXN0b21FdmVudExpc3RlbmVyLmRpc3BhdGNoRXZlbnQoRXZlbnROYW1lLkdPT0RCWUUsdGhpcy5ub2RlLndvcmxkUG9zaXRpb24sdGhpcy5fY3VyclJvYWRQb2ludC5kaXJlY3Rpb24pXHJcbiAgICAgICAgQ3VzdG9tRXZlbnRMaXN0ZW5lci5kaXNwYXRjaEV2ZW50KEV2ZW50TmFtZS5TSE9XX0NPSU4sdGhpcy5ub2RlLndvcmxkUG9zaXRpb24pOy8v6YCB5a6i5by56YeR5biBXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZmluaXNoZWRXYWxrKCl7XHJcbiAgICAgICAgaWYodGhpcy5faXNNYWluKXtcclxuICAgICAgICAgICAgdGhpcy5faXNJbk9yZGVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuX2dhcy5wbGF5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2dhbWVvdmVyKCl7XHJcbiAgICAgICAgQ3VzdG9tRXZlbnRMaXN0ZW5lci5kaXNwYXRjaEV2ZW50KEV2ZW50TmFtZS5HQU1FX09WRVIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3Jlc2V0UGh5c2ljYWwoKXtcclxuICAgICAgICAvL+WPquacieWcqOeisOaSnuaXtumcgOimgemHjeWKm++8jOmHjee9rumHjeWKm1xyXG4gICAgICAgIGNvbnN0IHJpZ2lkQm9keSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoUmlnaWRCb2R5Q29tcG9uZW50KTtcclxuICAgICAgICByaWdpZEJvZHkudXNlR3Jhdml0eSA9IGZhbHNlO1xyXG4gICAgICAgIHJpZ2lkQm9keS5zbGVlcCgpO1xyXG4gICAgICAgIHJpZ2lkQm9keS53YWtlVXAoKTsvL+iKgueCueaxoOaLv+WHuuadpeWImuS9k+WPr+iDveS8keecoFxyXG4gICAgfVxyXG4gICAgLy/ovazmjaLop5LluqbmraPotJ9cclxuICAgIHByaXZhdGUgX2NvbnZlcnNpb24odmFsdWU6bnVtYmVyKXtcclxuICAgICAgICBsZXQgYSA9IHZhbHVlO1xyXG4gICAgICAgIGlmKGE8PTApe1xyXG4gICAgICAgICAgICBhKz0zNjBcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGE7XHJcbiAgICB9XHJcbn1cclxuIl19