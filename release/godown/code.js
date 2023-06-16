var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var GameInfoUI=(function(_super){
		function GameInfoUI(){
			
		    this.bg=null;
		    this.levelLabel=null;
		    this.hpBg=null;
		    this.hpInfo=null;
		    this.beginBox=null;
		    this.startBtn=null;
		    this.gameOverBox=null;
		    this.newHighImg=null;
		    this.maxScoreLbl=null;
		    this.scoreLbl=null;
		    this.rankLbl=null;
		    this.percentLbl=null;
		    this.restartBtn=null;

			GameInfoUI.__super.call(this);
		}

		CLASS$(GameInfoUI,'ui.GameInfoUI',_super);
		var __proto__=GameInfoUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameInfoUI.uiView);

		}

		GameInfoUI.uiView={"type":"View","props":{"width":720,"height":1280},"child":[{"type":"Box","props":{"width":720,"centerX":0},"child":[{"type":"Image","props":{"y":0,"x":0,"width":720,"var":"bg","skin":"comp/lwdownbg.png","sizeGrid":"20,0,0,0","name":"bg","height":1280}},{"type":"Image","props":{"x":0,"top":0,"skin":"comp/bg_top.png","left":0}},{"type":"FontClip","props":{"y":17,"x":526,"width":130,"var":"levelLabel","value":"0000","skin":"comp/clip_num.png","sheet":"0123456789","renderType":"render","height":38,"align":"right"}},{"type":"Image","props":{"y":1070,"x":50,"skin":"comp/left.png","name":"left","left":50,"bottom":50,"alpha":0.5}},{"type":"Image","props":{"y":1070,"x":510,"skin":"comp/right.png","right":50,"name":"right","bottom":50,"alpha":0.5}},{"type":"Image","props":{"y":10,"x":655,"skin":"comp/bgTop_level_label.png"}},{"type":"Image","props":{"y":18,"x":25,"skin":"comp/lift_label.png"}},{"type":"Image","props":{"y":14,"x":115,"width":222,"var":"hpBg","skin":"comp/hp_bg.png","height":40}},{"type":"Image","props":{"y":14,"x":115,"width":222,"var":"hpInfo","skin":"comp/hp_val.png","name":"hpInfo","height":40}}]},{"type":"Box","props":{"var":"beginBox","top":0,"right":0,"left":0,"bottom":0},"child":[{"type":"Label","props":{"y":0,"x":0,"top":0,"right":0,"left":0,"bottom":0,"bgColor":"#000000","alpha":0.5}},{"type":"Image","props":{"y":302,"x":0,"skin":"comp/begin_info.png","centerX":0}},{"type":"Image","props":{"y":167,"x":0,"skin":"comp/begin_title.png","centerX":0}},{"type":"Image","props":{"y":554,"x":0,"skin":"comp/begin_right_label.png","centerX":0}},{"type":"Image","props":{"y":841,"x":0,"skin":"comp/begin_left_label.png","centerX":0}},{"type":"Button","props":{"y":0,"x":0,"var":"startBtn","stateNum":1,"skin":"comp/begin_btn.png","centerX":0,"bottom":120}},{"type":"Image","props":{"skin":"comp/begin_btn_label.png","centerX":0,"bottom":152}}]},{"type":"Box","props":{"visible":false,"var":"gameOverBox","top":0,"right":0,"mouseThrough":false,"left":0,"bottom":0},"child":[{"type":"Label","props":{"top":0,"right":0,"left":0,"bottom":0,"bgColor":"#000000"}},{"type":"Image","props":{"skin":"comp/gameover_bg.png","centerY":0,"centerX":0},"child":[{"type":"Image","props":{"y":20,"x":160,"skin":"comp/gameover_title_img.png"}},{"type":"Image","props":{"y":230,"x":292,"skin":"comp/gameover_bg_small.png"}},{"type":"Image","props":{"y":217,"x":466,"var":"newHighImg","skin":"comp/gameover_label2.png"}},{"type":"Image","props":{"y":349,"x":292,"skin":"comp/gameover_bg_small.png"}},{"type":"Image","props":{"y":515,"x":415,"skin":"comp/gameover_label3.png"}},{"type":"Image","props":{"y":570,"x":110,"visible":false,"skin":"comp/gameover_label4.png"}},{"type":"Image","props":{"y":460,"x":70,"skin":"comp/gameover_label5.png"}},{"type":"Image","props":{"y":515,"x":70,"skin":"comp/gameover_label6.png"}},{"type":"Image","props":{"y":249,"x":427,"skin":"comp/gameover_level_label.png"}},{"type":"Image","props":{"y":365,"x":429,"skin":"comp/gameover_level_label.png"}},{"type":"Image","props":{"y":239,"x":106,"skin":"comp/gameover_max_label.png"}},{"type":"Image","props":{"y":460,"x":490,"skin":"comp/gameover_wei_label.png"}},{"type":"Label","props":{"y":570,"x":284,"visible":false,"text":"最强王者","fontSize":40,"color":"#fdfdfd","align":"right"}},{"type":"Image","props":{"y":519,"x":376,"skin":"comp/fh.png"}},{"type":"FontClip","props":{"y":252,"x":305,"width":120,"var":"maxScoreLbl","value":"100","skin":"comp/clip_num2.png","sheet":"0123456789","renderType":"render","align":"right"}},{"type":"FontClip","props":{"y":370,"x":305,"width":120,"var":"scoreLbl","value":"100","skin":"comp/clip_num2.png","sheet":"0123456789","renderType":"render","align":"right"}},{"type":"FontClip","props":{"y":467,"x":250,"width":300,"var":"rankLbl","value":"100","skin":"comp/clip_num2.png","sheet":"0123456789","scaleY":0.8,"scaleX":0.8,"renderType":"render","align":"center"}},{"type":"FontClip","props":{"y":520,"x":295,"width":90,"var":"percentLbl","value":"100","skin":"comp/clip_num2.png","sheet":"0123456789","scaleY":0.8,"scaleX":0.8,"renderType":"render","align":"right"}}]},{"type":"Button","props":{"y":913,"x":-41,"var":"restartBtn","stateNum":1,"skin":"comp/gameover_btn.png","centerX":0}},{"type":"Image","props":{"y":936,"x":299,"skin":"comp/gameover_btn_label.png","centerX":0}}]}]};
		return GameInfoUI;
	})(View);
