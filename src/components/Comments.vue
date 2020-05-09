<template>
    <div class="comments">
      <h3>关于：目前有{{adoutList.length}} 条留言</h3>
      <p v-for="about in adoutList" :key="about.id">
        {{about.user_name}}评论{{about.user}} 园长瓜：发表于 {{about.ctime}} [<span class="change_User" @click="changeUser(about.user_name, about.id)">回复</span>]
        {{about.comments}}
      </p>
    </div>
</template>

<script>
import api from "@/api/index.js";
import timeUtil from "@/util/timeUtil";
export default {
    props:["blog_id", "changeUser", "changeCommentCount"],
    data(){
    return {
        adoutList:[]
    }
  },
  watch:{
    blog_id(){
      this.queryCommentsByBlogId()
    }
  },
  methods:{
    queryCommentsByBlogId(){
      api.queryCommentsByBlogId("?blog_id=" + this.blog_id).then(res => {
      this.adoutList = res.data.data.map(item => {
        return {
          ...item,
          ctime: timeUtil.getTimeType(item.ctime)
        }
      });
      if(this.changeCommentCount){
        this.changeCommentCount(this.adoutList.length)
      }
      
      })
    }
  },
  created(){
    if(this.blog_id == -1 || this.blog_id == -2){
      this.queryCommentsByBlogId()
    }
    
  }
}
</script>
<style scoped>
.content_left > .comments h3 {
  font-size: 16px;
  font-weight: unset;
  margin-bottom: 15px;
}
.content_left > .comments p {
  border: 1px dashed #7ca4c1;
  background: #d9edf7;
  padding: 10px;
  margin-bottom: 10px;
}
.content_left > .comments p span{
  color: blue;
  cursor: pointer;
}
</style>