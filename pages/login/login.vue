<template>
	<view class="login_box">
		<view class="title-bar">
			<view class="login_title">朝阳社会组织</view>
			<text class="login_tiao">跳过<image src="../../static/tiaoguo.png" class="tiaoguo"></image></text>
		</view>
		<view class="login_photo"></view>
		<view class="login_apply">
			<view class="login-card">
				<view class="loginIndex ">
					<view class="login-submit">
						<image src="../../static/login_zhang.png" class="login_zhang"></image>
						<text class="text">账号</text>
					</view>
					<view >
						<input placeholder="请输入账号" class="inputs" v-model="user"/>
					</view>
				</view>
				<view class="loginIndex">
					<view class="login-submit">
						<image src="../../static/login_mi.png" class="login_zhang"></image>
						<text>密码</text>
					</view>
					<view >
						<input password="true" placeholder="请输入密码" class="inputs" v-model="password" />
					</view>
				</view>
				<view class="login-function" v-if="user&&password">
					<!-- <checkbox class="login-jz">记住密码</checkbox>
					<checkbox class="login-zd">自动登录</checkbox> -->
					<checkbox-group style="transform:scale(0.8)">
						<label  class="login-jz">
							<checkbox value="cb" color="#C30D24" />记住密码
						</label>
						<label class="login-zd">
							<checkbox value="cb" color="#C30D24"/>自动登录
						</label>
					</checkbox-group>
				</view>
			</view>
			<view class="butRole">
				<button type="primary" class="role" @click="shehui(0)">社会组织</button>
				<button type="primary" class="role" @click="shehui(1)">评估机构</button>
				<button type="primary" class="role" @click="shehui(2)">监测活动</button>
				<button type="primary" class="role" @click="shehui(3)">满意度方</button>
				<view></view>
			</view>
			<view class="login-btn">
				<button type="primary" class="login-zhu" @click="toRegister()">注册</button>
				<button type="primary" class="login-deng" @click="getLogin()">登录</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user:'',
				password:''
			}
		},
		methods: {
			shehui(option){
				uni.setStorageSync('type',option)
				console.log(option)
			},
			toRegister(){
					uni.navigateTo({
						url:'./register/register'
					})
			},
			getLogin(){
				let user=this.user
				let password=this.password
				if(user.length==''){
					uni.showToast({
						title:'请填写用户名',
						icon:'none'
					})
					return
				}
				if(password.length==''){
					uni.showToast({
						title:'请填写密码',
						icon:'none'
					})
					return
				}
				this.$post('v1/login/login',{
					user:this.user,
					password:this.password,
					
				})
				.then(res=>{
					console.log(res);
					if(res.code==200){
						uni.setStorageSync('id', res.data.data.id);
						uni.setStorageSync('party_name', res.data.data.party_name);
						uni.setStorageSync('party_id', res.data.data.party_id);
						uni.showToast({
							title:res.data.msg,
							icon:'none',
							success: () => {
								uni.switchTab({
									url:'../index/index'
								})
							}
						})
					}
					
				})
				.catch()
			}
		}
	}
</script>

<style>
.butRole{
	display: flex;
	justify-content:space-between;
	margin:30rpx  0 40rpx 0;
}
.role{
	width: 150rpx;
	font-size: 25rpx;
	
	background-color: #C30D24;
}	
.loginIndex{
	display: flex;
	padding: 20rpx 0;
}
.loginIndex:first-child{
	border-bottom: 2rpx solid #E6E6E6;
}
.login_zhang{
	width: 27rpx;
	height: 27rpx;
	margin-right: 10rpx;
	vertical-align: middle;
}
.inputs{
	/* width:450rpx;
	text-align: center; */
	font-size: 24rpx;
	line-height: 60rpx;
	padding-top: 10rpx;
	padding-left: 20rpx;
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
	height: 500rpx;
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
 	/* .login-input {
 		background: #fff;
 		font-size: 28upx;
 		padding: 10upx 25upx;
 		height: 62upx;
 		line-height: 62upx;
		border-bottom: 1px solid #EAEAEA;
		padding-left: 75rpx;
 	} */
	.login-input image{
		width: 27rpx;
		height: 27rpx;
	}
 	/* .login-margin-b{
 		margin-bottom: 25upx;
 	} */
 /* 	.login-input{
 		padding: 10upx 20upx;
		position: relative;
 	} */
/* 	.login-submit{
		position: absolute;
		left: 12rpx;
		top: 25rpx;
		margin: 0 10rpx;
	} */
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