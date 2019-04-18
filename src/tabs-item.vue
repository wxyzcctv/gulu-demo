<template>
    <div class="tabs-item" @click="xxx">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'GuLuTabsItem',
    inject:['eventBus'],
    props:{
        disabled:{
            type:Boolean,
            default:false
        },
        name:{
            type: String|Number,
            required:true
        }
    },
    created(){
        console.log()
        this.eventBus.$on('update:selected',(name)=>{
            console.log(name)
        })
    },
    methods:{
        xxx(){
            this.eventBus.$emit('update:selected',this.name)
        }
    }

}
</script>
<style lang="scss" scoped>
.tabs-item{
    flex-shrink: 0;
    padding: 0 2em;
}
</style>