var GameOverUI=(function(_super){
		function GameOverUI(){
			
		    this.restartBtn=null;
		    this.titleLabel=null;
		    this.topLevelLable=null;
		    this.nowLevelLabel=null;
		    this.rankLabel=null;
		    this.percentLabel=null;

			GameOverUI.__super.call(this);
		}

		CLASS$(GameOverUI,'ui.GameOverUI',_super);
		var __proto__=GameOverUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameOverUI.uiView);

		}

		GameOverUI.uiView={"type":"Dialog","props":{"width":590,"height":920},"child":[{"type":"Image","props":{"skin":"comp/gameover_bg.png"}},{"type":"Image","props":{"y":230,"skin":"comp/gameover_bg_small.png","right":90}},{"type":"Image","props":{"y":217,"x":466,"skin":"comp/gameover_label2.png"}},{"type":"Image","props":{"y":349,"skin":"comp/gameover_bg_small.png","right":90}},{"type":"Button","props":{"y":732,"var":"restartBtn","stateNum":1,"skin":"comp/gameover_btn.png","centerX":0}},{"type":"Image","props":{"y":755,"skin":"comp/gameover_btn_label.png","centerX":0}},{"type":"Image","props":{"y":515,"x":415,"skin":"comp/gameover_label3.png"}},{"type":"Image","props":{"y":570,"x":110,"skin":"comp/gameover_label4.png"}},{"type":"Image","props":{"y":460,"x":110,"skin":"comp/gameover_label5.png"}},{"type":"Image","props":{"y":515,"x":60,"skin":"comp/gameover_label6.png"}},{"type":"Image","props":{"y":249,"x":427,"skin":"comp/gameover_level_label.png"}},{"type":"Image","props":{"y":365,"x":429,"skin":"comp/gameover_level_label.png"}},{"type":"Image","props":{"y":239,"x":106,"skin":"comp/gameover_max_label.png"}},{"type":"Image","props":{"y":460,"x":424,"skin":"comp/gameover_wei_label.png"}},{"type":"Label","props":{"y":570,"x":284,"var":"titleLabel","text":"最强王者","fontSize":40,"color":"#fdfdfd","align":"right"}},{"type":"Image","props":{"y":519,"x":376,"skin":"comp/fh.png"}},{"type":"Image","props":{"y":21,"skin":"comp/gameover_title_img.png","centerX":0}},{"type":"FontClip","props":{"y":252,"x":325,"var":"topLevelLable","value":"100","skin":"comp/clip_num2.png","sheet":"0123456789","renderType":"render","align":"right"}},{"type":"FontClip","props":{"y":370,"x":328,"var":"nowLevelLabel","value":"100","skin":"comp/clip_num2.png","sheet":"0123456789","renderType":"render","align":"right"}},{"type":"FontClip","props":{"y":467,"x":327,"var":"rankLabel","value":"100","skin":"comp/clip_num2.png","sheet":"0123456789","scaleY":0.8,"scaleX":0.8,"renderType":"render","align":"right"}},{"type":"FontClip","props":{"y":520,"x":296,"var":"percentLabel","value":"100","skin":"comp/clip_num2.png","sheet":"0123456789","scaleY":0.8,"scaleX":0.8,"renderType":"render","align":"right"}}]};
		return GameOverUI;
	})(Dialog);
function TipQueue(){

    this._caller = null;
    this._arrText = null;
}
TipQueue.prototype.init = function(caller, delay){
        this.setCaller(caller);
        this._arrText = [];
    }

TipQueue.prototype.setCaller = function(caller) {
        this._caller = caller;
    }

    /**
     * 添加ICON + 数字文字的提示
     * @param iconPath
     * @param num
     */
    // addIconNumLabelTip (params, x, y) {
    //     if (!this._caller || this._caller.destroyed) {
    //         Log.debug("TipUtils caller is null or destroyed");
    //         return;
    //     }

    //     this.addTipBoxByUIPageUrl(PageConfig.TipIconNumLabelPage, PageConfig.TipIconNumLabelName, params, x, y);
    // }

    /**
     * 添加tip，根据指定页面
     * @param pageUrl
     * @param pageName
     * @param params
     * @param x
     * @param y
     */
TipQueue.prototype.addTipBoxByUIPageUrl  = function(pageUrl, pageName = null, params = null, x = 0, y = 0) {
        let createdHandler = Laya.Handler.create(this, this.onTipBoxUICreated, [x, y]);
        // ViewUtils.createUI(pageUrl, pageName, createdHandler, params);
    }

    TipQueue.prototype.onTipBoxUICreated  = function(x, y, ui) {
        let tipBox = ui;

        tipBox.autoDestroyAtClosed = true;
        tipBox.mouseEnabled = false;
        tipBox.pos(x || 0, y || 0);
        tipBox.zOrder = 99998;
        this._arrText[this._arrText.length] = tipBox;
    }

    TipQueue.prototype.addTip  = function(content, width, height, x, y, fontSize, fontColor, bgColor, borderColor, tipType, goodsData, tagData) {
        if (!this._caller) {
            // Log.debug("TipUtils caller is null!");
            return;
        }

        var tipBox = new Laya.Box();
        tipBox.mouseEnabled = false;
        tipBox.tipType = tipType;
        tipBox.pos(x || 0, y || 0);
        tipBox.zOrder = 99998;
        tipBox.tagData = tagData; //各种数据
        this._arrText[this._arrText.length] = tipBox;

        //  var tipBg = tipBox.getChildByName("tipBg");
        //  if (!tipBg) {
        //      tipBg = this.newTipBg();
        //      tipBox.addChild(tipBg);
        //  }

        var tipText = tipBox.getChildByName("tipText");
        if (!tipText) {
            tipText = new Laya.Text();
            tipText.mouseEnabled = false;
            tipText.name = "tipText";
            tipBox.addChild(tipText);
        }
        switch (tipType) {
            default: //默认字体
                tipText.font = "Microsoft YaHei";
                break;
        }

        tipText.text = content;
        tipText.color = fontColor || "#ffff";
        tipText.fontSize = fontSize || 50;
        //tipText.align = laya.display.css.CSSStyle.ALIGN_LEFT;
        tipText.pivot(tipText.textWidth / 2, tipText.textHeight / 2);
        tipText.zOrder = 10;
        tipBox.width = width || tipText.textWidth;
        tipBox.height = height || tipText.textHeight;
         tipText.pivot(tipText.width / 2, tipText.height / 2);

        // 不需要物品 modify by Tom 2019-08-23
        // //补上物品图标
        //  var contentGoodsArr = StringUtils.split(content, "{goods}");
        //  if (contentGoodsArr.length > 1 && goodsData) {
        //      //图标
        //      tipText.text = tipText.text.replace("{goods}", "        ");
        //      var gQuality = tipText.getChildByName("goodsQuality");
        //      if (!gQuality) {
        //          let box = LoadPrefabUtils.loadPrefab(ResConfig.PerfabPath.ShopGiftPackagePropBox);
        //          let script = box.getComponent(PropScript);
        //          let goodsId = goodsData.GoodsId;
        //          let goodsCount = goodsData.Count;
        //          script.init(goodsId, goodsCount);
        //          script.setSize(10, 10);
        //          script.hideGoodsCount();// 隐藏商品数量和数量背景
        //          gQuality = box;
        //          gQuality.mouseEnabled = false;
        //          gQuality.name = "goodsQuality";
        //          gQuality.x = 85;
        //          gQuality.y = -5;
        //          //gQuality.setPos(90, 5);
        //          //gQuality.setSize(30, 30);
        //          gQuality.visible = true;
        //          tipText.addChild(gQuality);
        //      }else{
        //          gQuality.visible = true;
        //          //TODO 物品渲染
        //      }
        //  }
    }

    TipQueue.prototype.newTipBg  = function() {
        var tipBg = new Laya.Image("common/deco_33.png");
        tipBg.mouseEnabled = false;
        tipBg.name = "tipBg";
        tipBg.width = 600;
        tipBg.height = 80;
        tipBg.y = 0;
        this.pivotSelfCenter(tipBg);
        tipBg.zOrder = 1;
        return tipBg;
    }

    TipQueue.prototype.pivotSelfCenter  = function(node) {
        if (!node || node.destroyed) {
            return;
        }

        if ((node["anchorX"] !== void 0) && (node["anchorY"] !== void 0)) {
            node.anchorX = 0.5;
            node.anchorY = 0.5;
        } else {
            //TODO 获取节点实际大小
            //var size = LayaExt.getNodeRealSize(node);
            //node.pivot(size.width / 2, size.height / 2);
            node.pivot(node.width / 2, node.height / 2);
        }

    }

     TipQueue.prototype.getNextTip  = function() {
        var tip = null;
        if (this._arrText.length > 0) {
            tip = this._arrText[0];
            this._arrText.splice(0, 1);
            this._caller.addChild(tip);
        }
        //TipUtils.addToUsedTipBoxList(tip);
        return tip;
    }

    TipQueue.prototype.clearTips  = function() {
        this._arrText = [];
    }

    TipQueue.prototype.size = function() {
        return this._arrText.length;
    }

