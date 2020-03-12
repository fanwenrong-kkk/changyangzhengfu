<template>
	<view class="mess_box">
		<view class="content message" v-for="(item, index) in messData" :key="index" @click="toXiang(item.id)">
			<view class="catering">
				<image src="../../../static/mess_xiao.png" mode="" class="mess_xiao"></image>
				<text class="caorg">{{item.content}}</text>
				<text class="group">来源:{{item.society_name}}</text>
			</view>
			<view class="team">
				<text class="dengtime">{{item.created_at}}</text>
			</view>
		</view><!--餐饮管理组织-->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// "comData":[1,2,3,4],
				messData:[]
			}
		},
		onLoad(res){
			this.getmessList()
		},
		methods: {
			toXiang(id){
					uni.navigateTo({
						url:'../details/details?id='+id
					})
			},
			getmessList(){
					let org_id=779
					let url='v1/news/newslist?org_id='+org_id
					this.$get(url)
					.then(res=>{
						if(res.code==200){
							console.log(888)
							this.messData=res.data
							console.log(999)
						}else{
							console.log(101010)
							
					}
				})
			}
		}
	}
</script>

<style>
	.message{
		position: relative;
		padding: 30rpx 30rpx;
	}
	.mess_xiao{
		width: 39rpx;
		height: 32rpx;
		position: absolute;
		top: 40rpx;
	}
	.caorg{
		font-size: 30rpx;
		color: #333;
		width: 450rpx;
		display: inline-block;
		padding-left: 45rpx;
		line-height: 20px;
		margin-bottom: 30rpx;
	}
	.group{
		font-size: 24rpx;
		color: #666666;
		float: right;
		width: 150rpx;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.sheteam{
		font-size: 24rpx;
		
	}
	.dengtime{
		float: right;
		color: #999;
		font-size: 24rpx;
		/* font-weight: 600; */
	}
	.team,.catering{
		overflow: hidden;
		line-height: 30rpx;
	}
	.peop{
		width: 16rpx;
		height: 24rpx;
		margin: 0 10rpx 0 50rpx;
		vertical-align: middle;
	}
</style>
