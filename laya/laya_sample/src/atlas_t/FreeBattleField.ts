/**
* name 
*/
module cn.yh.sample.battle {
	import Event = Laya.Event;

	export class FreeBattleField {

		private allUnit: Array<Character> = [];
		private mainCharacter: MainCharacter;

		constructor() {
			Laya.loader.load(
				[
					"res/atlas/player/boy.atlas",
					"res/atlas/player/girl.atlas",
					"res/atlas/player/wyd.atlas",
					"res/atlas/player/yd.atlas"
				],
				Laya.Handler.create(this, this.onLoaded));

			Laya.timer.frameLoop(1, this, this.gameTick);
		}

		private onLoaded(): void {
			this.mainCharacter = new MainCharacter("girl_ani.ani", 280, 620);
			Laya.stage.addChild(this.mainCharacter);
			this.allUnit.push(this.mainCharacter);

			Laya.stage.on(Laya.Event.CLICK, this, this.checkHit);
		}

		private checkHit(e: Event): void {
			console.log("鼠标点击事件：" + e.currentTarget.mouseX + "," + e.currentTarget.mouseY);
			this.mainCharacter.moveToTarget(e.currentTarget.mouseX, e.currentTarget.mouseY);	
		}


		private gameTick(): void {
			for (var i: number = 0; i < this.allUnit.length; i++) {
				this.allUnit[i].update();
			}
		}
	}

	class MainCharacter extends Character {
		constructor(ani_name: string, x: number, y: number) {
			super(ani_name, x, y, null);
		}

		public moveToTarget(targetX: number, targetY: number): void {
			var curPos: Laya.Point = new Laya.Point(this.x, this.y);
			var distance: number = curPos.distance(targetX, targetY);
			var duration: number = distance / this.moveSpeed * 1000;
			var dirFlag: boolean = targetX > this.x;
			this.playMoveDir(dirFlag);
			Laya.Tween.to(this, { x: targetX - 48, y: targetY - 48 }, duration, null, Laya.Handler.create(this, this.onMoveEnd, [dirFlag]));		
		}

		private onMoveEnd(dirFlag: boolean): void {
			this.playIdleDir(dirFlag);
		}

		public createHpBar(): void {
			// 不创建血条
		}

		public playMove(): void {
			this.playMoveDir(true);
		}

		private playMoveDir(dirFlag: boolean): void {
			if (dirFlag) {
			this.animation.play(0, true, "move");
			} else {
				this.animation.play(0, true, "move_left");
			}
		}

		public playBack(): void {
			// if (this.camp == Camp.LEFT) {
			// 	this.animation.play(0, true, "move_left");
			// } else if (this.camp == Camp.RIGHT) {
			// 	this.animation.play(0, true, "move");
			// }
		}

		public playIdle() {
			this.animation.play(0, true, "idle");
		}

		public playIdleDir(dirFlag: boolean): void {
			if(dirFlag){
				this.animation.play(0, true, "idle");
			} else {
				this.animation.play(0, true, "idle_left");
			}
		}

		public playAttack(): void {
			// if (this.camp == Camp.LEFT) {
			// 	this.animation.play(0, true, "attack");
			// } else if (this.camp == Camp.RIGHT) {
			// 	this.animation.play(0, true, "attack_left");
			// }
		}


	}
}