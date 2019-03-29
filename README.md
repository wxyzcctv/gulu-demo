# 轮子 - 一个Vue UI组件

[![Build Status](https://travis-ci.com/wxyzcctv/gulu-demo.svg?branch=master)](https://travis-ci.com/wxyzcctv/gulu-demo)

## 介绍

这是我在学习Vue过程中做一个UI框架

## 开始使用

1. 安装
    使用本框架前，请在CSS中开启border-box
    、、、
    *,*::before,*::after{box-sixing:border-box}
    、、、
    IE 8 及以上浏览器都支持此样式

    你还需要设置默认样式（后续会改为SCSS变量）
    、、、
    :root {
        --button-height: 32px;
        --font-size: 14px;
        --button-bg: white;
        --button-active-bg: #eee;
        --border-radius: 4px;
        --color: #333;
        --border-color: #999;
        --border-color-hover: #666;
    }
    、、、

    IE 15及以上浏览器支持此样式
2. 安装wxyz-test-1-0
    、、、
    npm i --save wxyz-test-1-0
    、、、
3. 引入 wxyz-test-1-0
    、、、
    import { Button, ButtonGroup, Icon } from "wxyz-test-1-0";
    import 'wxyz-test-1-0/dist/index.css'

    export default {
        name: "app",
        components: {
            "g-button": Button,
            "g-icon": Icon
        }
    }
    、、、
4. 引入svg symbols
    、、、
    <script src="//at.alicdn.com/t/font_1094098_th4asnvoqj.js"></script>
    、、、


## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码