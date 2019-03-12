<template>
   <div>
    <header><router-link to="/user"><i class="fa fa-angle-left left"></i><a>返回</a></router-link>
        <a class="reg"><router-link to="register">注册</router-link></a>
    </header>
    <section class="content">
        <div class="pic">
            <img src="../../../static/images/logo.png">
        </div>
        <ul>   
                <li><input type="text" v-model="nphone" placeholder="手机/邮箱"> </li>
                <li><input type="password" v-model="npw" placeholder="密码"></li>   
        </ul>
    </section>
    <footer>
        <ul>
            <li>
                <input type="submit" @click="login" value="登录">
            </li>
        </ul>
        <div class="loginmod">
            <p>使用第三方账号登录</p>
            <p class="Pic">
                <img class="one" src="../../../static/images/qq.png">
                <img src="../../../static/images/weixin.png">
                <img src="../../../static/images/weibo.png">
            </p>
        </div>
    </footer>
   </div>
</template>
    <script>
        import "@/style/reset.css"
        export default{
            data(){
                return{
                    nphone:"",
                    npw:"",
                   check:[]
                }
            },
            methods:{
        		login(){  
                    if(this.nphone==="") alert("请输入信息")
				this.$http.get("http://localhost:3000/users").then((res)=>{
                   // console.log(this.check)
					this.check = res.data.filter((item)=>{
						return item.phone === this.nphone
					})
                    console.log(this.check)
                    if(this.check==""){ //验证在db.json中不存在的手机号和密码
                        alert("用户不存在，请注册")  
						this.nphone="";
						this.npw=""
                    }else if(this.check[0].pw == this.npw){
                        alert("登录成功")
                        this.$router.push({"name":"home"})
                    }else{
                        alert("密码错误")
                        this.nphone="";
                        this.npw="";
                    }
				})	
			}
        }
        };
    </script>
<style lang="scss" scoped >
/*@import "../../style/reset.css";  引入方式*/

$sc:25;
header{
   width:100%;
    height:43.98/$sc+rem;
    background:#fff;
    position:fixed;
    top:0;
    left:0;
    .left{
        display:block;
        font-size:28/$sc+rem;
        float:left;
        margin-top:8/$sc+rem;
    }
    a{line-height:43.98/$sc+rem;margin-left:5/$sc+rem;font-size:15/$sc+rem;color:#000;}
    .reg{float:right;}
}

.content{
    position:absolute;
    top:43.98/$sc+rem;
    left:0;
    bottom:264/$sc+rem;
    right:0;
    background:#f4f4f4;
    .pic{ margin-top:100.98/$sc+rem;
    }
    ul li{
        width:100%;
        height:49.98/$sc+rem;
        line-height:49.98/$sc+rem;
        text-align:left;
        border-bottom:1px solid #ccc;
        border-top:1px solid #ccc;
        background:#fff;
    }
    ul li input {border:none;}
   
}
.pic img{width:147.48/$sc+rem;
    height:147.48/$sc+rem;
    margin-left:110px;
    margin-top:-65px;
    margin-bottom:30px;
   }

footer{
    ul li{width:351/$sc+rem;height:37.5/$sc+rem;background:#fff;}
    ul li input{border:none;background:#fff;}
    width:100%;
    height:264/$sc+rem;
    background:#f4f4f4;
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
.loginmod{
    position:absolute;
    top:122px;
    left:130px;
    display:flex;
    width:148/$sc+rem;
    height:132/$sc+rem;
    flex-direction:column;

}
.loginmod p{font-size:14px;}
.loginmod .Pic{display:flex;margin-top:10px;}
.loginmod .Pic img{
    width:30.48/$sc+rem;
    height:30.48/$sc+rem;
    margin-left:10px;
}
.loginmod .Pic .one{margin-left:0;}


</style>