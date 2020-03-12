<template>
	<view>
		<view class="content">
			<view class="acDiv Ytime">
				<text class="proName">状态</text>
				<text class=" joinNot join" v-if="join.type==1"><image src="../../../static/ai.png" class="notjoin"></image>无法参加</text>
				<!-- <text class=" joinshow join" v-if="tab==1">{{join}}</text> -->
				<text class=" join" v-if="join.type==2">已参加</text>
			</view>
			<view class="acDiv Ytime">
				<text class="proName">检测方</text>
				<text class="ProCont"></text>
			</view>
			<view class="acDiv Ytime">
				<text class="proName">预约时间</text>
				<text class="ProCont">{{join.end_time}}</text>
			</view>
			<view class="acDiv Ytime">
				<text class="proName">项目名称</text>
				<text class="ProCont">{{join.org_id}}</text>
			</view>
			<view class="acDiv Ytime">
				<text class="proName">机构名称</text>
				<text class="ProCont">{{join.active_name}}</text>
			</view>
			<view class="acDiv Ytime" >
				<text class="proName">活动名称</text>
				<text class="ProCont">{{join.pro_id}}</text>
			</view>
			<view class="acDiv Ytime" >
				<text class="proName">活动地点</text>
				<text class="ProCont">{{join.place}}</text>
			</view>
			<view class="acDiv Ytime" >
				<text class="proName">活动内容</text>
				<text class="ProCont">{{join.detail}}</text>
			</view>
			<view class="acDiv Ytime" >
				<text class="proName">预计参与人数</text>
				<text class="ProCont">{{join.count}}</text>
			</view>
			<view class="acDiv Ytime" >
				<text class="proName">项目联系人</text>
				<text class="ProCont">{{join.contacts}}</text>
			</view>
			<view class="acDiv Ytime" >
				<text class="proName">联系方式</text>
				<text class="ProCont">{{join.phone}}</text>
			</view>
		</view>
		<view type="primary" class="resubmit" @click="toJoin()" v-if="join.type==1">重新提交</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tab:0,
				join:[]
			}
		},
		onLoad() {
			this.getJoin()
		},
		methods: {
			toJoin(){
				uni.navigateTo({
					url:'../pmActivityMonitoring/pmActivityMonitoring'
				})
			},
			getJoin() {
				this.$get('v1/actives/activesprolist?id=1&page=1')
				.then(res=>{
					this.join=res.data
					console.log(res)
				})
			}
		}
	}
</script>

<style>
.join{
	color:#EC6941;
	float: right;
}
.joinshow{
	color:#19BE6B;
}
.joinNot{
	color:#C30D24;
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
.notjoin{
	width: 30rpx;
	height: 29rpx;
	margin: 0 10rpx;
	
}
.resubmit{
	background-color: #C30D24;
	border-radius: 50rpx;
	margin:40rpx 60rpx;
	height: 80rpx;
	line-height: 80rpx;
	color: #fff;
	font-size: 30rpx;
	text-align: center;
}
</style>
