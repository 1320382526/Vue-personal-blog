import axios from '@/axios.js'

var api = {
  queryBlogByPage (params) {
    return axios.get('/api/blog/queryBlogByPage' + params)// 根据分页查询博客
  },
  queryEveryDay () {
    return axios.get('/api/everyday/queryEveryDay')// 每日一句
  },
  queryBlogById (params) {
    return axios.get('/api/blog/queryBlogById' + params)// 根据id查询博客文章
  },
  getRandomCode () {
    return axios.get('/api/comment/getRandomCode')// 获取验证码
  },
  queryCommentsByTime (params) {
    return axios.get('/api/comment/queryCommentsByTime' + params)// 获取最新评论
  },
  queryBlogByViews () {
    return axios.get('/api/blog/queryBlogByViews')// 查询热门博客列表
  },
  queryAllBlog () {
    return axios.get('/api/blog/queryAllBlog')// 查看所有博客文章
  },
  getTagsCloud () {
    return axios.get('/api/tags/queryAllTags') // 查询随机标签
  },
  queryBlogBySearch (params) {
    return axios.get('/api/blog/queryBlogBySearch' + params) // 过滤查询博客文章列表
  },
  addComment (params) {
    return axios.post('/api/comment/addComment', params) // 提交评论
  },
  indertEveryDay (params) {
    return axios.get('/api/everyday/indertEveryDay' + params) // 添加每日一句
  },
  insertBlog (params) {
    return axios.get('/api/blog/insertBlog' + params) // 添加博客文章
  },
  queryCommentsByBlogId (params) {
    return axios.get('/api/comment/queryCommentsByBlogId' + params) // 查询博客评论
  },
}
export default api