<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>
<script>
import Vue from 'vue'
export default {
    name: "GuLucollapse",
    data(){
        return{
            eventBus: new Vue()
        }
    },
    props:{
        singel:{
            type:Boolean,
            default:false
        }
    },
    provide(){
        if(this.singel){
            return{
                eventBus:this.eventBus
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    $grey: #ddd;
    $border-radius:4px;
    .collapse{
        border: 1px solid $grey;
        border-radius: $border-radius;
    }
</style>
