/**
* name 
*/
module cn.yh.sample2{
	export class ConfigMananger{
		private static roleData:Array<any> = [];
		private static npcData:Array<any> = [];
		private static itemData:Array<any> = [];
		private static guideData:Array<any> = [];
		private static noticeData:Array<any> = [];
		
		constructor(){
			Laya.loader.load(
				[
					{url:"xml/roleInfo.xml",type:laya.net.Loader.XML},
					{url:"xml/npc.xml",type:laya.net.Loader.XML},
					{url:"xml/item.xml",type:laya.net.Loader.XML},
					{url:"xml/guide.xml",type:laya.net.Loader.XML},
					{url:"xml/notice.xml",type:laya.net.Loader.XML}
				],
				Laya.Handler.create(this,this.onLoadComplete)
			);
		}
		private onLoadComplete(){
			this.loadRoleInfoXml();
			this.loadNpcXml();
			this.loadItemXml();
			this.loadGuideXml();
			this.loadNoticeXml();
		}

		private loadRoleInfoXml(){
			let xmlDom:any=laya.net.Loader.getRes("xml/roleInfo.xml");
			let _src:Array<string>;
			let rootNodes = xmlDom.firstChild;
			for(let i:number = 0,count= rootNodes.childNodes.length;i<count;i++){
				let node:any = rootNodes.childNodes[i]; 
				_src = [];
				for(let j:number = 0;j<node.firstChild.childNodes.length;j++){
					_src.push(node.firstChild.childNodes[j].innerHTML);
				}
				ConfigMananger.roleData.push({
					id:node.getAttribute("id"),
					src:_src,
					isSlt:false,
					msg:node.getAttribute("name"),
					trait:node.getAttribute("trait"),
					intro:node.getAttribute("intro")
				});
			}
		}
		public static getRoleInfo(){
			return ConfigMananger.roleData;
		}
		private loadNpcXml() {
			let xmlDom:any=laya.net.Loader.getRes("xml/npc.xml");
			let rootNodes = xmlDom.firstChild;
			for(let i:number = 0,count= rootNodes.childNodes.length;i<count;i++){
				let node:any = rootNodes.childNodes[i]; 
				ConfigMananger.npcData.push({
					id:node.getAttribute("id"),
					name:node.getAttribute("name"),
					headImg:node.getAttribute("headImg"),
				});
			}
		}
		public static getNpc(){
			return this.npcData;
		}
		private loadItemXml() {
			let xmlDom:any=laya.net.Loader.getRes("xml/item.xml");
			let rootNodes = xmlDom.firstChild;
			for(let i:number = 0,count= rootNodes.childNodes.length;i<count;i++){
				let node:any = rootNodes.childNodes[i]; 
				ConfigMananger.itemData.push({
					id:node.getAttribute("id"),
					name:node.getAttribute("name"),
					icon:node.getAttribute("icon"),
					type:node.getAttribute("type"),
					max:node.getAttribute("max"),
				});
			}
		}
		public static getItem(){
			return ConfigMananger.itemData;
		}
		private loadGuideXml() {
			let xmlDom:any=laya.net.Loader.getRes("xml/guide.xml");
			let rootNodes = xmlDom.firstChild;
			for(let i:number = 0,count= rootNodes.childNodes.length;i<count;i++){
				let node:any = rootNodes.childNodes[i]; 
				ConfigMananger.guideData.push({
					id:node.getAttribute("id"),
					nextId:node.getAttribute("nextId"),
					npcId:node.getAttribute("npcId"),
					say:node.getAttribute("say")
				});
			}
		}
		public static getGuide(){
			return ConfigMananger.guideData;
		}
		private loadNoticeXml() {
			let xmlDom:any=laya.net.Loader.getRes("xml/notice.xml");
			let rootNodes = xmlDom.firstChild;
			for(let i:number = 0,count= rootNodes.childNodes.length;i<count;i++){
				let node:any = rootNodes.childNodes[i]; 
				ConfigMananger.noticeData.push({
					id:node.getAttribute("id"),
					title:node.getAttribute("title"),
					info:node.getAttribute("info")
				});
			}
		}
		public static getNotice(){
			return ConfigMananger.noticeData;
		}
	}
}