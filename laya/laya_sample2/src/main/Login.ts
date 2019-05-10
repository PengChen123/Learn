/**
* name 
*/
module cn.yh.sample2.main{
	export class Login{
		private login:ui.loginUI.loginUI;
		private startBtn:Laya.Button;
		private openNoticeBtn:Laya.Button;
		private notice:cn.yh.sample2.main.Notice;
		private loadingAni:Laya.Animation;
		constructor(){
			this.login=new ui.loginUI.loginUI();
			Laya.stage.addChild(this.login);
			
			this.initStartBtn();
			this.initOpenNoticeBtn();
			this.openNotice();
		}

		private initStartBtn() {
			this.startBtn=this.login.btn_start;
			this.startBtn.on(Laya.Event.CLICK,this,this.uploadLoading);
		}

		private initOpenNoticeBtn() {
			this.openNoticeBtn=this.login.btn_notice;
			this.openNoticeBtn.on(Laya.Event.CLICK,this,this.openNotice);
		}

		private openNotice(){
			this.notice= new cn.yh.sample2.main.Notice();
		}
		
		private uploadLoading(){
			this.loadingAni = new Laya.Animation();
			this.loadingAni.loadAnimation("Animation/loading.ani");
			Laya.stage.addChild(this.loadingAni);
			this.loadingAni.pos(this.startBtn.x-48,this.startBtn.y-this.startBtn.height);
			this.loadingAni.play(0,false);

			this.loadingAni.on(Laya.Event.COMPLETE,this,this.aniComplete);
		}

		private aniComplete(){
			this.loadingAni.removeSelf();
			this.startGame();
		}
		
		private startGame() {
			this.login.removeSelf();
			new cn.yh.sample2.game.gameMain(true);
		}
	}
}