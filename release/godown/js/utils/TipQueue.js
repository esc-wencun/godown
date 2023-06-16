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

    TipQueue.prototype.addTip  = function(content, parent, width, height, x, y, fontSize, fontColor, bgColor, borderColor, tipType, goodsData, tagData) {
        if (!this._caller) {
            // Log.debug("TipUtils caller is null!");
            return;
        }

        if( true ){
            var tipBox = new Laya.Box();
            tipBox.mouseEnabled = false;
            tipBox.tipType = tipType;
            tipBox.pos(x || 0, y || 0);
            parent.addChild( tipBox );
            tipBox.zOrder = 99998;
            tipBox.tagData = tagData; //各种数据
            this._arrText[this._arrText.length] = tipBox;

            var tipImage = tipBox.getChildByName("tipImage");
            if (!tipImage) {
                tipImage = new Laya.Image();
                tipImage.mouseEnabled = false;
                tipImage.name = "tipImage";
                tipImage.skin = "comp/+1.png";
                tipBox.addChild(tipImage);
            }

            tipImage.pivot(tipImage.textWidth / 2, tipImage.textHeight / 2);
            tipImage.zOrder = 10;
            tipBox.width = width || tipImage.textWidth;
            tipBox.height = height || tipImage.textHeight;
            tipImage.pivot(tipImage.width / 2, tipImage.height / 2);

            return;
        }

        var tipBox = new Laya.Box();
        tipBox.mouseEnabled = false;
        tipBox.tipType = tipType;
        tipBox.pos(x || 0, y || 0);
        parent.addChild( tipBox );
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
        content = "+ 9999";
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
