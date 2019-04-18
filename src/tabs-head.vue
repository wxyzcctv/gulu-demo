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
            console.log(item)
            console.log(vm)
        })
    }
}
</script>
<style lang="scss" scoped>
$tab-hight: 40px;
$blue:blue;
.tabs-head{
    display: flex;
    justify-content: start;
    align-items: center;
    height: $tab-hight;
    border: 1px solid red;
    position: relative;
    > .line{
        position: absolute;
        bottom: 0;
        border-bottom: 2px solid $blue;
        width: 100px;
    }
    > .actions-wrapper{
        margin-left: auto;
    }// 直接这样设置就可以实现元素右对齐，
    
}
</style>
