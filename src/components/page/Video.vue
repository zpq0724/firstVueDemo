<template>
	<div>
		<!-- 视频列表 -->
		<ul>
			<li class="clear" v-for="item in video">
				<h3>{{item.title}}</h3>
				<h4>杨幂8日出席电影《逆时营救》映后座谈会，17分钟内几乎是有问必答。
				她出道以来演过不少穿越时空的角色，被问到现实生活中如果有机会回到过去，
				 立刻回答“肯定不回去，反正</h4>
				 <video :src="item.video_url" controls="controls" :poster="item.thumb2" preload="none"></video>
				 <p>
					 <span>新浪娱乐</span>
					 <span><i class="fa fa-commenting"></i><em>13929</em></span>
					 <span class="fa fa-share"></span>
				 </p>
			</li>
		</ul>
	</div>
</template>  
<script>
	import axios from 'axios';
	export default {
		data() {
			return {
				video:[]
			};
		},
		created() {
				axios.get('/wz/api/v3/get?_=1543634432281').then(res => {
						 console.log(res);
						// console.log(res.data.data instanceof Array)
						this.video = res.data.data
						})
				
				}
		
	}
</script>
<style lang="scss" scoped>
// @import "../../style/reset.css";
@import "../../style/var.scss";
ul .clear{
	width: 100%;
	height: 382/$sc+rem;
	background: #f0f0f0;
	border-bottom: 1px solid #c0c0c0;
}
ul li h3{
	    display: block;
		background: #f0f0f0;	
		color: #646464;
		 display: block;
		 padding-top: 20px;
		 padding-left: 10px;
		font-size: 16px;			
		line-height: 16px;
		padding-bottom: 12px;
}
ul li h4{
	width: 351/#sc+rem;
	padding-left: 10px;
	
	height: 14/$sc+rem;
	font-size: 12px;
	overflow: hidden;
	line-height: 14px;
	    overflow: hidden;
       white-space: nowrap;
    // -o-text-overflow: ellipsis;
      text-overflow: ellipsis;
	  color: #646464;

}
ul li video{
	margin-top: 11px;
	width: 100%;
	height: 281/$sc+rem;
}
ul li p{
	height: 25/$sc+rem;
	width: 100%;
	background: #f0f0f0;
	position: absolute;
}
ul li p span:nth-child(1){
	font-size: 12px;
	position: relative;
	left: 10px;
	top:-10px;
}
ul li p span:nth-child(2) i{
	font-size: 20px;
	position: relative;
	left: 40px;
	top:-6px
}
ul li p span:nth-child(2) em{
	font-size: 10px;
	position: relative;
	left: 50px;
	top:-8px
}
ul li p span:nth-child(3){
	position: relative;
	left: 200px;
	top: -2px;
}
</style>
