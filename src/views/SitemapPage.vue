<template>
    <div class="sitemap">
        <div class="title">班铃钦个人博客's SiteMap</div>
        <div class="nav">
            <router-link class="user_nav" :to="{ name: 'Home'}">班铃钦个人博客</router-link> »
            <span class="user_map">站点地图</span>
        </div>
        <div class="blog">
            <p>最新文章</p>
            <ul>
                <li v-for="(blog,index) in blogList" :key="index"> 
                    <router-link :to="{ name: 'BlogDetail', query: {blog_id: blog.id}}">{{ blog.title }}</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import api from "@/api/index.js";
export default {
    data (){
        return {
            blogList:[]
        }
        
    },
    created() {
        api.queryAllBlog().then(res => {
            this.blogList = res.data.data;
        });
    }
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}
.sitemap>.title{
    margin: 20px 0;
    text-align: center;
    font-weight: bold;
    font-size: 18px;
}
.sitemap .nav{
    width: 90%;
    border: 1px solid #eee;
    margin: 0 auto;
    border-radius: 2px;
    height: 35px;
    padding: 0px 8px;
    line-height: 35px;
    font-size: 14px;
    margin-bottom: 10px;
}
.sitemap .nav>.user_nav{
    font-weight: bold;
    color: #111;
}
.sitemap .nav>.user_map{

    color: #111;
}

.sitemap .blog{
    width: 90%;
    margin: 0 auto;
    border-radius: 2px;
    border: 1px solid #eee;
    padding: 20px 10px;
}

.sitemap .blog>p{
    font-weight: bold;
    font-size: 14px;
}

.sitemap .blog>ul li{
    font-weight: bold;
    font-size: 14px;
    margin-left: 60px;
    margin-top: 8px;
    
}

.sitemap .blog>ul li a{
    color: #111;
    font-size: 10px;
    font-weight: normal;
}
</style>