<template>
    <el-menu
        :default-active="active"
        class="self-menu"
        @open="handleOpen"
        @close="handleClose">
        <template v-for="(item,index) in menu">
            <template v-if="item.children">
                <el-submenu :index="index">
                    <template slot="title">
                        <span>{{item.name}}</span>
                    </template>
                    <router-link v-for="(_item,_index) in item.children" :to="_item.path">
                        <el-menu-item :index="index+'-'+_index">{{_item.name}}</el-menu-item>
                    </router-link>
                </el-submenu>
            </template>
            <template v-else>
                <router-link :to="item.path">
                    <el-menu-item :index="index">
                        <span slot="title">{{item.name}}</span>
                    </el-menu-item>
                </router-link>
            </template>
        </template>
    </el-menu>
</template>
<script>
    import menu from '../config/menu'
    export default {
        computed:{
            active(){
                return null
            },
            menu(){
                return menu
            },
        },
        methods: {
            handleOpen(key, keyPath) {

            },
            handleClose(key, keyPath) {

            }
        }
    }
</script>
<style  rel="stylesheet/scss"  lang="scss">
    .self-menu{
        background-color: transparent;
        border-right:none;
        a{
            display:block;
        }
        .el-menu{
            background-color:transparent;
        }
        .el-submenu{
            .el-menu-item{
                padding-left: 2.5rem!important;
                font-size:1.2rem;
            }
            .el-submenu__title{
                color: #B0B0B0;
                font-size:1.5rem;
                height:4.5rem;
                line-height:4.5rem;
                padding-left: 1.5rem !important;
            .el-submenu__icon-arrow{
                color: #B0B0B0;
                font-size: 1rem;
            }
            &:hover{
                 background-color: #7EB338;
                 color: #fff;
                .el-submenu__icon-arrow{
                  color: #fff;
                }
            }
            }
        }
        .el-menu-item{
            color: #B0B0B0;
            font-size:1.5rem;
            height:3rem;
            line-height:3rem;
            padding-left: 1.5rem !important;
            &:hover{
               background-color: #7EB338;
               color: #fff;
            }
            &.is-active{
                background-color:#7EB338;
                color:#fff;
            }
        }
    }
</style>

