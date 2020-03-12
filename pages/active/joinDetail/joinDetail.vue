<template>
	<view>
		<view class="content" v-for="(item,index) in data " :key="index">
			<view>
				<text>餐饮管理组织</text>
				<image src="../../../static/act_activity.png" class="act_activity"></image>
				<text class="bg-color">已参加</text>
			</view>
			<view >
				<image src="../../../static/men.png" class="men"></image>
				<text class="name">张三</text>
				<text class="name">13210343543</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data:[1,2,3]
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.name{
	color: #999;
	margin-left: 20rpx;
}
.men{
	width: 31rpx;
	height: 31rpx;
	vertical-align:middle ;
}
.act_activity{
	width:30rpx;
	height:30rpx;
	vertical-align: middle;
	margin-left: 20rpx;
}
.bg-color{
	margin-top: 10rpx;
	float: right;
	font-size: 22rpx;
	border-radius: 30rpx;
	background-color: #8BC34A;
	padding: 0rpx 20rpx;
	color: #fff;
}
</style>
