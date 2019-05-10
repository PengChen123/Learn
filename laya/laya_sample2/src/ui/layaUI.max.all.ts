
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui.Animation {
    export class btnScaleBigUI extends laya.display.EffectAnimation {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"picture/ui/button3.png","scaleY":1.2,"scaleX":1.2},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":0},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":13}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":0},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":13}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super();this.effectData =ui.Animation.btnScaleBigUI.uiView;}
    }
}

module ui.Animation {
    export class btnScaleSmallUI extends laya.display.EffectAnimation {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"res/picture/ui/button3.png","scaleY":1.2,"scaleX":1.2},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"skin":[{"value":"res/picture/ui/button3.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":0},{"value":"picture/ui/button3.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":13}],"scaleY":[{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":13}],"scaleX":[{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":13}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super();this.effectData =ui.Animation.btnScaleSmallUI.uiView;}
    }
}

module ui.dialog {
    export class getItemUI extends Dialog {
		public itimImg:Laya.Image;
		public btn_close:Laya.Button;
		public itemImg:Laya.Image;

        public static  uiView:any ={"type":"Dialog","props":{"width":250,"height":250},"child":[{"type":"Box","props":{"y":0,"x":0},"child":[{"type":"Image","props":{"y":0,"x":0,"width":250,"var":"itimImg","skin":"picture/ui/topmini.png","height":250}},{"type":"Button","props":{"y":202,"x":70,"var":"btn_close","stateNum":1,"skin":"picture/ui/ui_anniu.png","labelSize":20,"label":"确定"}},{"type":"Image","props":{"y":68,"x":73,"width":104,"var":"itemImg","skin":"picture/ui/lianhua.png","height":114}},{"type":"Image","props":{"y":0,"x":0,"width":250,"skin":"picture/ui/ui_meishuzidi.png","sizeGrid":"10,10,10,10,0","height":50}},{"type":"Label","props":{"y":10,"x":65,"text":"恭喜获得","fontSize":30,"color":"#eef1c7"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.dialog.getItemUI.uiView);

        }

    }
}

module ui.gameMain {
    export class gameMainUI extends View {
		public ani1:Laya.FrameAnimation;
		public box_lup:Laya.Box;
		public btn_system:Laya.Button;
		public prs_exp:Laya.ProgressBar;
		public box_rup:Laya.Box;
		public rList:Laya.List;
		public box_bottom:Laya.Box;
		public bomList:Laya.List;

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":500,"height":800},"child":[{"type":"Image","props":{"y":0,"x":0,"width":500,"skin":"picture/ui/hulu_lie.png","height":800}},{"type":"Box","props":{"y":36,"x":25,"var":"box_lup","scaleY":1,"scaleX":1,"alpha":1},"compId":29,"child":[{"type":"Button","props":{"y":41,"x":2,"width":60,"var":"btn_system","stateNum":1,"skin":"picture/ui/system.png","label":"label","height":60}},{"type":"ProgressBar","props":{"width":164,"visible":true,"var":"prs_exp","value":0.8,"skin":"comp/progress.png","sizeGrid":"0,6,0,6","height":20},"child":[{"type":"Label","props":{"y":0,"x":0,"width":166,"valign":"middle","text":"0/0","height":20,"fontSize":20,"align":"center"}}]}]},{"type":"Box","props":{"y":36,"x":477,"var":"box_rup","scaleY":1,"scaleX":1,"pivotY":0,"pivotX":135},"compId":30,"child":[{"type":"Button","props":{"x":17,"width":110,"stateNum":1,"skin":"picture/ui/ui_anniu.png","height":36},"child":[{"type":"Label","props":{"y":6,"x":28,"width":53,"text":"0","height":20,"fontSize":20,"align":"right"}},{"type":"Image","props":{"y":6,"x":1,"width":25,"skin":"picture/ui/ui_zuanshi.png","height":25}},{"type":"Image","props":{"y":6,"x":82,"width":25,"skin":"picture/ui/ui_jiab.png","height":25}}]},{"type":"List","props":{"y":49,"width":135,"var":"rList","spaceY":10,"spaceX":10,"repeatY":4,"repeatX":2,"height":281},"child":[{"type":"Box","props":{"renderType":"render"},"child":[{"type":"Button","props":{"width":60,"stateNum":1,"skin":"picture/ui/ui_icondi.png","name":"btn","labelSize":20,"label":"按钮","height":60}}]}]}]},{"type":"Box","props":{"y":671,"x":39,"width":421,"var":"box_bottom","skewX":0,"pivotY":0,"pivotX":0,"height":63,"alpha":1},"compId":31,"child":[{"type":"List","props":{"y":0,"x":0,"width":411,"var":"bomList","spaceX":10,"repeatY":1,"repeatX":6,"height":63},"child":[{"type":"Box","props":{"renderType":"render"},"child":[{"type":"Button","props":{"width":60,"stateNum":1,"skin":"picture/ui/ui_icondi.png","name":"btn","labelSize":20,"label":"按钮","height":60}}]}]}]}],"animations":[{"nodes":[{"target":29,"keyframes":{"scaleY":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":29,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":29,"key":"scaleY","index":10}],"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":29,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":29,"key":"scaleX","index":10}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":29,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":29,"key":"alpha","index":10}]}},{"target":30,"keyframes":{"scaleY":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":30,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":30,"key":"scaleY","index":10}],"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":30,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":30,"key":"scaleX","index":10}],"pivotY":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":30,"key":"pivotY","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":30,"key":"pivotY","index":10}],"pivotX":[{"value":135,"tweenMethod":"linearNone","tween":true,"target":30,"key":"pivotX","index":0},{"value":135,"tweenMethod":"linearNone","tween":true,"target":30,"key":"pivotX","index":10},{"value":135,"tweenMethod":"linearNone","tween":true,"target":30,"key":"pivotX","index":13}]}},{"target":31,"keyframes":{"y":[{"value":771,"tweenMethod":"linearNone","tween":true,"target":31,"key":"y","index":0},{"value":671,"tweenMethod":"linearNone","tween":true,"target":31,"key":"y","index":13}],"x":[{"value":44,"tweenMethod":"linearNone","tween":true,"target":31,"key":"x","index":0},{"value":39,"tweenMethod":"linearNone","tween":true,"target":31,"key":"x","index":13}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":31,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":31,"key":"alpha","index":13}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.gameMain.gameMainUI.uiView);

        }

    }
}

