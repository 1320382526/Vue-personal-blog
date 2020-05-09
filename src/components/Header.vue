<template>
  <header class="navbar-header">
    <div class="navbar">
      <router-link :to="{ name: 'Home' }">班铃钦个人博客 | 技术博客</router-link>
      <ul>
        <li>
          <router-link :to="{ name: 'Home' }">首页</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Sitemap' }">地图</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'About' }">关于</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'GuestBook' }">留言</router-link>
        </li>
      </ul>
      <div class="frombar">
        <input type="text" v-model="s" placeholder="输入关键词查找" />
        <button @click="changeBlogList">搜索</button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      s:''
    }
  },
  methods: {
    changeBlogList() {

      this.$router.push({ name: "Home", query: { s: this.s } });

             
    }
  }
};
</script>
<style scoped>
.navbar-header {
  width: 100%;
  height: 50px;
  background: #191818;
}
.navbar {
  width: 970px;
  height: 50px;
  margin: 0 auto;
  text-align: center;
}
.navbar > a {
  display: inline-block;
  height: 50px;
  float: left;
  text-decoration: none;
  line-height: 50px;
  font-size: 20px;
  color: rgb(238, 238, 238);
}
.navbar > a:hover {
  color: #d5d5d5;
  background-color: transparent;
}

.navbar > ul {
  float: left;
  margin: 0 20px;
  width: 300px;
}

.navbar > ul > li {
  list-style: none;
  float: left;
  padding: 10px;
  line-height: 30px;
}
.navbar > ul > li > a {
  text-decoration: none;
  color: rgb(255, 255, 255);
}
.navbar > ul > li > a:hover {
  color: #777;
  background-color: transparent;
}
.frombar {
  line-height: 50px;
}
.frombar > input {
  width: 196px;
  border-radius: 5px;
  padding: 6px 12px;
  border: 1px solid #ccc;
  outline: none;
}
.frombar > button {
  border-color: #ccc;
  margin-left: 10px;
  color: #333;
  background-color: #fff;
  vertical-align: middle;
  padding: 2px 12px;
  border-radius: 5px;
  height: 29px;
  cursor: pointer;
}
</style>