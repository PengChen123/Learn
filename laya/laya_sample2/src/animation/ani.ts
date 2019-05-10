/**
* runtime class 
*/
module cn.yh.sample2.ani{
	export class scaleAllUp extends laya.ui.Dialog{
		
		constructor(){
			super();
			this.anchorX = this.anchorY = 0.5;
			this.on(Laya.Event.MOUSE_DOWN,this,this.scaleSmall);
			this.on(Laya.Event.MOUSE_UP,this,this.scaleBig);
		}
		private scaleBig(){
			Laya.Tween.to(this,{scaleX:1,scaleY:1},200)
		}
		private scaleSmall(){
			Laya.Tween.to(this,{scaleX:0.6,scaleY:0.6},200)
		}
	}
}