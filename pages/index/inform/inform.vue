<template>
	<view>
		<!-- <view class="title-bar"></view>
		<view class="title">
			<view class="back"> -->
				 <!-- <image :src="" mode=""></image> -->
			<!-- </view>
			<view class="titext">
				通知公告
			</view>
			<view class="titx"> -->
				<!-- <image :src="" mode=""></image> -->
			<!-- </view>
		</view> -->
		
		<view class="content conheight">
			<view class="notice-list inf-list"  v-for="(item, index) in informData.notice" :key="index"  @click="toDetails(item.id)">
				<text class="headline">{{item.title}}</text>
				<view class="list-small">
					<text class="list-time">{{item.created_at}}</text>
					<text class="read">来源：主管单位</text>
					
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				informData:[]
			}
		},
		onLoad() {
			this.getInformData()
		},
		methods: {
			toDetails(id){
				uni.navigateTo({
					url:'../detail/details?id='+id,
				})
			},
			getInformData(){
				this.$get('v1/index')
				.then(res=>{
					if(res.code==200){
						// console.log(res);
						this.informData = res.data
						// console.log(this.informData);
					}
				})
				.catch()
			},
			// toIds(id){
			// 	uni.navigateTo({
			// 		url:'./detail/details?id='+id,
			// 	})
			// }
			
		}
	}
</script>

<style>
/* .back-color{
	background-color: #F7F7F7;
	width: 100%;
	height:1000rpx;
} */
page{
	background-color: #F7F7F7;
}
.conheight{
}
.notice-list{
	border-top: 2rpx solid #EAEAEA;
	padding: 15rpx 0;
	overflow: hidden;
	white-space: nowrap;
	text-overflow:ellipsis;
}
/* .notice{
	border-bottom: 2rpx solid #EAEAEA;
	padding-bottom: 15rpx;
} */
.headline{
	font-size: 26rpx;
	font-weight: 600;
	
}
.list-time,.read{
	font-size: 22rpx;
	color:#999;
	font-weight: 500;
	margin-right: 20rpx;
}	
.read{
	margin-right: 20rpx;
	float: right;
}
.list-small{
	overflow: hidden;
	line-height: 30rpx;
}
.inf-list{
	border:0;
	border-bottom: 2rpx solid #EAEAEA;
}
</style>
