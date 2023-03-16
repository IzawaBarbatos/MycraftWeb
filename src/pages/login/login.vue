<template>
  <div class="g_-flex-col page space-y-278">
    <div class="g_-flex-row g_-justify-between g_-items-center g_-self-end group">
      <span class="font_1 text_1" @click="onClick">首页</span>
      <span class="font_2 text_13" @click="onClick_1">新闻</span>
      <span class="font_2" @click="onClick_2">图鉴</span>
      <span class="font_2">论坛</span>
      <span class="font_2 text_10">剧情</span>
      <span class="font_1">关于</span>
      <img class="image" src="../../image/28c8a7daf972208c3239c563cd184df6.png" />
    </div>
    <div class="g_-flex-col group_2 space-y-913">
      <div class="g_-flex-col group_3 space-y-301">
        <img class="image_2" src="../../image/44aaa10ce3d3064625336e434bf7e071.png" />
        <div class="g_-flex-row group_4 space-x-304">
          <div class="g_-flex-col g_-justify-start g_-items-center text-wrapper">
            <span class="font_3 text_7">现在注册</span>
          </div>
          <div class="g_-flex-col g_-justify-start g_-items-center view">
            <span class="font_3 text_8">立刻登录</span>
          </div>
        </div>
      </div>
      <div class="g_-flex-row g_-justify-center space-x-252">
        <img class="image_3" src="../../image/1b0d5814beb234ac5157d945bfbb04d0.png" />
        <img class="image_3" src="../../image/67417c4b686dd0112d923082159eaeb9.png" />
        <img class="image_3" src="../../image/78c0a748947b09f79e1462f23e2397bc.png" />
        <img class="image_3" src="../../image/dd5a2049982b10c8c474fa647d937343.png" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {};
    },

    methods: {
      onClick() {
        this.$router.push({ name: 'index' });
      },
      onClick_1() {
        this.$router.push({ name: 'news' });
      },
      onClick_2() {
        this.$router.push({ name: 'handbook' });
      },
    },
  };
</script>

<style scoped lang="less">
  .page {
    padding-top: 3.475vw;
    background-image: url('../../image/53727d19b1c97d86d4cb398c0556cca0.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
    .group {
      padding: 0 6.7375vw;
      width: 71.1vw;
      .font_1 {
        font-size: 2.3625vw;
        font-family: PangMenZhengDao-XiXian;
        line-height: 2.1625vw;
        color: #ffffff;
      }
      .text_1 {
        line-height: 2.175vw;
      }
      .font_2 {
        font-size: 2.3625vw;
        font-family: PangMenZhengDao-XiXian;
        line-height: 2.1375vw;
        color: #ffffff;
      }
      .text_13 {
        line-height: 2.15vw;
      }
      .text_10 {
        line-height: 2.125vw;
      }
      .image {
        width: 3.1375vw;
        height: 3.1375vw;
      }
    }
    .group_2 {
      padding: 6vw 20.675vw 1.25vw;
      .group_3 {
        margin-right: 2.1875vw;
        .image_2 {
          width: 56.4625vw;
          height: 14.6875vw;
        }
        .group_4 {
          padding: 0 3vw;
          .text-wrapper {
            position: relative;
            padding: 0;
            background-image: url('../../image/21bd667567bab88c6a7311948943efbf.png');
            background-size: 100% 100%;
            background-repeat: no-repeat;
            width: 15.85vw;
            height: 6.525vw;
            border-radius: 23% / 48%;
            .text_7 {
              position: absolute;
              line-height: 2.5625vw;
              top: 1.9vw;
            }
            
          }
          .text-wrapper:hover,
          .view:hover
          {
              box-shadow: inset 0px 0px 10px #fff, inset 3px 0 50px #0ff, inset -3px 0 50px #0ff, inset 3px 0px 30px #0ff, inset -3px 0px 30px #0ff, 0px 0px 3px #fff, -3px 0px 40px #0ff, 3px 0px 40px #0ff;
            }
          .view {
            padding: 0;
            background-image: url('../../image/21bd667567bab88c6a7311948943efbf.png');
            background-size: 100% 100%;
            background-repeat: no-repeat;
            width: 15.85vw;
            height: 6.525vw;
            position: relative;
            border-radius: 23% / 48%;
            .text_8 {
              position: absolute;
              top: 1.9vw;
              line-height: 2.5875vw;
            }
          }
          .font_3 {
            font-size: 2.7625vw;
            font-family: PangMenZhengDao-XiXian;
            color: #ffffff;
          }
        }
        .space-x-304 {
          & > *:not(:first-child) {
            margin-left: 3.8vw;
          }
        }
      }
      .space-y-301 {
        & > *:not(:first-child) {
          margin-top: 3.7625vw;
        }
      }
      .space-x-252 {
        & > *:not(:first-child) {
          margin-left: 3.15vw;
        }
        .image_3 {
          width: 1.675vw;
          height: 1.675vw;
        }
      }
    }
    .space-y-913 {
      & > *:not(:first-child) {
        margin-top: 6.4125vw;
      }
    }
  }
  .space-y-278 {
    & > *:not(:first-child) {
      margin-top: 1.475vw;
    }
  }
</style>