<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="line" ref="line"></div>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: 'GuLuTabsHead',
    inject:['eventBus'],
    mounted(){
        this.eventBus.$on('update:selected',(item,vm)=>{
            let {width,height,top,left} = vm.$el.getBoundingClientRect()// 得到传入的元素长宽高等属性
            this.$refs.line.style.width = `${width}px`
            this.$refs.line.style.left = `${left}px`
        })
    }
}
</script>
<style lang="scss" scoped>
$tab-hight: 40px;
$blue:blue;
$border-color:#ddd;
.tabs-head{
    display: flex;
    justify-content: start;
    align-items: center;
    height: $tab-hight;
    position: relative;
    border-bottom: 1px solid $border-color;
    > .line{
        position: absolute;
        bottom: 0;
        border-bottom: 1px solid $blue;
        transition: all 350ms;
    }
    > .actions-wrapper{
        margin-left: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 1em;
    }// 直接这样设置就可以实现元素右对齐，
    
}
</style>
