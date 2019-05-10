/**
* name
*/
var cn;
(function (cn) {
    var yh;
    (function (yh) {
        var sample2;
        (function (sample2) {
            var ConfigMananger = /** @class */ (function () {
                function ConfigMananger() {
                    Laya.loader.load([
                        { url: "xml/roleInfo.xml", type: laya.net.Loader.XML },
                        { url: "xml/npc.xml", type: laya.net.Loader.XML },
                        { url: "xml/item.xml", type: laya.net.Loader.XML },
                        { url: "xml/guide.xml", type: laya.net.Loader.XML },
                        { url: "xml/notice.xml", type: laya.net.Loader.XML }
                    ], Laya.Handler.create(this, this.onLoadComplete));
                }
                ConfigMananger.prototype.onLoadComplete = function () {
                    this.loadRoleInfoXml();
                    this.loadNpcXml();
                    this.loadItemXml();
                    this.loadGuideXml();
                    this.loadNoticeXml();
                };
                ConfigMananger.prototype.loadRoleInfoXml = function () {
                    var xmlDom = laya.net.Loader.getRes("xml/roleInfo.xml");
                    var _src;
                    var rootNodes = xmlDom.firstChild;
                    for (var i = 0, count = rootNodes.childNodes.length; i < count; i++) {
                        var node = rootNodes.childNodes[i];
                        _src = [];
                        for (var j = 0; j < node.firstChild.childNodes.length; j++) {
                            _src.push(node.firstChild.childNodes[j].innerHTML);
                        }
                        ConfigMananger.roleData.push({
                            id: node.getAttribute("id"),
                            src: _src,
                            isSlt: false,
                            msg: node.getAttribute("name"),
                            trait: node.getAttribute("trait"),
                            intro: node.getAttribute("intro")
                        });
                    }
                };
                ConfigMananger.getRoleInfo = function () {
                    return ConfigMananger.roleData;
                };
                ConfigMananger.prototype.loadNpcXml = function () {
                    var xmlDom = laya.net.Loader.getRes("xml/npc.xml");
                    var rootNodes = xmlDom.firstChild;
                    for (var i = 0, count = rootNodes.childNodes.length; i < count; i++) {
                        var node = rootNodes.childNodes[i];
                        ConfigMananger.npcData.push({
                            id: node.getAttribute("id"),
                            name: node.getAttribute("name"),
                            headImg: node.getAttribute("headImg"),
                        });
                    }
                };
                ConfigMananger.getNpc = function () {
                    return this.npcData;
                };
                ConfigMananger.prototype.loadItemXml = function () {
                    var xmlDom = laya.net.Loader.getRes("xml/item.xml");
                    var rootNodes = xmlDom.firstChild;
                    for (var i = 0, count = rootNodes.childNodes.length; i < count; i++) {
                        var node = rootNodes.childNodes[i];
                        ConfigMananger.itemData.push({
                            id: node.getAttribute("id"),
                            name: node.getAttribute("name"),
                            icon: node.getAttribute("icon"),
                            type: node.getAttribute("type"),
                            max: node.getAttribute("max"),
                        });
                    }
                };
                ConfigMananger.getItem = function () {
                    return ConfigMananger.itemData;
                };
                ConfigMananger.prototype.loadGuideXml = function () {
                    var xmlDom = laya.net.Loader.getRes("xml/guide.xml");
                    var rootNodes = xmlDom.firstChild;
                    for (var i = 0, count = rootNodes.childNodes.length; i < count; i++) {
                        var node = rootNodes.childNodes[i];
                        ConfigMananger.guideData.push({
                            id: node.getAttribute("id"),
                            nextId: node.getAttribute("nextId"),
                            npcId: node.getAttribute("npcId"),
                            say: node.getAttribute("say")
                        });
                    }
                };
                ConfigMananger.getGuide = function () {
                    return ConfigMananger.guideData;
                };
                ConfigMananger.prototype.loadNoticeXml = function () {
                    var xmlDom = laya.net.Loader.getRes("xml/notice.xml");
                    var rootNodes = xmlDom.firstChild;
                    for (var i = 0, count = rootNodes.childNodes.length; i < count; i++) {
                        var node = rootNodes.childNodes[i];
                        ConfigMananger.noticeData.push({
                            id: node.getAttribute("id"),
                            title: node.getAttribute("title"),
                            info: node.getAttribute("info")
                        });
                    }
                };
                ConfigMananger.getNotice = function () {
                    return ConfigMananger.noticeData;
                };
                ConfigMananger.roleData = [];
                ConfigMananger.npcData = [];
                ConfigMananger.itemData = [];
                ConfigMananger.guideData = [];
                ConfigMananger.noticeData = [];
                return ConfigMananger;
            }());
            sample2.ConfigMananger = ConfigMananger;
        })(sample2 = yh.sample2 || (yh.sample2 = {}));
    })(yh = cn.yh || (cn.yh = {}));
})(cn || (cn = {}));
//# sourceMappingURL=configMananger.js.map