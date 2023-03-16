<template>
  <div class="g_-flex-col page">
    <div class="g_-flex-row g_-items-center group">
      <img class="g_-shrink-0 image" src="../../image/f4d70cf96a691a244296888ab5c433bd.png" />
      <div class="g_-flex-col g_-justify-start g_-shrink-0 text-wrapper"><span class="font_1 text">首页</span></div>
      <span class="font_1 text_2" @click="onClick">新闻</span>
      <span class="font_1 text_3" @click="onClick_1">图鉴</span>
      <span class="font_1 text_4">论坛</span>
      <span class="font_1 text_6">剧情</span>
      <span class="font_1 text_5">关于</span>
      <img class="g_-shrink-0 image_2" src="../../image/00eb00106e425a1cd299d5dded890443.png" @click="onClick_2" />
    </div>
      <div class="box pos g_-flex-row g_-relative">
          <div class="main clearfix" @mouseover="btnOpen" @mouseout="btnHide">
              <div class="minMain">
                  <div class="item" v-for="(item,index) in list" :key="index">
                      <img :src="item.imgUrl" />
                  </div>
              </div>
              <div class="pressMain">
                  <span v-for="(item,index) in pressList" :class="{active:item.isShow}"></span>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
        list: [{
                imgUrl: require('../../image/8aa1c8d6a6d6a56e0f2daa206f369ab0.png')
            }, {
                imgUrl: require('../../image/d469cdd3a94e97181eff9dc991fd0bdf.png')
            }, {
                imgUrl: require('../../image/7c25bea117b26a5c562f70eded7013d1.png')
            },{
                imgUrl: require('../../image/959e7e00198fd015bdd6aca96f8d2968.png')
            }
          ],
            pressList: [{
                name: '0',
                isShow: false
            }, {
                name: '1',
                isShow: false
            }, {
                name: '2',
                isShow: false
            }, {
                name: '3',
                isShow: false
            }],
            numList: ['p0', 'p1', 'p2','p3'],
            imgIndex: 0,
            imgTimer: null
      };
    },

    mounted: function() {
        const Item = document.getElementsByClassName('item');
        for (var i = 0; i < Item.length; i++) {
                Item[i].className = 'item ' + this.numList[i]
            }
            this.imgMove()
            this.pressList[0].isShow = true
    },

    methods: {
      onClick() {
        this.$router.push({ name: 'news' });
      },
      onClick_1() {
        this.$router.push({ name: 'handbook' });
      },
      onClick_2() {
        this.$router.push({ name: 'login' });
      },
      imgMove() {
          const Item = document.getElementsByClassName('item');
                this.imgTimer = setInterval(() => {
                    this.numList.push(this.numList[0]);
                    this.numList.shift()
                    this.imgIndex++;
                    for (let i = 0; i < Item.length; i++) {
                        Item[i].className = 'item ' + this.numList[i];
                    }
                    for (let i in this.pressList) {
                        this.pressList[i].isShow = false
                    }
                    if (this.imgIndex > 3) {
                        this.imgIndex = 0
                        this.pressList[this.imgIndex].isShow = true;
                    } else {
                        this.pressList[this.imgIndex].isShow = true;
                    }
                }, 5000)
      },
            btnOpen() {
                this.btnShow = true;
                clearInterval(this.imgTimer)
            },
            btnHide() {
                this.btnShow = false;
                this.imgMove()
            },
            leftClick() {
                const Item = document.getElementsByClassName('item');
                this.numList.unshift(this.numList[3]);
                this.numList.pop()
                for (let i = 0; i < Item.length; i++) {
                    Item[i].className = 'item ' + this.numList[i];
                }
                for (let i in this.pressList) {
                    this.pressList[i].isShow = false
                }
                this.imgIndex--
                    if (this.imgIndex < 0) {
                        this.imgIndex = 3
                        this.pressList[this.imgIndex].isShow = true;
                    } else {
                        this.pressList[this.imgIndex].isShow = true;
                    }
            },
            rightClick() {
                const Item = document.getElementsByClassName('item');
                this.numList.push(this.numList[0]);
                this.numList.shift()
                for (let i = 0; i < Item.length; i++) {
                    Item[i].className = 'item ' + this.numList[i];
                }
                for (let i in this.pressList) {
                    this.pressList[i].isShow = false
                }
                this.imgIndex++
                    if (this.imgIndex > 3) {
                        this.imgIndex = 0
                        this.pressList[this.imgIndex].isShow = true;
                    } else {
                        this.pressList[this.imgIndex].isShow = true;
                    }
            }
    }
  };
