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
                var Loading = /** @class */ (function () {
                    function Loading() {
                        this.init();
                    }
                    Loading.prototype.init = function () {
                        var loading = new ui.loadingUI.loadingUI();
                        Laya.stage.addChild(loading);
                        this.progress = loading.m_progress;
                        this.progress.value = 0;
                        this.progress.changeHandler = new Laya.Handler(this.progress, this.onChange);
                        Laya.timer.loop(50, this, this.changeValue);
                    };
                    Loading.prototype.changeValue = function () {
                        this.progress.value += 0.05;
                    };
                    Loading.prototype.onChange = function (value) {
                        if (value >= 1) {
                            Laya.stage.destroyChildren();
                            new cn.yh.sample2.main.Login();
                        }
                    };
                    return Loading;
                }());
                main.Loading = Loading;
            })(main = sample2.main || (sample2.main = {}));
        })(sample2 = yh.sample2 || (yh.sample2 = {}));
    })(yh = cn.yh || (cn.yh = {}));
})(cn || (cn = {}));
//# sourceMappingURL=Loading.js.map