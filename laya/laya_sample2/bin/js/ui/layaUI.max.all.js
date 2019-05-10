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
var ui;
(function (ui) {
    var Animation;
    (function (Animation) {
        var btnScaleBigUI = /** @class */ (function (_super) {
            __extends(btnScaleBigUI, _super);
            function btnScaleBigUI() {
                var _this = _super.call(this) || this;
                _this.effectData = ui.Animation.btnScaleBigUI.uiView;
                return _this;
            }
            btnScaleBigUI.uiView = { "type": "View", "props": {}, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "picture/ui/button3.png", "scaleY": 1.2, "scaleX": 1.2 }, "compId": 2 }], "animations": [{ "nodes": [{ "target": 2, "keyframes": { "scaleY": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleY", "index": 0 }, { "value": 1.2, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleY", "index": 13 }], "scaleX": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleX", "index": 0 }, { "value": 1.2, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleX", "index": 13 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 0 }] };
            return btnScaleBigUI;
        }(laya.display.EffectAnimation));
        Animation.btnScaleBigUI = btnScaleBigUI;
    })(Animation = ui.Animation || (ui.Animation = {}));
})(ui || (ui = {}));
(function (ui) {
    var Animation;
    (function (Animation) {
        var btnScaleSmallUI = /** @class */ (function (_super) {
            __extends(btnScaleSmallUI, _super);
            function btnScaleSmallUI() {
                var _this = _super.call(this) || this;
                _this.effectData = ui.Animation.btnScaleSmallUI.uiView;
                return _this;
            }
            btnScaleSmallUI.uiView = { "type": "View", "props": {}, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "res/picture/ui/button3.png", "scaleY": 1.2, "scaleX": 1.2 }, "compId": 2 }], "animations": [{ "nodes": [{ "target": 2, "keyframes": { "skin": [{ "value": "res/picture/ui/button3.png", "tweenMethod": "linearNone", "tween": false, "target": 2, "key": "skin", "index": 0 }, { "value": "picture/ui/button3.png", "tweenMethod": "linearNone", "tween": false, "target": 2, "key": "skin", "index": 13 }], "scaleY": [{ "value": 1.2, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleY", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleY", "index": 13 }], "scaleX": [{ "value": 1.2, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleX", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleX", "index": 13 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 0 }] };
            return btnScaleSmallUI;
        }(laya.display.EffectAnimation));
        Animation.btnScaleSmallUI = btnScaleSmallUI;
    })(Animation = ui.Animation || (ui.Animation = {}));
})(ui || (ui = {}));
(function (ui) {
    var dialog;
    (function (dialog) {
        var getItemUI = /** @class */ (function (_super) {
            __extends(getItemUI, _super);
            function getItemUI() {
                return _super.call(this) || this;
            }
            getItemUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.dialog.getItemUI.uiView);
            };
            getItemUI.uiView = { "type": "Dialog", "props": { "width": 250, "height": 250 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 250, "var": "itimImg", "skin": "picture/ui/topmini.png", "height": 250 } }, { "type": "Button", "props": { "y": 202, "x": 70, "var": "btn_close", "stateNum": 1, "skin": "picture/ui/ui_anniu.png", "labelSize": 20, "label": "确定" } }, { "type": "Image", "props": { "y": 68, "x": 73, "width": 104, "var": "itemImg", "skin": "picture/ui/lianhua.png", "height": 114 } }, { "type": "Image", "props": { "y": 0, "x": 0, "width": 250, "skin": "picture/ui/ui_meishuzidi.png", "sizeGrid": "10,10,10,10,0", "height": 50 } }, { "type": "Label", "props": { "y": 10, "x": 65, "text": "恭喜获得", "fontSize": 30, "color": "#eef1c7" } }] }] };
            return getItemUI;
        }(Dialog));
        dialog.getItemUI = getItemUI;
    })(dialog = ui.dialog || (ui.dialog = {}));
})(ui || (ui = {}));
(function (ui) {
    var gameMain;
    (function (gameMain) {
        var gameMainUI = /** @class */ (function (_super) {
            __extends(gameMainUI, _super);
            function gameMainUI() {
                return _super.call(this) || this;
            }
            gameMainUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.gameMain.gameMainUI.uiView);
            };
            gameMainUI.uiView = { "type": "View", "props": { "y": 0, "x": 0, "width": 500, "height": 800 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 500, "skin": "picture/ui/hulu_lie.png", "height": 800 } }, { "type": "Box", "props": { "y": 36, "x": 25, "var": "box_lup", "scaleY": 1, "scaleX": 1, "alpha": 1 }, "compId": 29, "child": [{ "type": "Button", "props": { "y": 41, "x": 2, "width": 60, "var": "btn_system", "stateNum": 1, "skin": "picture/ui/system.png", "label": "label", "height": 60 } }, { "type": "ProgressBar", "props": { "width": 164, "visible": true, "var": "prs_exp", "value": 0.8, "skin": "comp/progress.png", "sizeGrid": "0,6,0,6", "height": 20 }, "child": [{ "type": "Label", "props": { "y": 0, "x": 0, "width": 166, "valign": "middle", "text": "0/0", "height": 20, "fontSize": 20, "align": "center" } }] }] }, { "type": "Box", "props": { "y": 36, "x": 477, "var": "box_rup", "scaleY": 1, "scaleX": 1, "pivotY": 0, "pivotX": 135 }, "compId": 30, "child": [{ "type": "Button", "props": { "x": 17, "width": 110, "stateNum": 1, "skin": "picture/ui/ui_anniu.png", "height": 36 }, "child": [{ "type": "Label", "props": { "y": 6, "x": 28, "width": 53, "text": "0", "height": 20, "fontSize": 20, "align": "right" } }, { "type": "Image", "props": { "y": 6, "x": 1, "width": 25, "skin": "picture/ui/ui_zuanshi.png", "height": 25 } }, { "type": "Image", "props": { "y": 6, "x": 82, "width": 25, "skin": "picture/ui/ui_jiab.png", "height": 25 } }] }, { "type": "List", "props": { "y": 49, "width": 135, "var": "rList", "spaceY": 10, "spaceX": 10, "repeatY": 4, "repeatX": 2, "height": 281 }, "child": [{ "type": "Box", "props": { "renderType": "render" }, "child": [{ "type": "Button", "props": { "width": 60, "stateNum": 1, "skin": "picture/ui/ui_icondi.png", "name": "btn", "labelSize": 20, "label": "按钮", "height": 60 } }] }] }] }, { "type": "Box", "props": { "y": 671, "x": 39, "width": 421, "var": "box_bottom", "skewX": 0, "pivotY": 0, "pivotX": 0, "height": 63, "alpha": 1 }, "compId": 31, "child": [{ "type": "List", "props": { "y": 0, "x": 0, "width": 411, "var": "bomList", "spaceX": 10, "repeatY": 1, "repeatX": 6, "height": 63 }, "child": [{ "type": "Box", "props": { "renderType": "render" }, "child": [{ "type": "Button", "props": { "width": 60, "stateNum": 1, "skin": "picture/ui/ui_icondi.png", "name": "btn", "labelSize": 20, "label": "按钮", "height": 60 } }] }] }] }], "animations": [{ "nodes": [{ "target": 29, "keyframes": { "scaleY": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 29, "key": "scaleY", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 29, "key": "scaleY", "index": 10 }], "scaleX": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 29, "key": "scaleX", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 29, "key": "scaleX", "index": 10 }], "alpha": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 29, "key": "alpha", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 29, "key": "alpha", "index": 10 }] } }, { "target": 30, "keyframes": { "scaleY": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 30, "key": "scaleY", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 30, "key": "scaleY", "index": 10 }], "scaleX": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 30, "key": "scaleX", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 30, "key": "scaleX", "index": 10 }], "pivotY": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 30, "key": "pivotY", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 30, "key": "pivotY", "index": 10 }], "pivotX": [{ "value": 135, "tweenMethod": "linearNone", "tween": true, "target": 30, "key": "pivotX", "index": 0 }, { "value": 135, "tweenMethod": "linearNone", "tween": true, "target": 30, "key": "pivotX", "index": 10 }, { "value": 135, "tweenMethod": "linearNone", "tween": true, "target": 30, "key": "pivotX", "index": 13 }] } }, { "target": 31, "keyframes": { "y": [{ "value": 771, "tweenMethod": "linearNone", "tween": true, "target": 31, "key": "y", "index": 0 }, { "value": 671, "tweenMethod": "linearNone", "tween": true, "target": 31, "key": "y", "index": 13 }], "x": [{ "value": 44, "tweenMethod": "linearNone", "tween": true, "target": 31, "key": "x", "index": 0 }, { "value": 39, "tweenMethod": "linearNone", "tween": true, "target": 31, "key": "x", "index": 13 }], "alpha": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 31, "key": "alpha", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 31, "key": "alpha", "index": 13 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 1 }] };
            return gameMainUI;
        }(View));
        gameMain.gameMainUI = gameMainUI;
    })(gameMain = ui.gameMain || (ui.gameMain = {}));
})(ui || (ui = {}));
(function (ui) {
    var gameMain;
    (function (gameMain) {
        var guideUI = /** @class */ (function (_super) {
            __extends(guideUI, _super);
            function guideUI() {
                return _super.call(this) || this;
            }
            guideUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.gameMain.guideUI.uiView);
            };
            guideUI.uiView = { "type": "View", "props": { "width": 500, "height": 800 }, "child": [{ "type": "Image", "props": { "width": 500, "skin": "picture/ui/hulu_lie.png", "height": 800 }, "child": [{ "type": "Image", "props": { "y": 675, "x": 0, "width": 500, "var": "img_sayBg", "skin": "picture/ui/ui_meishuzidi.png", "sizeGrid": "10,10,10,10,0", "height": 125 } }, { "type": "Image", "props": { "y": 605, "x": 10, "width": 125, "var": "img_head", "skin": "picture/ui/lyy.jpg", "height": 185 } }, { "type": "Label", "props": { "y": 620, "x": 140, "width": 128, "var": "lab_name", "valign": "middle", "text": "label", "stroke": 1, "height": 55, "fontSize": 40, "color": "#b49d6c", "bold": true } }, { "type": "Button", "props": { "y": 753, "x": 414, "width": 81, "var": "btn_continue", "labelSize": 20, "labelColors": "#FFFFFF,#FFFFFF,#FFFFFF", "label": "点击继续", "height": 40 } }] }] };
            return guideUI;
        }(View));
        gameMain.guideUI = guideUI;
    })(gameMain = ui.gameMain || (ui.gameMain = {}));
})(ui || (ui = {}));
(function (ui) {
    var gameMain;
    (function (gameMain) {
        var systemUI = /** @class */ (function (_super) {
            __extends(systemUI, _super);
            function systemUI() {
                return _super.call(this) || this;
            }
            systemUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.gameMain.systemUI.uiView);
            };
            systemUI.uiView = { "type": "View", "props": { "width": 0, "height": 0 }, "child": [{ "type": "Box", "props": { "y": 150, "x": 225, "width": 250, "var": "box_sys", "scaleY": 1, "scaleX": 1, "height": 300, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 14, "child": [{ "type": "Image", "props": { "width": 250, "skin": "picture/ui/topmini.png", "height": 300 } }, { "type": "Image", "props": { "width": 250, "skin": "picture/ui/topmini.png", "height": 50 } }, { "type": "Label", "props": { "y": 5, "x": 50, "width": 150, "valign": "middle", "text": "设置", "strokeColor": "#ffffff", "height": 40, "fontSize": 30, "color": "#68c88e", "align": "center" } }, { "type": "Button", "props": { "y": -10, "x": 185, "width": 74, "var": "btn_close", "stateNum": 1, "skin": "picture/ui/ui_guanbi.png", "label": "关闭", "height": 75 } }, { "type": "Button", "props": { "y": 250, "x": 70, "var": "btn_quit", "stateNum": 1, "skin": "picture/ui/ui_anniu.png", "labelSize": 20, "label": "返回平台" } }, { "type": "Label", "props": { "y": 70, "x": 20, "text": "姓名：", "mouseEnabled": false, "fontSize": 15 } }, { "type": "Label", "props": { "y": 95, "x": 20, "text": "角色ID：", "mouseEnabled": false, "fontSize": 15 } }, { "type": "Label", "props": { "y": 70, "x": 75, "text": "XXXXXXXXX", "mouseEnabled": false, "fontSize": 15 } }, { "type": "Label", "props": { "y": 95, "x": 75, "text": "123456789", "mouseEnabled": false, "fontSize": 15 } }, { "type": "Label", "props": { "y": 130, "x": 20, "text": "声音：", "mouseEnabled": false, "fontSize": 15 } }, { "type": "Button", "props": { "y": 123, "x": 68, "width": 69, "var": "btn_sound", "stateNum": 1, "skin": "picture/ui/ui_guan.png", "height": 33 } }] }], "animations": [{ "nodes": [{ "target": 14, "keyframes": { "scaleY": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 14, "key": "scaleY", "index": 0 }, { "value": 1, "tweenMethod": "bounceIn", "tween": false, "target": 14, "key": "scaleY", "index": 10 }], "scaleX": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 14, "key": "scaleX", "index": 0 }, { "value": 1, "tweenMethod": "bounceIn", "tween": false, "target": 14, "key": "scaleX", "index": 10 }], "anchorY": [{ "value": 0.5, "tweenMethod": "linearNone", "tween": true, "target": 14, "key": "anchorY", "index": 0 }, { "value": 0.5, "tweenMethod": "backInOut", "tween": true, "target": 14, "key": "anchorY", "index": 10 }], "anchorX": [{ "value": 0.5, "tweenMethod": "linearNone", "tween": true, "target": 14, "key": "anchorX", "index": 0 }, { "value": 0.5, "tweenMethod": "backInOut", "tween": true, "target": 14, "key": "anchorX", "index": 10 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 1 }] };
            return systemUI;
        }(View));
        gameMain.systemUI = systemUI;
    })(gameMain = ui.gameMain || (ui.gameMain = {}));
})(ui || (ui = {}));
(function (ui) {
    var loadingUI;
    (function (loadingUI_1) {
        var loadingUI = /** @class */ (function (_super) {
            __extends(loadingUI, _super);
            function loadingUI() {
                return _super.call(this) || this;
            }
            loadingUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.loadingUI.loadingUI.uiView);
            };
            loadingUI.uiView = { "type": "View", "props": { "width": 500, "height": 800 }, "child": [{ "type": "Image", "props": { "width": 500, "skin": "bg/loading.jpg", "height": 800 } }, { "type": "ProgressBar", "props": { "y": 705, "x": 96, "width": 320, "var": "m_progress", "skin": "comp/progress.png", "height": 30 } }] };
            return loadingUI;
        }(View));
        loadingUI_1.loadingUI = loadingUI;
    })(loadingUI = ui.loadingUI || (ui.loadingUI = {}));
})(ui || (ui = {}));
(function (ui) {
    var loginUI;
    (function (loginUI_1) {
        var loginUI = /** @class */ (function (_super) {
            __extends(loginUI, _super);
            function loginUI() {
                return _super.call(this) || this;
            }
            loginUI.prototype.createChildren = function () {
                View.regComponent("EffectAnimation", laya.display.EffectAnimation);
                View.regComponent("ui.Animation.btnScaleBigUI", ui.Animation.btnScaleBigUI);
                View.regComponent("ui.Animation.btnScaleSmallUI", ui.Animation.btnScaleSmallUI);
                _super.prototype.createChildren.call(this);
                this.createView(ui.loginUI.loginUI.uiView);
            };
            loginUI.uiView = { "type": "View", "props": { "width": 500, "height": 800 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 500, "skin": "picture/super/supergp.jpg", "height": 800 } }, { "type": "Button", "props": { "y": 30, "x": 423, "width": 74, "var": "btn_notice", "stateNum": 1, "skin": "picture/ui/ui_guanbi.png", "label": "公告", "height": 75 } }, { "type": "Button", "props": { "y": 675, "x": 242, "width": 200, "var": "btn_start", "stateNum": 1, "skin": "picture/ui/button3.png", "labelSize": 20, "labelFont": "SimSun", "labelBold": true, "label": "进入游戏", "height": 60, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Script", "props": { "playEvent": "mousemove", "runtime": "ui.Animation.btnScaleBigUI" } }, { "type": "Script", "props": { "playEvent": "mouseout", "runtime": "ui.Animation.btnScaleSmallUI" } }] }, { "type": "TextArea", "props": { "y": 755, "x": 15, "width": 468, "text": "抵制不良游戏，拒绝盗版游戏。  注意自我保护，谨防受骗上当。  适度游戏益脑，沉迷游戏伤身。  合理安排时间，享受健康生活", "height": 45, "fontSize": 15, "bold": true, "align": "left" } }] };
            return loginUI;
        }(View));
        loginUI_1.loginUI = loginUI;
    })(loginUI = ui.loginUI || (ui.loginUI = {}));
})(ui || (ui = {}));
(function (ui) {
    var loginUI;
    (function (loginUI) {
        var noticeUI = /** @class */ (function (_super) {
            __extends(noticeUI, _super);
            function noticeUI() {
                return _super.call(this) || this;
            }
            noticeUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.loginUI.noticeUI.uiView);
            };
            noticeUI.uiView = { "type": "View", "props": { "width": 0, "height": 0 }, "child": [{ "type": "Box", "props": { "y": 150, "x": 225, "width": 450, "var": "box", "scaleY": 1, "scaleX": 1, "height": 300, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 14, "child": [{ "type": "Image", "props": { "width": 450, "skin": "picture/ui/topmini.png", "height": 300 } }, { "type": "Image", "props": { "width": 450, "skin": "picture/ui/topmini.png", "height": 50 } }, { "type": "Tab", "props": { "y": 65, "x": 15, "width": 70, "space": 10, "skin": "comp/tab.png", "name": "tab_notice", "labels": "label1,label2,label3", "height": 170, "direction": "vertical" } }, { "type": "Label", "props": { "y": 5, "x": 150, "width": 150, "valign": "middle", "text": "公告", "strokeColor": "#ffffff", "height": 40, "fontSize": 30, "color": "#68c88e", "align": "center" } }, { "type": "Button", "props": { "y": -7, "x": 384, "width": 74, "stateNum": 1, "skin": "picture/ui/ui_guanbi.png", "name": "btn_closeNotice", "label": "关闭", "height": 75 } }] }], "animations": [{ "nodes": [{ "target": 14, "keyframes": { "scaleY": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 14, "key": "scaleY", "index": 0 }, { "value": 1, "tweenMethod": "bounceIn", "tween": false, "target": 14, "key": "scaleY", "index": 10 }], "scaleX": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 14, "key": "scaleX", "index": 0 }, { "value": 1, "tweenMethod": "bounceIn", "tween": false, "target": 14, "key": "scaleX", "index": 10 }], "anchorY": [{ "value": 0.5, "tweenMethod": "linearNone", "tween": true, "target": 14, "key": "anchorY", "index": 0 }, { "value": 0.5, "tweenMethod": "linearNone", "tween": true, "target": 14, "key": "anchorY", "index": 10 }], "anchorX": [{ "value": 0.5, "tweenMethod": "linearNone", "tween": true, "target": 14, "key": "anchorX", "index": 0 }, { "value": 0.5, "tweenMethod": "linearNone", "tween": true, "target": 14, "key": "anchorX", "index": 10 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 1 }] };
            return noticeUI;
        }(View));
        loginUI.noticeUI = noticeUI;
    })(loginUI = ui.loginUI || (ui.loginUI = {}));
})(ui || (ui = {}));
(function (ui) {
    var mainUI;
    (function (mainUI_1) {
        var mainUI = /** @class */ (function (_super) {
            __extends(mainUI, _super);
            function mainUI() {
                return _super.call(this) || this;
            }
            mainUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.mainUI.mainUI.uiView);
            };
            mainUI.uiView = { "type": "View", "props": { "width": 500, "height": 800 }, "child": [{ "type": "Button", "props": { "y": 720, "x": 0, "width": 250, "var": "btn_left", "stateNum": 1, "skin": "picture/ui/ui_paihangdi.png", "sizeGrid": "15,15,15,15,0", "labelSize": 28, "labelColors": "#3476CA,#E2E6E5,#E2E6E5", "label": "test", "height": 80 } }, { "type": "Button", "props": { "y": 720, "x": 250, "width": 250, "var": "btn_right", "stateNum": 1, "skin": "picture/ui/ui_paihangdi.png", "sizeGrid": "15,15,15,15,0", "labelSize": 28, "labelColors": "#3476CA,#E2E6E5,#E2E6E5", "label": "test", "height": 80 } }, { "type": "Image", "props": { "y": 0, "x": 0, "width": 500, "var": "topImg", "skin": "comp/hscroll.png", "height": 100 } }, { "type": "Image", "props": { "y": 15, "x": 15, "width": 185, "var": "logoImg", "skin": "picture/presentation/presentation7.jpg", "height": 70 } }, { "type": "Image", "props": { "y": 15, "x": 335, "width": 90, "var": "headImg", "skin": "picture/super/super7.jpg", "height": 90 } }, { "type": "List", "props": { "y": 120, "x": 10, "width": 480, "var": "m_list", "repeatY": 3, "repeatX": 1, "height": 600 }, "child": [{ "type": "Box", "props": { "renderType": "render", "name": "m_box" }, "child": [{ "type": "Image", "props": { "width": 480, "skin": "picture/ui/awards.png", "height": 200 } }, { "type": "Image", "props": { "y": 10, "x": 15, "width": 450, "skin": "comp/hscroll.png", "height": 180 } }, { "type": "Image", "props": { "y": 15, "x": 20, "width": 440, "skin": "picture/presentation/presentation7.jpg", "name": "img_presentation", "height": 130 } }, { "type": "Label", "props": { "y": 155, "x": 20, "width": 100, "valign": "middle", "text": "测试中", "name": "label_select", "height": 30, "fontSize": 20, "bgColor": "#ee9d52", "align": "center" } }, { "type": "Label", "props": { "y": 155, "x": 130, "width": 330, "valign": "middle", "text": "11111111111111111111", "name": "label_info", "height": 30, "fontSize": 20, "alpha": 1, "align": "left" } }] }] }] };
            return mainUI;
        }(View));
        mainUI_1.mainUI = mainUI;
    })(mainUI = ui.mainUI || (ui.mainUI = {}));
})(ui || (ui = {}));
(function (ui) {
    var mainUI;
    (function (mainUI) {
        var slefUI = /** @class */ (function (_super) {
            __extends(slefUI, _super);
            function slefUI() {
                return _super.call(this) || this;
            }
            slefUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.mainUI.slefUI.uiView);
            };
            slefUI.uiView = { "type": "View", "props": { "width": 500, "height": 800 }, "child": [{ "type": "List", "props": { "y": 0, "x": 0, "var": "self_list", "repeatX": 1, "hScrollBarSkin": "comp/hscroll.png" }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "renderType": "render" }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 500, "skin": "picture/mini/mini1.jpg", "name": "bgImg", "height": 800 } }] }] }, { "type": "Button", "props": { "y": 50, "x": 50, "width": 60, "var": "btn_close", "stateNum": 1, "skin": "picture/ui/back.png", "height": 60 }, "compId": 115 }, { "type": "Button", "props": { "y": 750, "x": 50, "width": 190, "var": "btn_left", "stateNum": 1, "skin": "picture/ui/ui_paihangdi.png", "sizeGrid": "15,15,15,15,0", "labelSize": 20, "label": "label", "height": 40 }, "compId": 116 }, { "type": "Button", "props": { "y": 750, "x": 260, "width": 190, "var": "btn_right", "stateNum": 1, "skin": "picture/ui/ui_paihangdi.png", "sizeGrid": "15,15,15,15,0", "labelSize": 20, "label": "label", "height": 40 }, "compId": 117 }, { "type": "Box", "props": { "y": 512, "x": 50, "var": "mBox" }, "child": [{ "type": "Image", "props": { "width": 400, "skin": "comp/hscroll.png", "height": 220 }, "compId": 119 }, { "type": "Image", "props": { "width": 400, "skin": "comp/blank.png", "height": 50 }, "compId": 135 }, { "type": "Label", "props": { "y": 10, "x": 20, "width": 100, "var": "sltLabel", "valign": "middle", "text": "label", "height": 30, "fontSize": 20, "bgColor": "#ee9d52", "align": "center" } }, { "type": "Label", "props": { "y": 50, "x": 20, "width": 347, "var": "traitLabel", "valign": "middle", "text": "label", "styleSkin": "comp/label.png", "height": 30, "fontSize": 18, "align": "left" } }, { "type": "Label", "props": { "y": 10, "x": 142, "width": 242, "var": "msgLabel", "valign": "middle", "text": "label", "styleSkin": "comp/label.png", "height": 30, "fontSize": 20, "align": "left" } }, { "type": "Image", "props": { "y": 190, "width": 400, "skin": "comp/blank.png", "height": 30 }, "compId": 134 }, { "type": "Label", "props": { "y": 80, "x": 20, "wordWrap": true, "width": 364, "var": "introLabel", "overflow": "scroll", "height": 105, "fontSize": 20 } }] }], "animations": [{ "nodes": [{ "target": 115, "keyframes": { "skin": [{ "value": "res/picture/ui/back.png", "tweenMethod": "linearNone", "tween": false, "target": 115, "key": "skin", "index": 0 }] } }, { "target": 116, "keyframes": { "skin": [{ "value": "res/picture/ui/ui_paihangdi.png", "tweenMethod": "linearNone", "tween": false, "target": 116, "key": "skin", "index": 0 }] } }, { "target": 117, "keyframes": { "skin": [{ "value": "res/picture/ui/ui_paihangdi.png", "tweenMethod": "linearNone", "tween": false, "target": 117, "key": "skin", "index": 0 }] } }, { "target": 119, "keyframes": { "skin": [{ "value": "res/comp/hscroll.png", "tweenMethod": "linearNone", "tween": false, "target": 119, "key": "skin", "index": 0 }] } }, { "target": 135, "keyframes": { "skin": [{ "value": "res/comp/blank.png", "tweenMethod": "linearNone", "tween": false, "target": 135, "key": "skin", "index": 0 }] } }, { "target": 134, "keyframes": { "skin": [{ "value": "res/comp/blank.png", "tweenMethod": "linearNone", "tween": false, "target": 134, "key": "skin", "index": 0 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 0 }] };
            return slefUI;
        }(View));
        mainUI.slefUI = slefUI;
    })(mainUI = ui.mainUI || (ui.mainUI = {}));
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map