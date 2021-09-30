<template>
    <div class="cz-search">
        <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
            <template #append>
            <el-button icon="el-icon-search"></el-button>
            </template>
        </el-input>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, reactive } from 'vue';
import { ElButton, ElInput } from 'element-plus';
export default defineComponent({
    name: 'CzSearch',
    props: {
    },
    components: {
        ElInput,
        ElButton
    },
    setup(props: any, context: any){
       
    }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
