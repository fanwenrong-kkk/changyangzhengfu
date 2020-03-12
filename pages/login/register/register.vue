<template>
	<view>
		<view class="content">
			<view class="login-list" v-for="(item,index) in data" :key="index">
				<text class="iconfont" :class="item.icon" ></text>
				<view class="orgName">
					<text>{{item.notes}}</text>
				</view>
				<view>
					<input class="input" :type="item.data_type" v-model="pams[item.name]" :placeholder="'请输入'+ item.notes" placeholder-style="font-size:26rpx" />
				</view>
			</view>
		</view>
		<button type="primary" @tap="toRegSub()">立即注册</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pams:{},
				data:[],
				nams:{}
			}
		},
		onLoad() {
			this.getRegFields()
		},
		methods: {
			toRegSub(){
				let pams = this.pams
				let nams = this.nams
				for(let item in pams){
					if(pams[item]==''){
						uni.showToast({
							title:'请填写'+nams[item],
							icon:"none",
							duration:1500
						})
						return
					}
				}
				this.$post('v1/login/reg',{object:pams})
				.then(res=>{
					console.log(res);
					if(res.data.code==200){
						uni.navigateTo({
							url:'../login'
						})
					}else{
						uni.showToast({
							title:res.data.msg,
							icon:"none",
							duration:1500
						})
					}
				})
			},
			getRegFields(){
				this.$get('v1/login/reg-fields')
				.then(res=>{
					if(res.code==200){
						this.data = res.data
						res.data.map(item=>{
							this.pams[item.name]  ='' 
							this.nams[item.name]  =item.notes
						})
					}
				})
				.catch()
			}
		}
	}
</script>

<style>
	@import url("../../../common/ali/iconfont.css");

	.content {
		width: 630rpx;
		padding: 30rpx;
		margin: 30rpx auto;
	}

	.login-list {
		display: flex;
		border-bottom: 2rpx solid #E6E6E6;
		padding: 20rpx 0;
	}

	.img {
		width: 26rpx;
		height: 26rpx;
		vertical-align: middle;
		margin-right: 20rpx;
	}

	.orgName {
		font-weight: 600;
		font-size: 28rpx;
		width: 260rpx;
	}

	.last {
		border: 0;
	}

	button {
		width: 300rpx;
		background-color: #C30D24;
		line-height: 80rpx;
		border-radius: 20rpx;
		position: absolute;
		bottom: 80rpx;
		left: 220rpx;
	}

	/* .regist-list{
	overflow: hidden;
	padding: 20rpx 0;
	height: 50rpx;
	border-bottom: 1px solid #EAEAEA;
	overflow: hidden;
}
.regist-list image{
	width: 25rpx;
	height: 24rpx;
}
.list-lf{
	width: 200rpx;
	float: left;
}
.list-lf img{
	width: 22rpx;
	height: 21rpx;
	margin: 0 10rpx;
}
.rst-rt{
	width: 300rpx;
	float: left;
	padding: 5rpx 0;
}
.register-zhu{
	background: #C30D24;
	width: 309rpx;
	height: 80rpx;
	margin: 0 auto; 
}*/

.input{
	border: 0!important;
}
.input:focus{
	outline:none;
}
.iconfont{
	margin-right:20rpx ;
}
</style>