window.TipQueue = TipQueue;

// import TipQueue from "./TipQueue";
// import TimerUtils from "./TimerUtils";
// import ProjectConfig from "../../ProjectConfig";


/**
 * Created by wjh on 2019/7/10.
 */

var TipUtils = {


    /**
     * 通用飘字提示
     * @param content
     */
    showStageTipNormal(content) {
        this.showStageTipByType(content, TipUtils.TipType.Normal, null, null, null, null, 20, "#ffffff");
    },


    /**
     * 错误飘字提示
     * @param content
     */
    showStageTipError(content) {
        this.showStageTipByType(content, TipUtils.TipType.Error, null, null, null, null, 20, "#f44336");
    },



    /**
     * 重点飘字提示
     * @param content
     */
    showStageTipHot(content) {
        this.showStageTipByType(content, TipUtils.TipType.Hot, null, null, null, null, 60, "yellow");
    },

    showStageTipByType(content, tipType, width, height, x, y, fontSize, fontColor, bgColor, borderColor) {
        var centerX = Laya.stage.width / 2;
        var centerY = Laya.stage.height / 2;
        //this.addTip(Laya.stage, content, width, height, x || centerX, y || centerY, fontSize, fontColor, bgColor, borderColor, tipType);
        this.showTip(Laya.stage, content, width, height, x || centerX, y || centerY, fontSize, fontColor, bgColor, borderColor, tipType);
    },

    showTip(caller, content, width, height, x, y, fontSize, fontColor, bgColor, borderColor, tipType, goodsData, tagData) {
        var queue = this._getQueue(caller);
        if (!queue) {
            queue = this._addQueue(caller);
        }
        queue.addTip(content, width, height, x, y, fontSize, fontColor, bgColor, borderColor, tipType, goodsData, tagData);
        if (!TipUtils._isStarting) {
            this._startDisplay();
            TipUtils._isStarting = true;
        }
    },

    _startDisplay() {
        Laya.timer.frameLoop(TipUtils._delay, this, this._displayCB);
        //TimerUtils.loop(1000, this, this._clearUsedTipBoxCB);
    },

    _displayCB(dt) {
        var keySet = TipUtils._tipQueue.keys();
        for (let key of keySet) {
            var tipQueue = TipUtils._tipQueue.get(key);
            var tipBox = tipQueue.getNextTip();

            var cnt = 0;
            var maxCnt = Math.max(TipUtils._showNum, Math.floor(tipQueue.size() / 2));
            //伤害数字，非一个位置的一起飘
            while (tipBox) {
                //动画
                var tipType = tipBox.tipType || TipUtils.TipType.Normal;
                switch (tipType) {
                    default: //普通飘字
                        //Laya.Tween.to(tipBox, {x: tipBox.x + RandomUtils.randomInt(-0, 0), y: tipBox.y - 150}, 1200, Laya.Ease.elastic, Laya.Handler.create(this, this._inDisplayTipCB, [tipBox]));
                        var _defaultMoveY1 = 80;
                        var _defaultMoveYTime1 = 500;
                        var _defaultWaitTime = 300;
                        var _defaultMoveY2 = 150;
                        var _defaultMoveYTime2 = 1000;
                        Laya.Tween.to(tipBox, { y: tipBox.y - _defaultMoveY1 }, _defaultMoveYTime1);
                        Laya.Tween.to(tipBox, { y: tipBox.y - _defaultMoveY1 - _defaultMoveY2 }, _defaultMoveYTime2, null, null, _defaultMoveYTime1 + _defaultWaitTime);
                        tipBox.alpha = 0;
                        Laya.Tween.to(tipBox, { alpha: 1 }, _defaultMoveYTime1);
                        Laya.Tween.to(tipBox, { alpha: 0 }, _defaultMoveYTime2, null, Laya.Handler.create(this, this._inDisplayTipCB, [tipBox]), _defaultMoveYTime1 + _defaultWaitTime);
                        break;
                }
                if (key == Laya.stage || tipType == TipUtils.TipType.Exp) { //加到stage上的提示按间隔来显示
                    break;
                }
                cnt++;
                if (cnt >= maxCnt) {
                    break;
                }

                tipBox = tipQueue.getNextTip();
            }
        }
        //判断空队列
        for (let key of keySet) {
            var tipQueue = TipUtils._tipQueue.get(key);
            if (tipQueue && tipQueue.size() <= 0) {
                this._removeQueue(keySet[i]);
            }
        }
    },

    _inDisplayTipCB(tipBox) {
        // 直接销毁，不使用对象池（现在类型比较多，如果使用对象池需要优化 TODO)
        if (tipBox) {
            tipBox.removeSelf();
            tipBox.destroy();
        }

        // if (tipBox) {
        //     //还原
        //     tipBox.scaleX = 1;
        //     tipBox.scaleY = 1;
        //     tipBox.alpha = 1;
        //     tipBox.tagData = null;
        //     tipBox.removeSelf();
        //     this.pushTipBox(tipBox);
        //     this.removeFromUsedTipBoxList(tipBox);
        // }
    },

    pushTipBox(tipBox) {
        if (tipBox && TipUtils._arrBoxList.length < TipUtils._boxListMax) {
            TipUtils._arrBoxList.push(tipBox);
        }
    },

 _getQueue(keyObj) {
        return TipUtils._tipQueue.get(keyObj);
    },

     _addQueue(keyObj) {
        if (keyObj && !TipUtils._tipQueue.has(keyObj)) {
            var tipEueue = new TipQueue(keyObj);
            tipEueue.init(keyObj)
            TipUtils._tipQueue.set(keyObj, tipEueue);
        }
        return TipUtils._tipQueue.get(keyObj);
    },

     _removeQueue(keyObj) {
        TipUtils._tipQueue.remove(keyObj);
    },

     addToUsedTipBoxList(tipBox) {
        if (!tipBox) {
            return;
        }
        TipUtils._usedTipBoxList.push({
            box: tipBox,
            addTime: CommonUtils.getCurrentMillSeconds(),
        });
    },

     removeFromUsedTipBoxList(tipBox) {
        if (!tipBox) {
            return;
        }
        for (var i = 0; i < TipUtils._usedTipBoxList.length; i++) {
            if (TipUtils._usedTipBoxList[i].box.$_GID == tipBox.$_GID) {
                TipUtils._usedTipBoxList.splice(i, 1);
                break;
            }
        }
    }

}

