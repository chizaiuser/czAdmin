<template>
    <div class="cz-user">
        <h2>账号密码登录</h2>
        <div class="cz-user-content">
            <el-form v-if="!isScan" ref="form" :model="form" label-width="0px">
                <el-form-item>
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="form.password" type="password"></el-input>
                </el-form-item>
                 <el-form-item>
                    <el-input v-model="form.email"></el-input>
                </el-form-item>
            </el-form>
            <div v-if="isScan">

            </div>
        </div>
        <div class="cz-user-footer">
            <span>忘记密码</span>
            <span>注册新账号</span>
            <span>意见反馈</span>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, reactive } from 'vue';
import { ElForm, ElFormItem, ElInput } from 'element-plus';
export default defineComponent({
    name: 'CzUser',
    props: {
    },
    components: {
        ElForm,
        ElFormItem,
        ElInput
    },
    setup(props: any, context: any){
        const step = ref(0);
        const isScan = ref(false);
        const form = reactive({
            name: '',
            password: '',
            email: ''
        });
        return {
            step,
            form,
            isScan
        }
    }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
