/**
* name
*/
var cn;
(function (cn) {
    var yh;
    (function (yh) {
        var sample;
        (function (sample) {
            var ani;
            (function (ani) {
                var TimeAnimation = /** @class */ (function () {
                    function TimeAnimation() {
                        Laya.init(1280, 768, Laya.WebGL);
                        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
                        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
                        Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
                        Laya.stage.screenMode = Laya.Stage.SCREEN_HORIZONTAL;
                        Laya.stage.bgColor = "#232628";
                        Laya.Stat.show();
                        Laya.stage.loadImage("bg/background.jpg", 0, 0, 1280, 768);
                        Laya.loader.load("res/atlas/comp.atlas", Laya.Handler.create(this, this.onUIAssetsLoaded));
                        this.enterFreeBattleField();
                    }
                    TimeAnimation.prototype.onUIAssetsLoaded = function () {
                        this.enterBattleFieldBtn = this.createButton("comp/button.png");
                        this.enterBattleFieldBtn.pos(Laya.stage.width - this.enterBattleFieldBtn.width >> 1, this.enterBattleFieldBtn.height >> 1);
                        this.enterBattleFieldBtn.label = "进入战场";
                        this.enterBattleFieldBtn.on(Laya.Event.CLICK, this, this.enterBattleField);
                    };
                    TimeAnimation.prototype.createButton = function (skin) {
                        var btn = new Laya.Button(skin);
                        btn.width = 150;
                        btn.height = 70;
                        btn.text.fontSize = 30;
                        Laya.stage.addChild(btn);
                        return btn;
                    };
                    TimeAnimation.prototype.enterBattleField = function () {
                        if (this.freeBattle != null) {
                            Laya.stage.destroyChildren();
                        }
                        this.freeBattle = null;
                        // ui
                        this.onUIAssetsLoaded();
                        this.enterBattleFieldBtn.label = "离开战场";
                        this.enterBattleFieldBtn.off(Laya.Event.CLICK, this, this.enterBattleField);
                        this.enterBattleFieldBtn.on(Laya.Event.CLICK, this, this.leaveBattleField);
                        this.battleField = new cn.yh.sample.battle.BattleField();
                    };
                    TimeAnimation.prototype.enterFreeBattleField = function () {
                        this.freeBattle = new cn.yh.sample.battle.FreeBattleField();
                    };
                    TimeAnimation.prototype.leaveBattleField = function () {
                        // if(this.battleField.dialogMgr.getDialog("battleEnd")!==undefined){
                        // 	this.battleField.dialogMgr.getDialog("battleEnd").close();
                        // 	this.battleField.dialogMgr.removeDialog("battleEnd");
                        // }
                        Laya.stage.destroyChildren();
                        this.onUIAssetsLoaded();
                        Laya.stage.loadImage("bg/background.jpg", 0, 0, 1280, 768);
                        this.battleField = null;
                        this.enterFreeBattleField();
                    };
                    return TimeAnimation;
                }());
                ani.TimeAnimation = TimeAnimation;
            })(ani = sample.ani || (sample.ani = {}));
        })(sample = yh.sample || (yh.sample = {}));
    })(yh = cn.yh || (cn.yh = {}));
})(cn || (cn = {}));
//# sourceMappingURL=TimeAnimation.js.map