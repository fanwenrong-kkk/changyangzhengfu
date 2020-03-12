<template>
	<view>
		
		<view class="content manage">
			<view class="cre-lei">
				<view class="items cr-times" >
					<text class="zstate"> 初筛通过数量 </text>
					<view>
						<image src="../../../static/xialajiantoublack.png" class="xialajiantoublack"></image>
					</view>
				</view>
				
			</view>
			<view class="cmon" v-for="(item, index) in comData" :key="index" >
				<view class="catering">
					<text class="caorg">餐饮管理组织</text>
					<text class="group">初筛通过项目数：12</text>
				</view>
				<view class="team" >
					<!-- <text class="sheteam">政府项目</text> -->
					<image src="../../../static/teams.png" mode="" class="peop"><a class="city">社会团体</a></image>
					
					<text class="dengtime">登记日期：2019-10-11</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	
	export default {
		
		data() {
			return {
				
				// 选择的值，传给后台的
				
				// dateValue: [],
				// isShow: false,
				comData: [1,2,3,4,5]
			}
		}
	// 	onLoad() {
	// 		this.getPerject()
	// 		this.getList()
	// 	},
	// 	onShow() {
	// 		console.log('pm');
	// 	},
		
	// 	methods: {
			
	// 		getPerject() {
	// 			this.$get('v1/project/get-info')
	// 				.then(res => {
	// 					if (res.code == 200) {
						
	// 					}
	// 				})
	// 				.catch()
	// 		},
	// 		toDetails(id = 0) {
	// 			uni.navigateTo({
	// 				url: 'pmDetails/pmDetails?id=' + id
	// 			})
	// 		}

	// }			
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
		border-bottom: 1rpx solid #EAEAEA;
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
		color: #8BC34A;
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
		width:28rpx;
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
</style>
