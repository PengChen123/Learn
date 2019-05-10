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
                var Main = /** @class */ (function () {
                    function Main() {
                        this.selectedIndex = [];
                        this.offset = 100;
                        this.initMainUI();
                    }
                    Main.prototype.initMainUI = function () {
                        this.mainUI = new ui.mainUI.mainUI();
                        this.mainUI.btn_left.skin = new Laya.Image("picture/ui/ui_paihangdi.png").skin;
                        this.mainUI.btn_left.label = "推荐";
                        this.mainUI.btn_left.selected = true;
                        this.mainUI.btn_left.on(Laya.Event.CLICK, this, this.onClickRecommend);
                        this.mainUI.btn_right.skin = new Laya.Image("picture/ui/ui_paihangdi.png").skin;
                        this.mainUI.btn_right.label = "账号";
                        this.mainUI.btn_right.on(Laya.Event.CLICK, this, this.onClickAccount);
                        this.mainUI.logoImg.skin = new Laya.Image("picture/presentation/presentation1.jpg").skin;
                        this.mainUI.topImg.skin = new Laya.Image("comp/hscroll.png").skin;
                        this.mainUI.headImg.skin = new Laya.Image("picture/super/super7.jpg").skin;
                        this.mainUI.m_list.vScrollBarSkin = "";
                        this.mainUI.m_list.selectEnable = true;
                        this.mainUI.m_list.selectHandler = new Laya.Handler(this, this.onSelect);
                        this.mainUI.m_list.renderHandler = new Laya.Handler(this, this.updateItem);
                        this.mainUI.m_list.array = sample2.ConfigMananger.getRoleInfo();
                        Laya.stage.addChild(this.mainUI);
                    };
                    Main.prototype.onClickRecommend = function () {
                        if (this.mainUI.btn_left.selected != true) {
                            this.mainUI.btn_left.selected = true;
                            this.mainUI.btn_right.selected = false;
                            this.mainUI.m_list.array = sample2.ConfigMananger.getRoleInfo();
                            this.mainUI.m_list.y -= this.offset;
                            this.mainUI.m_list.height += this.offset;
                        }
                    };
                    Main.prototype.onClickAccount = function () {
                        if (this.mainUI.btn_right.selected != true) {
                            this.mainUI.btn_left.selected = false;
                            this.mainUI.btn_right.selected = true;
                            this.mainUI.m_list.array = this.getSelectedData();
                            //this.mainUI.m_list.refresh();
                            this.mainUI.m_list.y += this.offset;
                            this.mainUI.m_list.height -= this.offset;
                        }
                    };
                    Main.prototype.getSelectedData = function () {
                        var data = [];
                        for (var i = 0; i < this.selectedIndex.length; i++) {
                            data.push(sample2.ConfigMananger.getRoleInfo()[this.selectedIndex[i]]);
                        }
                        return data;
                    };
                    Main.prototype.onSelect = function (index) {
                        sample2.ConfigMananger.getRoleInfo()[index].isSlt = true;
                        if (this.selectedIndex.indexOf(index) == -1) {
                            this.selectedIndex.push(index);
                        }
                        Laya.stage.destroyChildren();
                        this.initSelfUI(sample2.ConfigMananger.getRoleInfo()[index]);
                    };
                    Main.prototype.updateItem = function (cell, index) {
                        var img = cell.getChildByName("img_presentation");
                        var selectLab = cell.getChildByName("label_select");
                        var infoLab = cell.getChildByName("label_info");
                        img.skin = cell.dataSource.src[0];
                        selectLab.text = cell.dataSource.isSlt ? "已选中" : "未选中";
                        infoLab.text = cell.dataSource.msg;
                    };
                    Main.prototype.initSelfUI = function (source) {
                        var self = new cn.yh.sample2.main.Resume(source);
                        self.closeBtn.on(Laya.Event.CLICK, this, this.returnMain);
                    };
                    Main.prototype.returnMain = function () {
                        Laya.stage.destroyChildren();
                        this.initMainUI();
                    };
                    return Main;
                }());
                main.Main = Main;
            })(main = sample2.main || (sample2.main = {}));
        })(sample2 = yh.sample2 || (yh.sample2 = {}));
    })(yh = cn.yh || (cn.yh = {}));
})(cn || (cn = {}));
//# sourceMappingURL=Main.js.map