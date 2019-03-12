<template>
 <div>  
        <header><router-link to="/login"><p>点击登录</p></router-link>
        
        
        </header>

        <router-view class="content"/>
           /* <mt-button type="default">default</mt-button>
              <mt-button type="primary" @click="qk">primary</mt-button>
              <mt-button type="danger" @click="tk">danger</mt-button>*/


        <footer>
            <ul>
                <li><router-link to="/home/index">首页</router-link></li>
                <li><router-link to="/home/video">视频</router-link></li>
                <li><router-link to="/home/sub">订阅</router-link></li>
                <li><router-link to="/user">个人</router-link></li>
            </ul>
        </footer>
    </div>
</template>
 <script>
import { Toast } from 'mint-ui';

import "@/style/reset.css"
export default{
    data(){
        return{
            k:""
        }
    },
    methods:{ 
        tk(){
            this.k= Toast({
                iconClass:"fa fa-spinner fa-pulse",
               /* message: '提示',*/
                position: 'middle',
                duration: -1
            })
        },
        qk(){
            this.k .close()
        }
    } 
    }
    </script>
<style lang="scss" scoped>
    $sc:25;
    header{
        wdith:100%;
        positions:fixed;
        top:0;
        left:0;
        height:274/$sc+rem;
        background:pink;
        text-align:center;
        p{line-height:274/$sc+rem;text-align:center}
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
}
</style> 