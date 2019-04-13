<template>
  <div class="toast" ref="wrapper" :class="toastClasses">
    <div class="message">
        <slot v-if="!enableHTML"></slot>
        <div v-else v-html="$slots.default[0]"></div>
    </div>
    <div class="line" ref="line"></div>
    <span class="close" @click="clickClose">{{closeButton.text}}</span>
  </div>
</template>
<script>
export default {
  name: "GuLuToast",
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    autoCloseDelay: {
      type: Number,
      default: 20
    },
    closeButton: {
      type: Object,
      default() {
        return {
          text: "关闭",
          callback: undefined
          // 传入的callback默认为undefined
        };
      }
    },
    enableHTML: {
      type: Boolean,
      default: false
    },
    position:{
      type: String,
      default: 'top',
      validator(value){
        return ['top','bottom','middle'].indexOf(value) >=0
      }
    }
  },
  mounted() {
    this.updataStyle()
    this.exeAutoClose()
  },
  computed: {
    toastClasses(){
      return {
        [`position-${this.position}`]:true
      }
    }
  },
  methods: {
    updataStyle(){
      this.$nextTick(() => {
        this.$refs.line.style.height = 
          `${this.$refs.wrapper.getBoundingClientRect().height}px`
      })
    },
    exeAutoClose(){
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, this.autoCloseDelay * 1000);
      }
    },
    close() {
      this.$el.remove(), 
      this.$emit('close'),
      this.$destroy();
    },
    log() {
      console.log("测试");
    },
    clickClose() {
      this.close();
      if (this.closeButton && typeof this.closeButton.callback === "function") {
        // 这里判断是否有closeButton，以及closeButton的callback是否为函数
        this.closeButton.callback(this);
        // 此处的this表示toast实例
      }
    }
  }
};
</script>
<style lang="scss" scoped>
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
.toast {
  font-size: $font-size;
  min-height: $toast-min-height;
  background: $toast-bg;
  position: fixed;
  left: 50%;
  line-height: 1.8;
  color: white;
  display: flex;
  align-items: center;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  padding: 0 16px;
  .close {
    padding-left: 16px;
    flex-shrink: 0;
  }
  .line {
    height: 100%;
    border-left: 1px solid #666;
    margin-left: 16px;
  }
  .message{
    padding:8px 0;
  }
  &.position-top{
    top: 0;
    transform: translateX(-50%);
  }
  &.position-bottom{
    bottom: 0;
    transform: translateX(-50%);
  }
  &.position-middle{
    top: 50%;
    transform: translate(-50%,-50%);
  }
}
</style>
