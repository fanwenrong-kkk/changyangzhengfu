<template>
	<view>
		<!-- <view class="title-bar"></view>
		<view class="title">
			<view class="back"> -->
				 <!-- <image :src="" mode=""></image> -->
			<!-- </view>
			<view class="titext">
				@书记
			</view>
			<view class="titx"> -->
				<!-- <image :src="" mode=""></image> -->
			<!-- </view>
		</view> -->
		<view class="content">
			<textarea placeholder="请描述你的问题..." v-model="content" class="problem"/>
		</view>
		<button class="questions" @click="sub()">发布提问</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content:''
			}
		},
		methods: {
			sub(){
				let content=this.content
				if(content==''){
					uni.showToast({
						title:'请填写内容',
						icon:'none'
					})
					return
				}
				let sid=uni.getStorageSync('id');
				let society_name= uni.getStorageSync('party_name');
				this.$post('v1/user/contact',{
					sid,society_name,content
				})
				.then(res=>{
					if(res.code==200){
						uni.showToast({
							title:res.data.msg,
							icon:'none'
						})
						this.content  =''
					}
				})
				.catch()
			}
		}
	}
</script>

<style>
.problem{
	width: 600rpx;
	margin: 0 auto;
}
.questions{
	margin-top: 20rpx;
}
</style>
