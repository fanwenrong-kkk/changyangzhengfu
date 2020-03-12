<template>
	<view>
		<view class="content contop">
			<view class="zuinquire">
				<picker mode="date" :value="date" :start="startDate" :end="endDate"  :range="type" @change="bindDateChange">
					<view class="zstate">时间</view>
				</picker>
				<image src="../../static/xialajiantoublack.png" class="xialajiantoublack"></image>
			</view>
			<view class="types">
				<text>类型</text>
				<image src="../../../static/xialajiantoublack.png" class="xialajiantoublack"></image>
			</view>
		</view>
		<view class="content">
			<view class="active" v-for="item in informData" :key="item.id" @click="toApplied()">
				<view class="actitle">
					<view class="huntitle">{{item.active_name}}</view>
					<image src="../../../static/yellowxing.png" class="yellowxing"></image>
					<view class="actime">
						截止时间：{{item.end_time}}
					</view>
				</view>
				<view class="smalltitle">
					<image src="../../../static/sanren.png" class="sanren"></image>
					<text class="zuzhi">组织机构：</text>
					<view class="tissue">{{item.type}}</view>
					<view class="check">{{item.status}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// informData:[1,2,3,4],
				informData:[]
			}
		},
		onLoad() {
			this.getMonitor()
		},
		methods: {
			toApplied(){
					uni.navigateTo({
						url:'../perAppliedXiangQing/perAppliedXiangQing'
					})
			},
			getMonitor(){
				this.$get('v1/actives/monitor-list?org_id=1077')
				.then(res=>{
					this.informData=res.data
				})
			}
		}
	}
</script>

<style>
.contop{
	padding: 0;
	width: 690rpx;
	display: flex;
}
.zuinquire{
	text-align: center;
	width: 50%;
	display: flex;
	margin-left: 100rpx;
}
.zstate{
	font-weight: 600;
	font-size:32rpx 
}
.xialajiantou,.xialajiantoublack{
	width: 22rpx;
	height: 20rpx;
	vertical-align: middle;
	margin: 0 20rpx;
	margin-top: -2rpx;
	/* float: right; */
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
