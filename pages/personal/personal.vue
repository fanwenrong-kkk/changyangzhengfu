<template>
	<view class="person_box">
			<view class="title-bar">
				<image src="../../static/person_bg.png" style="width: 100%;"></image>
				<view class="person_title">个人中心</view>
			</view>
			<view class="person_photo"></view>
			<view class="person_shehui">
				<text>XXX社会组织 </text>
					<image src="../../static/back.png" class="fanhui"></image>
			</view>
			<view class="person_apply" v-if="id==1">
				<view class="person_list" @click="toActive()">
					<image src="../../static/per_bao.png" mode="" class="phto"></image>
					<text>报名活动</text>
					<image src="../../static/per_qian.png" mode="" class="qianjin"></image>
				</view>
				<view class="person_list" @click="toShuji()">
					<image src="../../static/per_xin.png" mode="" class="phto"></image>
					<text>@书记消息</text>
					<image src="../../static/per_qian.png" mode="" class="qianjin"></image>
				</view>
				<view class="person_list" @click="toXiaoxi()">
					<image src="../../static/per_xiao.png" mode="" class="phto"></image>
					<text>消息记录</text>
					<image src="../../static/per_qian.png" mode="" class="qianjin"></image>
				</view>
				<view class="person_list">
					<image src="../../static/per_xiu.png" mode="" class="phto"></image>
					<text>修改密码</text>
					<image src="../../static/per_qian.png" mode="" class="qianjin"></image>
				</view>
				<view class="person_list" @click="toLogin()">
					<image src="../../static/per_tui.png" mode="" class="phto"></image>
					<text>退出登录</text>
					<image src="../../static/per_qian.png" mode="" class="qianjin"></image>
				</view>
		</view><!-- personal -->
				<view class="person_apply" v-else-if="id==2||id==3">
					<view class="person_list" @click="toActive()">
						<image src="../../static/shuju.jpg" mode="" class="phto"></image>
						<text>数据统计</text>
						<image src="../../static/per_qian.png" mode="" class="qianjin"></image>
					</view>
					<view class="person_list"  @click="toLogin()">
						<image src="../../static/tuichu.jpg" mode="" class="phto"></image>
						<text>退出登录</text>
							<image src="../../static/per_qian.png" mode="" class="qianjin"></image>
					</view>
			</view><!-- 主管单位 -->
			<view class="person_apply"  v-else>
				<view class="person_list"  @click="toLogin()">
					<image src="../../static/tuichu.jpg" mode="" class="phto"></image>
					<text>退出登录</text>
						<image src="../../static/per_qian.png" mode="" class="qianjin"></image>
				</view>
			</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				id:1
			}
		},
		methods: {
			toXiaoxi(){
					uni.navigateTo({
						url:'./message/message'
					})
			},
			toShuji(){
				uni.navigateTo({
					url:'./perSecretary/perSecretary'
				})
			},
			toActive(){
				uni.navigateTo({
					url:'./perActiveApply/perActiveApply'
				})
			},
			toLogin(){
				uni.redirectTo({
					url:'../login/login'
				})
			}
		}
	}
</script>

<style>

.title-bar{
	width: 750rpx;
	height:476rpx;
	background: none;
}
.fanhui{
	width: 15rpx;
	height: 20rpx;
	margin-left: 40rpx;
}
.person_box{
	position: relative;
}
.person_title{
	color: #fff;
	text-align: center;
	font-size: 30rpx;
	font-weight: 700;
	position: absolute;
	top: 40rpx;
	width: 100%;
}
.person_photo{
	width: 120rpx;
	height: 120rpx;
	border-radius: 50%;
	background: #fff;
	position: absolute;
	top: 149rpx;
	left: 312rpx;
}
.person_shehui{
	color: #fff;
	position: absolute;
	top: 309rpx;
	left: 291rpx;
}
.person_apply{
	width: 692rpx;
	margin: -50rpx auto;
	background: #fff;
	border-radius: 10rpx;
	box-shadow:0px 8rpx 42rpx 12rpx rgba(153,153,153,0.1);
	position: relative;
	top:-40rpx;
	/* z-index: 10; */
}
.person_list{
		padding: 20rpx 0;
		position: relative;
		overflow: hidden;
		line-height: 70rpx;
}
.person_list text{
	padding-left:90rpx;
	font-size: 35rpx;
}
.person_list .phto{
	width: 65rpx;
	height: 65rpx;
	position: absolute;
	left: 10rpx;
	top: 30rpx;
}
.person_list .qianjin{
	width: 50rpx;
	height: 50rpx;
	position: absolute;
	top: 35rpx;
	right: 0;
}
</style>
