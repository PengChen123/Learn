/**
* name 
*/
module cn.yh.sample2.game{
	export class gameMain{
		private gameMain:ui.gameMain.gameMainUI;
		private system:ui.gameMain.systemUI;
		private guide:ui.gameMain.guideUI;
		
		private maskArea:Laya.Sprite;
		private soundChannel:Laya.SoundChannel;
		private soundsPath:string="sounds/bg/bgm.WAV";
		private isFirstLogin:boolean;
		private npcData:Array<any> = [];
		private guideData:Array<any> = [];
		private sayTextArray:Array<laya.display.Text> = [];
		private rListData:Array<any> = [];
		private tweenCount:number = 0;
		private bomListData:Array<any> = [];
		constructor(isFirst?:boolean){
			this.isFirstLogin = isFirst ? true : false;
			if(this.isFirstLogin){
				this.initNpcData();
				this.initGuideData();
				this.initGuide();
				this.playStory(1);
			}else{
				this.initGameMain();
				this.initBgSound();
			}
		}
		//guide
		private initNpcData(){
			this.npcData = ConfigMananger.getNpc();
		}
		private initGuideData(){
			this.guideData = ConfigMananger.getGuide();
		}
		private getNpc(id:number){
			let result:any;
			for(let i:number=0;i<this.npcData.length;i++){
				if(this.npcData[i].id == id) { result = this.npcData[i]; } 
			}
			return result;
		}
		private getGuide(id:number){
			let result:any;
			for(let i:number=0;i<this.guideData.length;i++){
				if(this.guideData[i].id == id) { result = this.guideData[i]; } 
			}
			return result;
		}
		private initGuide(){
			this.guide=new ui.gameMain.guideUI();
			Laya.stage.addChild(this.guide);
		}
		private removeSayText(){
			while(this.sayTextArray.length>0){
				this.sayTextArray.pop().removeSelf();
				if(this.sayTextArray.length == 0) return;
			}
		}
		private playStory(sId:number){
			if(sId == -1){
				this.guide.removeSelf();
				this.initGameMain();
				return;
			}
			this.tweenCount = 0;
			this.removeSayText();

			let story:any=this.getGuide(sId);
			
			var say:string = story.say;
			this.guide.lab_name.text = this.getNpc(story.npcId).name;
			this.guide.img_head.skin = this.getNpc(story.npcId).headImg;

			this.guide.btn_continue.visible = false;
			this.guide.btn_continue.on(laya.events.Event.CLICK,this,this.playStory,[story.nextId])
			let x_offset:number =140;
			let wMax:number = 270;
			let line:number = 0;
			let rMax:number;
			for	(var i:number=0,len:number=say.length;i<len;++i){
				var letterText:laya.display.Text=this.createLetter(say.charAt(i));
				this.sayTextArray.push(letterText);
				rMax || (rMax = Math.ceil(wMax/letterText.width));

				letterText.x = line == 0 ? letterText.width * i + x_offset : letterText.width * (i - rMax * line) + x_offset;
				if(letterText.x - x_offset > wMax) {line += 1;letterText.x = letterText.width * (i - rMax * line) + x_offset}
				letterText.y = this.guide.img_sayBg.y + 10 + letterText.height * line;
				
				laya.utils.Tween.to(letterText,{alpha:1,scaleX:1},5,null,laya.utils.Handler.create(this,this.tweenCompleted,[say.length]),i*5);
			}	
		}
		private createLetter(char:string):laya.display.Text{
			var letter:laya.display.Text=new laya.display.Text();
			letter.alpha = 0;
			letter.text=char;
			letter.color="yellow";
			letter.font="Impact";
			letter.fontSize=20;
			letter.scaleX = 0.5;
			letter.wordWrap = true;
			Laya.stage.addChild(letter);
			return letter;
		}
		private tweenCompleted(len:number){
			this.tweenCount+=1;
			if(this.tweenCount == len){
				this.guide.btn_continue.visible = true;
			}
		}