TipUtils.TipType = {
    Normal: 0, //一般提示
    Error: 1, //错误
    Hot: 2, //重点提示
};

TipUtils._delay = 5; //飘字间隔帧数
TipUtils._showNum = 1;  // 每次显示的数量
TipUtils._tipQueue = new Map();
TipUtils._usedTipBoxList = []; //已使用的飘字控件，用来做异常不清除时候用
TipUtils._usedTipBoxMaxMilliSeconds = 5000; //最多飘字存在时间
TipUtils._isStarting = false;
TipUtils._arrBoxList = [];//控件缓存数据
TipUtils._boxListMax = 60;//控件缓存上限
TipUtils._delayTimeIndex = 0;
TipUtils._delayTimeList = [50, 100, 70, 120, 60, 110, 150];

window.TipUtils = TipUtils;
// if (ProjectConfig.ENABLE_DEBUG_TOOL) {
//     DebugTool.regClass(TipUtils);
// }

// 道具类型
var GOODS_SCORE = 1;
var GOODS_PROTECT = 2;

var Goods = (function (_super) {
    function Goods() {
        Goods.super(this);
    }

    Goods.cache = false;
    Laya.class(Goods, "goods", _super);
    var _proto = Goods.prototype;
    _proto.init = function (_type, _score) {
        //板子的种类
        this.type = _type;
        //一次性效果标记
        this.done = false;
        this.score = _score || 0;//分数
        //板子的名字
        switch (_type) {
            case GOODS_SCORE:
                this.name = "goodsScore";
                break;
            case GOODS_PROTECT:
                this.name = "goodsProtect";
                break;
            default:
                this.type = GOODS_SCORE;
                this.name = "goodsScore"
                break;
        }

        if (!Goods.cache) {
            Goods.cache = true;
            // 积分道具
            Laya.Animation.createFrames(["comp/goodsScore_1.png"], "goodsScore_stay");

            //保护道具
            Laya.Animation.createFrames(["comp/goodsProtect_1.png"], "goodsProtect_stay");

        }
        if (!this.body) {
            this.body = new Laya.Animation();
            this.addChild(this.body);
            this.body.on(Laya.Event.COMPLETE, this, this.onPlayComplete);
        }
        this.playAction("stay");

    }

    _proto.doEffect = function (target) {
        if (this.done) {
            return null;
        }
        switch (this.type) {
            case GOODS_SCORE:
                target.addLevel(this.score);
                TipUtils.showStageTipHot( "+ " + this.score );
                Laya.SoundManager.playSound("sounds/eat.mp3", 1);
                break;
            case GOODS_PROTECT:
                Laya.SoundManager.playSound("sounds/eat2.mp3", 1);
                break;
            default:
                break;
        }
        this.done = true;
    }

    _proto.onPlayComplete = function () {
    }

    _proto.playAction = function (act) {
        this.action = act;
        this.body.play(0, true, this.name + "_" + act);
        this.bound = this.body.getBounds();
        this.body.pos(-this.bound.width / 2, -this.bound.height / 2);
    }
    return Goods;
})(Laya.Sprite);


//游戏UI文件
var GameInfo = (function(_super){
    function GameInfo(){
        GameInfo.super(this);
        //初始化UI显示
        this.reset();
    }
    //注册类
    Laya.class(GameInfo,"GameInfo",_super);
    var _proto = GameInfo.prototype;
    _proto.reset = function(){
        this.level( 0 );
        this.beginBox.visible = true;
        this.startBtn.once(Laya.Event.CLICK,this,this.onStartClick,["EASY"]);
        // 重新开始游戏
        this.restartBtn.once(Laya.Event.CLICK,this,this.onStartClick,["EASY"]);

        Laya.stage.on(Laya.Event.RESIZE, this, this.resize);
        this.resize();
    }
    //显示关卡级别
    _proto.level = function(value){
        var text = value + "";
        while ( text.length < 5){
            text = "0" + text;
        }
        this.levelLabel.value = text ;
    }

    //显示血量
    _proto.showHp = function(h){
        h = h < 11 ? h : 10;
        if(  this.hpInfo ){
           this.hpInfo.scale(h / 10, 1);
           //this.hpInfo.value = h/10;
        }
    }

    //开始游戏
    _proto.onStartClick = function(nandu){
        console.log(nandu);
        this.beginBox.visible = false;
        this.gameOverBox.visible = false;
        startGame(nandu);
    }

    _proto.setGameOver = function(score, data) {
        this.scoreLbl.value = score; // 分数
        this.rankLbl.value = data.realRank; // 排名
        this.percentLbl.value = parseInt(data.realPercent); // 排名百分比
        var maxSCore = this.getMaxScore();
        if (score > maxSCore) { // 新高
            maxSCore = score;
            this.setMaxScore(maxSCore);
            this.newHighImg.visible = true;
        } else {
            this.newHighImg.visible = false;
        }
        this.maxScoreLbl.value = maxSCore; // 最高分
        this.gameOverBox.visible = true;

        setTimeout(function(){
            try {
                PKSDK.GameEnd(score);
            } catch(e) {
                console.log(e);
            }
        },1000);
    }

    _proto.getMaxScore = function() {
        var score = localStorage.getItem("max_score") || 0;
        return parseInt(score);
    }

    _proto.setMaxScore = function(score) {
        localStorage.setItem("max_score", score);
        return 0;
    }



    _proto.resize = function(){
        this.bg.scaleX = 1;
        this.bg.scaleY = 1;
        var scaleX = Laya.stage.width / this.bg.width;
        var scaleY= Laya.stage.height / this.bg.height;
        this.bg.scaleX = scaleX;
        this.bg.scaleY = scaleY;
        this.bg.centerX = 0;
        this.bg.centerY = 0;

        this.width = Math.round(this.bg.width * this.bg.scaleX);
        this.height = Math.round(this.bg.height * this.bg.scaleY);
    }

    _proto.getUISize = function() {
        return {
            width: this.width,
            height: this.height
        };
    }

    return GameInfo;
})(ui.GameInfoUI);

