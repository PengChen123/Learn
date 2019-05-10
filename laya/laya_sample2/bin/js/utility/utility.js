/**
* name
*/
var cn;
(function (cn) {
    var yh;
    (function (yh) {
        var sample2;
        (function (sample2) {
            var utility = /** @class */ (function () {
                function utility() {
                }
                utility.createMask = function (w, h, alpha) {
                    var mask = new Laya.Sprite();
                    mask.alpha = alpha || 0.1;
                    mask.width = w || Laya.stage.width;
                    mask.height = h || Laya.stage.height;
                    mask.graphics.drawRect(0, 0, mask.width, mask.height, "#000000");
                    mask.mouseEnabled = true;
                    return mask;
                };
                return utility;
            }());
            sample2.utility = utility;
        })(sample2 = yh.sample2 || (yh.sample2 = {}));
    })(yh = cn.yh || (cn.yh = {}));
})(cn || (cn = {}));
//# sourceMappingURL=utility.js.map