module ui.gameMain {
    export class guideUI extends View {
		public img_sayBg:Laya.Image;
		public img_head:Laya.Image;
		public lab_name:Laya.Label;
		public btn_continue:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":500,"height":800},"child":[{"type":"Image","props":{"width":500,"skin":"picture/ui/hulu_lie.png","height":800},"child":[{"type":"Image","props":{"y":675,"x":0,"width":500,"var":"img_sayBg","skin":"picture/ui/ui_meishuzidi.png","sizeGrid":"10,10,10,10,0","height":125}},{"type":"Image","props":{"y":605,"x":10,"width":125,"var":"img_head","skin":"picture/ui/lyy.jpg","height":185}},{"type":"Label","props":{"y":620,"x":140,"width":128,"var":"lab_name","valign":"middle","text":"label","stroke":1,"height":55,"fontSize":40,"color":"#b49d6c","bold":true}},{"type":"Button","props":{"y":753,"x":414,"width":81,"var":"btn_continue","labelSize":20,"labelColors":"#FFFFFF,#FFFFFF,#FFFFFF","label":"点击继续","height":40}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.gameMain.guideUI.uiView);

        }

    }
}

module ui.gameMain {
    export class systemUI extends View {
		public ani1:Laya.FrameAnimation;
		public box_sys:Laya.Box;
		public btn_close:Laya.Button;
		public btn_quit:Laya.Button;
		public btn_sound:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":0,"height":0},"child":[{"type":"Box","props":{"y":150,"x":225,"width":250,"var":"box_sys","scaleY":1,"scaleX":1,"height":300,"anchorY":0.5,"anchorX":0.5},"compId":14,"child":[{"type":"Image","props":{"width":250,"skin":"picture/ui/topmini.png","height":300}},{"type":"Image","props":{"width":250,"skin":"picture/ui/topmini.png","height":50}},{"type":"Label","props":{"y":5,"x":50,"width":150,"valign":"middle","text":"设置","strokeColor":"#ffffff","height":40,"fontSize":30,"color":"#68c88e","align":"center"}},{"type":"Button","props":{"y":-10,"x":185,"width":74,"var":"btn_close","stateNum":1,"skin":"picture/ui/ui_guanbi.png","label":"关闭","height":75}},{"type":"Button","props":{"y":250,"x":70,"var":"btn_quit","stateNum":1,"skin":"picture/ui/ui_anniu.png","labelSize":20,"label":"返回平台"}},{"type":"Label","props":{"y":70,"x":20,"text":"姓名：","mouseEnabled":false,"fontSize":15}},{"type":"Label","props":{"y":95,"x":20,"text":"角色ID：","mouseEnabled":false,"fontSize":15}},{"type":"Label","props":{"y":70,"x":75,"text":"XXXXXXXXX","mouseEnabled":false,"fontSize":15}},{"type":"Label","props":{"y":95,"x":75,"text":"123456789","mouseEnabled":false,"fontSize":15}},{"type":"Label","props":{"y":130,"x":20,"text":"声音：","mouseEnabled":false,"fontSize":15}},{"type":"Button","props":{"y":123,"x":68,"width":69,"var":"btn_sound","stateNum":1,"skin":"picture/ui/ui_guan.png","height":33}}]}],"animations":[{"nodes":[{"target":14,"keyframes":{"scaleY":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":14,"key":"scaleY","index":0},{"value":1,"tweenMethod":"bounceIn","tween":false,"target":14,"key":"scaleY","index":10}],"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":14,"key":"scaleX","index":0},{"value":1,"tweenMethod":"bounceIn","tween":false,"target":14,"key":"scaleX","index":10}],"anchorY":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":14,"key":"anchorY","index":0},{"value":0.5,"tweenMethod":"backInOut","tween":true,"target":14,"key":"anchorY","index":10}],"anchorX":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":14,"key":"anchorX","index":0},{"value":0.5,"tweenMethod":"backInOut","tween":true,"target":14,"key":"anchorX","index":10}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.gameMain.systemUI.uiView);

        }

    }
}

