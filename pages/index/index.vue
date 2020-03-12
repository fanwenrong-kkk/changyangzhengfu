<template>
	<view>
		<view v-if="type==0">
			<view class="back-banner">
				<view class="banner" @click="toDetails()">
					<!-- <image src=../../static/banner.png" mode="" class="banner"></image> -->
					<swiper  :autoplay="true" :interval="3000" :duration="1000" circular style="width: 675rpx;height: 376rpx;" >
						<swiper-item v-for="(item, index) in informData.banner" :key="index">
							<view class="swiper-item">
								<image :src="item.cover" mode="" class="banner"></image> 
							</view>
						</swiper-item>
					</swiper>
				</view>
			</view>
			<view class="uni-background">
					<view class="module pd">
						<view class="notice"><!--通知公告-->
							<image src="../../static/icon.png" mode="" class="icon"></image>
							<text class="notice-text">通知公告</text>
							<view class="more" @click="toDetails()">更多</view>
						</view><!--/notice-->
						<view class="notice-list"  v-for="(item, index) in informData.notice" :key="index" @click="toNews(item.id)">
							<text class="headline">{{item.title}}</text>
							<view>
								<text class="list-time">{{item.created_at}}</text>
								<text class="read">{{item.id}}</text>
							</view>
						</view>
					</view>
					<view class="module">
						<view class="module-menu" @click="toDetails()">
							<view class="menu">
								<view src="" mode="">
									<image src="../../static/danghui.png" mode="" class="imgs"></image>
								</view>
								<view class="mod-text">
									区域化党建
								</view>
							</view>
							<view class="menu">
								<view src="" mode="" >
									<image src="../../static/handshake.png" mode="" class="imgs"></image>
								</view>
								<view class="mod-text">
									统一战线
								</view>
							</view>
							<view class="menu">
								<view src="" mode="">
									<image src="../../static/organization%20.png" mode="" class="imgs"></image>
								</view>
								<view class="mod-text">
									组织生活
								</view>
							</view>
							<view class="menu">
								<view src="" mode="" >
									<image src="../../static/handshake.png" mode="" class="imgs"></image>
								</view>
								<view class="mod-text">
									党组织信息
								</view>
							</view>
						</view>
					</view><!-- /module one -->
					<view class="module pd">
						<view class="notice" @click="toDetails()"><!--书记-->
							<image src="../../static/icon.png" mode="" class="icon"></image>
							<text class="notice-text">@书记</text>
							<view class="more">更多</view>
						</view><!--/notice-->
						<view class="dllist">
							<view class="dltext" v-for="(item, index) in informData.contact"  @click="toNews(item.id)" :key="index">
								{{item.content}}
							</view>
						</view>
						<button class="questions" @click="toSecretary()">发布提问</button>
					</view><!--/module-->
					<view class="module pd">
						<view class="dang"><!--党建矩阵-->
							<image src="../../static/icon.png" mode="" class="icon"></image>
							<text class="notice-text">党建矩阵</text>
						</view>
						<view class="dmatrix">
							<view  v-for="(item,index) in informData.links" :key="index">
								<image :src="item.url" mode="" class="matrix"></image>
							</view>
							<!-- <view class="matrix"></view>
							<view class="matrix"></view> -->
						</view><!--矩阵-->
						
					</view><!--/module-->
			</view>
		</view>
		
		
		
	</view>
</template>

