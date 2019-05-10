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
* runtime class
*/
var cn;
(function (cn) {
    var yh;
    (function (yh) {
        var sample2;
        (function (sample2) {
            var ani;
            (function (ani) {
                var scaleAllUp = /** @class */ (function (_super) {
                    __extends(scaleAllUp, _super);
                    function scaleAllUp() {
                        var _this = _super.call(this) || this;
                        _this.anchorX = _this.anchorY = 0.5;
                        _this.on(Laya.Event.MOUSE_DOWN, _this, _this.scaleSmall);
                        _this.on(Laya.Event.MOUSE_UP, _this, _this.scaleBig);
                        return _this;
                    }
                    scaleAllUp.prototype.scaleBig = function () {
                        Laya.Tween.to(this, { scaleX: 1, scaleY: 1 }, 200);
                    };
                    scaleAllUp.prototype.scaleSmall = function () {
                        Laya.Tween.to(this, { scaleX: 0.6, scaleY: 0.6 }, 200);
                    };
                    return scaleAllUp;
                }(laya.ui.Dialog));
                ani.scaleAllUp = scaleAllUp;
            })(ani = sample2.ani || (sample2.ani = {}));
        })(sample2 = yh.sample2 || (yh.sample2 = {}));
    })(yh = cn.yh || (cn.yh = {}));
})(cn || (cn = {}));
//# sourceMappingURL=ani.js.map