module ui.loadingUI {
    export class loadingUI extends View {
		public m_progress:Laya.ProgressBar;

        public static  uiView:any ={"type":"View","props":{"width":500,"height":800},"child":[{"type":"Image","props":{"width":500,"skin":"bg/loading.jpg","height":800}},{"type":"ProgressBar","props":{"y":705,"x":96,"width":320,"var":"m_progress","skin":"comp/progress.png","height":30}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.loadingUI.loadingUI.uiView);

        }

    }
}

module ui.loginUI {
    export class loginUI extends View {
		public btn_notice:Laya.Button;
		public btn_start:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":500,"height":800},"child":[{"type":"Image","props":{"y":0,"x":0,"width":500,"skin":"picture/super/supergp.jpg","height":800}},{"type":"Button","props":{"y":30,"x":423,"width":74,"var":"btn_notice","stateNum":1,"skin":"picture/ui/ui_guanbi.png","label":"公告","height":75}},{"type":"Button","props":{"y":675,"x":242,"width":200,"var":"btn_start","stateNum":1,"skin":"picture/ui/button3.png","labelSize":20,"labelFont":"SimSun","labelBold":true,"label":"进入游戏","height":60,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Script","props":{"playEvent":"mousemove","runtime":"ui.Animation.btnScaleBigUI"}},{"type":"Script","props":{"playEvent":"mouseout","runtime":"ui.Animation.btnScaleSmallUI"}}]},{"type":"TextArea","props":{"y":755,"x":15,"width":468,"text":"抵制不良游戏，拒绝盗版游戏。  注意自我保护，谨防受骗上当。  适度游戏益脑，沉迷游戏伤身。  合理安排时间，享受健康生活","height":45,"fontSize":15,"bold":true,"align":"left"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("EffectAnimation",laya.display.EffectAnimation);
			View.regComponent("ui.Animation.btnScaleBigUI",ui.Animation.btnScaleBigUI);
			View.regComponent("ui.Animation.btnScaleSmallUI",ui.Animation.btnScaleSmallUI);

            super.createChildren();
            this.createView(ui.loginUI.loginUI.uiView);

        }

    }
}

