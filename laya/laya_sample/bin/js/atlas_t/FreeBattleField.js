var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
* name
*/
var cn;
(function (cn) {
    var yh;
    (function (yh) {
        var sample;
        (function (sample) {
            var battle;
            (function (battle) {
                var FreeBattleField = /** @class */ (function () {
                    function FreeBattleField() {
                        this.allUnit = [];
                        Laya.loader.load([
                            "res/atlas/player/boy.atlas",
                            "res/atlas/player/girl.atlas",
                            "res/atlas/player/wyd.atlas",
                            "res/atlas/player/yd.atlas"
                        ], Laya.Handler.create(this, this.onLoaded));
                        Laya.timer.frameLoop(1, this, this.gameTick);
                    }
                    FreeBattleField.prototype.onLoaded = function () {
                        this.mainCharacter = new MainCharacter("girl_ani.ani", 280, 620);
                        Laya.stage.addChild(this.mainCharacter);
                        this.allUnit.push(this.mainCharacter);
                        Laya.stage.on(Laya.Event.CLICK, this, this.checkHit);
                    };
                    FreeBattleField.prototype.checkHit = function (e) {
                        console.log("鼠标点击事件：" + e.currentTarget.mouseX + "," + e.currentTarget.mouseY);
                        this.mainCharacter.moveToTarget(e.currentTarget.mouseX, e.currentTarget.mouseY);
                    };
                    FreeBattleField.prototype.gameTick = function () {
                        for (var i = 0; i < this.allUnit.length; i++) {
                            this.allUnit[i].update();
                        }
                    };
                    return FreeBattleField;
                }());
                battle.FreeBattleField = FreeBattleField;
                var MainCharacter = /** @class */ (function (_super) {
                    __extends(MainCharacter, _super);
                    function MainCharacter(ani_name, x, y) {
                        return _super.call(this, ani_name, x, y, null) || this;
                    }
                    MainCharacter.prototype.moveToTarget = function (targetX, targetY) {
                        var curPos = new Laya.Point(this.x, this.y);
                        var distance = curPos.distance(targetX, targetY);
                        var duration = distance / this.moveSpeed * 1000;
                        var dirFlag = targetX > this.x;
                        this.playMoveDir(dirFlag);
                        Laya.Tween.to(this, { x: targetX - 48, y: targetY - 48 }, duration, null, Laya.Handler.create(this, this.onMoveEnd, [dirFlag]));
                    };
                    MainCharacter.prototype.onMoveEnd = function (dirFlag) {
                        this.playIdleDir(dirFlag);
                    };
                    MainCharacter.prototype.createHpBar = function () {
                        // 不创建血条
                    };
                    MainCharacter.prototype.playMove = function () {
                        this.playMoveDir(true);
                    };
                    MainCharacter.prototype.playMoveDir = function (dirFlag) {
                        if (dirFlag) {
                            this.animation.play(0, true, "move");
                        }
                        else {
                            this.animation.play(0, true, "move_left");
                        }
                    };
                    MainCharacter.prototype.playBack = function () {
                        // if (this.camp == Camp.LEFT) {
                        // 	this.animation.play(0, true, "move_left");
                        // } else if (this.camp == Camp.RIGHT) {
                        // 	this.animation.play(0, true, "move");
                        // }
                    };
                    MainCharacter.prototype.playIdle = function () {
                        this.animation.play(0, true, "idle");
                    };
                    MainCharacter.prototype.playIdleDir = function (dirFlag) {
                        if (dirFlag) {
                            this.animation.play(0, true, "idle");
                        }
                        else {
                            this.animation.play(0, true, "idle_left");
                        }
                    };
                    MainCharacter.prototype.playAttack = function () {
                        // if (this.camp == Camp.LEFT) {
                        // 	this.animation.play(0, true, "attack");
                        // } else if (this.camp == Camp.RIGHT) {
                        // 	this.animation.play(0, true, "attack_left");
                        // }
                    };
                    return MainCharacter;
                }(battle.Character));
            })(battle = sample.battle || (sample.battle = {}));
        })(sample = yh.sample || (yh.sample = {}));
    })(yh = cn.yh || (cn.yh = {}));
})(cn || (cn = {}));
//# sourceMappingURL=FreeBattleField.js.map