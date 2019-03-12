<template>
    <div>
    	 <!--轮播图-->
		<div class="swiper-container">
    		<div class="swiper-wrapper">
        		<div class="swiper-slide" v-for="item in news">
					<img :src="item.thumb" />
        		</div> 
     		</div>
    <!-- 如果需要分页器 -->
    			<div class="swiper-pagination"></div>
		</div>
            <!--列表页-->
		<div>
        	<ul v-infinite-scroll="loadMore"
  				infinite-scroll-disabled="loading"
  				infinite-scroll-distance="10"> 	 
				<li v-for="(item,index) in newList">
					<div class="textfloatLeft">
						<h4>{{item.companyFullName}}</h4>
						<p><span>{{item.salary}}</span>&nbsp;{{item.createTime}}</p>
					</div>
						<div class="textright">
							<!--<img :src="item.picInfo[0].url" alt="">-->
							<img :src="'http://www.lgstatic.com/'+item.companyLogo" alt="">
							<span class="fa fa-times-rectangle"  @click="del(index)"></span>
						</div>
				</li>
			</ul>
        </div>
    </div>
</template>
<script>
import axios from "axios"
import "../../../node_modules/swiper/dist/css/swiper.css"
import Swiper from "swiper"
import { Toast } from 'mint-ui';
    export default{
        data(){
            return{ 
				newList:[],
                news:[],//2.拿到数据放在news里
				start:0,
				end:9,
				arr:['A','B01','B02','B03','B04','B10'],
				//page:0,
				page:1,
				loading:false //false 在发请求，true不发
            }
        },
        created(){
         //轮播图数据
                axios.get("wz/api/v3/get?_=1543633808489").then((res)=>{
                this.news = res.data.data.filter((item,index)=>{//1.取数据
                return index<5;
           })
        })
        //列表页的数据
        		//this.$jsonp("http://temp.163.com/special/00804KV1/post1603_api_all.js?_=1543633808488",
        				//{callbackName:"callback"}).then((res)=>{ //设置回调函数
						//console.log(res)
						//this.newList = res.data.filter((item,index)=>{
						//return index<10 && item.pic[0]
					//})
        		//})
			this.getData()
        },

        methods:{
			loadMore(){
			//console.log("loadMore")
			this.getData();
			},
          //点击删除
			del(index){
				this.newList.splice(index,1)
			},
			getData(){
				if(this.page === this.arr.length-1){
				Toast({
				message: '没有更多数据了',
                position: 'bottom',
                duration: 1500
            		});
					return
				}
				this.loading=true; //别的请求不能发
				var t= Toast({
                iconClass:"fa fa-spinner fa-pulse",
               /* message: '提示',*/
                position: 'middle',
                duration: -1
            })
				//网易新闻接口（加载时数据不发生变化）	
						//this.$jsonp(`http://3g.163.com/touch/jsonp/sy/recommend/${this.start}-${this.end}.html`,
								//{miss:'00',
								//refresh:this.arr[this.page]}).then((res)=>{ //设置回调函数
								//console.log(res)
								//this.newList = this.newList.concat(res.list.filter((item)=>{
								//return item.picInfo[0] && !item.addata
							//}))
							//this.loading = false;
							//this.page++;
							//this.start = this.start+10;
							//this.end = this.start +9;
							//t.close();
						//})
			//拉钩接口，(加载时数据发生变化)
				axios.get(`/lg/listmore.json`,{
				params:{
					pageNo:this.page,
					pageSize:15
				}
				}).then((res)=>{ 
					this.newList = this.newList.concat(res.data.content.data.page.result)
				console.log(res)
				this.page++;
				this.loading=false;
					t.close();
				})
			}
		},
        watch:{
   	  	 news(){   //3 监听数据的变化
   	  	 	this.$nextTick(()=>{   //4 等待dom更新完成
   	  	 		  var mySwiper = new Swiper ('.swiper-container', {  //5实例化
						    loop: true, // 循环模式选项
						    // 如果需要分页器
						    pagination: {
						      el: '.swiper-pagination',
						    },
						   autoplay: {
							    delay: 3000,
							    disableOnInteraction: false //false 用户操作后还能自动播放
							    }
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
</style>
