<template>
  <div class="comment" id="comment">
    <h3 class="comment_title">{{parent === -1 ? "发表评论":"回复"+user}}</h3>
    <p class="comment_user">
      <input id="user_name" v-model="userInfo.user_name" type="text" placeholder="昵称" />
      <input id="email" v-model="userInfo.email" type="text" placeholder="邮箱 (评论被回复时你能收到通知)" />
    </p>
    <p class="comment_content">
      <textarea id="comments" v-model="userInfo.comments" placeholder="无意义内容我可能不会回复你"></textarea>
    </p>
    <p class="comment_code">
      <input type="text" v-model="userInfo.userText" placeholder="验证码" />
      <span v-html="userInfo.svg" @click="getRandomCode"></span>
    </p>
    <button @click="addComment">提交留言</button>
  </div>
</template>

<script>
import api from "@/api/index.js";
export default {
  props:["blog_id","user","parent"],
  data() {
    return {
      commentList: [],
      userInfo: {
        user_name: "",
        email: "",
        comments: "",
        userText: "",
        text: "",
        svg: ""
      }
    };
  },
  methods: {
    addComment() {
      if (this.userInfo.userText.toLocaleUpperCase() !== this.userInfo.text.toLocaleUpperCase()) {
        alert("验证码不正确！");
        this.getRandomCode();
        return;
      }
      api
        .addComment(
          {
            blog_id: this.blog_id,
            user_name: this.userInfo.user_name,
            parent: this.parent,
            user: this.user,
            email: this.userInfo.email,
            comments: this.userInfo.comments
          }            
        )
        .then(res => {
          alert(res.data.msg);
          this.userInfo.user_name = "";
          this.userInfo.email = "";
          this.userInfo.comments = "";
          this.userInfo.userText = "";
          this.getRandomCode()
        });
    },
    getRandomCode() {
      api.getRandomCode().then(res => {
        this.userInfo.text = res.data.text;

        this.userInfo.svg = res.data.data;
      });
    }
  },
  created() {
    this.getRandomCode();
  }


};
</script>

<style scoped>
.comment {
  padding: 19px;
  margin-bottom: 20px;
  background-color: #f5f5f5;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
  -webkit-box-shadow: 1px 1px 5px rgba(97, 97, 97, 0.48);
  -moz-box-shadow: 1px 1px 5px rgba(97, 97, 97, 0.48);
  box-shadow: 1px 1px 5px rgba(97, 97, 97, 0.48);
}
.comment .comment_title {
  font-weight: normal;
  font-size: 16px;
  margin-bottom: 10px;
}
.comment .comment_user {
  margin-bottom: 15px;
}
.comment .comment_user input,
.comment .comment_code input {
  display: inline-block;
  height: 18px;
  padding: 6px 12px;
  font-size: 14px;
  color: #555;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
}
.comment .comment_user input:last-of-type {
  width: 60%;
}
.comment .comment_content textarea {
  display: block;
  width: 90%;
  height: 80px;
  padding: 6px 12px;
  font-size: 14px;
  margin-bottom: 15px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
}
.comment .comment_code {
  margin-bottom: 15px;
  
}
.comment .comment_code span{
  vertical-align: middle;
}
.comment button {
  cursor: pointer;
  padding: 8px 16px;
  color: #333;
  background-color: #fff;
  border: 1px solid #ccc;
}
.comment button:hover {
  background-color: #adadad;
}
</style>