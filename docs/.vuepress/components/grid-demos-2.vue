<template>
    <div>
        <h2>设置gutter</h2>
        <p>
            <strong>预览</strong>
        </p>
        <g-row class="demoRow" gutter="10">
            <g-col span="8">
                <div class="demoCol">8</div>
            </g-col>
            <g-col span="8">
                <div class="demoCol">8</div>
            </g-col>
            <g-col span="8">
                <div class="demoCol">8</div>
            </g-col>
        </g-row>
        <g-row class="demoRow" gutter="10">
            <g-col span="6">
                <div class="demoCol">6</div>
            </g-col>
            <g-col span="6">
                <div class="demoCol">6</div>
            </g-col>
            <g-col span="6">
                <div class="demoCol">6</div>
            </g-col>
            <g-col span="6">
                <div class="demoCol">6</div>
            </g-col>
        </g-row>
        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{content}}</code></pre>
    </div>
</template>
<script>
import Col from  '../../../src/col'
import Row from  '../../../src/row'
export default {
    components: {
        'g-col': Col,
        'g-row': Row
    },
    data(){
        return{
            content:`
            *{
                box-sizing: border-box;
            }
            .demoRow{
                margin: 10px 0;
            }
            .demoCol{
                height: 50px;
                border: 1px solid #ccc;
                background: #eee;
                display: flex;
                justify-content: center;
                align-items: center;
            } 
            
            <g-row class="demoRow" gutter="10">
                <g-col span="8">
                    <div class="demoCol">8</div>
                </g-col>
                <g-col span="8">
                    <div class="demoCol">8</div>
                </g-col>
                <g-col span="8">
                    <div class="demoCol">8</div>
                </g-col>
            </g-row>
            <g-row class="demoRow" gutter="10">
                <g-col span="6">
                    <div class="demoCol">6</div>
                </g-col>
                <g-col span="6">
                    <div class="demoCol">6</div>
                </g-col>
                <g-col span="6">
                    <div class="demoCol">6</div>
                </g-col>
                <g-col span="6">
                    <div class="demoCol">6</div>
                </g-col>
            </g-row>            
            `.replace(/^ {12}/gm,'').trim()
        }
    }
}
</script>
<style lang="scss" scoped>
    *{
        box-sizing: border-box;
    }
    .demoRow{
        margin: 10px 0;
    }
    .demoCol{
        height: 50px;
        border: 1px solid #ccc;
        background: #eee;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