		//  gameMain
		private onRListSelect(index:number){
			let n:laya.ui.Box = this.gameMain.rList.getCell(index);
			let np:Laya.Point=new Laya.Point(n.x,n.y+n.height*.5);
			let changedPoint:Laya.Point = n.localToGlobal(new Laya.Point(np.x,np.y));

			let redP:laya.display.Sprite = new laya.display.Sprite();
			redP.graphics.drawCircle(changedPoint.x,changedPoint.y,5,"blue");
			Laya.stage.addChild(redP);


			console.log(changedPoint);
		}
		private onBListSelect(index:number){
			let n:laya.ui.Box = this.gameMain.bomList.getCell(index);
			let np:Laya.Point=new Laya.Point(n.x,n.y+n.height*.5);
			let changedPoint:Laya.Point = n.localToGlobal(new Laya.Point(np.x,np.y));

			let redP:laya.display.Sprite = new laya.display.Sprite();
			redP.graphics.drawCircle(changedPoint.x,changedPoint.y,5,"green");
			Laya.stage.addChild(redP);


			console.log(changedPoint);
		}
		private initGameMain(){
			this.gameMain = new ui.gameMain.gameMainUI();
			this.gameMain.btn_system.on(Laya.Event.CLICK,this,this.initSystem);
			Laya.stage.addChild(this.gameMain);


			this.gameMain.rList.selectEnable=true;
			this.gameMain.rList.selectHandler = new Laya.Handler(this, this.onRListSelect);
            this.gameMain.rList.renderHandler = new Laya.Handler(this, this.updateItem);
			
			this.rListData.push({msg:"活动",fun:this.onClickHuoDong});
			this.rListData.push({msg:"礼包",fun:this.onClickLiBao});
			this.rListData.push({msg:"福利",fun:this.onClickFuLi});
			this.rListData.push({msg:"签到",fun:this.onClickQianDao});
			this.rListData.push({msg:"分享",fun:this.onClickFenXiang});

			this.gameMain.rList.array=this.rListData;

			
			this.gameMain.bomList.selectEnable=true;
			this.bomListData.push({msg:"背包1",fun:this.onClickBag});
			this.bomListData.push({msg:"背包2",fun:this.onClickBag});
			this.bomListData.push({msg:"背包3",fun:this.onClickBag});
			this.bomListData.push({msg:"背包4",fun:this.onClickBag});
			this.gameMain.bomList.array=this.bomListData;
			this.gameMain.bomList.selectHandler = new Laya.Handler(this, this.onBListSelect);
			this.gameMain.bomList.renderHandler = new Laya.Handler(this, this.updateItem);
			if(this.isFirstLogin){
				// let getItem : ui.dialog.getItemUI = new ui.dialog.getItemUI();
				// Laya.stage.addChild(getItem);
				// getItem.pos(Laya.stage.width-getItem.width >>1,Laya.stage.height-getItem.height>>1);

				let sp:laya.display.Sprite = new laya.display.Sprite();
				sp.loadImage("picture/ui/lianhua.png");
				Laya.stage.addChild(sp);
				sp.size(50,50);
				sp.pos(Laya.stage.width-sp.width >>1,Laya.stage.height-sp.height>>1);
				
				let n:laya.ui.Box = this.gameMain.bomList.getCell(0);
			    let bagStagePoint:Laya.Point = n.localToGlobal(new Laya.Point(n.x,n.y));
				console.log("bagStagePoint:"+ bagStagePoint);
				let redP:laya.display.Sprite = new laya.display.Sprite();
				redP.graphics.drawCircle(bagStagePoint.x,bagStagePoint.y,5,"red");
				Laya.stage.addChild(redP);

				laya.utils.Tween.to(
					sp,
					{x:bagStagePoint.x,y:bagStagePoint.y,scaleX:0,scaleY:0,alpha:.3},
					1000,
					null,
					laya.utils.Handler.create(this,()=>{sp.visible = false;}),2000);
			}else{

			}
		}
		private onClickBag(){
			console.log("点击了--背包");
		}
		private onClickHuoDong(){
			console.log("点击了--活动");
		}
		private onClickLiBao(){
			console.log("点击了--礼包");
		}
		private onClickFuLi(){
			console.log("点击了--福利");
		}
		private onClickQianDao(){
			console.log("点击了--签到");
		}
		private onClickFenXiang(){
			console.log("点击了--分享");
		}
		private updateItem(cell:Laya.Box,index:number){
			let btn:Laya.Button = cell.getChildByName("btn") as Laya.Button;
			//cell.pivot(.5,.5);
			btn.label = cell.dataSource.msg;
			btn.on(Laya.Event.CLICK,this,cell.dataSource.fun);
		}
		private initBgSound(){
			this.soundChannel = Laya.SoundManager.playMusic(this.soundsPath,0);		
		}
		
		private quitGame(){
			this.system.removeSelf();
			this.gameMain.removeSelf();
			Laya.SoundManager.destroySound(this.soundsPath);
			new cn.yh.sample2.main.Main();
		}

		//system
		private initSystem(){
			this.showMask();
			this.system =  new ui.gameMain.systemUI();
			Laya.stage.addChild(this.system);
			this.system.box_sys.pos(Laya.stage.width >> 1,Laya.stage.height-this.system.height-150);
			this.system.box_sys.pivot(this.system.box_sys.width>>1,this.system.box_sys.height>>1);
			this.system.btn_sound.on(Laya.Event.CLICK,this,this.soundState);
			this.system.btn_close.on(Laya.Event.CLICK,this,this.closeSystem);
			this.system.btn_quit.on(Laya.Event.CLICK,this,this.quitGame);

			this.switchSoundSkin();

			//隐藏
			Laya.Tween.to(this.gameMain.box_bottom,{"y":this.gameMain.box_bottom.y+100,"scaleY":0,"alpha":0},300);
			Laya.Tween.to(this.gameMain.box_lup,{"scaleX":0,"scaleY":0,"alpha":0},300);
			Laya.Tween.to(this.gameMain.box_rup,{"scaleX":0,"scaleY":0,"alpha":0},300);
		}
		private showMask(){
			this.maskArea = cn.yh.sample2.utility.createMask();
			Laya.stage.addChild(this.maskArea);
			this.maskArea.on(Laya.Event.MOUSE_DOWN,this,this.maskStopPropagation)
		}

		private closeSystem(){
			Laya.Tween.to(this.system,{"scaleX":0,"scaleY":0,"alpha":0},300);
			this.system.visible = false;
			this.system.removeSelf();
			this.maskArea.visible =  false;
			this.maskArea.removeSelf();
			
			Laya.Tween.to(this.gameMain.box_bottom,{"y":this.gameMain.box_bottom.y-100,"scaleY":1,"alpha":1},300);
			Laya.Tween.to(this.gameMain.box_lup,{"scaleX":1,"scaleY":1,"alpha":1},300);
			Laya.Tween.to(this.gameMain.box_rup,{"scaleX":1,"scaleY":1,"alpha":1},300);
			
		}

		private maskStopPropagation(e:Laya.Event){
			e.stopPropagation();
		}
		//sound
		private soundState(){
			 this.soundChannel.isStopped ? this.soundChannel.play() :this.soundChannel.pause();
			 this.switchSoundSkin();
		}

		private switchSoundSkin(){
			let path:string = this.soundChannel.isStopped ? "picture/ui/ui_guan.png": "picture/ui/ui_kai.png";
			this.system.btn_sound.skin=path;
		}
	}
}