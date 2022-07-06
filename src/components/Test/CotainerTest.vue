<template>
<!--所有东西放在一个container里-->
  <el-container class="layout-container-demo" style="height: 500px">
    <!--el-aside是侧边栏-->
    <el-aside width="200px">
        <!--下面是侧边栏里会滑动的目录项（scrollbar）-->
    <el-scrollbar>
        <!--目录项里是目录（el-menu）-->
        <el-menu :default-openeds="['1', '3']">
        <!--子目录项 el-sub-menu index = 1，2，3-->
            <el-sub-menu index="1">
                <!--子目录项里是title, item-group * 2, sub-menu-->
                <template #title>
                <el-icon><message /></el-icon>Navigator One
                </template>
                <el-menu-item-group>
                <template #title>Group 1</template>
                <el-menu-item index="1-1">Option 1</el-menu-item>
                <el-menu-item index="1-2">Option 2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="Group 2">
                <el-menu-item index="1-3">Option 3</el-menu-item>
                </el-menu-item-group>
                <el-sub-menu index="1-4">
                <template #title>Option4</template>
                <el-menu-item index="1-4-1">Option 4-1</el-menu-item>
                </el-sub-menu>
            </el-sub-menu>

            <el-sub-menu index="2">
                <template #title>
                <el-icon><icon-menu /></el-icon>Navigator Two
                </template>
                <el-menu-item-group>
                <template #title>Group 1</template>
                <el-menu-item index="2-1">Option 1</el-menu-item>
                <el-menu-item index="2-2">Option 2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="Group 2">
                <el-menu-item index="2-3">Option 3</el-menu-item>
                </el-menu-item-group>
                <el-sub-menu index="2-4">
                <template #title>Option 4</template>
                <el-menu-item index="2-4-1">Option 4-1</el-menu-item>
                </el-sub-menu>
            </el-sub-menu>

            <el-sub-menu index="3">
                <template #title>
                <el-icon><setting /></el-icon>Navigator Three
                </template>
                <el-menu-item-group>
                <template #title>Group 1</template>
                <el-menu-item index="3-1">Option 1</el-menu-item>
                <el-menu-item index="3-2">Option 2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="Group 2">
                <el-menu-item index="3-3">Option 3</el-menu-item>
                </el-menu-item-group>
                <el-sub-menu index="3-4">
                <template #title>Option 4</template>
                <el-menu-item index="3-4-1">Option 4-1</el-menu-item>
                </el-sub-menu>
            </el-sub-menu>
        </el-menu>
      </el-scrollbar>
    </el-aside>

    <!--然后是右侧界面，放在一个container里-->
    <el-container>
        <!--头部-->
        <el-header style="text-align: right; font-size: 12px">
            <!--最右侧的item，附带一个下拉框-->
            <div class="toolbar">
                <!--下拉框，用margin-right确定距离右侧的位置-->
                <el-dropdown>
                    <el-icon style="margin-right: 8px; margin-top: 1px"
                    ><setting
                    /></el-icon>
                    <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>View</el-dropdown-item>
                        <el-dropdown-item>Add</el-dropdown-item>
                        <el-dropdown-item>Delete</el-dropdown-item>
                    </el-dropdown-menu>
                    </template>
                </el-dropdown>
                <span>Tom</span>
            </div>
        </el-header>

        <!--主体部分，里面是一些表格之类的-->
        <el-main>
            <el-scrollbar>
                <!--这里的data表明了数据来源-->
                <el-table :data="tableData">
                    <el-table-column prop="date" label="Date" width="140" />
                    <el-table-column prop="name" label="Name" width="120" />
                    <el-table-column prop="address" label="Address" />
                </el-table>
            </el-scrollbar>
        </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { ref } from 'vue'
import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue'
const tableData = ref(Array.from({ length: 20 }).fill(item))
// 这里应该是从某个地方获取可以存入表单栏中的东西

export default{
    name:"test",
    data:{
        IconMenu,
        Message,
        Setting,
        item:{
            date: '2016-05-02',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
        }
    },
    componts:{

    },
    methods:{

    }
}
</script>

<style scoped>
.layout-container-demo .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}
.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}
.layout-container-demo .el-menu {
  border-right: none;
}
.layout-container-demo .el-main {
  padding: 0;
}
.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
</style>
