<template>
	<view>
		<view class="content">
			<view class="codiv">
				<view class="coBar">状态</view>
				<view class="cnValue"></view>
			</view>
			<view >
				<view class="codiv">
					<view class="coBar">机构名称</view>
					<view class="cnValue"></view>
				</view>
				<view class="codiv">
					<view class="coBar">联系人</view>
					<input class="cnValue"  v-model="contact">
				</view>
				<view class="codiv">
					<view class="coBar">职务</view>
					<input class="cnValue"  v-model="post">
				</view>
				<view class="codiv  women">
					<view class="coBar">联系方式</view>
					<input class="cnValue"  v-model="phone">
				</view>
			</view>
			
			
			<view   >
				<view class="codiv">
					<view class="coBar">机构名称</view>
					<input class="cnValue" v-model="name">
				</view>
				<view class="codiv">
					<view class="coBar">联系人</view>
					<input class="cnValue"  v-model="contact">
				</view>
				<view class="codiv">
					<view class="coBar">职务</view>
					<input class="cnValue"  v-model="post">
				</view>
				<view class="codiv  women">
					<view class="coBar">联系方式</view>
					<input class="cnValue"  v-model="phone">
				</view>
			</view>
			<button type="primary" class="resubmit">重新提交</button>
			</view>
			
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name:'',
				contact:'',
				post:'',
				phone:'',
				getDel:[]
			}
		},
		onLoad() {
			this.Getdetail()
		},
		methods: {
			Getdetail(){
				this.$get('v1/actives/get-detail',{active_id,id})
				.then(res=>{
					this.getDel=res.data
					console.log(res)
				})
			}
		}
	}
</script>

<style>
.codiv{
	border-bottom: 2rpx solid #EAEAEA;
	padrpxg: 0 20rpx;
	line-height:80rpx ;
	margin: 0 20rpx;
	display: flex;
	padding: 30rpx 0;
}
.coBar{
	font-size: 30rpx;
	width: 250rpx;
}
.cnValue{
	color: #999;
	font-size: 28rpx;
}
.women{
	border:0
}
.resubmit{
	background-color: #C30D24;
	line-height: 80rpx;
	border-radius: 50rpx;
	/* margin: 0rpx 70rpx; */
	width: 600rpx;
	position: absolute;
	bottom: 30rpx;
	left: 70rpx;
}

</style>
