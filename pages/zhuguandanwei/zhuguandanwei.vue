<template>
	
</template>
<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			toXiaoxi(){
					uni.navigateTo({
						url:'./message/message'
					})
			},
			toShuji(){
				uni.navigateTo({
					url:'./perSecretary/perSecretary'
				})
			},
			toActive(){
				uni.navigateTo({
					url:'./perActiveApply/perActiveApply'
				})
			},
			toLogin(){
				uni.redirectTo({
					url:'../login/login'
				})
			}
		}
	}
</script>

<style>
.title-bar{
	width: 750rpx;
	height:476rpx;
	background:url(../../static/person.png) no-repeat;
	background-size: 750rpx 660rpx;
}
.fanhui{
	width: 15rpx;
	height: 20rpx;
	margin-left: 40rpx;
}

.person_title{
	color: #fff;
	text-align: center;
	font-size: 30rpx;
	font-weight: 700;
}
.person_photo{
	width: 120rpx;
	height: 120rpx;
	border-radius: 50%;
	background: #fff;
	position: absolute;
	top: 149rpx;
	left: 312rpx;
}
.person_shehui{
	color: #fff;
	position: absolute;
	top: 309rpx;
	left: 291rpx;
}
.person_apply{
	width: 692rpx;
	margin: -60rpx auto;
	background: #fff;
	border-radius: 20rpx;
	box-shadow:0px 8rpx 42rpx 12rpx rgba(153,153,153,0.1);
	padding: 20rpx 0;
}
.person_list{
	/* 	display: flex; */
		
		padding: 20rpx  40rpx ;
		/* position: relative; */
		overflow: hidden;
		line-height: 50rpx;
}
.person_list text{
	padding-left:30rpx;
	font-size: 35rpx;
	line-height: 50rpx;
}
.phto{
	width: 65rpx;
	height: 65rpx;
	vertical-align: middle;
}
.qianjin{
	width: 50rpx;
	height: 50rpx;
	float: right;
}
/* .rback{
	float: right;
} */
/* .person_list .phto{
	width: 65rpx;
	height: 65rpx;
	position: absolute;
	left: 10rpx;
	top: 30rpx;
}
.person_list .qianjin{
	width: 50rpx;
	height: 50rpx;
	position: absolute;
	top: 35rpx;
	right: 10rpx;
} */
</style>
