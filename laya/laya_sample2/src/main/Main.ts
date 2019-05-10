/**
* name 
*/
module cn.yh.sample2.main{
	export class Main{
		private mainUI:ui.mainUI.mainUI;
		private selectedIndex:Array<number> = [];
		private offset = 100;
		constructor(){
			this.initMainUI();
		}

		private initMainUI(){
			this.mainUI=new ui.mainUI.mainUI();

			this.mainUI.btn_left.skin = new Laya.Image("picture/ui/ui_paihangdi.png").skin;
			this.mainUI.btn_left.label = "推荐";
			this.mainUI.btn_left.selected = true;
			this.mainUI.btn_left.on(Laya.Event.CLICK,this,this.onClickRecommend);

			this.mainUI.btn_right.skin = new Laya.Image("picture/ui/ui_paihangdi.png").skin;
			this.mainUI.btn_right.label = "账号";
			this.mainUI.btn_right.on(Laya.Event.CLICK,this,this.onClickAccount);
			
			this.mainUI.logoImg.skin = new Laya.Image("picture/presentation/presentation1.jpg").skin;
			this.mainUI.topImg.skin = new Laya.Image("comp/hscroll.png").skin;
			this.mainUI.headImg.skin = new Laya.Image("picture/super/super7.jpg").skin;

			this.mainUI.m_list.vScrollBarSkin = "";
			this.mainUI.m_list.selectEnable = true;
			this.mainUI.m_list.selectHandler = new Laya.Handler(this, this.onSelect);
            this.mainUI.m_list.renderHandler = new Laya.Handler(this, this.updateItem);
			this.mainUI.m_list.array = ConfigMananger.getRoleInfo();
			Laya.stage.addChild(this.mainUI);
		}

		private onClickRecommend () {
			if(this.mainUI.btn_left.selected!=true){
				this.mainUI.btn_left.selected = true;
				this.mainUI.btn_right.selected = false;

				this.mainUI.m_list.array = ConfigMananger.getRoleInfo();
				this.mainUI.m_list.y -= this.offset;
				this.mainUI.m_list.height += this.offset;    
			} 
		}
		
		private onClickAccount(){
			if(this.mainUI.btn_right.selected!=true){
				this.mainUI.btn_left.selected=false;
				this.mainUI.btn_right.selected=true;

				this.mainUI.m_list.array=this.getSelectedData();
				//this.mainUI.m_list.refresh();
				this.mainUI.m_list.y += this.offset;
				this.mainUI.m_list.height -= this.offset;   
				
			}
		}

		private getSelectedData():Array<any>{
			let data:Array<any>=[];
			for(let i:number=0;i<this.selectedIndex.length;i++){
				data.push(ConfigMananger.getRoleInfo()[this.selectedIndex[i]]);
			}
			return data;
		}

		private onSelect(index: number): void {
			ConfigMananger.getRoleInfo()[index].isSlt=true;

			if(this.selectedIndex.indexOf(index) == -1){
				this.selectedIndex.push(index);
			}
			Laya.stage.destroyChildren();
			this.initSelfUI(ConfigMananger.getRoleInfo()[index]);
        }

		private updateItem(cell:Laya.Box,index:number) {
			var img:Laya.Image = cell.getChildByName("img_presentation") as Laya.Image;
			var selectLab:Laya.Label = cell.getChildByName("label_select") as Laya.Label;
			var infoLab:Laya.Label = cell.getChildByName("label_info") as Laya.Label;
			img.skin = cell.dataSource.src[0];
			selectLab.text = cell.dataSource.isSlt ? "已选中":"未选中";
			infoLab.text = cell.dataSource.msg;
		}
		
		private initSelfUI(source:any){
			let self=new cn.yh.sample2.main.Resume(source);
			self.closeBtn.on(Laya.Event.CLICK,this,this.returnMain);
		}

		private returnMain() {
			Laya.stage.destroyChildren();
			this.initMainUI();
		}
	}
}