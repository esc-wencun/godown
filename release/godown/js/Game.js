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
var direction;

var leftCounter = 0;
var rightCounter = 0;

var leftState = 0;// -1=表示被覆盖，后面需要补调  0=无需处理  1=正在处理
var rightState = 0;

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

function clone(object) {
    if (!object) {
        return object;
    }
    return JSON.parse(JSON.stringify(object));
}

function initConfig() {

    //加载配置
    rankData = clone(Laya.loader.getRes("res/config/rankData.json"));
    common = clone(Laya.loader.getRes("res/config/common.json"));
    goodsItems = clone(Laya.loader.getRes("res/config/goodsItems.json"));
    boardItems = clone(Laya.loader.getRes("res/config/boardItems.json"));

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
}

function onLoad() {

    initConfig();

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


function onLeftMouseDown() {
    //清理右侧事件
    if (rightState == 1) {
        rightState = -1;
        Laya.timer.clear(this, this.runRight);
    }

    //向左处理
    leftState = 1;
    this.runLeft();
    Laya.timer.frameLoop(1, this, this.runLeft);
}

function onLeftMouseUp() {
    leftState = 0;
    Laya.timer.clear(this, this.runLeft);

    // 处理右侧事件
    if (rightState == -1) {
        onRightMouseDown();
    }
}

function onRightMouseDown() {

    //清理向左事件
    if (leftState == 1) {
        leftState = -1;
        Laya.timer.clear(this, this.runLeft);
    }

    //向右处理
    rightState = 1;
    this.runRight();
    Laya.timer.frameLoop(1, this, this.runRight);
}

function onRightMouseUp() {
    rightState = 0;
    Laya.timer.clear(this, self.runRight);

    // 处理左侧事件
    if (leftState == -1) {
        onLeftMouseDown();
    }
}


//2018年11月14日 用Layabox官方循环重写鼠标与键盘移动
//鼠标按压控制男人跑动
function onMouseDown() {
    console.log("onMouseDown:" + Laya.stage.mouseX);
    if (Laya.stage.mouseX <= stageWidth / 2) {
        changeDirection("L");
    } else {
        changeDirection("R");
    }
}

//清除定时器
function onMouseUp() {
    console.log("onMouseUp:" + direction);
    if (leftCounter > 0) {
        leftCounter = 0;
    } else if (rightCounter > 0) {
        rightCounter = 0;
    }
    if (leftCounter <= 0 && rightCounter <= 0) {
        Laya.timer.clear(this, runRight);
        Laya.timer.clear(this, runLeft);
    }
}


//键盘响应
function onKeyDown(e) {
    //按下左键
    if (e["keyCode"] === 37) {
        //changeDirection("L");
    }
    //按下右键
    else if (e["keyCode"] === 39) {
        //changeDirection("R");
    } else if ((e["keyCode"] === 8)) {
        this.stop = !this.stop;
    }
}

// 往左右跑
// TODO：位移与动画分离
function runLeft() {
    this.man.playAction("run_left");
    if (this.man.x - 1 >= 50) {
        this.man.x -= (common.boardSpeed + 5);
    }
}

function runRight() {
    this.man.playAction("run_right");
    if (this.man.x + 1 <= stageWidth - 50) {
        this.man.x += (common.boardSpeed + 5);
    }
}

function runJump() {
    if (this.isJumpPlay) {
        return;
    }
    this.isJumpPlay = true;
    this.man.playAction("jump");
}


function changeDirection(curDirection) {
    direction = curDirection;
    if (direction === "R") {
        rightCounter = 1;
        Laya.timer.clear(this, runLeft);
    } else {
        leftCounter = 1;
        Laya.timer.clear(this, runRight);
    }
    var runFunc = (direction == "L" ? runLeft : runRight);
    runFunc();
    Laya.timer.frameLoop(1, this, runFunc, null, true);
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
                if (board.type == 2) {
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
                    goods.moveAction(this.gameInfo.levelLabel.x, this.gameInfo.levelLabel.y, this.boardBox,this.man);
                    if (goods.type == 2) {//保护道具
                        this.man.isProtect = true;
                        this.man.protectFrame = Laya.timer.currFrame;//获得保护的帧数
                    }
                    // goods.visible = false;
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
        this.man.showProtect(true);
    }
    if (!this.man.isProtect || (Laya.timer.currFrame - this.man.protectFrame) > common.protectFrame) {
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

    initConfig();

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

    listenKeyboard();

    listenButtonKeyboard();
    Laya.timer.clear(this, this.runLeft);
    Laya.timer.clear(this, this.runRight);
    leftState = 0;
    rightState = 0;

    Laya.timer.frameLoop(1, this, onLoop);
}

function listenKeyboard() {

 /*   Laya.stage.on(Laya.Event.MOUSE_OVER, this, onMouseDown);
    Laya.stage.on(Laya.Event.MOUSE_UP, this, onMouseUp);*/

    Laya.stage.on(Laya.Event.KEY_DOWN, this, onKeyDown);
 /*   Laya.stage.on(Laya.Event.KEY_UP, this, onMouseUp);*/

}

function listenButtonKeyboard() {

    this.gameInfo.leftBtn.on(Laya.Event.MOUSE_DOWN, this, onLeftMouseDown, [this]);
    this.gameInfo.leftBtn.on(Laya.Event.MOUSE_UP, this, onLeftMouseUp, [this]);

    this.gameInfo.rightBtn.on(Laya.Event.MOUSE_DOWN, this, onRightMouseDown, [this]);
    this.gameInfo.rightBtn.on(Laya.Event.MOUSE_UP, this, onRightMouseUp, [this]);

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


