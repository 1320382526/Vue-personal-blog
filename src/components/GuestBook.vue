<template>
  <div class="content_left">
    <div class="guestbook">
      <p>欢迎灌水交流，别看我长时间不发博，博主可一直都在线~</p>
      <p>友链只交换技术类个人博客，本博客稳定在线，所以也需要你的站尽量稳定。</p>
      <p>不要皮，谢谢。</p>
      <p>博主联系vx : a2661367</p>
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
      blog_id: -2,
      user:'留言',
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

.content_left > .guestbook {
  border: 1px solid #e3e3e3;
  box-shadow: 1px 1px 10px #5f5f5f;
  padding: 20px;
  margin-bottom: 20px;
  background: #f5f5f5;
}
.content_left > .guestbook > p {
  padding: 6px 0;
  color: red;
  font-size: 14px;
}
.content_left > .guestbook > p:first-of-type {
  color: #111;
}

</style>