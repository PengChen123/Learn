/**
* name
*/
var cn;
(function (cn) {
    var yh;
    (function (yh) {
        var sample;
        (function (sample) {
            var ea;
            (function (ea) {
                var EffectAnimation_T = /** @class */ (function () {
                    function EffectAnimation_T() {
                        Laya.init(Laya.Browser.clientWidth, Laya.Browser.clientHeight, Laya.WebGL);
                        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
                        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
                        Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
                        Laya.stage.bgColor = "#232628";
                        Laya.loader.load("res/atlas/comp.atlas", Laya.Handler.create(this, this.onLoaded));
                    }
                    EffectAnimation_T.prototype.onLoaded = function () {
                        var efc = new ui.EffectAnimationUI();
                        Laya.stage.addChild(efc);
                    };
                    return EffectAnimation_T;
                }());
                ea.EffectAnimation_T = EffectAnimation_T;
            })(ea = sample.ea || (sample.ea = {}));
        })(sample = yh.sample || (yh.sample = {}));
    })(yh = cn.yh || (cn.yh = {}));
})(cn || (cn = {}));
//# sourceMappingURL=EffectAnimation_T.js.map