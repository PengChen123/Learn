/**
* name
*/
var cn;
(function (cn) {
    var yh;
    (function (yh) {
        var sample2;
        (function (sample2) {
            var main;
            (function (main) {
                var Login = /** @class */ (function () {
                    function Login() {
                        this.login = new ui.loginUI.loginUI();
                        Laya.stage.addChild(this.login);
                        this.initStartBtn();
                        this.initOpenNoticeBtn();
                        this.openNotice();
                    }
                    Login.prototype.initStartBtn = function () {
                        this.startBtn = this.login.btn_start;
                        this.startBtn.on(Laya.Event.CLICK, this, this.uploadLoading);
                    };
                    Login.prototype.initOpenNoticeBtn = function () {
                        this.openNoticeBtn = this.login.btn_notice;
                        this.openNoticeBtn.on(Laya.Event.CLICK, this, this.openNotice);
                    };
                    Login.prototype.openNotice = function () {
                        this.notice = new cn.yh.sample2.main.Notice();
                    };
                    Login.prototype.uploadLoading = function () {
                        this.loadingAni = new Laya.Animation();
                        this.loadingAni.loadAnimation("Animation/loading.ani");
                        Laya.stage.addChild(this.loadingAni);
                        this.loadingAni.pos(this.startBtn.x - 48, this.startBtn.y - this.startBtn.height);
                        this.loadingAni.play(0, false);
                        this.loadingAni.on(Laya.Event.COMPLETE, this, this.aniComplete);
                    };
                    Login.prototype.aniComplete = function () {
                        this.loadingAni.removeSelf();
                        this.startGame();
                    };
                    Login.prototype.startGame = function () {
                        this.login.removeSelf();
                        new cn.yh.sample2.game.gameMain(true);
                    };
                    return Login;
                }());
                main.Login = Login;
            })(main = sample2.main || (sample2.main = {}));
        })(sample2 = yh.sample2 || (yh.sample2 = {}));
    })(yh = cn.yh || (cn.yh = {}));
})(cn || (cn = {}));
//# sourceMappingURL=Login.js.map