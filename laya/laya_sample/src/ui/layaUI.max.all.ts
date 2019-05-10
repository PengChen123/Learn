
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
import EffectAnimation=laya.display.EffectAnimation;
module ui.dialog {
    export class gameFinishedUI extends Dialog {
		public bgImg:Laya.Image;
		public resultImg:Laya.Image;
		public confirmBtn:Laya.Button;
		public tipText:Laya.TextArea;

        public static  uiView:any ={"type":"Dialog","props":{"width":300,"height":200},"child":[{"type":"Image","props":{"y":0,"x":0,"width":300,"var":"bgImg","skin":"comp/bg.png","height":200}},{"type":"Image","props":{"y":0,"x":25,"width":250,"var":"resultImg","height":60}},{"type":"Button","props":{"y":150,"x":88,"width":121,"var":"confirmBtn","skin":"comp/button.png","label":"label","height":31}},{"type":"TextArea","props":{"y":71,"x":30,"width":240,"var":"tipText","text":"在这里例子中，我们先要新建一个Gamview类来继承页面的ui类ui.gameUI","height":67,"fontSize":20}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.dialog.gameFinishedUI.uiView);

        }

    }
}
