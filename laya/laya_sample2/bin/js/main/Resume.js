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
                var Resume = /** @class */ (function () {
                    function Resume(data) {
                        this.initResume(data);
                    }
                    Resume.prototype.initResume = function (source) {
                        var m_resumeUI = new ui.mainUI.slefUI();
                        Laya.stage.addChild(m_resumeUI);
                        this.closeBtn = m_resumeUI.btn_close;
                        m_resumeUI.sltLabel.text = source.isSlt ? "已选择" : "未选择";
                        m_resumeUI.msgLabel.text = source.msg;
                        m_resumeUI.traitLabel.text = source.trait;
                        m_resumeUI.introLabel.text = source.intro;
                        m_resumeUI.btn_left.label = "简介";
                        m_resumeUI.btn_right.label = "开始";
                        m_resumeUI.btn_right.on(Laya.Event.CLICK, this, this.startGame);
                        m_resumeUI.self_list.selectEnable = true;
                        m_resumeUI.self_list.repeatX = source.src - 1;
                        m_resumeUI.self_list.hScrollBarSkin = "";
                        m_resumeUI.self_list.renderHandler = new Laya.Handler(this, this.updateItem);
                        m_resumeUI.self_list.array = this.getListSource(source.src);
                    };
                    Resume.prototype.getListSource = function (srcArr) {
                        var listSource = [];
                        for (var i = 0; i < srcArr.length; i++) {
                            listSource.push(srcArr[i + 1]);
                        }
                        return listSource;
                    };
                    Resume.prototype.updateItem = function (cell, index) {
                        var img = cell.getChildByName("bgImg");
                        img.skin = cell.dataSource;
                    };
                    Resume.prototype.startGame = function () {
                        Laya.stage.destroyChildren();
                        new cn.yh.sample2.main.Loading();
                    };
                    return Resume;
                }());
                main.Resume = Resume;
            })(main = sample2.main || (sample2.main = {}));
        })(sample2 = yh.sample2 || (yh.sample2 = {}));
    })(yh = cn.yh || (cn.yh = {}));
})(cn || (cn = {}));
//# sourceMappingURL=Resume.js.map