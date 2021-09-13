<template>
    <div class="cz-user">
        <h2>账号密码登录</h2>
        <div class="cz-user-content">
            <el-form></el-form>
        </div>
        <div class="cz-user-footer">
            <span>忘记密码</span>
            <span>注册新账号</span>
            <span>意见反馈</span>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { ElForm } from 'element-plus';
export default defineComponent({
    name: 'CzUser',
    props: {
        list: {
            type: Array,
            default: () => {
                return [];
            }
        },
    },
    components: {
        ElForm
    },
    setup(props: any, context: any){

    }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
