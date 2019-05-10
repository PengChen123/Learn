/**
* name 
*/
module cn.yh.sample2.main{
	
	export class Notice{
		private notice:ui.loginUI.noticeUI;
		private maskArea:Laya.Sprite;
		private txtArea:Laya.Text;
		private prevY:number;
		private tab:Laya.Tab;

		constructor(){
			this.init();
		}

		private init(){
			this.notice = new ui.loginUI.noticeUI();
			Laya.stage.addChild(this.notice);
			
			this.showMask();
			this.notice.pos(Laya.stage.width >> 1,Laya.stage.height-this.notice.height-150);
			this.notice.pivot(this.notice.box.width>>1,this.notice.box.height>>1);

			let closeBtn = this.notice.box.getChildByName("btn_closeNotice") as Laya.Button;
			closeBtn.on(Laya.Event.CLICK,this,this.close);

			this.tab =  this.notice.box.getChildByName("tab_notice") as Laya.Tab;
			this.tab.labels = this.getNoticeTitle();
			this.tab.layoutEnabled = true;
			this.tab.selectedIndex = 0;
			this.tab.selectHandler = new Laya.Handler(this,this.onSelect);
			
			this.createScorllText();
			this.onSelect(this.tab.selectedIndex);
			this.notice.zOrder += 1;
		}

		private getNoticeTitle():string{
			let title:string = "";
			for(let i:number=0;i<ConfigMananger.getNotice().length;i++){
				title == "" ? title += ConfigMananger.getNotice()[i].title : title += ("," + ConfigMananger.getNotice()[i].title);
			}
			return title;
		}

		private getNoticeText():Array<string>{
			let txtArr:Array<string> = [];
			for(let i:number=0;i<ConfigMananger.getNotice().length;i++){
				txtArr.push(ConfigMananger.getNotice()[i].info);
			}
			return txtArr;
		}

		private close(){
			Laya.Tween.to(this.notice.box,{"scaleX":0,"scaleY":0,"alpha":0},300,null,Laya.Handler.create(this,this.closenotice));
			this.maskArea.visible = false;
		}

		private closenotice(){
			this.notice.visible = false;
		}

		private onSelect(selectIndex:number){
			 this.changeText(this.getNoticeText()[selectIndex]);
		}

		private showMask(){
			this.maskArea = cn.yh.sample2.utility.createMask();
			Laya.stage.addChild(this.maskArea);
			this.maskArea.on(Laya.Event.MOUSE_DOWN,this,this.maskStopPropagation)
		}

		private maskStopPropagation(e:Laya.Event){
			e.stopPropagation();
		}

		private changeText(txt:string){
			this.txtArea.text=txt; //不用changetext 因为不会重新渲染 ex:自动换行了3行，如果之后的内容大于3行  则不会换行
		}

		private createScorllText(msg?:string){
			let offset:number=15;
			this.txtArea =  new Laya.Text();
			this.notice.box.addChild(this.txtArea);
			this.txtArea.overflow = Laya.Text.SCROLL;
			this.txtArea.text = msg;
			 
			this.txtArea.pos(offset*2+this.tab.width,this.tab.y);
			this.txtArea.size(this.notice.box.width - this.tab.width - offset * 3,this.notice.box.height - this.tab.y - offset);
			this.txtArea.bgColor = "#ffffff";
			this.txtArea.fontSize = 20;
			this.txtArea.wordWrap = true;
			
			this.txtArea.on(Laya.Event.MOUSE_DOWN, this, this.startScrollText);
		}

		private startScrollText(e: Event): void {
			this.prevY = this.txtArea.mouseY;

			Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.scrollText);
			Laya.stage.on(Laya.Event.MOUSE_UP, this, this.finishScrollText);
		}

		private finishScrollText(e: Event): void {
			Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.scrollText);
			Laya.stage.off(Laya.Event.MOUSE_UP, this, this.finishScrollText);
		}
		
		private scrollText(e: Event): void {
			var nowX: number = this.txtArea.mouseX;
			var nowY: number = this.txtArea.mouseY;

			this.txtArea.scrollY += this.prevY - nowY;

			this.prevY = nowY;
		}
	}
}