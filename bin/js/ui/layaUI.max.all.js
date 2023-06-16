var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var GameInfoUI=(function(_super){
		function GameInfoUI(){
			
		    this.mainBox=null;
		    this.bg=null;
		    this.levelLabel=null;
		    this.hpBg=null;
		    this.hpInfo=null;
		    this.leftBtn=null;
		    this.rightBtn=null;
		    this.beginBox=null;
		    this.startBtn=null;
		    this.gameOverBox=null;
		    this.newHighImg=null;
		    this.maxScoreLbl=null;
		    this.scoreLbl=null;
		    this.submitBtn=null;

			GameInfoUI.__super.call(this);
		}

		CLASS$(GameInfoUI,'ui.GameInfoUI',_super);
		var __proto__=GameInfoUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameInfoUI.uiView);

		}

		GameInfoUI.uiView={"type":"View","props":{"width":720,"height":1280},"child":[{"type":"Box","props":{"width":720,"var":"mainBox","centerX":0},"child":[{"type":"Image","props":{"y":0,"x":0,"width":720,"var":"bg","skin":"comp/lwdownbg.png","sizeGrid":"20,0,0,0","name":"bg","height":1280}},{"type":"Image","props":{"x":0,"top":0,"skin":"comp/bg_top.png","left":0}},{"type":"FontClip","props":{"y":17,"x":526,"width":130,"var":"levelLabel","value":"0000","skin":"comp/clip_num.png","sheet":"0123456789","renderType":"render","height":38,"align":"right"}},{"type":"Image","props":{"y":10,"x":655,"skin":"comp/bgTop_level_label.png"}},{"type":"Image","props":{"y":18,"x":25,"skin":"comp/lift_label.png"}},{"type":"Image","props":{"y":14,"x":115,"width":222,"var":"hpBg","skin":"comp/hp_bg.png","height":40}},{"type":"Image","props":{"y":14,"x":115,"width":222,"var":"hpInfo","skin":"comp/hp_val.png","name":"hpInfo","height":40}},{"type":"Box","props":{"y":0,"x":0,"width":360,"var":"leftBtn","height":1280},"child":[{"type":"Image","props":{"y":50,"skin":"comp/left.png","left":50,"bottom":50,"alpha":0.5}}]},{"type":"Box","props":{"y":0,"x":360,"width":360,"var":"rightBtn","height":1280},"child":[{"type":"Image","props":{"y":50,"x":50,"skin":"comp/right.png","right":50,"bottom":50,"alpha":0.5}}]}]},{"type":"Box","props":{"var":"beginBox","top":0,"right":0,"left":0,"bottom":0},"child":[{"type":"Label","props":{"y":0,"x":0,"top":0,"right":0,"left":0,"bottom":0,"bgColor":"#000000","alpha":0.5}},{"type":"Image","props":{"y":302,"x":0,"skin":"comp/begin_info.png","centerX":0}},{"type":"Image","props":{"y":167,"x":0,"skin":"comp/begin_title.png","centerX":0}},{"type":"Image","props":{"y":554,"x":0,"skin":"comp/begin_right_label.png","centerX":0}},{"type":"Image","props":{"y":841,"x":0,"skin":"comp/begin_left_label.png","centerX":0}},{"type":"Button","props":{"y":0,"x":0,"var":"startBtn","stateNum":1,"skin":"comp/begin_btn.png","centerX":0,"bottom":120}},{"type":"Image","props":{"skin":"comp/begin_btn_label.png","centerX":0,"bottom":152}}]},{"type":"Box","props":{"visible":false,"var":"gameOverBox","top":0,"right":0,"mouseThrough":false,"left":0,"bottom":10},"child":[{"type":"Label","props":{"top":0,"right":0,"left":0,"bottom":0,"bgColor":"#000000"}},{"type":"Image","props":{"skin":"comp/gameover_bg.png","centerY":0,"centerX":0},"child":[{"type":"Image","props":{"y":234,"x":292,"skin":"comp/gameover_bg_small.png"}},{"type":"Image","props":{"y":223,"x":463,"var":"newHighImg","skin":"comp/gameover_label2.png"}},{"type":"Image","props":{"y":353,"x":292,"skin":"comp/gameover_bg_small.png"}},{"type":"Image","props":{"y":253,"x":427,"skin":"comp/gameover_level_label.png"}},{"type":"Image","props":{"y":369,"x":429,"skin":"comp/gameover_level_label.png"}},{"type":"Image","props":{"y":243,"x":106,"skin":"comp/gameover_max_label.png"}},{"type":"FontClip","props":{"y":256,"x":305,"width":120,"var":"maxScoreLbl","value":"100","skin":"comp/clip_num2.png","sheet":"0123456789","renderType":"render","align":"right"}},{"type":"FontClip","props":{"y":374,"x":305,"width":120,"var":"scoreLbl","value":"100","skin":"comp/clip_num2.png","sheet":"0123456789","renderType":"render","align":"right"}},{"type":"Image","props":{"y":17,"x":163,"skin":"comp/gameover_title_img.png"}},{"type":"Button","props":{"y":522,"x":189,"var":"submitBtn","stateNum":1,"skin":"comp/gameover_submit_btn.png"}}]}]}]};
		return GameInfoUI;
	})(View);