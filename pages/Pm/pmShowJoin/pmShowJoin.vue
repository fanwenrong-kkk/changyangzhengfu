<template>
	<view>
		<view class="content">
			<view class="acDiv Ytime">
				<text class="proName">状态</text>
				<text class=" join">确认参加</text>
			</view>
			<view class="acDiv Ytime">
				<text class="proName">检测方</text>
				<text class="ProCont">满意度</text>
			</view>
			<view class="acDiv Ytime">
				<text class="proName">预约时间</text>
				<text class="ProCont">2019-11-11</text>
			</view>
			<view class="acDiv Ytime">
				<text class="proName">项目名称</text>
				<text class="ProCont">示例文字</text>
			</view>
			<view class="acDiv Ytime">
				<text class="proName">机构名称</text>
				<text class="ProCont">婚礼机构</text>
			</view>
			<view class="acDiv Ytime">
				<text class="proName">活动名称</text>
				<text class="ProCont">示例文字</text>
			</view>
			<view class="acDiv Ytime" >
				<text class="proName">活动地点</text>
				<text class="ProCont">示例文字</text>
			</view>
			<view class="acDiv Ytime" >
				<text class="proName">活动内容</text>
				<text class="ProCont">示例文字</text>
			</view>
			<view class="acDiv Ytime" >
				<text class="proName">预计参与人数</text>
				<text class="ProCont">示例文字</text>
			</view>
			<view class="acDiv Ytime" >
				<text class="proName">项目联系人</text>
				<text class="ProCont">示例文字</text>
			</view>
			<view class="acDiv Ytime" >
				<text class="proName">联系方式</text>
				<text class="ProCont">示例文字</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				informData:[1,2,3,4,5,6]
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.join{
	color:#19BE6B;
	float: right;
}
.acDiv{
	padding: 20rpx 0;
	margin: 0 20rpx;
	overflow: hidden;
	font-weight: 400;
}
.proName{
	font-size: 28rpx;
}
.ProCont{
	font-size: 26rpx;
	float: right;
	width: 415rpx;
	text-align: right;
	line-height: 40rpx;
	color: #666;
}

</style>
