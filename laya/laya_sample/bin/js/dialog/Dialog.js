/**
* name cp
*/
var cn;
(function (cn) {
    var yh;
    (function (yh) {
        var sample;
        (function (sample) {
            var dialog;
            (function (dialog) {
                var DialogMgr = /** @class */ (function () {
                    function DialogMgr() {
                        this.dialogs = {};
                    }
                    DialogMgr.prototype.BattleFinishedDialog = function (battleResult) {
                        var _a;
                        var plan = new battleFinishedDialog(battleResult).getDialog();
                        this.dialogs = (_a = {}, _a["battleEnd"] = plan, _a);
                        return plan;
                    };
                    DialogMgr.prototype.getDialog = function (key) {
                        return this.dialogs[key];
                    };
                    DialogMgr.prototype.removeDialog = function (key) {
                        delete this.dialogs[key];
                    };
                    return DialogMgr;
                }());
                dialog.DialogMgr = DialogMgr;
                var battleFinishedDialog = /** @class */ (function () {
                    function battleFinishedDialog(r) {
                        this.gameResult = r !== undefined ? r : false;
                        this.instance();
                    }
                    battleFinishedDialog.prototype.instance = function () {
                        this.plan = new ui.dialog.gameFinishedUI();
                        this.init();
                        return this.plan;
                    };
                    battleFinishedDialog.prototype.init = function () {
                        var sp;
                        var r;
                        if (this.gameResult) {
                            sp = new Laya.Image("res/ui/ui_yingle.png");
                            r = "胜利了";
                        }
                        else {
                            sp = new Laya.Image("res/ui/ui_shule.png");
                            r = "失败了";
                        }
                        var plan = this.plan;
                        plan.resultImg.skin = sp.skin;
                        plan.tipText.text = "玩家最终......" + r;
                        plan.confirmBtn.label = "继续游戏";
                        plan.confirmBtn.text.fontSize = 20;
                    };
                    battleFinishedDialog.prototype.getDialog = function () {
                        return this.plan;
                    };
                    return battleFinishedDialog;
                }());
            })(dialog = sample.dialog || (sample.dialog = {}));
        })(sample = yh.sample || (yh.sample = {}));
    })(yh = cn.yh || (cn.yh = {}));
})(cn || (cn = {}));
//# sourceMappingURL=Dialog.js.map