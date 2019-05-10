/**
* name cp
*/
module cn.yh.sample.dialog{
	export class DialogMgr{
		private dialogs:{[key:string]:Laya.Dialog} = {};
		constructor(){
		}
		public BattleFinishedDialog(battleResult?:boolean):Laya.Dialog{
			let plan:Laya.Dialog=new battleFinishedDialog(battleResult).getDialog();
			this.dialogs = {["battleEnd"]:plan};
			return plan;
		}
		public getDialog(key:string){
			return this.dialogs[key];
		}
		public removeDialog(key:string){
			delete this.dialogs[key];
		}
	}
	class battleFinishedDialog{
		private gameResult:boolean;
		private plan:Laya.Dialog;
		constructor(r?:boolean){
			this.gameResult = r !== undefined ? r : false;
			this.instance();
		}
		private instance():Laya.Dialog{
			this.plan=new ui.dialog.gameFinishedUI();
			this.init();
			return this.plan;
		}
		private init(){
			let sp:Laya.Image;
			let r:string;
			if(this.gameResult){
				sp=new Laya.Image("res/ui/ui_yingle.png");
				r="胜利了";
			}else{
				sp=new Laya.Image("res/ui/ui_shule.png");
				r="失败了";
			}
			let plan=(this.plan as ui.dialog.gameFinishedUI);
			plan.resultImg.skin=sp.skin;
			plan.tipText.text="玩家最终......"+r;
			plan.confirmBtn.label="继续游戏";
			plan.confirmBtn.text.fontSize=20;
		}
		public getDialog():Laya.Dialog{
			return this.plan;
		}
	}
}