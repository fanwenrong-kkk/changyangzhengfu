<template>
	<view>
		<view class="content contop">
			<view class="time">
				<text>时间</text>
				<image src="../../../static/xialajiantou.png" class="xialajiantou"></image>
			</view>
			<view class="types">
				<text>类型</text>
				<image src="../../../static/xialajiantoublack.png" class="xialajiantoublack"></image>
			</view>
		</view>
		<view class="content">
			<view class="active" v-for="(item, index) in informData" :key="index" @click="toApplied()">
				<view class="actitle">
					<view class="huntitle">婚博会活动八个字收到的</view>
					<image src="../../../static/yellowxing.png" class="yellowxing"></image>
					<view class="actime">
						截止时间：2019-11-30
					</view>
				</view>
				<view class="smalltitle">
					<image src="../../../static/sanren.png" class="sanren"></image>
					<text class="zuzhi">组织机构：</text>
					<view class="tissue">六个字后省略大的事多</view>
					<view class="check">审核中</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				informData:[1,2,3,4]
			}
		},
		methods: {
			toApplied(){
					uni.navigateTo({
						url:'../perAppliedXiangQing/perAppliedXiangQing'
					})
			},
		}
	}
</script>

<style>
.contop{
	padding: 0;
	width: 690rpx;
	display: flex;
}
.xialajiantou,.xialajiantoublack{
	width: 22rpx;
	height: 20rpx;
	vertical-align: middle;
	margin: 0 20rpx;
	margin-top: -2rpx;
}
.time{
	width: 50%;
	background-color: #C30D24;
	line-height: 80rpx;
	color: #fff;
	font-size: 30rpx;
	text-align: center;
	border-top-left-radius: 20rpx;
	border-bottom-left-radius: 20rpx;
}
.types{
	width: 50%;
	text-align: center;
	line-height: 80rpx;
	font-size: 30rpx;
}
.actitle,.smalltitle{
	display: flex;
}
.huntitle{
	width: 250rpx;
	font-size: 28rpx;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
.yellowxing{
	width: 30rpx;
	height: 30rpx;
	margin-top: 12rpx;
}
.actime{
	color: #999;
	font-size: 22rpx;
	line-height: 55rpx;
	margin-left: 120rpx;
}
.sanren{
	width: 30rpx;
	height: 20rpx;
	margin: 13rpx 10rpx 0 0;
}
.tissue{
	width: 180rpx;
	font-size: 26rpx;
	color: #666;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
.zuzhi{
	color: #666;
	font-size: 26rpx
}
.check{
	color: #FFB72F;
	font-size: 28rpx;
	margin-left: 190rpx;
}
.active{
	padding: 20rpx 0;
	border-bottom: 4rpx solid #EAEAEA;
}.


.reject{
	color: #C30D24;
}
.stay{
	color: #486A00;
}
</style>
