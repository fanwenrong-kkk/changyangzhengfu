<template>
	<view class="body">
		<view class="conDiv"  v-for="(item, index) in informData" :key="index" @click="toExecution()">
			<view class="acName">
				<text class="acTion">活动名称</text>
				<text class="audit">待审核</text>
			</view>
			<view class="acName">
				<image src="../../../static/jia.png" class="jia"></image>
				<text class="monitoring">检测方：</text>
				<text class="monitoring">满意度方</text>
				<text class="acTime">2019-10-10</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				informData:[1,2,3]
			}
		},
		methods: {
			toExecution(){
				uni.navigateTo({
					url:'../pmProjectExecution/pmProjectExecution'
				})
			}
		}
	}
</script>

<style>
	page{
		background-color: #F6F6F6;
	}
uni-tabbar {
    display: block;
}
.body{
	/* background-color: #EAEAEA; */
}
.conDiv{
	width: 650rpx;
	margin: 20rpx auto 0;
	border-radius: 15rpx;
	background-color: #fff;
	padding: 20rpx;
}
.acName{
	line-height: 50rpx;
}
.acTion{
	font-size: 28rpx;
	
}
.audit{
	color: #8BC34A;
	font-size: 26rpx;
	float: right;
}
.acTime{
	float: right;
}
.jia{
	width: 26rpx;
	height: 30rpx;
	vertical-align: middle;
	margin: 0 10rpx 0 0;
}
.monitoring{
	font-size: 24rpx
}
</style>
