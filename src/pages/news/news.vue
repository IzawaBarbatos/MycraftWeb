<template>
  <div class="g_-flex-col g_-justify-start page">
    <div class="g_-flex-col section">
      <div class="g_-flex-row g_-items-center group space-x-568">
        <img class="image" src="../../image/905301e6a074612e4200ce295329ee4f.png" />
        <div class="g_-flex-row g_-justify-between g_-items-center g_-flex-auto group_2">
          <span class="font_1 text" @click="onClick">首页</span>
          <div class="g_-flex-col g_-justify-start text-wrapper"><span class="font_2 text_2">新闻</span></div>
          <span class="font_2" @click="onClick_1">图鉴</span>
          <span class="font_2">论坛</span>
          <span class="font_2 text_3">剧情</span>
          <span class="font_1">关于</span>
          <img class="image_2" src="../../image/28c8a7daf972208c3239c563cd184df6.png" @click="onClick_2" />
        </div>
      </div>
      <div class="g_-flex-row g_-items-center group_3 view">
        <div class="g_-flex-col g_-justify-start g_-flex-auto section_2">
          <div class="g_-flex-col g_-justify-start g_-items-center image-wrapper view_2">
            <img class="image_4" src="../../image/2b367973cc301621dcd5961c72435040.png" />
          </div>
        </div>
        <div class="g_-flex-col g_-justify-start g_-items-center g_-shrink-0 g_-relative group_4">
          <img class="image_5" src="../../image/5fadb4e219949c6422e8d33c1b89582a.png" />
          <img class="image_3 pos" src="../../image/cc14c1f72df46f4c2bc64873046e5b73.png" />
        </div>
      </div>
      <div class="g_-flex-row g_-items-center group_5">
        <div class="g_-flex-col g_-justify-start g_-items-center g_-shrink-0 g_-relative group_6">
          <img class="image_5" src="../../image/25f32e6d54e89af0cd876fa606d59e73.png" />
          <img class="image_6 pos_2" src="../../image/185f06a7de387e44696bfec780e43732.png" />
        </div>
        <div class="g_-flex-col g_-justify-start g_-flex-auto section_3">
          <div class="g_-flex-col g_-justify-start g_-items-center image-wrapper_2">
            <img class="image_7" src="../../image/c7072b023472bcb5e3c55a6a11099424.png" />
          </div>
        </div>
      </div>
      <div class="g_-flex-row g_-items-center group_3 view_3">
        <div class="g_-flex-col g_-justify-start g_-flex-auto section_4">
          <div class="g_-flex-col g_-justify-start g_-items-center image-wrapper view_4">
            <img class="image_4" src="../../image/5fea0ec51cfc4845ece23db8ea08513c.png" />
          </div>
        </div>
        <div class="g_-flex-col g_-justify-start g_-items-center g_-shrink-0 g_-relative group_7">
          <img class="image_9" src="../../image/f33c219fe1d830f53f82643601d4a202.png" />
          <img class="image_8 pos_3" src="../../image/0e29755fe9e2221dca361d87acf8dad1.png" />
        </div>
      </div>
      <div class="g_-flex-row g_-items-center group_8">
        <div class="g_-flex-col g_-justify-start g_-items-center g_-shrink-0 g_-relative group_9">
          <img class="image_5" src="../../image/25f32e6d54e89af0cd876fa606d59e73.png" />
          <img class="image_3 pos_4" src="../../image/7cc1e13379932700c71cc181e0907dde.png" />
        </div>
        <div class="g_-flex-col g_-justify-start g_-flex-auto section_5">
          <div class="g_-flex-col g_-justify-start g_-items-center image-wrapper_3">
            <img class="image_10" src="../../image/36532f1ef43b622c696eb2a94c7dfdd8.png" />
          </div>
        </div>
      </div>
      <div class="g_-flex-row g_-items-center group_3 view_5">
        <div class="g_-flex-col g_-justify-start g_-flex-auto section_6">
          <div class="g_-flex-col g_-justify-start g_-items-center image-wrapper view_6">
            <img class="image_12" src="../../image/12ad7d0cf3b71d8d4133d7cf95f3c403.png" />
          </div>
        </div>
        <div class="g_-flex-col g_-justify-start g_-items-center g_-shrink-0 g_-relative group_10">
          <img class="image_9" src="../../image/076eb69f4f547ebd5c2378f932471735.png" />
          <img class="image_11 pos_5" src="../../image/b7339ff84c9a4d18b7cd2fcd90653ed3.png" />
        </div>
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
        this.$router.push({ name: 'handbook' });
      },
      onClick_2() {
        this.$router.push({ name: 'login' });
      },
    },
  };
