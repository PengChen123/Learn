/**
* name 
*/
module cn.yh.sample2.main{
	export class Loading{
		private progress:Laya.ProgressBar;
		constructor(){
			this.init();
		}

		private init() {
			let loading=new ui.loadingUI.loadingUI();
			Laya.stage.addChild(loading);

			this.progress=loading.m_progress;
			this.progress.value=0;
			this.progress.changeHandler=new Laya.Handler(this.progress,this.onChange);

			Laya.timer.loop(50,this,this.changeValue);
		}

		private changeValue(){
			this.progress.value+=0.05;
		}
		
		private onChange(value:number){
			if(value >= 1){
				Laya.stage.destroyChildren();
				new cn.yh.sample2.main.Login();
			}
		}
	}
}