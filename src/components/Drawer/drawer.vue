<template>
    <el-drawer
        :model-value="visible"
        direction="ttb"
        v-bind="$attrs"
        destroy-on-close
        :before-close="handleClose"
    >
        <slot name="content" />
    </el-drawer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ElDrawer } from 'element-plus';
export default defineComponent({
    name: 'CzDrawer',
    props: {
        visible: Boolean
    },
    components: {
        ElDrawer,
    },
    setup(props: any, context: any){
        const handleClose = function (done: () => void) {
           context.emit('update:visible', false);
           done();
        }
        return {
            handleClose
        };
    }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
