<template>
    <div class="collapseItem">
        <div class="title" @click="toggle">
            {{title}}
        </div>
        <div class="content" v-if="open">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: "GuLuCollapseItem",
    
    props:{
        title:{
            type: String,
            required: true
        }
    },
    data(){
        return{
            open: false
        }
    },
    inject:['eventBus'],
    mounted(){
        this.eventBus && this.eventBus.$on('updata:selected',(vm)=>{
            if(vm != this){
                this.close()
            }
            // 监听传回的事件，看看传回的VM是否就是自己，如果不是，就关闭
        })
    },
    methods:{
        toggle(){
            if (this.open) {
                this.open = false
            }else{
                this.open = true
                this.eventBus && this.eventBus.$emit('updata:selected',this)
            }
        },
        close(){
            this.open = false
        }
    },

}
</script>
<style lang="scss" scoped>
    $grey: #ddd;
    $border-radius:4px;
    .collapseItem{
        > .title{
            border: 1px solid $grey;
            margin: -1px;
            min-height: 32px;
            display: flex;
            align-items: center;
            padding: 0 8px;
        }
        &:first-child{
            > .title{
                border-top-left-radius: $border-radius;
                border-top-right-radius: $border-radius;
            }
        }
        &:last-child{
            > .title:last-child{
                border-bottom-left-radius: $border-radius;
                border-bottom-right-radius: $border-radius;
            }
            // 选择最后一项没有内容
        }        
        > .content{
            padding: 8px;
        }
    }
</style>
