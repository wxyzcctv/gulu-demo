<template>
  <button class="g-button wxyz" :class="{[`icon-${iconPosition}`]:true}"
  @click="$emit('click')">
    <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
    <g-icon class='loading icon' v-if="loading" name='loading'></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
import Icon from './icon'
export default {
  name: 'GuLuButton',
  // props: ["icon", "iconPosition"]
  components:{
    'g-icon':Icon
  },
  // 这里是进行局部定义
  props:{
    icon:{},
    loading:{
      type:Boolean,
      default:false
    },
    iconPosition:{
      type:String,
      default:'left',
      validator(value){
        return !(value !== 'left' && value !== 'right')
      }
      // 此处是为了验证iconposition只有left和right
    }
  }
};
</script>
<style lang="scss" scoped>
.g-button {
  @keyframes spain {
    0%{transform: rotate(0deg)}
    100%{transform: rotate(360deg)}
  }
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  // 解决inline不对齐的情况
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
  >.icon{
    order: 1;margin-right: .1em;
  }
  >.content{
    order: 2; 
  }
  &.icon-right {
    > .icon {
      order: 2;margin-left: .1em;margin-right: 0;
    }
    > .content {
      order: 1;
    }
  }
  .loading{
    animation: spain 1s infinite linear;
  }
}
</style>