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
                var Resume_UIList = /** @class */ (function () {
                    function Resume_UIList(data) {
                        this.listSource = [];
                        this.source = data;
                        this.listSource.push(this.source.src[1]);
                        this.listSource.push(this.source.src[2]);
                        this.initResume();
                    }
                    Resume_UIList.prototype.initResume = function () {
                        var m_resumeUI = new ui.mainUI.slef_bakUI();
                        Laya.stage.addChild(m_resumeUI);
                        this.closeBtn = m_resumeUI.btn_close;
                        m_resumeUI.sltLabel.text = this.source.isSlt ? "已选择" : "未选择";
                        m_resumeUI.msgLabel.text = this.source.msg;
                        m_resumeUI.traitLabel.text = this.source.trait;
                        m_resumeUI.introLabel.text = this.source.intro;
                        m_resumeUI.btn_left.label = "简介";
                        m_resumeUI.btn_right.label = "开始";
                        m_resumeUI.btn_right.on(Laya.Event.CLICK, this, this.startGame);
                        m_resumeUI.self_list.selectEnable = true;
                        m_resumeUI.self_list.hScrollBarSkin = "";
                        m_resumeUI.self_list.renderHandler = new Laya.Handler(this, this.updateItem);
                        m_resumeUI.self_list.array = this.listSource;
                    };
                    Resume_UIList.prototype.updateItem = function (cell, index) {
                        var img = cell.getChildByName("bgImg");
                        img.skin = cell.dataSource;
                    };
                    Resume_UIList.prototype.startGame = function () {
                        Laya.stage.destroyChildren();
                        new cn.yh.sample2.main.Loading_UI();
                    };
                    return Resume_UIList;
                }());
                main.Resume_UIList = Resume_UIList;
            })(main = sample2.main || (sample2.main = {}));
        })(sample2 = yh.sample2 || (yh.sample2 = {}));
    })(yh = cn.yh || (cn.yh = {}));
})(cn || (cn = {}));
//# sourceMappingURL=Resume_UIList.js.map