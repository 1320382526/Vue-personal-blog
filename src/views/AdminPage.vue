<template>
    <el-container>
        <el-header class="none">
            <Header />
        </el-header>
        <el-container>
            <el-aside width="200px">
                <Aside />
            </el-aside>
            <el-main>Main</el-main>
        </el-container>
    </el-container>
</template>

<script>
import Header from "@/components/admin/Header.vue";
import Aside from "@/components/admin/Aside.vue";
export default {
  components: {
    Header,
    Aside
  },
  created(){
      //更换全局背景
      window.document.body.style.height = "100%";
      window.document.body.style.background = "none"
  }
};
</script>
<style scoped>
.el-header.none{
    padding: 0;
}
</style>
