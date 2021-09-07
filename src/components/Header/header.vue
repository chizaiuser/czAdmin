<template>
    <!-- <div></div> -->
    <el-header class="cz-header">
        <el-row :gutter="30">
            <el-col class="cz-header-tx" :span="4">
                <div>
                    <span>驰仔blog</span>
                </div>
            </el-col>
            <el-col :span="16">
                <ul class="cz-header-ui">
                    <li v-for="item in list" :key="item.name">
                        <router-link :to="item.url">{{ item.name }}</router-link>
                    </li>
                </ul>
            </el-col>
            <el-col :span="4" class="cz-header-user">
                <div class="cz-header-user">
                    <el-icon>
                        <user />
                    </el-icon>
                </div>
      
            </el-col>
        </el-row>
    </el-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ElHeader, ElRow, ElCol } from 'element-plus';
import { User } from '@element-plus/icons';
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
      User
    },
    setup(props: any, context: any){
        return {
            list: props.list
        }
    }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.cz-header {
    height: 65px;
    padding: 0 40px;
    .el-row {
        height: 100%;
    }
    .cz-header-tx {
        align-self: center;
    }
    .cz-header-ui{
        display: flex;
        height: 100%;
        align-self: center;
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
        align-self: center;
    }
}
</style>
