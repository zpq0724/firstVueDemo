<template>
	<div>
	<header>
	 		<div class="logo">
			     <i class="fa fa-volume-up play"></i>    
				<img src="../../../static/images/top-logo.png">
				<router-link to="/search"><i class="fa fa-search-minus right"></i></router-link>
        	</div>
			 <!--导航-->
			<div id="nav">
				<div  id="leftnav" class="leftnav">
					<div class="swiper-container2">
							<div class="swiper-wrapper w">
								<div class="swiper-slide" v-for="(item,index) in titles"
										:class="{'active':curIndex===index}">
										{{item.text}}
								</div>
							</div>
					</div>	
				</div>
				<div><i class="fa fa-navicon navicon"></i></div>
			</div>
	</header>
		<router-view/>	
	</div>
</template>
<script>
import axios from "axios";
import "../../../node_modules/swiper/dist/css/swiper.css"
import Swiper from "swiper"
export default{
       data(){
      	return {1
		    curIndex:0,//当前点击项
		    titles:[{
               text:"头条",
               type:''
          },
		   {
			   text:"娱乐",
			   type:"pcent"
		   },
		   {
				text:"科技",
				type:"pctech"
		   },
		   {
			   text:"体育",
			   type:""
		   },
		   {
			   text:"财经",
			   type:""
		   },
		   {
			   text:"军事",
			   type:""
		   },
		   {
			   text:"音乐",
			   type:""
		   },
		   {
				text:"视频",
			   type:""
		   },
		   {
				text:"奇趣",
			   type:""
		   },
		   {
				text:"奇趣",
			   type:""
		   } ,
		   {
				text:"奇趣",
			   type:""
		   } ,
		   {
				text:"奇趣",
			   type:""
		   },
		    {
			   text:"军事",
			   type:""
		   },
		   {
			   text:"音乐",
			   type:""
		   },
		   {
				text:"视频",
			   type:""
		   }
		   ]
      	}
      },

	mounted(){
		var vm = this;
		new Swiper(".swiper-container2",{ //实例化
			freeMode:true,
			slidesPerView:"auto",//官网查
			on:{
				click(){
				vm.curIndex = this.clickedIndex;
               //单击 当前导航条到中心位置
                this.setTransition(200);
                 var el = this.slides[this.clickedIndex];  //当前单击元素
				 	//console.log(el)
                 var elpos = el.offsetLeft + el.clientWidth/2; //当前单击 元素中心位置
				 	//console.log(elpos)
                  var swiperContainerWidth = this.wrapperEl.clientWidth; //容器的宽度
				  	console.log(swiperContainerWidth)
                  var maxDis = this.maxTranslate();//最大的滚动距离
                  var maxPos = -maxDis + swiperContainerWidth/2; //最大的中心位置
                  if(elpos < swiperContainerWidth/2){
                      this.setTranslate(0)
                  }
                  else if(elpos>maxPos){
                     this.setTranslate(maxDis)
                  }
                  else{
                    this.setTranslate(swiperContainerWidth/2-elpos)
                  }	
			//导航栏点击页面
				  if(vm.curIndex == 0){
					vm.$router.push({"name":"List"})
				  }else{
					  //当前数组titles下的type
					vm.$router.push("/home/index/"+vm.titles[vm.curIndex].type)
				  }
				}
			}
		})
	},

}   
</script>
<style lang="scss" scoped>
$sc:25;	
	header{
		flex-direction:column;
	 
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
    
   
	#nav{display:flex;
	width:100%;
	margin-top:15/$sc+rem;
	height:37.5/$sc+rem;
	}
.leftnav{width:90%;overflow:hidden;font-size:14px;color:#000;margin-left: 5px;
  }
.w div{width:48px;text-align:center;}
  .active{
    color:red;
    border-bottom: 2px solid red;
  }
.navicon{margin-left:10px;width: 1.2rem;
    height: 1.2rem;display:inline-block;}
	}




</style>