</script>

<style scoped lang="less">
    .clearfix:after {
            content: " ";
            display: block;
            clear: both;
    }

    .box {
        position: relative;
        left: 50%;
        top: 0;
        transform: translateX(-50%);
        width: 64.59vw;
        height: 36.0411vw;
      }

    .main {
        width: 64.59vw;
        height: 29.12vw;
        position: absolute;
        top: 5vw;
        left: 50%;
        transform: translateX(-50%);
        // overflow: hidden;
    }
    
    .item {
        list-style: none;
        width: 42.5vw;
	      height: 26.36vw;
	      border-radius: 1.83vw;
        position: absolute;
        left: 0vw;
        transition: all 0.3s ease;
    }
    
    
    .p0 {
        transform: translate3d(0, 0, 0) scale(1);
        opacity: 0.8;
        z-index: 2;
        border-radius: 1.8349vw;
        width: 42.5016vw;
        height: 26.3531vw;
    }
    
    .p1 {
        transform: translate3d(21.25vw, 0, 0) scale(1);
        opacity: 1;
        z-index: 2;
    }

    
    .p2 {
            transform: translate3d(10.625vw, 0, 0) scale(1.15);
            opacity: 1;
            z-index: 3;
    }

    .p3 {
            transform: translate3d(10.625vw, 0, 0) scale(0.9);
            opacity: 1;
            z-index: 1;
    }
 
    .item img {
        width: 100%;
        height: 100%;
    }

    .pressMain {
            position: absolute;
            left: 50%;
            bottom: -3.3vw;
            width: 17.4vw;
            height: 3vw;
            transform: translateX(-50%);
            z-index: 20;
        
        
        span {
            display: inline-block;
            margin: 1vw 1.5vw;
            width: 25px;
            height: 25px;
            border-radius: 50%;
            color: #fff;
            background-color: rgba(255, 255, 255, 0.53);
            text-align: center;
            line-height: 20px;
        }
        
        .active {
            background: #2240a5;
        }
    }
  .page {
    background-image: url('../../image/5814d437444837c10fc948fab45ce0e9.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
    .group {
      padding: 2.4vw 4.8734vw 1vw;
      .image {
        width: 23.8354vw;
        height: 4.7703vw;
      }
      .text-wrapper {
        margin-left: 6.3427vw;
        padding: 0.5021vw 0;
        background-image: url('../../image/bc0a9d0c34d42194e02b45ce780e82c8.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        height: 3.175vw;
        .text {
          margin-left: 0.6573vw;
          margin-right: 0.4286vw;
          line-height: 2.1563vw;
        }
      }
      .font_1 {
        font-size: 2.2964vw;
        font-family: PangMenZhengDao-XiXian;
        line-height: 2.1047vw;
        color: #ffffff;
      }
      .text_2 {
        margin-left: 3.9729vw;
        line-height: 2.1266vw;
      }
      .text_3 {
        margin-left: 4.4526vw;
      }
      .text_4 {
        margin-left: 4.3417vw;
        line-height: 2.112vw;
      }
      .text_6 {
        margin-left: 4.3495vw;
        line-height: 2.0974vw;
      }
      .text_5 {
        margin-left: 4.438vw;
        line-height: 2.1339vw;
      }
      .image_2 {
        margin-left: 4.0536vw;
        width: 3.0865vw;
        height: 3.0865vw;
      }
    }
    .view {
      padding: 4.8661vw 17.7583vw 7.8417vw;
      height: 40vw;
      .image_1 {
        border-radius: 1.8349vw;
        width: 42.5016vw;
        height: 26.3531vw;
      }
      .pos_3 {
        position: absolute;
        left: 17.7583vw;
        top: 4.8661vw;
      }
      .image_6 {
        border-radius: 1.8349vw;
        width: 42.5016vw;
        height: 26.3604vw;
      }
      .pos_4 {
        position: absolute;
        right: 17.6552vw;
        top: 4.8661vw;
      }
      .image_5 {
        border-radius: 1.8349vw;
        width: 46.8802vw;
        height: 29.0781vw;
      }
      .pos_2 {
        position: absolute;
        left: 50%;
        top: 3.5073vw;
        transform: translateX(-50%);
      }
      .pos {
        position: absolute;
        left: 50%;
        top: 0;
        transform: translateX(-50%);
      }
    }
  }
</style>