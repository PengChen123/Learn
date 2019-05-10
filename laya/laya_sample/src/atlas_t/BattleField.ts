module cn.yh.sample.battle {
    export class BattleField {
        private characters: Array<Character> = [];
		private monsters: Array<Character> = [];
		private allUnit: Array<Character> = [];
		
        private curTurnIndex: number = 0;
        public dialogMgr:cn.yh.sample.dialog.DialogMgr;
        constructor() {

            Laya.stage.loadImage("bg/bg.jpg", 0, 0, 1280, 768);

			Laya.loader.load(
				[
					"res/atlas/player/boy.atlas",
					"res/atlas/player/girl.atlas",
					"res/atlas/player/wyd.atlas",
					"res/atlas/player/yd.atlas",
					"res/atlas/comp.atlas",
					"res/ui/ui_shule.png",
					"res/ui/ui_yingle.png"
				],
				Laya.Handler.create(this, this.onLoaded));
				
			Laya.timer.frameLoop(1, this, this.gameTick);
			this.dialogMgr=new cn.yh.sample.dialog.DialogMgr();
        }

        private onLoaded(): void {
			this.initCharacter();
			this.initEnemy();
			for(var i:number = 0;i<this.allUnit.length;i++){
				this.allUnit[i].on("battleEnd",this,this.DisplayBattleEndDialog);
			}	
		}
		private DisplayBattleEndDialog(result:boolean) {
			
			let dialog:Laya.Dialog=this.dialogMgr.BattleFinishedDialog(result);
			dialog.pos((Laya.stage.width-dialog.width)/2,(Laya.stage.height-dialog.height)/2);
			dialog.on(Laya.Event.CLICK,this,this.continueGame,[dialog]);
			Laya.stage.addChild(dialog);
		}

		private continueGame(e:Laya.Dialog){

			e.close();
			this.recoverCamp(Camp.LEFT);
			this.recoverCamp(Camp.RIGHT);
			this.charAttack();
		}

		private initCharacter(): void {
			var boy: Character;
			boy = new Character("boy_ani.ani", 280, 220, Camp.LEFT);
			Laya.stage.addChild(boy);
			this.characters.push(boy);

			var wyd: Character;
			wyd = new Character("wyd_ani.ani", 280, 420, Camp.LEFT);
			Laya.stage.addChild(wyd);
			this.characters.push(wyd);

			var mm: Character;
			mm = new Character("girl_ani.ani", 280, 620, Camp.LEFT);
			Laya.stage.addChild(mm);
			this.characters.push(mm);

			this.allUnit.push(boy);
			this.allUnit.push(wyd);
			this.allUnit.push(mm);
		}

		private initEnemy(): void {
			var enemy1: Character;
			enemy1 = new Character("yd_ani.ani", 880, 220, Camp.RIGHT);
			Laya.stage.addChild(enemy1);
			this.monsters.push(enemy1);

			var enemy2: Character;
			enemy2 = new Character("yd_ani.ani", 880, 420, Camp.RIGHT);
			Laya.stage.addChild(enemy2);
			this.monsters.push(enemy2);

			var enemy3: Character;
			enemy3 = new Character("yd_ani.ani", 880, 620, Camp.RIGHT);
			Laya.stage.addChild(enemy3);
			this.monsters.push(enemy3);

			this.allUnit.push(enemy1);
			this.allUnit.push(enemy2);
			this.allUnit.push(enemy3);
		}

		private charAttack(): void {
			var character: Character;
			do {
				this.curTurnIndex = this.nextTurnIndex();
			} while ((character = this.allUnit[this.curTurnIndex]) == null || !character.isAlive);

			character.isInTurn = true;
			var enemy: Character;
			if (character.camp == Camp.LEFT) {
				enemy = character.selectTarget(this.monsters);
			} else {
				enemy = character.selectTarget(this.characters);
			}

			// 獲取目標為空，檢測是否敵對陣營全都死亡
			if(enemy == null) {
				// if(this.checkAllDead(character.camp == Camp.LEFT ? Camp.RIGHT : Camp.LEFT)) {
				// 	this.recoverCamp(character.camp == Camp.LEFT ? Camp.RIGHT : Camp.LEFT);
				// }
				// this.charAttack();
				let result:boolean=(character.camp===0)?true:false;
				character.event("battleEnd",result);
				return;
			}

			character.attack(enemy);
		}

		private checkAllDead(camp: Camp): boolean {
			if (camp == Camp.LEFT) {
				for(var i: number = 0; i<this.characters.length; i++ ){
					if(this.characters[i].isAlive){
						return false;
					}
				}
			} else {
				for(var i: number = 0; i<this.monsters.length; i++ ){
					if(this.monsters[i].isAlive){
						return false;
					}
				}
			}
			return true;
		}

		private recoverCamp(camp: Camp): void {
			if (camp == Camp.LEFT) {
				for(var i: number = 0; i<this.characters.length; i++ ){
					this.characters[i].recoverHp();
				}
			} else {
				for(var i: number = 0; i<this.monsters.length; i++ ){
					this.monsters[i].recoverHp();
				}
			}
		}
		

		private nextTurnIndex(): number 
		{
			return (++this.curTurnIndex) % (this.allUnit.length);
		}

		private gameTick(): void 
		{
			var character: Character;
			if ((character = this.allUnit[this.curTurnIndex]) != null) {
				if (!character.isInTurn) {
					this.charAttack();
				}
			}

			for (var i: number = 0; i < this.characters.length; i++) {
				this.characters[i].update();
			}
			for (var i: number = 0; i < this.monsters.length; i++) {
				this.monsters[i].update();
			}
		}
		
		// private DisplayDialog(type:string,result:boolean){
		// 	let dialog:Laya.Dialog=new cn.yh.sample.dialog.Dialog(type,result).getDialog();
		// 	dialog.pos((Laya.stage.width-dialog.width)/2,(Laya.stage.height-dialog.height)/2);
		// 	Laya.stage.addChild(dialog);
		// }
	}

	enum Camp {
		LEFT = 0,
		RIGHT = 1
	}

	enum CharacterState {
		IDLE = 0,
		MOVE = 1,
		MOVE_TO_TARGET = 2,
		ATTACK = 3,
		BACK_TO_SRC = 4,
		LOCK = 5
	}

	export class Character extends Laya.Sprite {
		protected ani_path: string = "player_ani/";
		protected moveSpeed: number = 200;
		protected phyAttack: number = 100;
		protected offset: number = 55;
		protected animation: Laya.Animation;

		protected hpValue: number = 100;
		protected hpBar: HpBar;
		protected lable: Laya.Text;
		
		public camp: Camp;
		public isInTurn: boolean;
		public isAlive: boolean = true;

		// 攻击用到的参数
		protected target: Character;
		protected srcX: number;
		protected srcY: number;


		public state = CharacterState.IDLE;

		constructor(ani_name: string, x: number, y: number, camp: Camp) {
			super();
			this.x = x;
			this.y = y;
			this.camp = camp;
			this.offset = camp == Camp.LEFT ? 55 : -55;
			this.createAnimation(ani_name);
			this.createHpBar();
			this.createLable();
		}

		protected createAnimation(ani_name: string): void {
			var ani_url = this.ani_path + ani_name;
			this.animation = new Laya.Animation();
			this.animation.loadAnimation(ani_url);
			this.animation.interval = 70;
			this.addChild(this.animation);
			this.animation.on(Laya.Event.LABEL, this, this.onAniLabel);
			this.playIdle();
		}

		protected createHpBar(): void {
			this.hpBar = new HpBar(this.hpValue);
			this.hpBar.x = 20;
			this.addChild(this.hpBar);
		}

		protected createLable(): void {
			this.lable = new Laya.Text();
			this.lable.text = this.isAlive ? "alive" : "dead";
			this.lable.color = "green";
			this.lable.fontSize = 18;
			this.lable.x = 25;
			this.lable.y = -20;
			this.addChild(this.lable);
		}

		public switchState(state: CharacterState): void 
		{
			this.state = state;
			if (this.state == CharacterState.MOVE_TO_TARGET) {
				this.playMove();
				Laya.Tween.to(this, { x: this.target.x - this.offset, y: this.target.y }, 1000, null, Laya.Handler.create(this, this.onMoveToTarget));
			} else if (this.state == CharacterState.BACK_TO_SRC) {
				this.playBack();
				Laya.Tween.to(this, { x: this.srcX, y: this.srcY }, 1000, null, Laya.Handler.create(this, this.onBackToSrc));
			} else if (this.state == CharacterState.IDLE) {
				this.target = null;
				this.srcX = 0;
				this.srcY = 0;
				this.playIdle();
			} else if (this.state == CharacterState.ATTACK) {
				this.playAttack();
			}
		}


		private onAniLabel(e: string) {
			console.log("e = " + e);
			if (e == "attack_end") {
				this.switchState(CharacterState.BACK_TO_SRC);
				if (this.target != null) {
					this.target.beAttacked(this.phyAttack);
				}
			}
		}

		private onMoveToTarget(): void {
			this.switchState(CharacterState.ATTACK);
		}

		private onBackToSrc(): void {
			this.isInTurn = false;
			this.switchState(CharacterState.IDLE);
		}

		public update(): void {
			
		}

		public selectTarget(enemys: Character[]): Character 
		{
			var index: number = -1;
			if (enemys == null || enemys.length <= 0) {
				return null;
			}

			var indexs: Array<number> = [];
			for(var i: number = 0; i < enemys.length; i++) {
				var enemy: Character = enemys[i];
				if (!enemy.isAlive) {
					continue;
				}
				indexs.push(i);
			}

			if (indexs.length == 0) {
				return null;
			}

			var fee: number = indexs.length;
			index = Math.floor(Math.random() * fee);

			return enemys[indexs[index]];
		}

		public beAttacked(hitValue:number): boolean
		{	
			this.hpValue = this.hpValue - hitValue < 0 ? 0 : this.hpValue - hitValue;
			this.hpBar.onChange(this.hpValue);
			return this.onDeadTrigger();
		}

		public recoverHp():void
		{
			this.hpValue = 100;
			this.isAlive = true;
			this.lable.text = "alive";
			this.lable.color = "green";
			this.hpBar.onChange(this.hpValue);
		}

		private onDeadTrigger(): boolean {
			if(this.hpValue <= 0) {
				this.isAlive = false;
				this.lable.text = "dead";
				this.lable.color = "red";
			}
			return this.isAlive;
		}

		public attack(targetCharacter: Character): void {
			this.target = targetCharacter;
			this.srcX = this.x;
			this.srcY = this.y;
			this.switchState(CharacterState.MOVE_TO_TARGET);
		}

		public playMove(): void {
			if (this.camp == Camp.LEFT) {
				this.animation.play(0, true, "move");
			} else if (this.camp == Camp.RIGHT) {
				this.animation.play(0, true, "move_left");
			}
		}

		public playBack(): void {
			if (this.camp == Camp.LEFT) {
				this.animation.play(0, true, "move_left");
			} else if (this.camp == Camp.RIGHT) {
				this.animation.play(0, true, "move");
			}
		}

		public playIdle(): void {
			if (this.camp == Camp.LEFT) {
				this.animation.play(0, true, "idle");
			} else if (this.camp == Camp.RIGHT) {
				this.animation.play(0, true, "idle_left");
			}
		}

		public playAttack(): void {
			if (this.camp == Camp.LEFT) {
				this.animation.play(0, true, "attack");
			} else if (this.camp == Camp.RIGHT) {
				this.animation.play(0, true, "attack_left");
			}
        }

	}

	class HpBar extends Laya.Sprite
	{
		private hpTotalValue: number;
		private hpCurrValue: number;
		private processBar: Laya.ProgressBar;
		private lable: Laya.Text;

		constructor(hpValue: number) 
		{
			super();
			this.hpTotalValue = hpValue;
			this.hpCurrValue = hpValue;
			Laya.loader.load(
				[
					"res/ui/progress.png",
					"res/ui/progress$bar.png"
				],
				Laya.Handler.create(this, this.OnLoadComplete));
		}

		private OnLoadComplete(): void
		{
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
		}

		public onChange(value: number): void
		{
			this.hpCurrValue = value;
			this.lable.text = this.hpCurrValue.toString();
			this.processBar.value = this.hpCurrValue/100;
		}
		
	}
}