<template>
  <div class="g_-flex-col page">
    <div class="g_-flex-col section space-y-820">
      <div class="g_-flex-row g_-items-center space-x-569">
        <img class="image" src="../../image/d55373762f5eaf0b136e9df7d8fc8585.png" />
        <div class="g_-flex-row g_-justify-between g_-items-center g_-flex-auto group">
          <span class="font_1 text" @click="onClick">首页</span>
          <span class="font_2" @click="onClick_1">新闻</span>
          <div class="g_-flex-col g_-justify-start text-wrapper"><span class="font_1 text_2">图鉴</span></div>
          <span class="font_1 text_3">论坛</span>
          <span class="font_1">剧情</span>
          <span class="font_2">关于</span>
          <img class="image_2" src="../../image/bff067b606d45d1e894c8543948aba4b.png" @click="onClick_2" />
        </div>
      </div>
      <div class="g_-flex-row g_-justify-center group_2 space-x-430">
        <div class="g_-flex-col section_2 space-y-458">
          <div class="g_-flex-col g_-justify-start g_-items-center image-wrapper">
            <img class="image_3" src="../../image/6a4d3ebd8e329e47612cc716d3173ee2.png" />
          </div>
          <img class="g_-self-center image_8" src="../../image/df3945d9d850d7ad1661748667b545bb.png" />
        </div>
        <div class="g_-flex-col section_3 space-y-454">
          <div class="g_-flex-col g_-justify-start g_-items-center image-wrapper_2">
            <img class="image_4" src="../../image/4a5eeefbe213039baa5396417674dda1.png" />
          </div>
          <img class="g_-self-center image_7" src="../../image/68f89cb66b73b789a8100fba173c28af.png" />
        </div>
        <div class="g_-flex-col section_4 space-y-462">
          <div class="g_-flex-col g_-justify-start g_-items-center image-wrapper_3">
            <img class="image_5" src="../../image/ac6ed41b6b9e856efa1795bb376e8671.png" />
          </div>
          <img class="g_-self-center image_6" src="../../image/7b73dbecea6a343398662a5f8cc8750b.png" />
        </div>
      </div>
    </div>
    <div class="g_-flex-col g_-self-center group_3 space-y-387">
      <div class="g_-flex-row space-x-430">
        <div class="g_-flex-col section_5 space-y-483">
          <div class="g_-flex-col g_-justify-start g_-items-center image-wrapper_4">
            <img class="image_3" src="../../image/358f560b551e1ac28edf2c90a066fde5.png" />
          </div>
          <img class="g_-self-center image_12" src="../../image/e42979baf2fb3c6b9927c72143fe3775.png" />
        </div>
        <div class="g_-flex-col section_6 space-y-553">
          <div class="g_-flex-col g_-justify-start g_-items-center image-wrapper_6">
            <img class="image_10" src="../../image/3c23ea794ba147a160d492af45138b18.png" />
          </div>
          <img class="g_-self-center image_8" src="../../image/2fc9bd1be999b49a529db3ee434aceb0.png" />
        </div>
        <div class="g_-flex-col section_7 space-y-508">
          <div class="g_-flex-col g_-justify-start g_-items-center image-wrapper_5">
            <img class="image_9" src="../../image/40f8b930018d691942ce8527e38b5b47.png" />
          </div>
          <img class="g_-self-center image_11" src="../../image/a6cdcbda1d2712f152c474d27f7543de.png" />
        </div>
      </div>
      <div class="g_-flex-row">
        <div class="g_-flex-col section_8 space-y-650">
          <div class="g_-flex-col g_-justify-start g_-items-center image-wrapper_8">
            <img class="image_15" src="../../image/807640c98c4bd6e7f2eda419421a5584.png" />
          </div>
          <img class="g_-self-center image_17" src="../../image/5cf4bed664f9570be3da6de0f4e9edf8.png" />
        </div>
        <img class="image_13" src="../../image/f2561d4e007f6d88dd48e399201c4841.png" />
        <div class="g_-flex-col section_9 space-y-537">
          <div class="g_-flex-col g_-justify-start g_-items-center image-wrapper_7">
            <img class="image_14" src="../../image/c589a760a9ef206a501f706e08f2a39c.png" />
          </div>
          <img class="g_-self-center image_16" src="../../image/8da1b02ff708a2aa7ca1ca44de5e1765.png" />
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
        this.$router.push({ name: 'news' });
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
      padding: 2.625vw 4.325vw 2.375vw;
      background-image: url('../../image/79fe453a332ac1d1339d2ab95a43ef85.png');
      background-size: 100% 100%;
      background-repeat: no-repeat;
      .space-x-569 {
        & > *:not(:first-child) {
          margin-left: 7.1125vw;
        }
        .image {
          width: 24.2125vw;
          height: 4.85vw;
        }
        .group {
          margin-right: 2.425vw;
          .font_1 {
            font-size: 2.3625vw;
            font-family: PangMenZhengDao-XiXian;
            line-height: 2.1125vw;
            color: #ffffff;
          }
          .text {
            line-height: 2.175vw;
          }
          .font_2 {
            font-size: 2.3625vw;
            font-family: PangMenZhengDao-XiXian;
            line-height: 2.15vw;
            color: #ffffff;
          }
          .text-wrapper {
            padding: 0.5375vw 0;
            background-image: url('../../image/c1fed50d1ad57f778afe84ad4f374e91.png');
            background-size: 100% 100%;
            background-repeat: no-repeat;
            height: 3.1875vw;
            .text_2 {
              margin: 0 0.375vw;
            }
          }
          .text_3 {
            line-height: 2.125vw;
          }
          .image_2 {
            width: 3.1375vw;
            height: 3.1375vw;
          }
        }
      }
      .group_2 {
        padding: 0 6.525vw;
        .section_2 {
          padding: 2.1375vw 1.2125vw 3.8625vw 2.275vw;
          background-image: url('../../image/912fb34df34b94bce305ff1e22205627.png');
          background-size: 100% 100%;
          background-repeat: no-repeat;
          width: 22.35vw;
          height: 36.1625vw;
          .image-wrapper {
            padding: 0.6vw 0 1.6vw;
            background-image: url('../../image/4aaaa1297e438b44dd06334c067a6708.png');
            background-size: 100% 100%;
            background-repeat: no-repeat;
          }
        }
        .space-y-458 {
          & > *:not(:first-child) {
            margin-top: 5.725vw;
          }
        }
        .section_3 {
          padding: 3.1875vw 3.3125vw 3.8625vw 4.35vw;
          background-image: url('../../image/30b30f830eb009613234d3b07d0f552a.png');
          background-size: 100% 100%;
          background-repeat: no-repeat;
          width: 22.35vw;
          height: 36.1625vw;
          .image-wrapper_2 {
            padding: 0.5875vw 0 1.6vw;
            background-image: url('../../image/bece9891c0905a358aa9231667ea9463.png');
            background-size: 100% 100%;
            background-repeat: no-repeat;
            .image_4 {
              width: 12.5vw;
              height: 15.625vw;
            }
          }
          .image_7 {
            width: 9.425vw;
            height: 5.625vw;
          }
        }
        .space-y-454 {
          & > *:not(:first-child) {
            margin-top: 5.675vw;
          }
        }
        .section_4 {
          padding: 4.225vw 2.2875vw 4.8vw 3.2875vw;
          background-image: url('../../image/acc4acce4cd2b4c0963ef6340bf6cd25.png');
          background-size: 100% 100%;
          background-repeat: no-repeat;
          width: 22.35vw;
          height: 36.1625vw;
          .image-wrapper_3 {
            padding: 0.6vw 0 1.6vw;
            background-image: url('../../image/20e1304c9a8ac2cce34b8903d0723d10.png');
            background-size: 100% 100%;
            background-repeat: no-repeat;
            .image_5 {
              width: 14.5875vw;
              height: 13.5375vw;
            }
          }
          .image_6 {
            width: 9.2125vw;
            height: 5.625vw;
          }
        }
        .space-y-462 {
          & > *:not(:first-child) {
            margin-top: 5.775vw;
          }
        }
      }
    }
    .space-y-820 {
      & > *:not(:first-child) {
        margin-top: 10.25vw;
      }
    }
    .group_3 {
      padding-top: 2.5625vw;
      width: 77.7875vw;
      .section_8 {
        padding: 4.9vw 1.6875vw 3.9125vw 2.7375vw;
        flex: 1 1 22.35vw;
        background-image: url('../../image/912fb34df34b94bce305ff1e22205627.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        width: 22.35vw;
        height: 36.575vw;
        .image-wrapper_8 {
          padding: 0.575vw 0 1.6375vw;
          background-image: url('../../image/7ebde50874ac35508eebd474d6f29d81.png');
          background-size: 100% 100%;
          background-repeat: no-repeat;
          .image_15 {
            width: 15.7375vw;
            height: 11.8vw;
          }
        }
        .image_17 {
          width: 9.4375vw;
          height: 5.625vw;
        }
      }
      .space-y-650 {
        & > *:not(:first-child) {
          margin-top: 8.125vw;
        }
      }
      .image_13 {
        margin-left: 5.0125vw;
        flex: 1 1 22.35vw;
        width: 22.9375vw;
        height: 36.675vw;
      }
      .section_9 {
        margin-left: 5.1375vw;
        padding: 3.1875vw 3.325vw 4.225vw 5.375vw;
        flex: 1 1 22.35vw;
        background-image: url('../../image/acc4acce4cd2b4c0963ef6340bf6cd25.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        width: 22.35vw;
        height: 36.575vw;
        .image-wrapper_7 {
          padding: 0.5875vw 0 1.6vw;
          background-image: url('../../image/bbea8b0db128754693ef83e9c4086d54.png');
          background-size: 100% 100%;
          background-repeat: no-repeat;
          .image_14 {
            width: 11.4625vw;
            height: 14.5875vw;
          }
        }
        .image_16 {
          width: 9.3125vw;
          height: 5.675vw;
        }
      }
      .space-y-537 {
        & > *:not(:first-child) {
          margin-top: 6.7125vw;
        }
      }
    }
    .space-y-387 {
      & > *:not(:first-child) {
        margin-top: 4.8375vw;
      }
    }
    .space-x-430 {
      & > *:not(:first-child) {
        margin-left: 5.375vw;
      }
      .section_5 {
        padding: 2.1375vw 1.2125vw 3.4375vw 2.275vw;
        flex: 1 1 22.35vw;
        background-image: url('../../image/76682b35f3839b3cd2e3c126ce1cab24.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        width: 22.35vw;
        height: 36.15vw;
        .image-wrapper_4 {
          padding: 0.6vw 0 1.6vw;
          background-image: url('../../image/7cae687cb04d1436383131f41c147f4a.png');
          background-size: 100% 100%;
          background-repeat: no-repeat;
        }
        .image_12 {
          width: 9.375vw;
          height: 5.675vw;
        }
      }
      .space-y-483 {
        & > *:not(:first-child) {
          margin-top: 6.0375vw;
        }
      }
      .section_6 {
        padding: 6.25vw 2.2625vw 4.8vw 3.3125vw;
        flex: 1 1 22.35vw;
        background-image: url('../../image/1e35554643f4522de7f4c124556950d8.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        width: 22.35vw;
        height: 36.15vw;
        .image-wrapper_6 {
          padding: 0.6vw 0 1.6vw;
          background-image: url('../../image/e0fb7d3674bde9b73872bffe9fe0428b.png');
          background-size: 100% 100%;
          background-repeat: no-repeat;
          .image_10 {
            width: 14.5875vw;
            height: 10.4125vw;
          }
        }
      }
      .space-y-553 {
        & > *:not(:first-child) {
          margin-top: 6.9125vw;
        }
      }
      .section_7 {
        padding: 4.1125vw 4.3125vw 4.8vw 5.375vw;
        flex: 1 1 22.35vw;
        background-image: url('../../image/8ac7a089ba96b05143d94ae5fccd72be.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        width: 22.35vw;
        height: 36.15vw;
        .image-wrapper_5 {
          padding: 0.575vw 0 1.6625vw;
          background-image: url('../../image/61bb9a2c0d26565385ccf6017b8818a5.png');
          background-size: 100% 100%;
          background-repeat: no-repeat;
          .image_9 {
            width: 10.475vw;
            height: 13.075vw;
          }
        }
        .image_11 {
          width: 9.1625vw;
          height: 5.575vw;
        }
      }
      .space-y-508 {
        & > *:not(:first-child) {
          margin-top: 6.35vw;
        }
      }
    }
    .image_3 {
      width: 16.6625vw;
      height: 16.6625vw;
    }
    .image_8 {
      width: 9.375vw;
      height: 5.575vw;
    }
  }
</style>