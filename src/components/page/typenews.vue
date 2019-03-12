<template>
    <div ref="list" class="list" v-scroll="vis"   v-gd  dis="300">  <!--v-scroll 自定义指令  v-是固定的，-->
        	<ul> 	 
				<li v-for="(item,index) in newList">
					<div class="textfloatLeft">
						<h4>{{item.mintro}}</h4>
						<p><span>{{item.media}}</span>&nbsp;{{item.channelid}}</p>
					</div>
						<div class="textright">
							<img :src="item.thumb" alt="">
						</div>
				</li>
			</ul>
			<button class="btn" v-show="vis.flag" v-top>回到顶部</button>
    </div>
</template> 
<script>
import axios from "axios"
    export default{
        data(){
            return{ 
                	newList:[],
                    type:"",
					vis:{
						flag:false
					}
            }
        },
    watch:{ //监听type的变化
       $route:{
           handler(n){
                this.type = n.params.type;
                this.getData();
           },
           immediate:true
       }
   	  },
		mounted(){
			this.$refs.list.addEventListener("scroll",()=>{
				//console.log(111)
			})
		 },
        methods:{
            getData(){
        this.$jsonp(`http://cre.mix.sina.com.cn/api/v3/get?cateid=1&cre=tianyi&mod=${this.type}&merge=3&statics=1&length=20&up=15&down=0&fields=media&_=1543839651159`,
        {callbackName:"callback"}).then((res)=>{ //设置回调函数
			console.log(res)
			this.newList = res.data.filter((item,index)=>{
				return index<15 && item !==""
			})
        })
            }
        }
    }  
</script>
<style lang="scss" scoped>
$sc:25;
    #newlist{
    padding: 0.34rem 0.48rem 0.16rem;
    width: 100%;
    border-bottom: 1px solid #dbdbdb;
    background: #f0f0f0;
    }

/*要触发滚动事件，必须给绑定触发滚动事件的元素设置高度*/
	.list{
		position:fixed;
		top:75/$sc+rem;
		left:0;
		right:0;
		bottom:50/$sc+rem;
		overflow-y:scroll;
	}
ul li{
	width: 100%;
	height: 83/$sc+rem;
	padding: 0.24rem 0 0.16rem;
  	border-bottom: 1px solid #dbdbdb;
  	background: #f0f0f0;
}
ul li .textfloatLeft{
		height:67/$sc+rem ;
		width: 217/$sc+rem;
		float: left;
}
ul li .textfloatLeft h4{
    font-size:0.56rem;
    color:#000;
	width: 217/$sc+rem;
	height: 38/$sc+rem;	
}
ul li .textfloatLeft p{
	font-size: 0.34rem;
	color: #646464;
	padding-left: 2px;
    margin-top:-13px;
}
ul li .textright{
	display: block;
	width: 124/$sc+rem;
	height: 68/$sc+rem;
	float: right;
}
.textright img{
	width: 110/$sc+rem;
	height: 68/$sc+rem;
	float: left;
	margin-top:10px;
    
}
.textright span {
	width: 28/$sc+rem;
	height: 68/$sc+rem;
	float: right;
	font-size: 14px;
	margin-top: -82px;
    border-radious:50%;
}
.swiper-wrapper img{
	width: 100%;
	height: 135/$sc+rem;
}
.btn{
	position:fixed;
	bottom:60/$sc+rem;
	right:0;
	wiidth:50px;
	height:50px;
	border-radious:50%;
}
</style>