// board类型
var BOARD_NORMAL = 1;
var BOARD_PRICKLY = 2;//刺
var BOARD_FRAGILE = 3;//会碎掉的
var BOARD_LEFT = 4;
var BOARD_RIGHT = 5;
var BOARD_JUMP = 6;//跳

var id = 0;


var Board = (function(_super){
    function Board(){
        Board.super(this);
    }
    Board.cache = false;
    Laya.class(Board,"Board",_super);
    var _proto = Board.prototype;
    _proto.init = function(_type){
        this.id = id++;
        this.isPass = false;
        this.passed = false;
        //板子的种类
        this.type = _type;
        //一次性效果标记
        this.done = false;
        //板子的名字
        switch (_type) {
            case BOARD_NORMAL:
                this.name = "boardNormal";
                break;
            case BOARD_PRICKLY:
                this.name = "boardPrickly";
                break;
            case BOARD_FRAGILE:
                this.name = "boardFragile";
                break;
            case BOARD_LEFT:
                this.name = "boardLeft";
                break;
            case BOARD_RIGHT:
                this.name = "boardRight";
                break;
            case BOARD_JUMP:
                this.name = "boardJump";
                break;
            default:
                this.type = BOARD_NORMAL;
                this.name = "boardNormal"
                break;
        }

        if(!Board.cache){
            Board.cache = true;

            //普通
            Laya.Animation.createFrames(["comp/boardNormal.png"],"boardNormal_stay");

            //刺
            Laya.Animation.createFrames(["comp/boardPrickly.png"],"boardPrickly_stay");

            //会碎掉的
            Laya.Animation.createFrames(["comp/boardFragile1.png"],"boardFragile_stay");

            //防滚
            Laya.Animation.createFrames(["comp/boardFragile2.png","comp/boardFragile3.png","comp/boardFragile4.png"],"boardFragile_down");

            //左边
            Laya.Animation.createFrames(["comp/conveyer_belt1.png","comp/conveyer_belt2.png","comp/conveyer_belt3.png","comp/conveyer_belt4.png"],"boardLeft_stay");

            //右边
            Laya.Animation.createFrames(["comp/conveyer_belt4.png","comp/conveyer_belt3.png","comp/conveyer_belt2.png","comp/conveyer_belt1.png"],"boardRight_stay");

            //弹簧
            Laya.Animation.createFrames(["comp/Spring-01.png"],"boardJump_stay");
            Laya.Animation.createFrames(["comp/Spring-01.png","comp/Spring-02.png","comp/Spring-03.png","comp/Spring-04.png"],"boardJump_jump");
        }
        if(!this.body){
            this.body = new Laya.Animation();
            this.addChild(this.body);
            this.body.on(Laya.Event.COMPLETE,this,this.onPlayComplete);
        }
        this.playAction("stay");
    }

    _proto.doEffect = function(target){
        if(this.done && this.type != BOARD_JUMP ){
            return null;
        }
        switch (this.type) {
            //boardNormal
            case BOARD_NORMAL:
                target.hpAdd(1);
                Laya.SoundManager.playSound("sounds/hit0.mp3",1);
                break;
            //boardPrickly 刺
            case BOARD_PRICKLY:
                if( !target.isProtect ){
                    target.hpSub(3);
                    Laya.SoundManager.playSound("sounds/hit1.mp3",1);
                }
                break;
            //boardFragile 会碎掉的
            case BOARD_FRAGILE:
                target.hpAdd(1);
                Laya.SoundManager.playSound("sounds/hit0.mp3",1);
                this.playAction("down");
                break;
            //boardLeft
            case BOARD_LEFT:
                target.hpAdd(1);
                Laya.timer.loop(10,target,target.moveLeft,[4]);
                break;
            //boardRight
            case BOARD_RIGHT:
                target.hpAdd(1);
                Laya.timer.loop(10,target,target.moveRight,[4]);
                break;
            // 弹簧
            case BOARD_JUMP:
                if( !this.isAddHp ){
                    target.hpAdd(1);
                }
                this.isAddHp = true;
                Laya.SoundManager.playSound("sounds/hit_jump.mp3",1);
                this.playAction("jump");
                break;
            default:
                break;
        }
        this.done = true;
    }


    _proto.onPlayComplete = function(){
        if(this.action === "down"){
            this.body.stop();
            this.visible = false;
        }
        if(this.action === "jump"){

        }
        else{
            this.playAction("stay");
        }
    }
    _proto.playAction = function(act){
        this.action = act;
        this.body.play(0,true,this.name+"_"+act);
        this.bound = this.body.getBounds();
        this.body.pos(-this.bound.width/2,-this.bound.height/2);
    }

    return Board;
})(Laya.Sprite);

