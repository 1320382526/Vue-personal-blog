<template>
  <div class="content_right">
    <div class="right_module" id="random_tags">
      <div class="title">随机标签云</div>
      <router-link
        :to="{ name: 'Home', query: {tag: tag.tag}}"
        :key="tag.id"
        v-for="tag in tags"
        :style="{color:getColor(),fontSize:getFontSize()}"
      >{{tag.tag}}</router-link>
    </div>
    <div class="right_module" id="new_hot">
      <div class="title">最近热门</div>
      <ul>
        <li :key="index" v-for="(title, index) in titleList">
            <router-link :to="{ name: 'BlogDetail', query: {blog_id: title.id}}">{{title.title}}</router-link>
        </li>
      </ul>
    </div>
    <div class="right_module pinglun" id="new_comments">
      <div class="title">最新评论</div>
      <ul>
        <li :key="index" v-for="(comment, index) in commentList">
              <p class="clearfix">
                <span class="left">{{comment.user_name}}</span>
                <span class="right">[{{comment.ctime}}]</span>
              </p>
              <router-link :to="{ name: 'BlogDetail', query: {blog_id: comment.blog_id}}">{{comment.comments}}</router-link>
        </li>
      </ul>
    </div>
    <div class="right_module lianjie">
      <div class="title">友情链接(不稳定的站可能会被我直接删除)</div>
      <ul>
        <li>
          <a href>暂无链接</a>
          <a href>暂无链接</a>
        </li>
        <li>
          <a href>暂无链接</a>
          <a href>暂无链接</a>
        </li>
        <li>
          <a href>暂无链接</a>
          <a href>暂无链接</a>
        </li>
        <li>
          <a href>暂无链接</a>
          <a href>暂无链接</a>
        </li>
        <li>
          <a href>暂无链接</a>
          <a href>暂无链接</a>
        </li>
        <li>
          <a href>暂无链接</a>
          <a href>暂无链接</a>
        </li>
        <li>
          <a href>暂无链接</a>
          <a href>暂无链接</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import api from "@/api/index.js";
import timeUtil from "@/util/timeUtil";
export default {
  data() {
    return {
      tags: [],
      titleList: [],
      commentList: []
    };
  },
  methods: {
    changeBlogContent(){

    },
    getColor() {
      return `rgb(${Math.random() * 255},${Math.random() *
        255},${Math.random() * 255})`;
    },
    getFontSize() {
      return `${Math.random() * 20 + 5}px`;
    }
  },
  created(){
      api.queryCommentsByTime("?size=7").then(res => {
        this.commentList = res.data.data.map(item => {
          return {
            ...item,
            ctime: timeUtil.getDateString(item.ctime)
          }
        })
          
      });
      
      api.queryBlogByViews().then(res => {

        this.titleList = res.data.data;
      });
      api.getTagsCloud().then(res => {

        this.tags = res.data.data;
      });
  }

};
</script>

<style scoped>
/*
*
*   网页右边区域
*
*/

.content_right {
  display: inline-block;
  width: 36%;
  margin-left: 30px;
  vertical-align: top;
}

.content_right .right_module {
  background: #1f1f1f;
  border: 1px solid #191818;
  border-radius: 4px;
  margin-bottom: 20px;
}

.right_module .title {
  background: #191818;
  color: aqua;
  padding: 10px;
}

.right_module > a {
  text-decoration: none;
  padding: 8px 10px;
  display: inline-block;
}

.right_module > ul > li {
  padding: 10px 10px;
  border-bottom: 1px solid #292929;
  overflow: hidden;
}

.right_module > ul > li > a {
  text-decoration: none;
  color: #eee;
}
.right_module > ul > li > a:hover {
  color: #337ab7;
}

.right_module > ul > li > p {
  margin-bottom: 5px;
}
.right_module > ul > li > p > .left {
  float: left;
  color: #eee;
}
.right_module > ul > li > p > .right {
  float: right;
  color: #eee;
}

.right_module.pinglun > ul > li > a {
  color: #777;
}
.right_module.lianjie > ul > li > a {
  width: 50%;
  display: inline-block;
}
</style>