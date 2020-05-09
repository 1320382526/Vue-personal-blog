<template>
    <div class="header">
        <div class="logo">
            <img src="@/assets/img/logo.png" alt="">&nbsp;
            <span class="title">博客后台管理系统</span>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.header {
    height: 100%;
    line-height: 100%;
    background-color: #008c8c;
}
.header .logo {
    padding-left: 20px;
    width: 200px;
    height: 60px;
    line-height: 60px;
}
.header .logo img {
    width: 30px;
    height: 30px;
    display: inline-block;
    vertical-align: middle;
}
.header .logo .title{
    color: #fff;
}
</style>