<template>
  <div id="article">
    <div class="article" :key="article.id" v-for="article in articleList">
      <p class="article_title">
        <router-link :to="{ name: 'BlogDetail', query: {blog_id: article.id} }">{{article.title}}</router-link>
      </p>
      <p class="article_content">{{article.content}}</p>
      <div
        class="article_footer"
      >发布于{{article.date}} | 浏览({{article.views}}) | Tags：{{article.tags}}</div>
    </div>
    <PageTool
      :queryBlogByPage="queryBlogByPage"
      :page="page"
      :pageSize="pageSize"
      :count="count"
      v-show="count > pageSize"
    />
  </div>
</template>

<script>
import api from "@/api/index.js";
import PageTool from "@/components/PageTool";
import timeUtil from "@/util/timeUtil";
export default {
  data() {
    return {
      page: 1,    //当前页码
      pageSize: 6,   //每页显示多少条数据
      count: 0,   //总数多少条
      articleList: []   //博客列表
    };
  },
  watch: {
    $route(to) {
      if (to.query.tag) {  //随机标签跳转
        this.queryBlogBySearch("tag", to.query.tag); 
      }else if (to.query.s) {  //搜索内容跳转
        this.queryBlogBySearch("s", to.query.s);
      }else if(to.query.s == ""){  //无内容跳转
        this.queryBlogByPage();
      }
    }
  },
  components: {
    PageTool
  },
  methods: {
    queryBlogBySearch(flgn, val) {
      var params = "";
      this.page = 1;
      if (flgn === "tag") {
        params = "?tag=" + val + "&page=" + this.page + "&pageSize=" +this.pageSize;
      } else if (flgn === "s") {
        params = "?s=" + val + "&page=" + this.page + "&pageSize=" +this.pageSize;
      }
      
      api.queryBlogBySearch(params).then(res => {
        if(res.data == null){
          this.count = 0;
          return
        }
        this.articleList = res.data.data.resultAll.map(item => {
            return {
              ...item,
              date: timeUtil.getTimeType(item.ctime),
              tags: item.tags.split(",").join(" "),
            }
          })
        this.count = res.data.data.resultCount[0].count;
      });
    },
    queryBlogByPage(page) {
      if (page === this.page) {
        return;
      }else if (page <= 1) {
        page = 1;
      }else if (page >= Math.ceil(this.count / this.pageSize)) {
        page = Math.ceil(this.count / this.pageSize);
      }
      if(page){
        this.page = page;
      }
      api.queryBlogByPage("?page=" + this.page + "&pageSize=" + this.pageSize).then(res => {
          this.articleList = res.data.data.resultAll.map(item => {
            return {
              ...item,
              date: timeUtil.getTimeType(item.ctime),
              tags: item.tags.split(",").join(" "),
            }
          })
          this.count = res.data.data.resultCount[0].count;
        });
    }
  },
  created(){
    this.queryBlogByPage();
  }
};
</script>
<style scoped>
.content_left .article {
  border: 1px solid #bfbfbf;
  margin-bottom: 25px;
  border-radius: 4px;
  height: 190px;
  background-color: #fff;
}
.content_left .article > .article_title {
  color: #13102b;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 16px;
  padding: 25px 14px 0px;
}
.content_left .article > .article_title a {
  text-decoration: none;
  color: #13102b;
}
.content_left .article > .article_title a:hover {
  color: #23527c;
}
.content_left .article > .article_content {
  color: #13102b;
  font-size: 14px;
  margin-bottom: 16px;
  height: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 14px;
}

.content_left .article > .article_footer {
  background-color: #1f1f1f;

  padding: 5px 15px;
  box-shadow: 0 1px 1px;
  color: #eee;
}
</style>