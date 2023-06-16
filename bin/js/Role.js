var Role = (function (_super) {
    function Role() {
        Role.super(this);
        // this.init();
    }

    Role.cache = false;
    Laya.class(Role, "Role", _super);
    var _proto = Role.prototype;
    _proto.init = function (common) {
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
        this.manSpeed = common.manSpeed || 10;
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
        if (this.action === "stay") {
            return;
        }
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
        if (this.isHurt && act.indexOf("_hurt")) {
            act += "_hurt";
        }
        if (this.action != act) {
            this.body.stop();
            this.action = act;
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
            this.protectAni.pos(-bound.width / 2, -bound.height / 2);

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
