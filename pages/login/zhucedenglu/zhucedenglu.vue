<template>
	<view class="login_box">
		<view class="title-bar" @click="toOpen()">
			<view class="login_title">朝阳社会组织</view>
			<text class="login_tiao" >跳过<image src="../../../static/tiaoguo.png" class="tiaoguo" ></image></text>
		</view>
		<view class="login_photo"></view>
		<view class="login_apply">
			<view class="login-card">
				<view class="login-input login-margin-b">
					<view class="login-submit"><image src="../../static/login_zhang.png" mode=""></image><text class="text">账号</text></view>
					<input type="number" placeholder="手机号或者邮箱" class="inputs" />
				</view>
				<view class="login-input">
					<view class="login-submit"><image src="../../static/login_mi.png" mode=""></image><text>密码</text></view>
					<input type="number" password="true" placeholder="请输入密码(8-16位)" class="inputs" />
				</view>
				
			</view>
			<view class="login-btn">
				<button type="primary" class="login-zhu" @click="toRegister()">注册</button>
				<button type="primary" class="login-deng" >登录</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			toRegister(){
					uni.navigateTo({
						url:'./register/register'
					})
			},
			toOpen(){
				uni.navigateTo({
					url:'../../index/index'
				})
			}
		}
	}
</script>

<style>
.inputs{
	width:450rpx;
	text-align: center;
}
.tiaoguo{
	width: 20rpx;
	height: 28rpx;
	vertical-align: middle;
	margin: -4rpx 5rpx 0;
}
.login_box{
	position: relative;
}
.login_title{
	color: #fff;
	text-align: center;
	font-size: 36rpx;
}
.login_tiao{
	color: #fff;
	font-size: 30rpx;
	position: absolute;
	top: 0;
	right: 20rpx;
}
.login_photo{
	width: 120rpx;
	height: 120rpx;
	border-radius: 20rpx;
	background: #fff;
	position: absolute;
	top: 149rpx;
	left: 312rpx;
}
.login_apply{
	width: 692rpx;
	margin: -50rpx auto;
	background: #fff;
	border-radius: 10rpx;
	box-shadow:0px 8rpx 42rpx 12rpx rgba(153,153,153,0.1);
	padding: 50rpx 0;
	/* position: relative;
	top: -140rpx; */
}
 	.login-forget{
 		float: left;
 		font-size: 26upx;
 		color: #999;
 	}
 	.login-register{
 		color: #666;
 		float: right;
 		font-size: 26upx;
 	}
 	.login-input input{
 		background: #fff;
 		font-size: 28upx;
 		padding: 10upx 25upx;
 		height: 62upx;
 		line-height: 62upx;
		border-bottom: 1px solid #EAEAEA;
		padding-left: 75rpx;
 	}
	.login-input image{
		width: 27rpx;
		height: 27rpx;
	}
 	.login-margin-b{
 		margin-bottom: 25upx;
 	}
 	.login-input{
 		padding: 10upx 20upx;
		position: relative;
 	}
	.login-submit{
		position: absolute;
		left: 12rpx;
		top: 25rpx;
		margin: 0 10rpx;
	}
	.login-btn{
		overflow: hidden;
		clear: both;
		width: 579rpx;
		margin: 20rpx auto;
}
.login-card{
	width: 579rpx;
	margin: 0 auto;
}
.login-btn button{
	width: 257rpx;
	background: #C30D24;
}
.login-zhu{
	float: left;
}
.login-deng{
	float: right;
}
.login-function{
	width: 579rpx;
	margin: 0 auto;
	overflow: hidden;
}
.login-jz{
	float: left;
}
.login-zd{
	float: right;
}
</style>