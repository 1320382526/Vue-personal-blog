<template>
  <div class="content_left">
    <div class="article">
      <div class="user">
        <div class="title">关于我</div>
        <p>
          博主班铃钦，性别男，广西壮族自治区。<br>
          两年某某框架程序员（太low不好意思说）。<br>
          JS初级烹饪师<br>
          <a href="https://github.com/1320382526/">源代码地址>>>>>>>>>>>>>>></a><br>
        </p>
      </div>
      <div class="user">
        <div class="title">关于博客</div>
        <p>
          从2020年 – 今
          博主很懒+词穷，佛系更新…
          域名 ban12306.com
          程序 vue -> node
          服务器 免费空间 -> 国内某收费空间 -> 国外vps -> 阿里云
          推荐便宜又稳定的xen-VPS吧: HostShare
        </p>
      </div>
    </div>
    <Comments :changeUser="changeUser" :blog_id="blog_id" />
    <Comment :user="user" :parent="parent" :blog_id="blog_id"/>
  </div>
</template>

<script>
import Comments from "@/components/Comments.vue";
import Comment from "@/components/Comment.vue";
export default {
  data(){
    return {
      blog_id:-1,
      user:'博主',
      parent: -1
    }
  },
  methods:{
    changeUser(val, parent){
      this.user = val,
      this.parent = parent
    }
  },
  components:{
    Comments,
    Comment
  }
};
</script>

<style scoped>
.container .content_left {
  width: 60%;
  display: inline-block;
}

.content_left > .article {
  border: 1px solid #e3e3e3;
  box-shadow: 1px 1px 10px #5f5f5f;
  padding: 20px;
  margin-bottom: 20px;
}

.content_left .user > .title {
  font-size: 20px;
  font-weight: bold;
  border-bottom: 1px solid #b9b3b3;
  padding-bottom: 10px;
}
.content_left .user > p {
  padding: 15px 0;
}

</style>