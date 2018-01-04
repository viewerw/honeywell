<template>
    <div :style="style">
        
    </div>
</template>
<script>
    export default {
        props:{
            width:{
                type:Number,
                default:210
            }
        },
        computed:{
            style(){
                return ''
                return{
                    width:this.width+'px'
                }
            }
        }
    }
</script>
<<style lang="scss" scoped>

</style>

