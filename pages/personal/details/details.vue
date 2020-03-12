<template>
	<view class="details_box" v-if="daDetail">
		<view class="details_title">{{daDetail.title}}</view>
		<view class="details_from">
			<text class="details_lf">来源：{{daDetail.society_name}}</text>
			<text class="details_rt">{{daDetail.created_at}}</text>
		</view>
		<view class="details_con">
			{{daDetail.content}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				daDetail:null
			}
		},
		onLoad(options){
			console.log(options.id)
			this.id=options.id
			this.getDetail()
		},
		methods: {
			getDetail(){
				let id=this.id
				let data={
					id:id
				}
				this.$get('v1/news/newsdetail',data)
					.then(res=>{
						if(res.code==200){
							console.log(888)
							this.daDetail=res.data
						}else{
							console.log(101010)
					}
				})
			}
		}
	}
</script>

<style>
.details_box{
	width: 650rpx;
	margin: 20rpx auto;
	padding: 25rpx 20rpx;
	text-align: center;
}
.details_title{
	font-size: 40rpx;
	color: #333333;
	font-weight: 700;
}
.details_from{
	font-size: 22rpx;
	color: #999;
	width:381rpx;
	margin: 0 auto;
	overflow: hidden;
}
.details_lf{
	float: left;
}
.details_rt{
	float: right;
}
.details_con{
	font-size: 24rpx;
	width: 580rpx;
	margin: 20rpx auto;
}
</style>
