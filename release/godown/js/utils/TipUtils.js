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

    showAddLevel(content, parent) {
        var centerX = Laya.stage.width / 2;
        var centerY = Laya.stage.height / 2;
        var queue = this._getQueue(parent);
        if (!queue) {
            queue = this._addQueue(parent);
        }
        queue.addTip(content, parent, null, null, null, null, 50, "yellow", null, null, null, null, null);
        if (!TipUtils._isStarting) {
            this._startDisplay();
            TipUtils._isStarting = true;
        }
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
                        var _defaultWaitTime = 200;
                        var _defaultMoveY2 = 150;
                        var _defaultMoveYTime2 = 500;
                        Laya.Tween.to(tipBox, {y: tipBox.y - _defaultMoveY1}, _defaultMoveYTime1);
                        Laya.Tween.to(tipBox, {y: tipBox.y - _defaultMoveY1 - _defaultMoveY2}, _defaultMoveYTime2, null, null, _defaultMoveYTime1 + _defaultWaitTime);
                        tipBox.alpha = 0;
                        Laya.Tween.to(tipBox, {alpha: 1}, _defaultMoveYTime1);
                        Laya.Tween.to(tipBox, {alpha: 0}, _defaultMoveYTime2, null, Laya.Handler.create(this, this._inDisplayTipCB, [tipBox]), _defaultMoveYTime1 + _defaultWaitTime);
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

TipUtils._delay = 3; //飘字间隔帧数
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
