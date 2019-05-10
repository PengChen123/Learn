/**
* name 
*/
module cn.yh.sample.ani {

	export class TimeAnimation {

		private enterBattleFieldBtn: Laya.Button;
		private battleField: cn.yh.sample.battle.BattleField;
		private freeBattle: cn.yh.sample.battle.FreeBattleField;

		constructor() {
			Laya.init(1280, 768, Laya.WebGL);

			Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
			Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;

			Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
			Laya.stage.screenMode = Laya.Stage.SCREEN_HORIZONTAL;
			Laya.stage.bgColor = "#232628";

			Laya.Stat.show();
			Laya.stage.loadImage("bg/background.jpg", 0, 0, 1280, 768);
			Laya.loader.load("res/atlas/comp.atlas", Laya.Handler.create(this, this.onUIAssetsLoaded));
			this.enterFreeBattleField();
		}

		private onUIAssetsLoaded(): void {
			this.enterBattleFieldBtn = this.createButton("comp/button.png");
			this.enterBattleFieldBtn.pos(Laya.stage.width - this.enterBattleFieldBtn.width >> 1, this.enterBattleFieldBtn.height >> 1);
			this.enterBattleFieldBtn.label = "进入战场";
			this.enterBattleFieldBtn.on(Laya.Event.CLICK, this, this.enterBattleField);
		}

		private createButton(skin: string): Laya.Button {
			var btn: Laya.Button = new Laya.Button(skin);
			btn.width = 150;
			btn.height = 70;
			btn.text.fontSize = 30;
            Laya.stage.addChild(btn);
            return btn;
        }
		
		public enterBattleField(): void {
			if (this.freeBattle != null) {
				Laya.stage.destroyChildren();
			}
			this.freeBattle = null;
			// ui
			this.onUIAssetsLoaded();
			this.enterBattleFieldBtn.label = "离开战场";
			this.enterBattleFieldBtn.off(Laya.Event.CLICK, this, this.enterBattleField);
			this.enterBattleFieldBtn.on(Laya.Event.CLICK, this, this.leaveBattleField);
			this.battleField = new cn.yh.sample.battle.BattleField();
		}

		public enterFreeBattleField(): void {
			this.freeBattle = new cn.yh.sample.battle.FreeBattleField();
		}

		private leaveBattleField(): void {
			// if(this.battleField.dialogMgr.getDialog("battleEnd")!==undefined){
			// 	this.battleField.dialogMgr.getDialog("battleEnd").close();
			// 	this.battleField.dialogMgr.removeDialog("battleEnd");
			// }
			Laya.stage.destroyChildren();
			this.onUIAssetsLoaded();
			Laya.stage.loadImage("bg/background.jpg", 0, 0, 1280, 768);
			this.battleField = null;
			this.enterFreeBattleField();
			
		}
	}
}