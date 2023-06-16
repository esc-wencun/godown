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
        // // 重新开始游戏
        // this.restartBtn.once(Laya.Event.CLICK,this,this.onStartClick,["EASY"]);
        // 提交分数
        this.submitBtn.once(Laya.Event.CLICK,this,this.onStartClick,["EASY"]);
        

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

    // 提交分数
    _proto.onSubmitClick = function () {
        try {
            PKSDK.GameEnd(this.scoreLbl.value);
            setTimeout(function(){
                if(window["goApp"]){
                    window['goApp'].postMessage(0);
                }
            }, 100);
        } catch(e) {
            console.log(e);
        }
    }

    _proto.setGameOver = function(score, data) {
        this.scoreLbl.value = score; // 分数
        var maxSCore = this.getMaxScore();
        if (score > maxSCore) { // 新高
            maxSCore = score;
            this.setMaxScore(maxSCore);
            this.newHighImg.visible = true;
        } else {
            this.newHighImg.visible = false;
        }
        this.gameOverBox.visible = true;
        this.maxScoreLbl.value = maxSCore; // 最高分

    /*    this.rankLbl.value = data.realRank; // 排名
        this.percentLbl.value = parseInt(data.realPercent); // 排名百分比
       */
        
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
