<template>
	<view>
		<!-- <view class="title-bar"></view> -->
		<!-- <view class="title">
			<view class="back"> -->
				<!-- <image :src="" mode=""></image> -->
			<!-- </view>
			<view class="titext">
				详情
			</view>
			<view class="titx"> -->
				<!-- <image :src="" mode=""></image> -->
			<!-- </view>
		</view> -->
		<view class="content" v-if="data">
			<view class="headline">{{data.title}}</view>
			<view class="smalltitle">
				<text class="time">{{data.created_at}}</text>
				<image src="../../../static/eye.png" mode="" class="eyes" ></image>
				<text class="head">{{data.view}}</text>
			</view>
			<!-- <view >
				<image :src="data.cover" mode="" class="images"></image>
			</view> -->
			<view class="context">
				<u-parse :content="data.content"  @preview="preview" @navigate="navigate"></u-parse>
			</view>
		</view>
	</view>
</template>

<script>
	import uParse from '@/components/u-parse/u-parse.vue'
	export default {
		 components: {
		    uParse
		  },
		data() {
			return {
				data:null,
				
				images:''
			}
		},
		onLoad(res) {
			if(res.id){
				this.id=res.id
				this.getDetails()
			}
			
		},
		methods: {
			navigate(url){
				uni.downloadFile({
				  url: url,
				  success: function (res) {
				    var filePath = res.tempFilePath;
				    uni.openDocument({
				      filePath: filePath,
				      success: function (res) {
				        console.log('打开文档成功');
				      }
				    });
				  }
				});
				// uni.navigateTo({
				// 	url:'../../doc/doc?src='+e
				// })
			},
			getDetails(){
				let _this=this
				let id = this.id
				this.$post('v1/article/details',{id})
				.then(function(res){
					if(res.data.code==200){
						_this.data=res.data.data
					}
				})
			}
		}
	}
</script>

<style>
.eyes{
	width: 29rpx;
	height: 19rpx;
	vertical-align: middle;
	margin-right: 10rpx;
}
.headline{
	font-size: 38rpx;
	font-family:Microsoft YaHei;
	font-weight:400;
	color:#333;
	line-height:55rpx;
}
.smalltitle{
	color: #999;
	font-size: 26rpx;
	/* font-weight: bold; */
	line-height: 60rpx;
}
.time{
	margin-right:30rpx;
}
.images{
	background-color: #FFAABB;
	width: 640rpx;
	height: 300rpx;
	margin: 10rpx auto;
}
.context{
	text-indent: 2em;
	color: #666666;
	font-size: 30rpx;
	font-weight: 400;
	letter-spacing: 2rpx;
}
</style>
