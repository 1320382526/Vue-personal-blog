<template>
  <div class="page_tool" v-if="count != 0">
    <ul>
      <li v-show="page != 1" @click="queryBlogByPage(1)">
        <a href="javascript: void (0)">首页</a>
      </li>
      <li v-show="page != 1" @click="queryBlogByPage(page - 1)">
        <a href="javascript: void (0)">上一页</a>
      </li>
      <li v-show="page - 2 > 0" @click="queryBlogByPage(page - 2)">
        <a href="javascript: void (0)">{{page - 2}}</a>
      </li>
      <li v-show="page - 1 > 0" @click="queryBlogByPage(page - 1)">
        <a href="javascript: void (0)">{{page - 1}}</a>
      </li>
      <li class="active">
        <a href="javascript: void (0)">{{page}}</a>
      </li>
      <li
        v-show="page + 1 <= Math.ceil(count/pageSize)"
        @click="queryBlogByPage(page + 1)"
      >
        <a href="javascript: void (0)">{{page + 1}}</a>
      </li>
      <li
        v-show="page + 2 <= Math.ceil(count/pageSize)"
        @click="queryBlogByPage(page + 2)"
      >
        <a href="javascript: void (0)">{{page + 2}}</a>
      </li>
      <li
        v-show="page != Math.ceil(count/pageSize)"
        @click="queryBlogByPage(page + 1)"
      >
        <a href="javascript: void (0)">下一页</a>
      </li>
      <li
        v-show="page != Math.ceil(count/pageSize)"
        @click="queryBlogByPage(Math.ceil(count/pageSize))"
      >
        <a href="javascript: void (0)">尾页</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    props:["page", "pageSize", "count", "queryBlogByPage"],

};
</script>

<style scoped>
.content_left #article .page_tool > ul > li {
  display: inline-block;
  padding: 4px 14px;
  vertical-align: middle;  
  background-color: #fff;
  border: 1px solid #ddd;
}
.content_left #article .page_tool > ul > li.active {
  background-color: #1f1f1f;
  border-color: #191818;
  cursor: default;
}
.content_left #article .page_tool > ul > li.active > a {
  color: #fff;
}

.content_left #article .page_tool > ul > li > a {
  color: #1f1f1f;
  text-decoration: none;
}
.content_left #article .page_tool > ul > li:not(.active):hover {
  color: #191818;
  background-color: #eee;
  border-color: #ddd;
}
</style>