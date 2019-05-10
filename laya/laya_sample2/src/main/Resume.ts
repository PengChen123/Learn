/**
* name 
*/
module cn.yh.sample2.main{
	export class Resume{
		public closeBtn:Laya.Button;
		constructor(data:any){
			this.initResume(data);
		}

		private initResume(source:any){
			let m_resumeUI=new ui.mainUI.slefUI();
			Laya.stage.addChild(m_resumeUI);
			
			this.closeBtn=m_resumeUI.btn_close;
			m_resumeUI.sltLabel.text= source.isSlt ? "已选择": "未选择";
			m_resumeUI.msgLabel.text= source.msg;
			m_resumeUI.traitLabel.text= source.trait;
			m_resumeUI.introLabel.text= source.intro;
			m_resumeUI.btn_left.label = "简介";
			m_resumeUI.btn_right.label = "开始";
			m_resumeUI.btn_right.on(Laya.Event.CLICK,this,this.startGame);

			m_resumeUI.self_list.selectEnable=true;
			m_resumeUI.self_list.repeatX = source.src - 1;
			m_resumeUI.self_list.hScrollBarSkin="";
            m_resumeUI.self_list.renderHandler = new Laya.Handler(this, this.updateItem);
			m_resumeUI.self_list.array=this.getListSource(source.src);
		}

		private getListSource(srcArr:Array<string>){
			let listSource:Array<string> = [];
			for(let i:number=0;i<srcArr.length;i++){
				listSource.push(srcArr[i+1]);
			}
			return listSource;
		}

		private updateItem(cell:Laya.Box,index:number){
			var img:Laya.Image=cell.getChildByName("bgImg") as Laya.Image;
			img.skin=cell.dataSource;
		}

		private startGame() {
			Laya.stage.destroyChildren();
			new cn.yh.sample2.main.Loading();
		}
	}
}