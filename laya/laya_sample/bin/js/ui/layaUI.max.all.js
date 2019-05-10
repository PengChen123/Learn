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
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var EffectAnimation = laya.display.EffectAnimation;
var ui;
(function (ui) {
    var dialog;
    (function (dialog) {
        var gameFinishedUI = /** @class */ (function (_super) {
            __extends(gameFinishedUI, _super);
            function gameFinishedUI() {
                return _super.call(this) || this;
            }
            gameFinishedUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.dialog.gameFinishedUI.uiView);
            };
            gameFinishedUI.uiView = { "type": "Dialog", "props": { "width": 300, "height": 200 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 300, "var": "bgImg", "skin": "comp/bg.png", "height": 200 } }, { "type": "Image", "props": { "y": 0, "x": 25, "width": 250, "var": "resultImg", "height": 60 } }, { "type": "Button", "props": { "y": 150, "x": 88, "width": 121, "var": "confirmBtn", "skin": "comp/button.png", "label": "label", "height": 31 } }, { "type": "TextArea", "props": { "y": 71, "x": 30, "width": 240, "var": "tipText", "text": "在这里例子中，我们先要新建一个Gamview类来继承页面的ui类ui.gameUI", "height": 67, "fontSize": 20 } }] };
            return gameFinishedUI;
        }(Dialog));
        dialog.gameFinishedUI = gameFinishedUI;
    })(dialog = ui.dialog || (ui.dialog = {}));
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map