</script>

<style scoped lang="less">
  .page {
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
    .section {
      padding: 2.5931vw 0 11.888vw;
      background-image: url('../../image/7a90625680af218f664a46a2896a487f.png');
      background-size: 100% 100%;
      background-repeat: no-repeat;
      .group {
        margin-left: 1.4673vw;
        margin-right: 0.6608vw;
        padding: 0 4.2192vw;
        .image {
          width: 23.7032vw;
          height: 4.7456vw;
        }
        .group_2 {
          margin-right: 2.3728vw;
          .font_1 {
            font-size: 2.3119vw;
            font-family: PangMenZhengDao-XiXian;
            line-height: 2.1156vw;
            color: #ffffff;
          }
          .text {
            line-height: 2.1281vw;
          }
          .text-wrapper {
            padding: 0.5384vw 0;
            background-image: url('../../image/9e89fd09ec5e46dc02255475c5370da8.png');
            background-size: 100% 100%;
            background-repeat: no-repeat;
            height: 3.1679vw;
            .text_2 {
              margin-left: 0.6727vw;
              margin-right: 0.3426vw;
              line-height: 2.1036vw;
            }
          }
          .font_2 {
            font-size: 2.3119vw;
            font-family: PangMenZhengDao-XiXian;
            line-height: 2.0911vw;
            color: #ffffff;
          }
          .text_3 {
            line-height: 2.0791vw;
          }
          .image_2 {
            width: 3.07vw;
            height: 3.07vw;
          }
        }
      }
      .space-x-568 {
        & > *:not(:first-child) {
          margin-left: 6.9471vw;
        }
      }
      .group_3 {
        padding-left: 2.6415vw;
        .section_2 {
          padding: 2.5436vw 0 1.8834vw;
          background-image: url('../../image/fceb67849a36d81ec8c65a4b39d2dd5d.png');
          background-size: 100% 100%;
          background-repeat: no-repeat;
          height: 32.326vw;
          .view_2 {
            padding: 0.3791vw 0;
            background-image: url('../../image/309c8999e6595f3d61528dbce9afec7c.png');
            background-size: 100% 100%;
            background-repeat: no-repeat;
          }
        }
        .group_4 {
          margin-left: -0.8076vw;
          padding-top: 4.0484vw;
          width: 47.333vw;
          .pos {
            position: absolute;
            left: 50%;
            top: 0;
            transform: translateX(-50%);
          }
        }
        .section_4 {
          padding: 2.5931vw 0 1.8834vw;
          background-image: url('../../image/47f70765c7b0295b478a44e758aea09a.png');
          background-size: 100% 100%;
          background-repeat: no-repeat;
          height: 32.3744vw;
          .view_4 {
            padding: 0.3791vw 0;
            background-image: url('../../image/a06724d89cd8463009230a9a7a7690b6.png');
            background-size: 100% 100%;
            background-repeat: no-repeat;
          }
        }
        .image-wrapper {
          margin-left: 2.8253vw;
          margin-right: 1.8589vw;
          .image_4 {
            border-radius: 4.3968vw;
            width: 43.8959vw;
            height: 27.1403vw;
          }
          .image_12 {
            border-radius: 4.3968vw;
            width: 43.8959vw;
            height: 27.1278vw;
          }
        }
        .group_7 {
          padding-top: 4.0364vw;
          width: 47.284vw;
          .image_8 {
            width: 39.3215vw;
            height: 26.4551vw;
          }
          .pos_3 {
            position: absolute;
            left: 50%;
            top: 0;
            transform: translateX(-50%);
          }
        }
        .section_6 {
          padding: 2.5931vw 0 1.8834vw;
          background-image: url('../../image/f65e9e28c457d57f3e9f8a8413020ec7.png');
          background-size: 100% 100%;
          background-repeat: no-repeat;
          height: 32.3624vw;
          .view_6 {
            padding: 0.3791vw 0;
            background-image: url('../../image/7a38c970f7d7fdea2735f97678c3e17f.png');
            background-size: 100% 100%;
            background-repeat: no-repeat;
          }
        }
        .group_10 {
          padding-top: 4.0484vw;
          width: 47.284vw;
          .image_11 {
            width: 39.3215vw;
            height: 26.4676vw;
          }
          .pos_5 {
            position: absolute;
            left: 50%;
            top: 0;
            transform: translateX(-50%);
          }
        }
        .image_9 {
          width: 47.284vw;
          height: 25.5741vw;
        }
      }
      .view {
        margin: 7.8396vw 0.6608vw 0 1.4673vw;
      }
      .group_5 {
        margin-right: 3.3023vw;
        margin-top: 9.6746vw;
        .group_6 {
          padding-top: 4.0849vw;
          width: 47.333vw;
          .image_6 {
            width: 39.334vw;
            height: 26.4676vw;
          }
          .pos_2 {
            position: absolute;
            left: 50%;
            top: 0;
            transform: translateX(-50%);
          }
        }
        .section_3 {
          padding: 2.4337vw 0 1.8834vw;
          background-image: url('../../image/a40df015c85fdb7235dde69005cb0a90.png');
          background-size: 100% 100%;
          background-repeat: no-repeat;
          height: 32.2161vw;
          .image-wrapper_2 {
            margin-left: 1.8469vw;
            margin-right: 2.7154vw;
            padding: 0.5624vw 0;
            background-image: url('../../image/2d45f68ea1b4cdfd655d07a8c19ef974.png');
            background-size: 100% 100%;
            background-repeat: no-repeat;
            .image_7 {
              border-radius: 4.3968vw;
              width: 43.8959vw;
              height: 26.7727vw;
            }
          }
        }
      }
      .image_5 {
        width: 47.333vw;
        height: 25.5256vw;
      }
      .view_3 {
        margin: 9.2585vw 0.6608vw 0 1.4673vw;
      }
      .group_8 {
        margin-right: 3.3023vw;
        margin-top: 7.5829vw;
        .group_9 {
          padding-top: 4.0729vw;
          width: 47.333vw;
          height: 29.598vw;
          .pos_4 {
            position: absolute;
            left: 50%;
            top: 0;
            transform: translateX(-50%);
          }
        }
        .section_5 {
          padding: 2.4337vw 0 1.8834vw;
          background-image: url('../../image/959e7e00198fd015bdd6aca96f8d2968.png');
          background-size: 100% 100%;
          background-repeat: no-repeat;
          height: 32.2161vw;
          .image-wrapper_3 {
            margin-left: 1.8469vw;
            margin-right: 2.7154vw;
            padding: 0.5624vw 0;
            background-image: url('../../image/72700dfeb3f5a9af440db19f26799682.png');
            background-size: 100% 100%;
            background-repeat: no-repeat;
            .image_10 {
              border-radius: 4.3968vw;
              width: 43.8959vw;
              height: 26.7852vw;
            }
          }
        }
      }
      .image_3 {
        width: 39.334vw;
        height: 26.4551vw;
      }
      .view_5 {
        margin: 9.2705vw 0.6608vw 0 1.4673vw;
      }
    }
  }
</style>