<template>
    <div class="every_day" id="every_day">
        <span>每日一句 ( {{ getCtime }} )</span>
        <p class="english" v-html="content"></p>
    </div>
</template>
<script>
import api from "@/api/index.js";
import timeUtil from "@/util/timeUtil";
export default {
    data() {
        return {
            id: 1,
            ctime: "55522366",
            content: "You were born with wings. Why prefer to crawl through life?"
        }
    },
    computed: {
        getCtime() {
            return timeUtil.getTimeType(this.ctime);
        }
    },
    created(){
        api.queryEveryDay().then(res => {
            if (res.data.data.length === 0) {
                return;
            }
            this.everyDay = res.data.data[0];
        });
    }
}
</script>
<style scoped>
.container .content_left .every_day {
  border: 1px solid #e3e3e3;
  box-shadow: 1px 1px 10px #5f5f5f;
  padding: 20px;
  margin-bottom: 20px;
}
.every_day > span {
  color: rgb(72, 175, 140);
  font-size: 14px;
  display: inline-block;
  margin-bottom: 5px;
}
.every_day > .english {
  margin-bottom: 10px;
}
.every_day > .chinese > span {
  float: right;
}
</style>