module ui.loginUI {
    export class noticeUI extends View {
		public ani1:Laya.FrameAnimation;
		public box:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":0,"height":0},"child":[{"type":"Box","props":{"y":150,"x":225,"width":450,"var":"box","scaleY":1,"scaleX":1,"height":300,"anchorY":0.5,"anchorX":0.5},"compId":14,"child":[{"type":"Image","props":{"width":450,"skin":"picture/ui/topmini.png","height":300}},{"type":"Image","props":{"width":450,"skin":"picture/ui/topmini.png","height":50}},{"type":"Tab","props":{"y":65,"x":15,"width":70,"space":10,"skin":"comp/tab.png","name":"tab_notice","labels":"label1,label2,label3","height":170,"direction":"vertical"}},{"type":"Label","props":{"y":5,"x":150,"width":150,"valign":"middle","text":"公告","strokeColor":"#ffffff","height":40,"fontSize":30,"color":"#68c88e","align":"center"}},{"type":"Button","props":{"y":-7,"x":384,"width":74,"stateNum":1,"skin":"picture/ui/ui_guanbi.png","name":"btn_closeNotice","label":"关闭","height":75}}]}],"animations":[{"nodes":[{"target":14,"keyframes":{"scaleY":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":14,"key":"scaleY","index":0},{"value":1,"tweenMethod":"bounceIn","tween":false,"target":14,"key":"scaleY","index":10}],"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":14,"key":"scaleX","index":0},{"value":1,"tweenMethod":"bounceIn","tween":false,"target":14,"key":"scaleX","index":10}],"anchorY":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":14,"key":"anchorY","index":0},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":14,"key":"anchorY","index":10}],"anchorX":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":14,"key":"anchorX","index":0},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":14,"key":"anchorX","index":10}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.loginUI.noticeUI.uiView);

        }

    }
}

module ui.mainUI {
    export class mainUI extends View {
		public btn_left:Laya.Button;
		public btn_right:Laya.Button;
		public topImg:Laya.Image;
		public logoImg:Laya.Image;
		public headImg:Laya.Image;
		public m_list:Laya.List;

