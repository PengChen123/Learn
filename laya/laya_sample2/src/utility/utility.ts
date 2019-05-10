/**
* name 
*/
module cn.yh.sample2{
	export class utility{
		public static createMask(w?:number,h?:number,alpha?:number,){
			let mask:Laya.Sprite = new Laya.Sprite();

			mask.alpha = alpha || 0.1;
			mask.width = w || Laya.stage.width;
			mask.height = h || Laya.stage.height;

			mask.graphics.drawRect(0, 0, mask.width, mask.height, "#000000");
			mask.mouseEnabled = true;
			return mask;
		}
	}
}