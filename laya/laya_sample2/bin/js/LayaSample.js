Laya.init(500, 800, Laya.WebGL);
Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
Laya.stage.scaleMode = Laya.Stage.SCALE_EXACTFIT;
Laya.stage.screenMode = Laya.Stage.SCREEN_VERTICAL;
Laya.stage.bgColor = "white";
new cn.yh.sample2.ConfigMananger();
Laya.loader.load([
    "res/atlas/comp.atlas",
    "res/atlas/ani.atlas",
    "res/atlas/picture/mini.atlas",
    "res/atlas/picture/presentation.atlas",
    "res/atlas/picture/super.atlas",
    "picture/other/bar.png",
    "res/atlas/picture/ui.atlas"
], Laya.Handler.create(this, this.onLoaded));
function onLoaded() {
    new cn.yh.sample2.main.Main();
}
//# sourceMappingURL=LayaSample.js.map