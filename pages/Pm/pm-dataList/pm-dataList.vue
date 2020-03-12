<template>
	<view>
		
		<view class="content manage">
			<view class="cmon" v-for="(item, index) in comData" :key="item.id" @click="toDetails()">
				<view class="catering">
					<text class="caorg">{{item.name}}</text>
					<text class="group">{{item.status}}</text>
				</view>
				<view class="team">
					<text class="sheteam">{{item.party_id}}</text>
					<image src="../../../static/site.png" mode="" class="peop">{{item.postaladdress}}</image>
					<text class="dengtime">{{item.protime}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	
	export default {
		
		data() {
			return {
				comData: []
			}
		},
		onLoad() {
			this.getList()
		},
		onShow() {
			console.log('pm');
		},
		
		methods: {
			getList() {
				this.$get('v1/project/list')
				.then(res=>{
					this.comData=res.data.data.info
					console.log(res);
				})
			}
	}			
}
</script>

<style>
	.city{
		font-size: 22rpx
	}
	.xialajiantoublack {
		width: 20rpx;
		height: 15rpx;
		position: absolute;
		top:17rpx;
		
	}

	.manage {
		width: 690rpx;
		padding: 20rpx 0;
	}

	.cre-lei {
		display: flex;
		padding: 5rpx 10rpx 20rpx 25rpx;
		/* border-bottom: 1rpx solid #EAEAEA; */
	}

	.items {
		display: flex;
		position: relative;
		margin: 0 10rpx;
	}
	
	.zstate {
		font-weight: 600;
		font-size: 26rpx;
		margin-right: 10rpx;
	}

	.caorg {
		font-size: 26rpx;
		font-weight: 600;
		color: #333;
	}

	.group {
		font-size: 24rpx;
		color: #688DF7;
		float: right;
	}

	.sheteam {
		font-size: 24rpx;
	}

	.dengtime {
		float: right;
		color: #999;
		font-size: 24rpx;
		/* font-weight: 600; */
	}

	.team,
	.catering {
		overflow: hidden;
		line-height: 50rpx;
	}

	.peop {
		width: 16rpx;
		height: 24rpx;
		margin: 0 10rpx 0 25rpx;
		vertical-align: middle;
		
	}
	.dong{
		font-size: 20rpx
	}
	.cmon {
		padding: 20rpx 30rpx;
		border-top: 2rpx solid #EAEAEA;
	}
	.cmon:first-child{
		border:0;
	}
</style>
