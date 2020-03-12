<template>
	<view>
		<view >
			
			<view>
				<view class="titlebar">会议活动</view>
				<view class="camera"></view>
			</view>
		</view>
		<uni-search-bar :radius="100" @confirm="search" placeholder="搜索"  bgColor="#000" class="seach"></uni-search-bar>
		<view class="huodong">
			<view class="act-lie">
				<view class="zuinquire">
					<picker mode="date" :value="date" :start="startDate" :end="endDate"  :range="type" @change="bindDateChange">
						<view class="zstate">时间</view>
					</picker>
					<image src="../../static/xialajiantoublack.png" class="xialajiantoublack"></image>
				</view>
				<view class="zuinquire">
					<picker mode="selector" :range="type" range-key="name" @change="typeChange" >
						<view class="zstate">类型</view>
					</picker>
					<image src="../../static/xialajiantoublack.png" class="xialajiantoublack"></image>
				</view>
			</view>
			<view class="cmon" v-for="(item,index) in comData" :key="index">
				<view class="catering">
					<view class="caorg">{{item.active_name}}</view> 
					<view>
						<image src="../../static/act_activity.png"  class="act_activity"></image>
						<text class="crd">截止时间：{{item.end_time}}</text>
					</view>
				</view>
				<view class="team">
					<view class="">
						<image src="../../static/act_zuzhi.png"  class="peop"></image>
					</view>
					<text class="sheteam">组织机构：{{item.organization_name}}</text>
					<button type="primary" class="act_btn" @click="toInfor()">报名</button>
				</view>
			</view><!--餐饮管理组织-->
		</view>
		
	</view>
</template>

<script>
	import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
	export default {
		components: {
			uniSearchBar,
		},
		data() {
			return {
				comData:[],
				year:[],
				type:[],
				yearValue:'',
				typeValue:'',
				page: 1,
				more: 'loading',
				showloading: false, //是否显示loading
			}
		},
		onShow() {
			console.log('credit');
		},
		onLoad(res) {
			this.getType()
			this.postSociety()
		},
		onReachBottom() {
			if (this.hasData) {
				this.page++
				this.showloading = true
				this.getSociety()
			}
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		methods: {
			yearChange(e){
				let index=e.detail.value
				this.yearValue=index
				this.getType()
			},
			typeChange(e){
				let index=e.detail.value
				this.typeValue=index
				this.getType()
			},
			toInfor(){
				uni.navigateTo({
					url:'./detail_active/detail_active'
				})
		},
		toArray(data,obj={},arr=[]){
			for(let i in data){
				obj={}
				obj.id=i
				obj.name = data[i]
				arr.push(obj)
			}
			return arr
		},
		getType(){
			let type = this.typeValue
			let year = this.yearValue
			// this.$get('v1/society/get-type',{type,year})
			this.$get('v1/actives/gettype',{type})
			.then(res=>{
				this.type=this.toArray(res.data)
				this.year=res.data.year
			})
		},
		postSociety(){
			this.$get('v1/actives/activelist',{page:1,type:1})
			.then(res=>{
				this.comData=res.data.data.info
			})
		},
		bindDateChange: function(e) {
			this.date = e.target.value
		},
		getDate(type) {
			const date = new Date();
			let year = date.getFullYear();
			let month = date.getMonth() + 1;
			let day = date.getDate();
			
			if (type === 'start') {
				year = year - 60;
			} else if (type === 'end') {
				year = year + 2;
			}
			month = month > 9 ? month : '0' + month;;
			day = day > 9 ? day : '0' + day;
			return `${year}-${month}-${day}`;
		}
	}
}
</script>

<style>
.titlebar{
	text-align: center;
	width: 100%;
	height: 80rpx;
	color: #fff;
	background-color: #C30D24;
	font-size: 32rpx;
	line-height: 80rpx;
}
.camera{
	width: 45rpx;
	height: 45rpx;
	background-color: #fff;
	position: absolute;
	top: 20rpx;
	right: 50rpx;
}

.xialajiantoublack{
	width: 22rpx;
	height: 20rpx;
	vertical-align: middle;
	/* margin: 0 20rpx;
	margin-top: -2rpx; */
	margin: 20rpx 0rpx 0 20rpx;
}
.seach{
	width: 650rpx;
	margin: 0 auto;
}
.huodong{
	padding: 10rpx 0;
	width: 650rpx;
	/* height: 920rpx; */
	/* background-color: #FFFFFF; */
	border-radius: 15rpx;
	background:rgba(255,255,255,1);
	/* box-shadow:0px 8rpx 42rpx 12rpx rgba(153,153,153,0.1); */
	margin: 0rpx auto;
/* 	padding: 25rpx 20rpx; */
}
.act-lie{
	display: flex;
	padding: 20rpx 10rpx 20rpx 25rpx;
	background: #F6F6F6;
	border-radius: 15rpx;
}
.zuinquire{
	text-align: center;
	width: 50%;
	display: flex;
	margin-left: 100rpx;
}
.zstate{
	font-weight: 600;
	font-size:32rpx 
}
.caorg{
	font-size: 26rpx;
	font-weight: 600;
	color: #333;
	width: 180rpx;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
.crd{
	font-size: 24rpx;
	color: #999999;
	float: right;
	margin-left: 30rpx;
}
.sheteam{
	font-size: 24rpx;
	color: #999999;
}
.team,.catering{
	overflow: hidden;
	line-height: 50rpx;
	display: flex;
}

.peop,.act_activity{
	width: 30rpx;
	height: 30rpx;
	margin: 0 15rpx;
	vertical-align: middle;
	margin-bottom: 10rpx;
}

.cmon{
	padding: 10rpx 30rpx;
	border-top: 2rpx solid #EAEAEA;
	margin-bottom:15rpx;
	border-radius: 20rpx;
	box-shadow:0px 8rpx 42rpx 12rpx rgba(153,153,153,0.1);
}
.team{
	position: relative;
}
.act_btn{
	font-size: 20rpx;
	border-radius:50rpx;
	background: #00A0E9;
	height: 35rpx;
	line-height: 35rpx;
	position: absolute;
	right: 30rpx;
	top:5rpx

}
</style>
