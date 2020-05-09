<template>
  <div class="content_left">
    <div class="detail_blog" id="detail_blog">
      <h3 class="blog_title">{{ detailBlog.title }}</h3>
      <p
        class="blog_tags"
      >作者: 班铃钦 分类: {{detailBlog.tags}} 发布于: {{detailBlog.ctime}} 01:06 浏览({{detailBlog.views}}) 评论({{commentCount}})</p>
      <div class="blog_content">{{ detailBlog.content }}</div>
    </div>
    <Comments :changeUser="changeUser" :blog_id="detailBlog.id" :changeCommentCount="changeCommentCount" />
    <Comment :user="user" :parent="parent" :blog_id="detailBlog.id"/>
  </div>
</template>

<script>
import api from "@/api/index.js";
import Comments from "@/components/Comments.vue"
import Comment from "@/components/Comment.vue"
import timeUtil from "@/util/timeUtil";
export default {
  data() {
    return {
      detailBlog: {
        id: "1",
        title: "dsa",
        content: "dsa",
        views: "dsa",
        tags: "das",
        ctime: "dsa",
        utime: "dsa"
      },
      commentCount:0,
      user:'文章',
      parent: -1
    };
  },
  watch:{
    $route(to) {
      if (to.query.blog_id) {  //监听博客id
        this.getDetailBlog();
      }
    }
  },
  methods:{
    changeUser(val, parent){
      this.user = val,
      this.parent = parent
    },
    changeCommentCount(val){
      this.commentCount = val
    },
    async getDetailBlog(){
      var params = new URLSearchParams(location.search);  
      var blog_id = params.get("blog_id"); //页面参数
      this.detailBlog = await api.queryBlogById("?Id=" + blog_id).then(res => {
        
        return res.data.data.map(item =>{
          return {
            ...item,
            ctime:timeUtil.getTimeType(item.ctime)
          }
        })[0];
       
      });
      
    }
  },
  components:{
    Comments,
    Comment
  },
  created() {
    this.getDetailBlog();

  }
};
</script>

<style scoped>
/*
*
*   网页左边区域
*
*/
.container .content_left {
  width: 60%;
  display: inline-block;
}
.container .content_left .detail_blog {
  padding: 19px;
  margin-bottom: 20px;
  background-color: #f5f5f5;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
  -webkit-box-shadow: 1px 1px 5px rgba(97, 97, 97, 0.48);
  -moz-box-shadow: 1px 1px 5px rgba(97, 97, 97, 0.48);
  box-shadow: 1px 1px 5px rgba(97, 97, 97, 0.48);
}
.content_left .detail_blog .blog_tags {
  margin: 20px 0;
  padding-bottom: 20px;
  border-bottom: 1px solid #b9b9b9;
}
.blog_content{
  white-space: pre-line;
}

</style>