        public static  uiView:any ={"type":"View","props":{"width":500,"height":800},"child":[{"type":"Button","props":{"y":720,"x":0,"width":250,"var":"btn_left","stateNum":1,"skin":"picture/ui/ui_paihangdi.png","sizeGrid":"15,15,15,15,0","labelSize":28,"labelColors":"#3476CA,#E2E6E5,#E2E6E5","label":"test","height":80}},{"type":"Button","props":{"y":720,"x":250,"width":250,"var":"btn_right","stateNum":1,"skin":"picture/ui/ui_paihangdi.png","sizeGrid":"15,15,15,15,0","labelSize":28,"labelColors":"#3476CA,#E2E6E5,#E2E6E5","label":"test","height":80}},{"type":"Image","props":{"y":0,"x":0,"width":500,"var":"topImg","skin":"comp/hscroll.png","height":100}},{"type":"Image","props":{"y":15,"x":15,"width":185,"var":"logoImg","skin":"picture/presentation/presentation7.jpg","height":70}},{"type":"Image","props":{"y":15,"x":335,"width":90,"var":"headImg","skin":"picture/super/super7.jpg","height":90}},{"type":"List","props":{"y":120,"x":10,"width":480,"var":"m_list","repeatY":3,"repeatX":1,"height":600},"child":[{"type":"Box","props":{"renderType":"render","name":"m_box"},"child":[{"type":"Image","props":{"width":480,"skin":"picture/ui/awards.png","height":200}},{"type":"Image","props":{"y":10,"x":15,"width":450,"skin":"comp/hscroll.png","height":180}},{"type":"Image","props":{"y":15,"x":20,"width":440,"skin":"picture/presentation/presentation7.jpg","name":"img_presentation","height":130}},{"type":"Label","props":{"y":155,"x":20,"width":100,"valign":"middle","text":"测试中","name":"label_select","height":30,"fontSize":20,"bgColor":"#ee9d52","align":"center"}},{"type":"Label","props":{"y":155,"x":130,"width":330,"valign":"middle","text":"11111111111111111111","name":"label_info","height":30,"fontSize":20,"alpha":1,"align":"left"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.mainUI.mainUI.uiView);

        }

    }
}

module ui.mainUI {
    export class slefUI extends View {
		public ani1:Laya.FrameAnimation;
		public self_list:Laya.List;
		public btn_close:Laya.Button;
		public btn_left:Laya.Button;
		public btn_right:Laya.Button;
		public mBox:Laya.Box;
		public sltLabel:Laya.Label;
		public traitLabel:Laya.Label;
		public msgLabel:Laya.Label;
		public introLabel:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":500,"height":800},"child":[{"type":"List","props":{"y":0,"x":0,"var":"self_list","repeatX":1,"hScrollBarSkin":"comp/hscroll.png"},"child":[{"type":"Box","props":{"y":0,"x":0,"renderType":"render"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":500,"skin":"picture/mini/mini1.jpg","name":"bgImg","height":800}}]}]},{"type":"Button","props":{"y":50,"x":50,"width":60,"var":"btn_close","stateNum":1,"skin":"picture/ui/back.png","height":60},"compId":115},{"type":"Button","props":{"y":750,"x":50,"width":190,"var":"btn_left","stateNum":1,"skin":"picture/ui/ui_paihangdi.png","sizeGrid":"15,15,15,15,0","labelSize":20,"label":"label","height":40},"compId":116},{"type":"Button","props":{"y":750,"x":260,"width":190,"var":"btn_right","stateNum":1,"skin":"picture/ui/ui_paihangdi.png","sizeGrid":"15,15,15,15,0","labelSize":20,"label":"label","height":40},"compId":117},{"type":"Box","props":{"y":512,"x":50,"var":"mBox"},"child":[{"type":"Image","props":{"width":400,"skin":"comp/hscroll.png","height":220},"compId":119},{"type":"Image","props":{"width":400,"skin":"comp/blank.png","height":50},"compId":135},{"type":"Label","props":{"y":10,"x":20,"width":100,"var":"sltLabel","valign":"middle","text":"label","height":30,"fontSize":20,"bgColor":"#ee9d52","align":"center"}},{"type":"Label","props":{"y":50,"x":20,"width":347,"var":"traitLabel","valign":"middle","text":"label","styleSkin":"comp/label.png","height":30,"fontSize":18,"align":"left"}},{"type":"Label","props":{"y":10,"x":142,"width":242,"var":"msgLabel","valign":"middle","text":"label","styleSkin":"comp/label.png","height":30,"fontSize":20,"align":"left"}},{"type":"Image","props":{"y":190,"width":400,"skin":"comp/blank.png","height":30},"compId":134},{"type":"Label","props":{"y":80,"x":20,"wordWrap":true,"width":364,"var":"introLabel","overflow":"scroll","height":105,"fontSize":20}}]}],"animations":[{"nodes":[{"target":115,"keyframes":{"skin":[{"value":"res/picture/ui/back.png","tweenMethod":"linearNone","tween":false,"target":115,"key":"skin","index":0}]}},{"target":116,"keyframes":{"skin":[{"value":"res/picture/ui/ui_paihangdi.png","tweenMethod":"linearNone","tween":false,"target":116,"key":"skin","index":0}]}},{"target":117,"keyframes":{"skin":[{"value":"res/picture/ui/ui_paihangdi.png","tweenMethod":"linearNone","tween":false,"target":117,"key":"skin","index":0}]}},{"target":119,"keyframes":{"skin":[{"value":"res/comp/hscroll.png","tweenMethod":"linearNone","tween":false,"target":119,"key":"skin","index":0}]}},{"target":135,"keyframes":{"skin":[{"value":"res/comp/blank.png","tweenMethod":"linearNone","tween":false,"target":135,"key":"skin","index":0}]}},{"target":134,"keyframes":{"skin":[{"value":"res/comp/blank.png","tweenMethod":"linearNone","tween":false,"target":134,"key":"skin","index":0}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.mainUI.slefUI.uiView);

        }

    }
}