var Role = (function (_super) {
    function Role() {
        Role.super(this);
        // this.init();
    }

    Role.cache = false;
    Laya.class(Role, "Role", _super);
    var _proto = Role.prototype;
    _proto.init = function ( common ) {
        this.action = "";
        //角色是分数
        this.level = 0;
        //角色是否死亡，主要判断英雄
        this.dead = false;
        //角色的血量
        this.MAXHP = 10;
        this.MAXHP = common.maxHp || this.man.MAXHP;//血量
        this.hp = this.MAXHP;

        //是否保护中
        this.isProtect = false;
        this.protectFrame = 0;
        //角色的下落速度
        this.manSpeed =  common.manSpeed || 10;
        //跳跃
        this.jumpSpeed = common.jumpSpeed || 15;
        this.isJump = false;
        this.jumpFrame = 0;
        //受伤
        this.isHurt = false;
        this.hurtFrame = 0;

        //放置保护罩
        if (!this.protectAni) {
            this.protectAni = new Laya.Animation();
            this.addChild(this.protectAni);
            this.showProtect(false);
        }

        //创作图集动画
        if (!Role.cache) {
            Role.cache = true;

            //保护盾
            Laya.Animation.createFrames(["comp/Inv-01.png", "comp/Inv-02.png", "comp/Inv-03.png", "comp/Inv-04.png"], "hero_protect");

            //创建奔跑突击动画
            Laya.Animation.createFrames(["comp/Runl-01.png", "comp/Runl-02.png", "comp/Runl-03.png", "comp/Runl-04.png", "comp/Runl-05.png", "comp/Runl-06.png"], "hero_run_left");
            Laya.Animation.createFrames(["comp/Runr-01.png", "comp/Runr-02.png", "comp/Runr-03.png", "comp/Runr-04.png", "comp/Runr-05.png", "comp/Runr-06.png"], "hero_run_right");
            //停止
            Laya.Animation.createFrames(["comp/hero_stay.png"], "hero_stay");

            //创建奔跑突击动画
            Laya.Animation.createFrames(["comp/Runl-01_hurt.png", "comp/Runl-02_hurt.png", "comp/Runl-03_hurt.png", "comp/Runl-04_hurt.png", "comp/Runl-05_hurt.png", "comp/Runl-06_hurt.png"], "hero_run_left_hurt");
            Laya.Animation.createFrames(["comp/Runr-01_hurt.png", "comp/Runr-02_hurt.png", "comp/Runr-03_hurt.png", "comp/Runr-04_hurt.png", "comp/Runr-05_hurt.png", "comp/Runr-06_hurt.png"], "hero_run_right_hurt");
            //停止
            Laya.Animation.createFrames(["comp/hero_stay_hurt.png"], "hero_stay_hurt");

            //跳
            Laya.Animation.createFrames(["comp/JUMP-01.png", "comp/JUMP-02.png", "comp/JUMP-03.png", "comp/JUMP-04.png", "comp/JUMP-05.png", "comp/JUMP-06.png"], "hero_jump");

            //跳 受伤的
            Laya.Animation.createFrames(["comp/JUMP-01_hurt.png", "comp/JUMP-02_hurt.png", "comp/JUMP-03_hurt.png", "comp/JUMP-04_hurt.png", "comp/JUMP-05_hurt.png", "comp/JUMP-06_hurt.png"], "hero_jump_hurt");
            //Laya.Animation.createFrames(["comp/JUMP-01.png", "comp/JUMP-02.png", "comp/JUMP-03.png", "comp/JUMP-04.png", "comp/JUMP-05.png", "comp/JUMP-06.png"], "hero_jump_hurt");


        }
        if (!this.body) {
            this.body = new Laya.Animation();
            this.addChild(this.body);
            this.body.on(Laya.Event.COMPLETE, this, this.onPlayComplete);
        }
        this.playAction("stay");
    }

    _proto.onPlayComplete = function () {
        this.playAction("stay");
    }

    //添加分数
    _proto.addLevel = function (num) {
        this.level += num;
    }


    _proto.hpAdd = function (num) {
        this.hp += num;
        this.hp = Math.min(this.hp, this.MAXHP)
    }

    _proto.hpSub = function (num) {
        if (this.isProtect) {
            return;
        }
        if (this.hp - num >= 0) {
            this.hp -= num;
        } else {
            this.hp = 0;
            this.dead = true;
            this.playDead()
        }
    }


    _proto.fall = function () {
        this.y += this.manSpeed;
    }

    _proto.playDead = function () {
        Laya.SoundManager.playSound("sounds/dead8.mp3", 1);
    }

    _proto.jump = function () {
        this.y -= this.jumpSpeed;
    }

    _proto.moveLeft = function (num) {
        if (this.x - 1 >= 55) {
            this.x -= num;
        }
    }

    _proto.moveRight = function (num) {
        if (this.x + 1 <= stageWidth - 55) {
            this.x += num;
        }
    }


    _proto.playAction = function (act) {
        if( this.isHurt && act.indexOf("_hurt")){
            act += "_hurt";
        }
        if (this.action != act) {
            this.action = act;
            this.body.stop();
            this.body.play(0, true, "hero_" + act);
        }

        this.bound = this.body.getBounds();
        this.body.pos(-this.bound.width / 2, -this.bound.height / 2);
        //console.log("playAction x:" + this.x + ",y:" + this.y )
    }

    _proto.showProtect = function (isShow) {
        if (isShow) {
            if (this.protectAni.visible) { // 不重复调用
                return;
            }
            this.protectAni.visible = true;
            this.protectAni.play(0, true, "hero_protect");
            var bound = this.protectAni.getBounds();
            this.protectAni.pos(-bound.width/2, -bound.height/2);

        } else {
            if (!this.protectAni.visible) { // 不重复调用
                return;
            }
            this.protectAni.visible = false;
            this.protectAni.stop();
        }
    }

    return Role;
})(Laya.Sprite);

var WebGL = laya.webgl.WebGL;

var stageWidth = 720;
var stageHeight = 1280;
var designWidth = 720;
var designHeight = 1280;

var rankData = [];//排行配置
var common = {};//通用配置
var goodsItems = [];//物品配置
var goodsTotalRate = 100;// 物品总概率
var boardItems = [];//板概率配置
var boardTotalRate = 100;

var maxBoardId = 0; //踩过最大版的id
var direction = null;  // L, R

var manDistanceBoard = 55;
var firstBoardY = 1000;

Laya.MiniAdpter.init();
Laya.init(designWidth, designHeight, WebGL);
//设置水平对齐
Laya.stage.alignH = "center";
//设置垂直对齐
Laya.stage.alignV = "middle";
Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_AUTO;

Laya.loader.load(["res/config/common.json", "res/config/rankData.json", "res/config/goodsItems.json", "res/config/boardItems.json"], Laya.Handler.create(this, this.onLoadJson), null, Laya.Loader.JSON);
Laya.loader.load(["sounds/dead8.mp3", "sounds/eat.mp3", "sounds/eat2.mp3", "sounds/eat3.mp3", "sounds/hit0.mp3", "sounds/hit1.mp3", "sounds/hit2.mp3", "sounds/hit_jump.mp3"], Laya.Handler.create(this, this.onLoadSound), null, Laya.Loader.SOUND);

function onLoadSound() {
    console.log("onLoadSound...")
}

function onLoadJson() {
    Laya.loader.load("res/atlas/comp.atlas", Laya.Handler.create(this, this.onLoad), null, Laya.Loader.ATLAS);
}

