/**
* name
*/
var cn;
(function (cn) {
    var yh;
    (function (yh) {
        var sample2;
        (function (sample2) {
            var game;
            (function (game) {
                var gameMain = /** @class */ (function () {
                    function gameMain(isFirst) {
                        this.soundsPath = "sounds/bg/bgm.WAV";
                        this.npcData = [];
                        this.guideData = [];
                        this.sayTextArray = [];
                        this.rListData = [];
                        this.tweenCount = 0;
                        this.bomListData = [];
                        this.isFirstLogin = isFirst ? true : false;
                        if (this.isFirstLogin) {
                            this.initNpcData();
                            this.initGuideData();
                            this.initGuide();
                            this.playStory(1);
                        }
                        else {
                            this.initGameMain();
                            this.initBgSound();
                        }
                    }
                    //guide
                    gameMain.prototype.initNpcData = function () {
                        this.npcData = sample2.ConfigMananger.getNpc();
                    };
                    gameMain.prototype.initGuideData = function () {
                        this.guideData = sample2.ConfigMananger.getGuide();
                    };
                    gameMain.prototype.getNpc = function (id) {
                        var result;
                        for (var i = 0; i < this.npcData.length; i++) {
                            if (this.npcData[i].id == id) {
                                result = this.npcData[i];
                            }
                        }
                        return result;
                    };
                    gameMain.prototype.getGuide = function (id) {
                        var result;
                        for (var i = 0; i < this.guideData.length; i++) {
                            if (this.guideData[i].id == id) {
                                result = this.guideData[i];
                            }
                        }
                        return result;
                    };
                    gameMain.prototype.initGuide = function () {
                        this.guide = new ui.gameMain.guideUI();
                        Laya.stage.addChild(this.guide);
                    };
                    gameMain.prototype.removeSayText = function () {
                        while (this.sayTextArray.length > 0) {
                            this.sayTextArray.pop().removeSelf();
                            if (this.sayTextArray.length == 0)
                                return;
                        }
                    };
                    gameMain.prototype.playStory = function (sId) {
                        if (sId == -1) {
                            this.guide.removeSelf();
                            this.initGameMain();
                            return;
                        }
                        this.tweenCount = 0;
                        this.removeSayText();
                        var story = this.getGuide(sId);
                        var say = story.say;
                        this.guide.lab_name.text = this.getNpc(story.npcId).name;
                        this.guide.img_head.skin = this.getNpc(story.npcId).headImg;
                        this.guide.btn_continue.visible = false;
                        this.guide.btn_continue.on(laya.events.Event.CLICK, this, this.playStory, [story.nextId]);
                        var x_offset = 140;
                        var wMax = 270;
                        var line = 0;
                        var rMax;
                        for (var i = 0, len = say.length; i < len; ++i) {
                            var letterText = this.createLetter(say.charAt(i));
                            this.sayTextArray.push(letterText);
                            rMax || (rMax = Math.ceil(wMax / letterText.width));
                            letterText.x = line == 0 ? letterText.width * i + x_offset : letterText.width * (i - rMax * line) + x_offset;
                            if (letterText.x - x_offset > wMax) {
                                line += 1;
                                letterText.x = letterText.width * (i - rMax * line) + x_offset;
                            }
                            letterText.y = this.guide.img_sayBg.y + 10 + letterText.height * line;
                            laya.utils.Tween.to(letterText, { alpha: 1, scaleX: 1 }, 5, null, laya.utils.Handler.create(this, this.tweenCompleted, [say.length]), i * 5);
                        }
                    };
                    gameMain.prototype.createLetter = function (char) {
                        var letter = new laya.display.Text();
                        letter.alpha = 0;
                        letter.text = char;
                        letter.color = "yellow";
                        letter.font = "Impact";
                        letter.fontSize = 20;
                        letter.scaleX = 0.5;
                        letter.wordWrap = true;
                        Laya.stage.addChild(letter);
                        return letter;
                    };
                    gameMain.prototype.tweenCompleted = function (len) {
                        this.tweenCount += 1;
                        if (this.tweenCount == len) {
                            this.guide.btn_continue.visible = true;
                        }
                    };
                    //  gameMain
                    gameMain.prototype.onRListSelect = function (index) {
                        var n = this.gameMain.rList.getCell(index);
                        var np = new Laya.Point(n.x, n.y + n.height * .5);
                        var changedPoint = n.localToGlobal(new Laya.Point(np.x, np.y));
                        var redP = new laya.display.Sprite();
                        redP.graphics.drawCircle(changedPoint.x, changedPoint.y, 5, "blue");
                        Laya.stage.addChild(redP);
                        console.log(changedPoint);
                    };
                    gameMain.prototype.onBListSelect = function (index) {
                        var n = this.gameMain.bomList.getCell(index);
                        var np = new Laya.Point(n.x, n.y + n.height * .5);
                        var changedPoint = n.localToGlobal(new Laya.Point(np.x, np.y));
                        var redP = new laya.display.Sprite();
                        redP.graphics.drawCircle(changedPoint.x, changedPoint.y, 5, "green");
                        Laya.stage.addChild(redP);
                        console.log(changedPoint);
                    };
                    gameMain.prototype.initGameMain = function () {
                        this.gameMain = new ui.gameMain.gameMainUI();
                        this.gameMain.btn_system.on(Laya.Event.CLICK, this, this.initSystem);
                        Laya.stage.addChild(this.gameMain);
                        this.gameMain.rList.selectEnable = true;
                        this.gameMain.rList.selectHandler = new Laya.Handler(this, this.onRListSelect);
                        this.gameMain.rList.renderHandler = new Laya.Handler(this, this.updateItem);
                        this.rListData.push({ msg: "活动", fun: this.onClickHuoDong });
                        this.rListData.push({ msg: "礼包", fun: this.onClickLiBao });
                        this.rListData.push({ msg: "福利", fun: this.onClickFuLi });
                        this.rListData.push({ msg: "签到", fun: this.onClickQianDao });
                        this.rListData.push({ msg: "分享", fun: this.onClickFenXiang });
                        this.gameMain.rList.array = this.rListData;
                        this.gameMain.bomList.selectEnable = true;
                        this.bomListData.push({ msg: "背包1", fun: this.onClickBag });
                        this.bomListData.push({ msg: "背包2", fun: this.onClickBag });
                        this.bomListData.push({ msg: "背包3", fun: this.onClickBag });
                        this.bomListData.push({ msg: "背包4", fun: this.onClickBag });
                        this.gameMain.bomList.array = this.bomListData;
                        this.gameMain.bomList.selectHandler = new Laya.Handler(this, this.onBListSelect);
                        this.gameMain.bomList.renderHandler = new Laya.Handler(this, this.updateItem);
                        if (this.isFirstLogin) {
                            // let getItem : ui.dialog.getItemUI = new ui.dialog.getItemUI();
                            // Laya.stage.addChild(getItem);
                            // getItem.pos(Laya.stage.width-getItem.width >>1,Laya.stage.height-getItem.height>>1);
                            var sp_1 = new laya.display.Sprite();
                            sp_1.loadImage("picture/ui/lianhua.png");
                            Laya.stage.addChild(sp_1);
                            sp_1.size(50, 50);
                            sp_1.pos(Laya.stage.width - sp_1.width >> 1, Laya.stage.height - sp_1.height >> 1);
                            var n = this.gameMain.bomList.getCell(0);
                            var bagStagePoint = n.localToGlobal(new Laya.Point(n.x, n.y));
                            console.log("bagStagePoint:" + bagStagePoint);
                            var redP = new laya.display.Sprite();
                            redP.graphics.drawCircle(bagStagePoint.x, bagStagePoint.y, 5, "red");
                            Laya.stage.addChild(redP);
                            laya.utils.Tween.to(sp_1, { x: bagStagePoint.x, y: bagStagePoint.y, scaleX: 0, scaleY: 0, alpha: .3 }, 1000, null, laya.utils.Handler.create(this, function () { sp_1.visible = false; }), 2000);
                        }
                        else {
                        }
                    };
                    gameMain.prototype.onClickBag = function () {
                        console.log("点击了--背包");
                    };
                    gameMain.prototype.onClickHuoDong = function () {
                        console.log("点击了--活动");
                    };
                    gameMain.prototype.onClickLiBao = function () {
                        console.log("点击了--礼包");
                    };
                    gameMain.prototype.onClickFuLi = function () {
                        console.log("点击了--福利");
                    };
                    gameMain.prototype.onClickQianDao = function () {
                        console.log("点击了--签到");
                    };
                    gameMain.prototype.onClickFenXiang = function () {
                        console.log("点击了--分享");
                    };
                    gameMain.prototype.updateItem = function (cell, index) {
                        var btn = cell.getChildByName("btn");
                        //cell.pivot(.5,.5);
                        btn.label = cell.dataSource.msg;
                        btn.on(Laya.Event.CLICK, this, cell.dataSource.fun);
                    };
                    gameMain.prototype.initBgSound = function () {
                        this.soundChannel = Laya.SoundManager.playMusic(this.soundsPath, 0);
                    };
                    gameMain.prototype.quitGame = function () {
                        this.system.removeSelf();
                        this.gameMain.removeSelf();
                        Laya.SoundManager.destroySound(this.soundsPath);
                        new cn.yh.sample2.main.Main();
                    };
                    //system
                    gameMain.prototype.initSystem = function () {
                        this.showMask();
                        this.system = new ui.gameMain.systemUI();
                        Laya.stage.addChild(this.system);
                        this.system.box_sys.pos(Laya.stage.width >> 1, Laya.stage.height - this.system.height - 150);
                        this.system.box_sys.pivot(this.system.box_sys.width >> 1, this.system.box_sys.height >> 1);
                        this.system.btn_sound.on(Laya.Event.CLICK, this, this.soundState);
                        this.system.btn_close.on(Laya.Event.CLICK, this, this.closeSystem);
                        this.system.btn_quit.on(Laya.Event.CLICK, this, this.quitGame);
                        this.switchSoundSkin();
                        //隐藏
                        Laya.Tween.to(this.gameMain.box_bottom, { "y": this.gameMain.box_bottom.y + 100, "scaleY": 0, "alpha": 0 }, 300);
                        Laya.Tween.to(this.gameMain.box_lup, { "scaleX": 0, "scaleY": 0, "alpha": 0 }, 300);
                        Laya.Tween.to(this.gameMain.box_rup, { "scaleX": 0, "scaleY": 0, "alpha": 0 }, 300);
                    };
                    gameMain.prototype.showMask = function () {
                        this.maskArea = cn.yh.sample2.utility.createMask();
                        Laya.stage.addChild(this.maskArea);
                        this.maskArea.on(Laya.Event.MOUSE_DOWN, this, this.maskStopPropagation);
                    };
                    gameMain.prototype.closeSystem = function () {
                        Laya.Tween.to(this.system, { "scaleX": 0, "scaleY": 0, "alpha": 0 }, 300);
                        this.system.visible = false;
                        this.system.removeSelf();
                        this.maskArea.visible = false;
                        this.maskArea.removeSelf();
                        Laya.Tween.to(this.gameMain.box_bottom, { "y": this.gameMain.box_bottom.y - 100, "scaleY": 1, "alpha": 1 }, 300);
                        Laya.Tween.to(this.gameMain.box_lup, { "scaleX": 1, "scaleY": 1, "alpha": 1 }, 300);
                        Laya.Tween.to(this.gameMain.box_rup, { "scaleX": 1, "scaleY": 1, "alpha": 1 }, 300);
                    };
                    gameMain.prototype.maskStopPropagation = function (e) {
                        e.stopPropagation();
                    };
                    //sound
                    gameMain.prototype.soundState = function () {
                        this.soundChannel.isStopped ? this.soundChannel.play() : this.soundChannel.pause();
                        this.switchSoundSkin();
                    };
                    gameMain.prototype.switchSoundSkin = function () {
                        var path = this.soundChannel.isStopped ? "picture/ui/ui_guan.png" : "picture/ui/ui_kai.png";
                        this.system.btn_sound.skin = path;
                    };
                    return gameMain;
                }());
                game.gameMain = gameMain;
            })(game = sample2.game || (sample2.game = {}));
        })(sample2 = yh.sample2 || (yh.sample2 = {}));
    })(yh = cn.yh || (cn.yh = {}));
})(cn || (cn = {}));
//# sourceMappingURL=gameMain.js.map