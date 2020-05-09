var timeUtil = {
    //根据时间戳返回日期类型  例2020-04-26
    getTimeType (time) {
        var d = new Date(parseInt(time));
        var year = d.getFullYear();
        var month = d.getMonth()+1;
        var date = d.getDate();
      return year + "-" + month + "-" + date;
    },

    //微信公众号时间显示法
    getDateString(time) {
      var d = new Date(parseInt(time));
      var year = d.getFullYear();//年
      var month = d.getMonth() + 1;//月份
      var date = d.getDate();//天数
      var day = d.getDay() === 0 ? '日' : d.getDay().toString();
      var phen = d.toLocaleString().split(" ")[1].substr(0, 2);//上午，下午，***
      var hou = d.getHours().toString().padStart(2, "0");//时
      var min = d.getMinutes().toString().padStart(2, "0");//分
      if (new Date().getTime() - d.getTime() < 1000 * 60 * 60 * 24 && date === new Date().getDate()) {
          return `${hou}:${min}`;//今天显示
      } else if (new Date().getTime() - d.getTime() < 1000 * 60 * 60 * 24 * 2 && new Date(d.getTime()).getDate() === new Date(new Date().getTime() - (1000 * 60 * 60 * 24)).getDate()) {
          return `昨天 ${phen} ${hou}:${min}`;//昨天显示
      } else if (new Date().getTime() - d.getTime() < (1000 * 60 * 60 * 24) * 7 && new Date().getDay() > d.getDay()) {
          return `周${day} ${phen} ${hou}:${min}`;//星期显示
      } else if (year > new Date().getFullYear()) {//今年
          return `${month}月${date}日 ${phen}${hou}:${min}`;
      } else {//往年
          return `${year}年${month}月${date}日 ${phen}${hou}:${min}`;
      }

    }
  
}
  export default timeUtil