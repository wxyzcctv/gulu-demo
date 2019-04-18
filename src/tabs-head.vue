<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="actions-wrapper"></div>
        <slot name="actions"></slot>
    </div>
</template>
<script>
export default {
    name: 'GuLuTabsHeader',
    inject:['eventBus'],
    created(){
    }
}
</script>
<style lang="scss" scoped>
$tab-hight: 40px;
.tabs-head{
    display: flex;
    justify-content: start;
    align-items: center;
    height: $tab-hight;
    border: 1px solid red;
    > .actions-wrapper{
        margin-left: auto;
    }// 直接这样设置就可以实现元素右对齐，
    
}
</style>