<script>
	import {host} from '../../config/request.js'
	export default {
		data() {
			return {
				informData:[],
				type:''
			}
		},
		onLoad() {
			this.getInformData()
			this.type=uni.getStorageSync('type')
		},
		onShow() {
			console.log('index');
		},
		methods: {
			getInformData(){
				this.$get('v1/index')
				.then(res=>{
					if(res.code==200){
						// console.log(res);
						res.data.links.length = 3
						res.data.notice.length = 4
						this.informData = res.data
					}
				})
				.catch(err=>{
					console.log(err);
				})
				// uni.request({
				// 	url:'http://rap2api.taobao.org/app/mock/236833/news',
				// 	success: (res) => {
				// 		// console.log(res.data.data.slice(0,4));
				// 		this.informData=res.data.data.slice(0,4)
				// 	}
				// })
			},
			toDetails(){
				uni.navigateTo({
					url:'./inform/inform'
				})
			},
			toSecretary(){
				uni.navigateTo({
					url:'./secretary/secretary'
				})
			},
			toNews(id){
				uni.navigateTo({
					url:'./detail/details?id='+id,
					
				})
			}
			
		}
	}
</script>

<style>
page{
	background-color: #F6F6F6;	
}
.uni-background{
	clear: both;
}
.notice-text{
	font-size: 38rpx;
	/* font-weight:600; */
	color: #333;
	margin: 0 20rpx;
}
.more{
	width: 80rpx;
	border:0;
	border:2rpx solid #EAEAEA;
	border-radius: 45rpx;
	font-size:22rpx ;
	color: #333;
	background-color: #fff;
	float: right;
	text-align: center;
	margin-top: 20rpx;
	font-weight: bold;
}
.notice-list{
	border-top: 2rpx solid #EAEAEA;
	padding: 15rpx 0;
	overflow: hidden;
	white-space: nowrap;
	text-overflow:ellipsis;
}
.notice{
	border-bottom: 2rpx solid #EAEAEA;
	padding-bottom: 15rpx;
}
.headline{
	font-size: 28rpx;
	letter-spacing: 2rpx;
}
.list-time{
	font-size: 22rpx;
	color:#999;
	font-weight: 500;
	margin-left: 20rpx;
}	
.read{
	color:#999;
	float: right;
	font-size: 22rpx;
	/* font-weight: 600; */
	margin-right: 20rpx;
}
.dltext{
	overflow: hidden;
	white-space: nowrap;
	text-overflow:ellipsis;
	font-size: 24rpx;
	color: #333333;
	font-weight: bold;
	line-height: 50rpx;
	padding: 0 20rpx;
	letter-spacing: 2rpx;
}
.dllist{
	margin-bottom: 50rpx;
}

.dmatrix{
	display: flex;
}
.matrix{
	width:195rpx;
	height: 96rpx;
	/* background-image: ; */
	margin:20rpx 10rpx;
}
.icon{
	width: 43rpx;
	height: 46rpx;
	vertical-align:middle;
	margin-top: -10rpx;
}
/*  */
.back-banner{
	width:100%;
	background-image:url('~@/static/background-index.png');
	height: 400rpx;
	background-size: 750rpx 436rpx;
	background-position: center -80rpx; 
	background-repeat: no-repeat;
	background-color: #F7F7F7;
	box-shadow:0 0 10rpx 0 #F6F6F6;
	/* background: linear-gradient(#F7F7F7, #F3F3F3); */
	/* position: relative; */
}
.banner{
	width: 675rpx;
	height: 376rpx;
	border-radius: 10rpx;
	margin: 0 auto;
}
.module{
	width: 675rpx;
	/* height: 200rpx; */
	margin: 20rpx auto 0;
	border-radius: 10rpx;
	background-color: #fff;
	/* padding:40rpx 20rpx; */
}

.pd{
	padding:20rpx;
	width: 635rpx;
}
.module-menu{
	display: flex;
	/* flex-direction:column */
	/* flex-wrap:nowrap;
	flex-direction:column */
}
.menu{
	width: 23%;
	text-align: center;
	/* height: 80rpx; */
	/* background-color: #09BB07; */
	margin:10rpx 20rpx;
}
.imgs{
	width:108rpx;
	height: 108rpx;
	background-color: #FFAABB;
	border-radius: 30rpx;
	margin: 0 auto;
}
.mod-text{
	color: #333333;
	font-size: 24rpx;
	line-height: 60rpx;
	font-weight: bold;
	letter-spacing:2rpx;
}




</style>
