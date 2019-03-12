import Vue from "vue"

Vue.filter("timeFilter",(value)=>{
    var d = new Date(value); //value 过滤器修饰的值，时间戳转为日期对象
    return (d.getMonth()+1)+"月"+d.getDate()+"日"
})