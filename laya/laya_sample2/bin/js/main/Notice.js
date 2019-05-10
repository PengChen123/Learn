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
                var Notice = /** @class */ (function () {
                    function Notice() {
                        this.init();
                    }
                    Notice.prototype.init = function () {
                        this.notice = new ui.loginUI.noticeUI();
                        Laya.stage.addChild(this.notice);
                        this.showMask();
                        this.notice.pos(Laya.stage.width >> 1, Laya.stage.height - this.notice.height - 150);
                        this.notice.pivot(this.notice.box.width >> 1, this.notice.box.height >> 1);
                        var closeBtn = this.notice.box.getChildByName("btn_closeNotice");
                        closeBtn.on(Laya.Event.CLICK, this, this.close);
                        this.tab = this.notice.box.getChildByName("tab_notice");
                        this.tab.labels = this.getNoticeTitle();
                        this.tab.layoutEnabled = true;
                        this.tab.selectedIndex = 0;
                        this.tab.selectHandler = new Laya.Handler(this, this.onSelect);
                        this.createScorllText();
                        this.onSelect(this.tab.selectedIndex);
                        this.notice.zOrder += 1;
                    };
                    Notice.prototype.getNoticeTitle = function () {
                        var title = "";
                        for (var i = 0; i < sample2.ConfigMananger.getNotice().length; i++) {
                            title == "" ? title += sample2.ConfigMananger.getNotice()[i].title : title += ("," + sample2.ConfigMananger.getNotice()[i].title);
                        }
                        return title;
                    };
                    Notice.prototype.getNoticeText = function () {
                        var txtArr = [];
                        for (var i = 0; i < sample2.ConfigMananger.getNotice().length; i++) {
                            txtArr.push(sample2.ConfigMananger.getNotice()[i].info);
                        }
                        return txtArr;
                    };
                    Notice.prototype.close = function () {
                        Laya.Tween.to(this.notice.box, { "scaleX": 0, "scaleY": 0, "alpha": 0 }, 300, null, Laya.Handler.create(this, this.closenotice));
                        this.maskArea.visible = false;
                    };
                    Notice.prototype.closenotice = function () {
                        this.notice.visible = false;
                    };
                    Notice.prototype.onSelect = function (selectIndex) {
                        this.changeText(this.getNoticeText()[selectIndex]);
                    };
                    Notice.prototype.showMask = function () {
                        this.maskArea = cn.yh.sample2.utility.createMask();
                        Laya.stage.addChild(this.maskArea);
                        this.maskArea.on(Laya.Event.MOUSE_DOWN, this, this.maskStopPropagation);
                    };
                    Notice.prototype.maskStopPropagation = function (e) {
                        e.stopPropagation();
                    };
                    Notice.prototype.changeText = function (txt) {
                        this.txtArea.text = txt; //不用changetext 因为不会重新渲染 ex:自动换行了3行，如果之后的内容大于3行  则不会换行
                    };
                    Notice.prototype.createScorllText = function (msg) {
                        var offset = 15;
                        this.txtArea = new Laya.Text();
                        this.notice.box.addChild(this.txtArea);
                        this.txtArea.overflow = Laya.Text.SCROLL;
                        this.txtArea.text = msg;
                        this.txtArea.pos(offset * 2 + this.tab.width, this.tab.y);
                        this.txtArea.size(this.notice.box.width - this.tab.width - offset * 3, this.notice.box.height - this.tab.y - offset);
                        this.txtArea.bgColor = "#ffffff";
                        this.txtArea.fontSize = 20;
                        this.txtArea.wordWrap = true;
                        this.txtArea.on(Laya.Event.MOUSE_DOWN, this, this.startScrollText);
                    };
                    Notice.prototype.startScrollText = function (e) {
                        this.prevY = this.txtArea.mouseY;
                        Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.scrollText);
                        Laya.stage.on(Laya.Event.MOUSE_UP, this, this.finishScrollText);
                    };
                    Notice.prototype.finishScrollText = function (e) {
                        Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.scrollText);
                        Laya.stage.off(Laya.Event.MOUSE_UP, this, this.finishScrollText);
                    };
                    Notice.prototype.scrollText = function (e) {
                        var nowX = this.txtArea.mouseX;
                        var nowY = this.txtArea.mouseY;
                        this.txtArea.scrollY += this.prevY - nowY;
                        this.prevY = nowY;
                    };
                    return Notice;
                }());
                main.Notice = Notice;
            })(main = sample2.main || (sample2.main = {}));
        })(sample2 = yh.sample2 || (yh.sample2 = {}));
    })(yh = cn.yh || (cn.yh = {}));
})(cn || (cn = {}));
//# sourceMappingURL=Notice.js.map