function onLoad() {

    //加载配置
    rankData = Laya.loader.getRes("res/config/rankData.json");
    common = Laya.loader.getRes("res/config/common.json");
    goodsItems = Laya.loader.getRes("res/config/goodsItems.json");
    boardItems = Laya.loader.getRes("res/config/boardItems.json");

    console.log("rankData:" + JSON.stringify(rankData));
    console.log("common:" + JSON.stringify(common));
    console.log("goods:" + JSON.stringify(goodsItems));
    console.log("boardItems:" + JSON.stringify(boardItems));

    //难度
    this.createBoardInterval = common.createBoardInterval;
    this.boardSpeed = common.boardSpeed;

    //加速
    this.maxBoardSpeed = common.maxBoardSpeed; //最大速度
    this.addBoardSpeed = common.addBoardSpeed; //每次加速
    this.addBoardLevelInterval = common.addBoardLevelInterval;

    //保护道具和跳跃
    common.jumpFrame = common.jumpFrame || 45;
    common.protectFrame = common.protectFrame || 270;

    //左右速度
    //common.manMoveSpeed = common.manMoveSpeed || 10;

    //道具
    common.goodsHappen = common.goodsHappen || 50;
    initGoods(goodsItems);

    //版
    initBoards(boardItems);

    //加载UI背景
    this.gameInfo = new GameInfo();
    Laya.stage.addChild(this.gameInfo);
    var uiSize = this.gameInfo.getUISize();
    stageWidth = uiSize.width;
    stageHeight = uiSize.height;

    //放弃物理引擎
    console.log("Game Start");

    //放置男人
    this.man = new Role();
    this.man.init(common);

    //增加层级
    this.boardBox = new Laya.Sprite();
    Laya.stage.addChild(this.boardBox);

}


//2018年11月14日 用Layabox官方循环重写鼠标与键盘移动
//鼠标按压控制男人跑动
function onMouseDown() {
    if (Laya.stage.mouseX < stageWidth / 2) {
        changeDirection("L");
    } else {
        changeDirection("R");
    }
}

//清除定时器
function onMouseUp() {
    Laya.timer.clear(this, runLeft);
    Laya.timer.clear(this, runRight);
}

//键盘响应
function onKeyDown(e) {
    //按下左键
    if (e["keyCode"] == 37) {
        changeDirection("L");
    }
    //按下右键
    else if (e["keyCode"] == 39) {
        changeDirection("R");
    } else if ((e["keyCode"] == 8)) {
        this.stop = !this.stop;
    }
}

// 往左右跑
// TODO：位移与动画分离
function runLeft() {
    this.man.playAction("run_left");
    if (this.man.x - 1 >= 50) {
        this.man.x -=  (common.boardSpeed + 4);
    }
}

function runRight() {
    this.man.playAction("run_right");
    if (this.man.x + 1 <= stageWidth - 50) {
        this.man.x +=  (common.boardSpeed + 4);
    }
}

function runJump() {
    if( this.isJumpPlay ){
        return;
    }
    this.isJumpPlay = true;
    this.man.playAction("jump");
}


function changeDirection(curDirection) {
    direction = curDirection;
    var clearRunFunc = (direction == "R" ? runLeft : runRight);
    Laya.timer.clear(this, clearRunFunc);
    Laya.timer.clear(this, clearRunFunc);
    var runFunc = (direction == "L" ? runLeft : runRight);
    runFunc();
    Laya.timer.frameLoop(1, this, runFunc);
}

function setHurt() {
    this.man.isHurt = true;
    this.man.hurtFrame = Laya.timer.currFrame;
}

function onLoop() {

    this.isFall = true;
    if (this.stop) {
        return;
    }

    createBoard4Loop();

    //血量
    this.gameInfo.showHp(this.man.hp);

    //积分
    this.gameInfo.level(this.man.level);

    //左上角是 (0,0)

    //男人下落
    for (var i = this.boardBox.numChildren - 1; i > -1; i--) {
        var board = this.boardBox.getChildAt(i);
        board.y -= Math.abs(this.boardSpeed);//版下移
        //版碰撞
        var distanceY = board.y - this.man.y;
        if (!this.man.dead && board.id >= maxBoardId && !board.isPass
            && Math.abs(this.man.x - board.x) <= (this.man.bound.width / 2 + board.bound.width / 2 - 35)
            && board.y > 0 && distanceY <= (this.man.bound.height / 2 + board.bound.height / 2) && distanceY >= board.bound.height / 2) {
            //踩在版上
            maxBoardId = Math.max(maxBoardId, board.id);// 缓存踩过版的最大id
            if (board.type == 6) {
                this.man.isJump = true;
                this.man.jumpFrame = Laya.timer.currFrame;//开始跳的帧数
            } else {
                if( board.type == 2 ){
                    setHurt();
                }
                this.man.y = board.y - manDistanceBoard;
            }
            this.isFall = false;
            board.doEffect(this.man);

            //物品碰撞检测 这边只需要检测 x 坐标
            for (let j = board.numChildren - 1; j > -1; j--) {
                var goods = board.getChildAt(j);
                if (!isGoods(goods)) {
                    continue;
                }
                // console.log( "board.x:" + board.x );
                // console.log( "man.x:" + this.man.x );
                // console.log( "goods.x:" + goods.x );
                if (!goods.done && goods.visible && Math.abs(board.x + goods.x - this.man.x) <= (goods.bound.width / 2 + this.man.bound.width / 2)) {
                    goods.doEffect(this.man);
                    if (goods.type == 2) {//保护道具
                        this.man.isProtect = true;
                        this.man.protectFrame = Laya.timer.currFrame;//获得保护的帧数
                    }
                    goods.visible = false;
                }
            }
        }

        if ((this.man.y - board.y) > (this.man.bound.height / 2) && !board.isPass && !this.man.dead) {

            //每个板算1层
            this.man.addLevel(1);

            //增加版的时候判断是否要加速
            if (this.man.level != 0 && this.man.level % this.addBoardLevelInterval === 0) {
                this.boardSpeed += this.addBoardSpeed;
                this.boardSpeed = Math.min(this.maxBoardSpeed, this.boardSpeed);

                //版加速的时候 同步修改其他的速度
                common.manSpeed = this.boardSpeed + 7;
                common.jumpSpeed = this.boardSpeed + 7;


            }

            board.isPass = true;
            if (board.type == 6) {
                board.playAction("stay");
            }
        }

        if (board.y <= 60 || board.y <= 133 || !board.visible) {
            for (let j = 0; j < board.numChildren - 1; j++) {
                var goods = board.getChildAt(j);
                if (isGoods(goods)) {
                    removeGoods(goods);
                    board.removeChild(goods);
                }
            }

            board.visible = true;
            board.removeSelf();
            Laya.Pool.recover("board", board);

        }
    }

    // 下坠中
    if (this.isFall && !this.man.isJump) {
        this.man.fall();
        Laya.timer.clearAll(this.man);
    }

    //跳跃处理
    if (this.man.isJump) {
        this.man.jump();
        this.runJump();
    }

    if (this.man.isJump && (Laya.timer.currFrame - this.man.jumpFrame) > common.jumpFrame) {
        this.man.isJump = false;
        this.isJumpPlay = false;
        this.man.playAction("stay");
    }

    if (this.man.isHurt && (Laya.timer.currFrame - this.man.hurtFrame) > common.hurtFrame) {
        this.man.isHurt = false;
    }

    //保护处理
    if (this.man.isProtect) {
        // console.log("保护中，开始帧数：" + this.man.protectFrame);
        //TODO 播放护盾动画
        this.man.showProtect(true);
    }
    if (!this.man.isProtect || (Laya.timer.currFrame - this.man.protectFrame) > common.protectFrame) {
        //TODO 清除播放护盾动画
        this.man.isProtect = false;
        this.man.showProtect(false);
    }

    if (this.man.y <= 133) { // 到顶
        this.man.y += 200;
        if (!this.man.isProtect) {
            setHurt();
            this.man.hpSub(5);
            Laya.SoundManager.playSound("sounds/hit2.mp3", 1);
        }
    }

    if (this.man.y > this.stageHeight) { // 到底
        var level = this.man.level;
        if (!this.man.dead) {
            this.man.dead = true;
            this.man.playDead();
        }
        resetDatas();
        this.man.visible = false;
        Laya.timer.clear(this, onLoop);
        this.gameInfo.reset();
        var rank = getRank(level);
        this.gameInfo.setGameOver(level, rank);
        // TipUtils.showStageTipNormal();
        // alert(JSON.stringify(rank));
    }
}

