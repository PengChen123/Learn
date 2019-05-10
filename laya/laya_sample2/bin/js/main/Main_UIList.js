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
                var Main_UIList = /** @class */ (function () {
                    function Main_UIList() {
                        this.selectedIndex = [];
                        this.offset = 100;
                        this.initListY = 0;
                        this.initMainUI();
                    }
                    Main_UIList.prototype.initMainUI = function () {
                        this.mainUI = new ui.mainUI.main_bakUI();
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
                        this.initListY = this.mainUI.m_list.y;
                        this.mainUI.m_list.vScrollBarSkin = "";
                        this.mainUI.m_list.selectEnable = true;
                        this.mainUI.m_list.selectHandler = new Laya.Handler(this, this.onSelect);
                        this.mainUI.m_list.renderHandler = new Laya.Handler(this, this.updateItem);
                        this.mainUI.m_list.array = sample2.ConfigMananger.getRoleInfo();
                        Laya.stage.addChild(this.mainUI);
                    };
                    Main_UIList.prototype.onClickRecommend = function () {
                        if (this.mainUI.btn_left.selected != true) {
                            this.mainUI.btn_left.selected = true;
                            this.mainUI.btn_right.selected = false;
                            this.mainUI.m_list.array = sample2.ConfigMananger.getRoleInfo();
                            this.mainUI.m_list.y = this.initListY;
                            this.mainUI.m_list.height += this.offset;
                        }
                    };
                    Main_UIList.prototype.onClickAccount = function () {
                        if (this.mainUI.btn_right.selected != true) {
                            this.mainUI.btn_left.selected = false;
                            this.mainUI.btn_right.selected = true;
                            this.mainUI.m_list.array = this.getSelectedData();
                            //this.mainUI.m_list.refresh();
                            this.mainUI.m_list.y = this.initListY + this.offset;
                            this.mainUI.m_list.height -= this.offset;
                        }
                    };
                    Main_UIList.prototype.getSelectedData = function () {
                        var data = [];
                        for (var i = 0; i < this.selectedIndex.length; i++) {
                            data.push(sample2.ConfigMananger.getRoleInfo()[this.selectedIndex[i]]);
                        }
                        return data;
                    };
                    Main_UIList.prototype.onSelect = function (index) {
                        sample2.ConfigMananger.getRoleInfo()[index].isSlt = true;
                        if (this.selectedIndex.indexOf(index) == -1) {
                            this.selectedIndex.push(index);
                        }
                        Laya.stage.destroyChildren();
                        this.initSelfUI(sample2.ConfigMananger.getRoleInfo()[index]);
                    };
                    Main_UIList.prototype.updateItem = function (cell, index) {
                        var img = cell.getChildByName("img_presentation");
                        var selectLab = cell.getChildByName("label_select");
                        var infoLab = cell.getChildByName("label_info");
                        img.skin = cell.dataSource.src[0];
                        selectLab.text = cell.dataSource.isSlt ? "已选中" : "未选中";
                        infoLab.text = cell.dataSource.msg;
                    };
                    Main_UIList.prototype.initSelfUI = function (source) {
                        var self = new cn.yh.sample2.main.Resume(source);
                        self.closeBtn.on(Laya.Event.CLICK, this, this.returnMain);
                    };
                    Main_UIList.prototype.returnMain = function () {
                        Laya.stage.destroyChildren();
                        this.initMainUI();
                    };
                    return Main_UIList;
                }());
                main.Main_UIList = Main_UIList;
            })(main = sample2.main || (sample2.main = {}));
        })(sample2 = yh.sample2 || (yh.sample2 = {}));
    })(yh = cn.yh || (cn.yh = {}));
})(cn || (cn = {}));
//# sourceMappingURL=Main_UIList.js.map