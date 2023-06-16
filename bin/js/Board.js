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
