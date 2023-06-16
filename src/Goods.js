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
                Laya.SoundManager.playSound("sounds/eat.mp3", 1);
                TipUtils.showAddLevel("+" + this.score, target);
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

    _proto.moveAction = function (x, y, target, man) {
        if (this.type != GOODS_SCORE) {
            return this.moveCompleted();
        }

        // 先从板块移除，再加入主舞台
        var oldX = target.x;
        var oldY = target.y;
        oldX += this.parent.x;
        oldY += this.parent.y;
        this.parent.removeChild(this);
        this.x = oldX;
        this.y = oldY;
        this.zOrder = 999;
        Laya.stage.addChild(this);


        x += 150;
        y -= 20;
        var props = {
            x: x,
            y: y,
            scaleX: 0,
            scaleY: 0,
        };
        laya.utils.Tween.to(this, props, 1000, null, laya.utils.Handler.create(this, this.moveCompleted, [man]));
    }

    _proto.moveCompleted = function (man) {
        if (man) {
            man.addLevel(this.score);
        }
        this.visible = false;
    }


    return Goods;
})(Laya.Sprite);

