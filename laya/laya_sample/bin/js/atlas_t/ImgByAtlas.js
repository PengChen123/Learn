/**
* name
*/
var cn;
(function (cn) {
    var yh;
    (function (yh) {
        var sample;
        (function (sample) {
            var img;
            (function (img_1) {
                var ImgByAtlas = /** @class */ (function () {
                    function ImgByAtlas() {
                        Laya.init(Laya.Browser.clientWidth, Laya.Browser.clientHeight, Laya.WebGL);
                        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
                        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
                        Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
                        Laya.stage.bgColor = "#232628";
                        Laya.loader.load("res/atlas/apes.atlas", Laya.Handler.create(this, this.onLoaded));
                        // JSON 格式的图集的load方式
                        // Laya.loader.load([{url: "res/atlas/ui.json", type: Loader.ATLAS}], Handler.create(this, this.onLoaded));
                    }
                    ImgByAtlas.prototype.onLoaded = function () {
                        var img = new Laya.Image();
                        img.skin = "apes/monkey2.png";
                        Laya.stage.addChild(img);
                    };
                    return ImgByAtlas;
                }());
                img_1.ImgByAtlas = ImgByAtlas;
            })(img = sample.img || (sample.img = {}));
        })(sample = yh.sample || (yh.sample = {}));
    })(yh = cn.yh || (cn.yh = {}));
})(cn || (cn = {}));
//# sourceMappingURL=ImgByAtlas.js.map