<template>
	<view>
		<view v-for="(item,index) in list" :key="index">
			<view class="setime">{{item.created_at}}</view>
			<view class="content">
				<view class="you">
					<image src="../../../static/se-hover.png" class="se-hover"></image>
					<text class="youtext">{{item.content}}</text>
				</view>
				<view class="you">
					<text class="mytext">{{item.reply}}</text>
					<image src="../../../static/se-hover.png" class="se-hover"></image>
				</view>
			</view>
			<view class="setime">{{item.updated_at}}</view>
			<view class="content">
				<view class="you">
					<image src="../../../static/se-hover.png" class="se-hover"></image>
					<text class="youtext">{{item.content}}</text>
				</view>
				<view class="you">
					
					<text class="mytext">{{item.reply}}</text>
					<image src="../../../static/se-hover.png" class="se-hover"></image>
				</view>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[],
				org_id:'',
				// page:1,
				// num:1
			}
		},
		onload() {
			this.getList()
			this.org_id=uni.setStorageSync('id');
		},
		onShow(){
			this.getList()
		},
		methods: {
			getList(){
				this.$get('v1/user/contact-list?org_id=1077')
				.then(res=>{
					this.list=res.data
					console.log(res)
					
				})
			}
		}
	}
</script>

<style>

.setime{
	color: #fff;
	background-color: #EAEAEA;
	margin: 20rpx auto;
	width: 200rpx;
	line-height: 50rpx;
	border-radius: 15rpx;
	text-align: center;
	font-size: 22rpx
}
.se-hover{
	width: 88rpx;
	height: 88rpx;
	/* margin-top: 40rpx; */
	color: #fff;
}
.youtext{
	width: 400rpx;
	padding: 20rpx 30rpx;
	background-color: #C30D24;
	border-radius: 15rpx;
	float: right;
	margin-right: 90rpx;
	color: #fff;
	font-size: 22rpx;
}
.you{
	overflow: hidden;
	margin: 60rpx 0 20rpx;
	
}
.mytext{
	float: left;
	width: 400rpx;
	padding: 20rpx 30rpx;
	background-color: #EAEAEA;
	border-radius: 15rpx;
	color: #fff;
	font-size: 22rpx;
	margin: 0rpx 20rpx 0 80rpx;
}
</style>
