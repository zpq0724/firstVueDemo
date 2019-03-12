import Vue from "vue"
//定义指令
Vue.directive("scroll",(el,binding)=>{ //将要做的dom操作放到指令中
    //el 指令绑定的元素   binding 指令的值，只读的，不能改，要改的话放在对象中
    var dis = Number(el.getAttribute("dis")); //getAttribute 获取元素的自定义属性
        //console.log(typeof dis)
        el.addEventListener("scroll",()=>{
                //console.log(11111111)
            if(el.scrollTop > dis){
                binding.value.flag = true; //binding 代表的是vis
                    //console.log(binding.value)
            }else{
                binding.value.flag=false;
            }
        })
})

Vue.directive("top",(el,binding)=>{
    
    el.onclick=function(){
        el.parentNode.scrollTop = 0;
    }   
})


//true表示正在发请求，别人就不会发
Vue.directive("gd",{
    bind(el){
        var dis = Number(el.getAttribute("dis"));
        var flag = false; //‘表示可以发请求
        el.addEventListener("scroll",()=>{
            if(el.scrollTop > dis){
                //console.log("满足条件")
                if(flag) return;
                flag=true;
                setTimeout(()=>{
                   // console.log("ajax操作");
                    flag=false;
                    el.scrollTop = 0;
                },3000)
            }
        })
    }
})
