<template>
    <div>
        <header>
        <div class="logo">
            <i class="fa fa-volume-up play" aria-hidden="true"></i>    
            <img src="../../../static/images/top-logo.png">
            <router-link to="/search"><i class="fa fa-search-minus right"></i></router-link>
        </div>
        </header>
        <router-view class="content"/>
        <footer>
            <ul>
                <li><router-link to="/home/index">首页</router-link></li>
                <li><router-link to="/home/video">视频</router-link></li>
                <li><router-link to="/home/sub">订阅</router-link></li>
                <li><i class="fa fa-user-circle" aria-hidden="true"></i><router-link to="/user">个人</router-link></li>
            </ul>
        </footer>
    </div>
</template>
    <script>
        import "@/style/reset.css"
    export default{
   
        };
    </script>
<style lang="scss">
/*@import "../../style/reset.css";  引入方式*/
$sc:25;
header{
    display:flex;
    width:100%;
    height:75/$sc+rem;
    background:#fff;
    position:fixed;
    top:0;
    left:0;
.play{
    width:30/$sc+rem;
    height:30/$sc+rem;
      margin-top:18/$sc+rem;
    font-size:18px;
    }
.right{
        wdith:30/$sc+rem;
        height:30/$sc+rem;
        margin-top:18/$sc+rem;
        font-size:18px;
        color:#ccc;
          
    }
    .logo{
        display:flex;
       align-items:center;
        width:351/$sc+rem;
        height:30/$sc+rem;
        background:#fff;  
        align-self:center;
        justify-content:space-between;
    }
    .logo img{
        width:107/$sc+rem;
        height:23.5/sc+rem;
        }
   
}

.content{
    position:absolute;
    top:75/$sc+rem;
    left:0;
    bottom:49/$sc+rem;
    right:0;
    overflow-y:auto;
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
        line-height:40/$sc+rem;
    }
    ul li i{
        display:block;
        font-size:18px;
    }
}


</style>