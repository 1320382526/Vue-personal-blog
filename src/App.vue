<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
*{
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: 14px;
}
.clearfix::after {
    content: "";
    display: block;
    clear: both;
}
body{
    background-image: url('./assets/img/bg.jpg');
    background-color: #f0f0f0;
}
.container {
  width: 1200px;
  margin: 0 auto;
  padding: 30px 0;
}
</style>
