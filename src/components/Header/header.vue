<template>
    <!-- <div></div> -->
    <el-header class="cz-header">
        <el-row :gutter="30">
            <el-col :span="5">
                <div class="cz-header-tx">
                    <span>驰仔blog</span>
                </div>
            </el-col>
            <el-col :span="14">
                <ul class="cz-header-ui" v-if="contentWidth > 750">
                    <li v-for="item in list" :key="item.name">
                        <router-link :to="item.url">{{ item.name }}</router-link>
                    </li>
                </ul>
            </el-col>
            <el-col :span="5" class="cz-header-user">
                <div class="cz-header-user">
                    <el-icon>
                        <search />
                    </el-icon>
                    <el-icon>
                        <user />
                    </el-icon>
                    <el-icon v-if="contentWidth <= 750">
                        <operation />
                    </el-icon>
                </div>
            </el-col>
        </el-row>
    </el-header>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { ElHeader, ElRow, ElCol } from 'element-plus';
import { User, Operation, Search } from '@element-plus/icons';
export default defineComponent({
    name: 'CzHeader',
    props: {
        list: {
            type: Array,
            default: () => {
                return [];
            }
        },
    },
    components: {
      ElRow,
      ElCol,
      ElHeader,
      User,
      Operation,
      Search
    },
    setup(props: any, context: any){
        const contentWidth = ref(0);

        function onResize () {
            contentWidth.value = window.innerWidth;
        }
        onMounted(() => {
            window.addEventListener("resize", onResize);
            onResize();
        });
        return {
            contentWidth,
            list: props.list
        }
    }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.cz-header {
    height: 65px;
    padding: 0 50px;
    .el-row {
        height: 100%;
        & > div{
            height: 100%;
        }
    }
    .cz-header-tx {
        height: 100%;
        align-items: center;
        justify-content: start;
        display: flex;
    }
    .cz-header-ui{
        height: 100%;
        display: flex;
        align-items: center;
        font-weight: 500;
        justify-content: space-between;
        &>li{
            display: flex;
            align-items: center;
            & a {
                text-decoration: none;
                color: #333;
                font-weight: 500;
            }
        }
    }
    .cz-header-user{
        display: flex;
        align-items: center;
        justify-content: end;
        & i{
            margin-left: 15px;
            font-size: 16px;
        }
    }
}
</style>
