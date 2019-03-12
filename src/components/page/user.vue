<template>
 <div>  
        <header>
        <router-link to="/login" @click="dianji">
            <img  class="logogray" src="../../../static/images/logogray.png">
        </router-link>
        <div class="radius"><div><p>点击头像登录</p></div>
            <ul class="nav">
                <li><i class="fa fa-history" aria-hidden="true"></i><span>历史记录</span></li>
                <li><i class="fa fa-envelope-open-o" aria-hidden="true"></i><span>消息</span></li>
                <li><i class="fa fa-address-card" aria-hidden="true"></i><span>夜间模式</span></li>
                <li><i class="fa fa-sun-o" aria-hidden="true"></i><span>系统设置</span></li>
            </ul>
        </div>
        </header>

        <router-view class="content"/>
         <ul class="list">
           <li><i class="fa fa-star" aria-hidden="true"></i><input type="password"  placeholder="我的收藏"></li>   
           <li><i class="fa fa-id-card-o" aria-hidden="true"></i><input type="password"  placeholder="我的评论"></li>   
           <li><input type="password"  placeholder="我的资料"></li>   
         </ul>

        <footer>
            <ul >
                <li><router-link to="/home/index">首页</router-link></li>
                <li><router-link to="/home/video">视频</router-link></li>
                <li><router-link to="/home/sub">订阅</router-link></li>
                <li><router-link to="/user">个人</router-link></li>
            </ul>
        </footer>
    </div>
</template>
 <script>
 export default{
    
      methods:{
        dianji(){
            location.reload(true);
        }
    }
 }
   
import { Toast } from 'mint-ui';

import "@/style/reset.css"

    </script>
<style lang="scss" scoped>
    $sc:25;
    header{
        wdith:100%;
        positions:fixed;
        top:0;
        left:0;
        height:274/$sc+rem;
        background:#f8b62b;
        overflow:hidden;
        z-index:1;
        text-align:center;
        p{text-align:center;margin-top:38px;}
        .logogray{
            margin-left:164px;
            width:61/$sc+rem;
            height:47/$sc+rem;
            margin-top:50px;
        }
        .radius{
            width:136%;
            background:#fff;
            height:10.6rem;
            border-radius:50%;
            margin-left:-62px;
            margin-top:8px;
            overflow:hidden;
            text-align:center;
            overflow:hidden;
        }
        .radius div{
            width:100px;
            margin-left:205px;
            background:#f8b62b;
        }
        .radius .nav{
            margin-top:30px;
            width:100%;
            display:flex;
        }
        .radius .nav li{
            width:48/$sc+rem;
            height:58/$sc+rem;
            margin-left:62px;
        }
       .radius .nav li i{
           display:block;
           font-size:18px;
           margin-bottom:10px;
       }
       .radius .nav li span{
           font-size:12px;
       }
    }

    .content{
    position:absolute;
    top:75/$sc+rem;
    left:0;
    bottom:49/$sc+rem;
    right:0;
    background:#fff;
    overflow-y:auto;
    }
    .list li {
      width: 100%;
      height: 49.98/$sc+rem;
      line-height: 49.98/$sc+rem;
      text-align: left;
      border-bottom: 1px solid #ccc;
      border-top: 1px solid #ccc;
      background: #fff;
    }
    .list li i{
        font-size:18px;color:pink;
    }
    .list li input {
      border: none;
     text-indent:20px;
    }
   
footer{

    width:100%;
    height:49/$sc+rem;
    background:#ccc;
    position:fixed;
    bottom:0;
    left:0;
    ul{
        display:flex;
    };
    ul li{
        text-align:center;
        flex:1;
        height:49/$sc+rem;
        line-height:49/$sc+rem;
    }
    ul li i{display:block;}
}
</style> 