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
var cn;
(function (cn) {
    var yh;
    (function (yh) {
        var sample;
        (function (sample) {
            var battle;
            (function (battle) {
                var BattleField = /** @class */ (function () {
                    function BattleField() {
                        this.characters = [];
                        this.monsters = [];
                        this.allUnit = [];
                        this.curTurnIndex = 0;
                        Laya.stage.loadImage("bg/bg.jpg", 0, 0, 1280, 768);
                        Laya.loader.load([
                            "res/atlas/player/boy.atlas",
                            "res/atlas/player/girl.atlas",
                            "res/atlas/player/wyd.atlas",
                            "res/atlas/player/yd.atlas",
                            "res/atlas/comp.atlas",
                            "res/ui/ui_shule.png",
                            "res/ui/ui_yingle.png"
                        ], Laya.Handler.create(this, this.onLoaded));
                        Laya.timer.frameLoop(1, this, this.gameTick);
                        this.dialogMgr = new cn.yh.sample.dialog.DialogMgr();
                    }
                    BattleField.prototype.onLoaded = function () {
                        this.initCharacter();
                        this.initEnemy();
                        for (var i = 0; i < this.allUnit.length; i++) {
                            this.allUnit[i].on("battleEnd", this, this.DisplayBattleEndDialog);
                        }
                    };
                    BattleField.prototype.DisplayBattleEndDialog = function (result) {
                        var dialog = this.dialogMgr.BattleFinishedDialog(result);
                        dialog.pos((Laya.stage.width - dialog.width) / 2, (Laya.stage.height - dialog.height) / 2);
                        dialog.on(Laya.Event.CLICK, this, this.continueGame, [dialog]);
                        Laya.stage.addChild(dialog);
                    };
                    BattleField.prototype.continueGame = function (e) {
                        e.close();
                        this.recoverCamp(Camp.LEFT);
                        this.recoverCamp(Camp.RIGHT);
                        this.charAttack();
                    };
                    BattleField.prototype.initCharacter = function () {
                        var boy;
                        boy = new Character("boy_ani.ani", 280, 220, Camp.LEFT);
                        Laya.stage.addChild(boy);
                        this.characters.push(boy);
                        var wyd;
                        wyd = new Character("wyd_ani.ani", 280, 420, Camp.LEFT);
                        Laya.stage.addChild(wyd);
                        this.characters.push(wyd);
                        var mm;
                        mm = new Character("girl_ani.ani", 280, 620, Camp.LEFT);
                        Laya.stage.addChild(mm);
                        this.characters.push(mm);
                        this.allUnit.push(boy);
                        this.allUnit.push(wyd);
                        this.allUnit.push(mm);
                    };
                    BattleField.prototype.initEnemy = function () {
                        var enemy1;
                        enemy1 = new Character("yd_ani.ani", 880, 220, Camp.RIGHT);
                        Laya.stage.addChild(enemy1);
                        this.monsters.push(enemy1);
                        var enemy2;
                        enemy2 = new Character("yd_ani.ani", 880, 420, Camp.RIGHT);
                        Laya.stage.addChild(enemy2);
                        this.monsters.push(enemy2);
                        var enemy3;
                        enemy3 = new Character("yd_ani.ani", 880, 620, Camp.RIGHT);
                        Laya.stage.addChild(enemy3);
                        this.monsters.push(enemy3);
                        this.allUnit.push(enemy1);
                        this.allUnit.push(enemy2);
                        this.allUnit.push(enemy3);
                    };
                    BattleField.prototype.charAttack = function () {
                        var character;
                        do {
                            this.curTurnIndex = this.nextTurnIndex();
                        } while ((character = this.allUnit[this.curTurnIndex]) == null || !character.isAlive);
                        character.isInTurn = true;
                        var enemy;
                        if (character.camp == Camp.LEFT) {
                            enemy = character.selectTarget(this.monsters);
                        }
                        else {
                            enemy = character.selectTarget(this.characters);
                        }
                        // 獲取目標為空，檢測是否敵對陣營全都死亡
                        if (enemy == null) {
                            // if(this.checkAllDead(character.camp == Camp.LEFT ? Camp.RIGHT : Camp.LEFT)) {
                            // 	this.recoverCamp(character.camp == Camp.LEFT ? Camp.RIGHT : Camp.LEFT);
                            // }
                            // this.charAttack();
                            var result = (character.camp === 0) ? true : false;
                            character.event("battleEnd", result);
                            return;
                        }
                        character.attack(enemy);
                    };
                    BattleField.prototype.checkAllDead = function (camp) {
                        if (camp == Camp.LEFT) {
                            for (var i = 0; i < this.characters.length; i++) {
                                if (this.characters[i].isAlive) {
                                    return false;
                                }
                            }
                        }
                        else {
                            for (var i = 0; i < this.monsters.length; i++) {
                                if (this.monsters[i].isAlive) {
                                    return false;
                                }
                            }
                        }
                        return true;
                    };
                    BattleField.prototype.recoverCamp = function (camp) {
                        if (camp == Camp.LEFT) {
                            for (var i = 0; i < this.characters.length; i++) {
                                this.characters[i].recoverHp();
                            }
                        }
                        else {
                            for (var i = 0; i < this.monsters.length; i++) {
                                this.monsters[i].recoverHp();
                            }
                        }
                    };
                    BattleField.prototype.nextTurnIndex = function () {
                        return (++this.curTurnIndex) % (this.allUnit.length);
                    };
                    BattleField.prototype.gameTick = function () {
                        var character;
                        if ((character = this.allUnit[this.curTurnIndex]) != null) {
                            if (!character.isInTurn) {
                                this.charAttack();
                            }
                        }
                        for (var i = 0; i < this.characters.length; i++) {
                            this.characters[i].update();
                        }
                        for (var i = 0; i < this.monsters.length; i++) {
                            this.monsters[i].update();
                        }
                    };
                    return BattleField;
                }());
                battle.BattleField = BattleField;
                var Camp;
                (function (Camp) {
                    Camp[Camp["LEFT"] = 0] = "LEFT";
                    Camp[Camp["RIGHT"] = 1] = "RIGHT";
                })(Camp || (Camp = {}));
                var CharacterState;
                (function (CharacterState) {
                    CharacterState[CharacterState["IDLE"] = 0] = "IDLE";
                    CharacterState[CharacterState["MOVE"] = 1] = "MOVE";
                    CharacterState[CharacterState["MOVE_TO_TARGET"] = 2] = "MOVE_TO_TARGET";
                    CharacterState[CharacterState["ATTACK"] = 3] = "ATTACK";
                    CharacterState[CharacterState["BACK_TO_SRC"] = 4] = "BACK_TO_SRC";
                    CharacterState[CharacterState["LOCK"] = 5] = "LOCK";
                })(CharacterState || (CharacterState = {}));
                var Character = /** @class */ (function (_super) {
                    __extends(Character, _super);
                    function Character(ani_name, x, y, camp) {
                        var _this = _super.call(this) || this;
                        _this.ani_path = "player_ani/";
                        _this.moveSpeed = 200;
                        _this.phyAttack = 100;
                        _this.offset = 55;
                        _this.hpValue = 100;
                        _this.isAlive = true;
                        _this.state = CharacterState.IDLE;
                        _this.x = x;
                        _this.y = y;
                        _this.camp = camp;
                        _this.offset = camp == Camp.LEFT ? 55 : -55;
                        _this.createAnimation(ani_name);
                        _this.createHpBar();
                        _this.createLable();
                        return _this;
                    }
                    Character.prototype.createAnimation = function (ani_name) {
                        var ani_url = this.ani_path + ani_name;
                        this.animation = new Laya.Animation();
                        this.animation.loadAnimation(ani_url);
                        this.animation.interval = 70;
                        this.addChild(this.animation);
                        this.animation.on(Laya.Event.LABEL, this, this.onAniLabel);
                        this.playIdle();
                    };
                    Character.prototype.createHpBar = function () {
                        this.hpBar = new HpBar(this.hpValue);
                        this.hpBar.x = 20;
                        this.addChild(this.hpBar);
                    };
                    Character.prototype.createLable = function () {
                        this.lable = new Laya.Text();
                        this.lable.text = this.isAlive ? "alive" : "dead";
                        this.lable.color = "green";
                        this.lable.fontSize = 18;
                        this.lable.x = 25;
                        this.lable.y = -20;
                        this.addChild(this.lable);
                    };
                    Character.prototype.switchState = function (state) {
                        this.state = state;
                        if (this.state == CharacterState.MOVE_TO_TARGET) {
                            this.playMove();
                            Laya.Tween.to(this, { x: this.target.x - this.offset, y: this.target.y }, 1000, null, Laya.Handler.create(this, this.onMoveToTarget));
                        }
                        else if (this.state == CharacterState.BACK_TO_SRC) {
                            this.playBack();
                            Laya.Tween.to(this, { x: this.srcX, y: this.srcY }, 1000, null, Laya.Handler.create(this, this.onBackToSrc));
                        }
                        else if (this.state == CharacterState.IDLE) {
                            this.target = null;
                            this.srcX = 0;
                            this.srcY = 0;
                            this.playIdle();
                        }
                        else if (this.state == CharacterState.ATTACK) {
                            this.playAttack();
                        }
                    };
                    Character.prototype.onAniLabel = function (e) {
                        console.log("e = " + e);
                        if (e == "attack_end") {
                            this.switchState(CharacterState.BACK_TO_SRC);
                            if (this.target != null) {
                                this.target.beAttacked(this.phyAttack);
                            }
                        }
                    };
                    Character.prototype.onMoveToTarget = function () {
                        this.switchState(CharacterState.ATTACK);
                    };
                    Character.prototype.onBackToSrc = function () {
                        this.isInTurn = false;
                        this.switchState(CharacterState.IDLE);
                    };
                    Character.prototype.update = function () {
                    };
                    Character.prototype.selectTarget = function (enemys) {
                        var index = -1;
                        if (enemys == null || enemys.length <= 0) {
                            return null;
                        }
                        var indexs = [];
                        for (var i = 0; i < enemys.length; i++) {
                            var enemy = enemys[i];
                            if (!enemy.isAlive) {
                                continue;
                            }
                            indexs.push(i);
                        }
                        if (indexs.length == 0) {
                            return null;
                        }
                        var fee = indexs.length;
                        index = Math.floor(Math.random() * fee);
                        return enemys[indexs[index]];
                    };
                    Character.prototype.beAttacked = function (hitValue) {
                        this.hpValue = this.hpValue - hitValue < 0 ? 0 : this.hpValue - hitValue;
                        this.hpBar.onChange(this.hpValue);
                        return this.onDeadTrigger();
                    };
                    Character.prototype.recoverHp = function () {
                        this.hpValue = 100;
                        this.isAlive = true;
                        this.lable.text = "alive";
                        this.lable.color = "green";
                        this.hpBar.onChange(this.hpValue);
                    };
                    Character.prototype.onDeadTrigger = function () {
                        if (this.hpValue <= 0) {
                            this.isAlive = false;
                            this.lable.text = "dead";
                            this.lable.color = "red";
                        }
                        return this.isAlive;
                    };
                    Character.prototype.attack = function (targetCharacter) {
                        this.target = targetCharacter;
                        this.srcX = this.x;
                        this.srcY = this.y;
                        this.switchState(CharacterState.MOVE_TO_TARGET);
                    };
                    Character.prototype.playMove = function () {
                        if (this.camp == Camp.LEFT) {
                            this.animation.play(0, true, "move");
                        }
                        else if (this.camp == Camp.RIGHT) {
                            this.animation.play(0, true, "move_left");
                        }
                    };
                    Character.prototype.playBack = function () {
                        if (this.camp == Camp.LEFT) {
                            this.animation.play(0, true, "move_left");
                        }
                        else if (this.camp == Camp.RIGHT) {
                            this.animation.play(0, true, "move");
                        }
                    };
                    Character.prototype.playIdle = function () {
                        if (this.camp == Camp.LEFT) {
                            this.animation.play(0, true, "idle");
                        }
                        else if (this.camp == Camp.RIGHT) {
                            this.animation.play(0, true, "idle_left");
                        }
                    };
                    Character.prototype.playAttack = function () {
                        if (this.camp == Camp.LEFT) {
                            this.animation.play(0, true, "attack");
                        }
                        else if (this.camp == Camp.RIGHT) {
                            this.animation.play(0, true, "attack_left");
                        }
                    };
                    return Character;
                }(Laya.Sprite));
                battle.Character = Character;
                var HpBar = /** @class */ (function (_super) {
                    __extends(HpBar, _super);
                    function HpBar(hpValue) {
                        var _this = _super.call(this) || this;
                        _this.hpTotalValue = hpValue;
                        _this.hpCurrValue = hpValue;
                        Laya.loader.load([
                            "res/ui/progress.png",
                            "res/ui/progress$bar.png"
                        ], Laya.Handler.create(_this, _this.OnLoadComplete));
                        return _this;
                    }
                    HpBar.prototype.OnLoadComplete = function () {
                        this.processBar = new Laya.ProgressBar("res/ui/progress.png");
                        this.processBar.value = 1;
                        this.processBar.width = 80;
                        this.processBar.height = 10;
                        this.lable = new Laya.Text();
                        this.lable.text = this.hpCurrValue.toString();
                        this.lable.fontSize = 12;
                        this.lable.align = Laya.Stage.ALIGN_CENTER;
                        this.lable.x = 33;
                        this.lable.y = -1;
                        this.processBar.addChild(this.lable);
                        // this.processBar.changeHandler = new Laya.Handler(this, this.onChange);  递归了
                        this.addChild(this.processBar);
                    };
                    HpBar.prototype.onChange = function (value) {
                        this.hpCurrValue = value;
                        this.lable.text = this.hpCurrValue.toString();
                        this.processBar.value = this.hpCurrValue / 100;
                    };
                    return HpBar;
                }(Laya.Sprite));
            })(battle = sample.battle || (sample.battle = {}));
        })(sample = yh.sample || (yh.sample = {}));
    })(yh = cn.yh || (cn.yh = {}));
})(cn || (cn = {}));
//# sourceMappingURL=BattleField.js.map