function createBoard4Loop() {
    //xx帧一个板
    if (Laya.timer.currFrame % this.createBoardInterval === 0) {
        var total = this.boardBox.numChildren;
        while (total <= 50) {
            var maxY = 0;
            for (var i = this.boardBox.numChildren - 1; i > -1; i--) {
                maxY = Math.max(maxY, this.boardBox.getChildAt(i).y);
            }
            createBoard(maxY);
            total++;
        }
    }
}

function createBoard(y) {
//创建板，x随机,y坐标固定
    //var board = Laya.Pool.getItemByClass("board", Board);
    var board = new Board();
    //随机一个类型
    var rate = random(1, boardTotalRate);
    var boardItem = boardItems[0];
    for (let i = 0; i < boardItems.length; i++) {
        if (boardItems[i].realRate >= rate) {
            boardItem = boardItems[i];
            break;
        }
    }

    board.init(boardItem.type);
    //board.init( 6 );
    board.pos((Math.random() * (stageWidth - 160)) + 80, y + this.man.bound.height * 1.5);

    //添加道具
    if (common.goodsHappen >= random(1, 100)) {
        //随机一个物品
        var rate = random(1, goodsTotalRate);
        for (let i = 0; i < goodsItems.length; i++) {
            if (goodsItems[i].realRate >= rate) {
                createGoods(board, goodsItems[i])
                break;
            }
        }
    }

    this.boardBox.addChild(board);
}

function createGoods(board, item) {
    var goods = new Goods();
    goods.init(item.type, item.score);
    //console.log("item.type:" + item.type);
    var x = random(0, board.bound.width / 4);
    if (random(0, 1) > 50) {
        x = -x;
    }
    if (item.type === 1) {//积分道具
        goods.pos(x, -40);
    } else if (item.type === 2) {//无敌道具
        goods.pos(x, -40);
    }
    board.addChild(goods);
}

//用于重新开始游戏
function startGame(nandu) {
    //难度判断
    /* switch (nandu) {
         case "EASY":
             this.createBoardInterval = 40;
             this.boardSpeed = -2;
             break;
         case "NORMAL":
             this.createBoardInterval = 50;
             this.boardSpeed = -3;
             break;
         case "HARD":
             this.createBoardInterval = 60;
             this.boardSpeed = -4;
             break;
         default:
             this.createBoardInterval = 40;
             this.boardSpeed = -2
             break;
     }*/

    this.createBoardInterval = this.createBoardInterval == undefined ? 40 : this.createBoardInterval;
    this.boardSpeed = this.boardSpeed == undefined ? -2 : this.boardSpeed;

    //重置数据
    resetDatas();
    //重新开始
    this.man.init(common);
    this.gameInfo.level(0);
    this.man.visible = true;
    this.man.pos(stageWidth / 2, firstBoardY - manDistanceBoard);
    Laya.stage.addChild(this.man);

    //开始之板
    var board1 = new Board();
    board1.init(0);
    board1.pos(stageWidth / 2, firstBoardY);
    this.boardBox.addChild(board1);

    //创建其他板
    createBoard4Loop();

    Laya.stage.on(Laya.Event.MOUSE_DOWN, this, onMouseDown);
    Laya.stage.on(Laya.Event.MOUSE_UP, this, onMouseUp);

    Laya.stage.on(Laya.Event.KEY_DOWN, this, onKeyDown);
    Laya.stage.on(Laya.Event.KEY_UP, this, onMouseUp);

    Laya.timer.frameLoop(1, this, onLoop);
}

//重置数据
function resetDatas() {
    //flag 用来标记是否在下落
    this.isFall = false;
    this.stop = false;

    //速度
    this.boardSpeed = common.boardSpeed;

    //移除旧板
    for (var i = this.boardBox.numChildren - 1; i > -1; i--) {
        var board = this.boardBox.getChildAt(i);
        board.removeSelf();
        board.visible = true;
        //Laya.Pool.recover("board", board);
    }

}

/**
 * 获取排名
 * @param level
 */
function getRank(level) {
    var rank = rankData[rankData.length - 1];
    var nextRank;
    for (let i = 0; i < rankData.length; i++) {
        if (rankData[i].begin >= level && level <= rankData[i].end) {
            rank = rankData[i];
            if (i < rankData.length - 1) {
                nextRank = rankData[i + 1];
            }
            break;
        }
    }
    nextRank = nextRank || {rank: 1};
    var realRank = random(nextRank.rank, rank.rank);
    var realPercent = random(rank.startPercent, rank.percent);
    rank.realRank = realRank;
    rank.realPercent = realPercent;
    return rank;
}


function initBoards(boardItems) {
    var val = 0;
    for (let i = 0; i < boardItems.length; i++) {
        val += boardItems[i].rate;
        boardItems[i].realRate = val;
    }
    boardTotalRate = val || 100;
}

function initGoods(goodsItems) {
    var val = 0;
    for (let i = 0; i < goodsItems.length; i++) {
        val += goodsItems[i].rate;
        goodsItems[i].realRate = val;
    }
    goodsTotalRate = val || 100;
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function isGoods(goods) {
    if (goods.type == undefined || goods.name == "" || goods.name.indexOf("good") == -1) {
        return false;
    }
    return true;
}

function removeGoods(goods) {
    if (isGoods(goods)) {
        goods.visible = true;
        goods.removeSelf();
        //Laya.Pool.recover("goods", goods);
    }
}


