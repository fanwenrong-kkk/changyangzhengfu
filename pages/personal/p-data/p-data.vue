<template>
	<view>
		<view class="content">
			<view class="cre-lei">
				<view class="zuinquire">
					<picker mode="selector" :range="type" range-key="name" @change="typeChange" >
						<view class="zstate">选择时间段</view>
					</picker>
					<view>
						<image src="../../../static/xialajiantoublack.png" class="xialajiantoublack"></image>
					</view>
				</view>
				<view class="zuinquire">
					<picker mode="selector" :range="type" range-key="name" @change="typeChange" >
						<view class="zstate">项目环节</view>
					</picker>
					<view>
						<image src="../../../static/xialajiantoublack.png" class="xialajiantoublack"></image>
					</view>
				</view>
				<view class="zuinquire">
					<picker mode="selector" :range="year"  @change="yearChange" >
						<view class="zstate">项目</view>
					</picker>
					<view>
						<image src="../../../static/xialajiantoublack.png" class="xialajiantoublack"></image>
					</view>
				</view><!-- zuinquire -->
			</view><!-- cre-lei -->
			
			<view class="cre-lei">
				<view class="zuinquire">
					<picker mode="selector" :range="type" range-key="name" @change="typeChange" >
						<view class="zstate">本年</view>
					</picker>
					<view>
						<image src="../../../static/xialajiantoublack.png" class="xialajiantoublack"></image>
					</view>
				</view>
				<view class="zuinquire">
					<picker mode="selector" :range="type" range-key="name" @change="typeChange" >
						<view class="zstate">全部</view>
					</picker>
					<view>
						<image src="../../../static/xialajiantoublack.png" class="xialajiantoublack"></image>
					</view>
				</view>
				<view class="zuinquire">
					<picker mode="selector" :range="year"  @change="yearChange" >
						<view class="zstate">项目</view>
					</picker>
					<view>
						<image src="../../../static/xialajiantoublack.png" class="xialajiantoublack"></image>
					</view>
				</view><!-- zuinquire -->
			</view><!-- cre-lei -->
			
			<view class="list-bot">
				<text>初筛通过</text>
				<text class="number">11</text>
			</view><!-- list-bot -->
			<view class="list-bot">
				<text>初筛未通过</text>
				<text class="number">11</text>
			</view><!-- list-bot -->
			<view class="list-bot">
				<text>立项通过</text>
				<text class="number">11</text>
			</view><!-- list-bot -->
			<view class="list-bot">
				<text>立项未通过</text>
				<text class="number">11</text>
			</view><!-- list-bot -->
			<view class="list-bot">
				<text>月报提交</text>
				<text class="number">11</text>
			</view><!-- list-bot -->
			<view class="list-bot">
				<text>月报未提交</text>
				<text class="number">11</text>
			</view><!-- list-bot -->
			<view class="list-bot">
				<text>新闻稿提交</text>
				<text class="number">11</text>
			</view><!-- list-bot -->
			<view class="list-bot">
				<text>新闻稿未提交</text>
				<text class="number">11</text>
			</view><!-- list-bot -->
			<view class="list-bot">
				<text>监测活动提交</text>
				<text class="number">11</text>
			</view><!-- list-bot -->
			<view class="list-bot">
				<text>监测活动未提交</text>
				<text class="number">11</text>
			</view><!-- list-bot -->
			<view class="list-bot">
				<text>中期评审完成</text>
				<text class="number">11</text>
			</view><!-- list-bot -->
			<view class="list-bot">
				<text>中期评审未完成</text>
				<text class="number">11</text>
			</view><!-- list-bot -->
			<view class="list-bot">
				<text>结项评审完成</text>
				<text class="number">11</text>
			</view><!-- list-bot -->
			<view class="list-bot last">
				<text>结项评审未完成</text>
				<text class="number">11</text>
			</view><!-- list-bot -->
		</view><!-- content -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.cre-lei {
		display: flex;
		justify-content :space-between;
		padding: 20rpx 10rpx 20rpx 25rpx;
		border-bottom: 1rpx solid #EAEAEA;
	}

.zuinquire {
	text-align: center;
	display: flex;
	position: relative;
}

.zstate {
	font-weight: 600;
	font-size: 26rpx
}
.xialajiantoublack {
	width: 20rpx;
	height: 15rpx;
	margin: 0 15rpx 5rpx;
}
.list-bot{
	padding: 20rpx 0 ;
	border-bottom: 1rpx solid #EAEAEA;
}
.number{
	float: right;
}
.last{
	border: 0;
}
</style>
