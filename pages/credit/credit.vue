<template>
	<view>
		<uni-search-bar :radius="100" @confirm="search" placeholder="搜索" bgColor="#000" style="margin: 0 40rpx;"></uni-search-bar>
		<view class="content chaxun">
			<view class="cre-lei">
				<view class="zuinquire">
					<picker mode="selector" :range="type" range-key="name" @change="typeChange" >
						<view class="zstate">组织状态</view>
					</picker>
					<image src="../../static/xialajiantoublack.png" class="xialajiantoublack"></image>
				</view>
				<view class="zuinquire">
					<picker mode="selector" :range="type" range-key="name" @change="typeChange" >
						<view class="zstate">组织类型</view>
					</picker>
					<image src="../../static/xialajiantoublack.png" class="xialajiantoublack"></image>
				</view>
				<view class="zuinquire">
					<picker mode="selector" :range="year"  @change="yearChange" >
						<view class="zstate">年检时间</view>
					</picker>
					<image src="../../static/xialajiantoublack.png" class="xialajiantoublack"></image>
				</view>
				<view class="zuinquire">
					<picker mode="selector" :range="yearStatus" range-key="name" @change="yearStatusChange" >
						<view class="zstate">年检结果</view>
					</picker>
					<image src="../../static/xialajiantoublack.png" class="xialajiantoublack"></image>
				</view>
			</view>

			<view class="cmon" v-for="(item, index) in bgData" :key="index" @click="tozhuXiangqing(item.id)">
				<view class="catering">
					<text class="caorg">{{item.name}}</text>
					<text class="crd">{{item.status}}</text>
				</view>
				<view class="team">
					<image src="../../static/teams.png" mode="" class="peop"></image>
					<text class="sheteam">{{item.society_type}}</text>
					<text class="dengtime">登记日期：{{item.reg_time}}</text>
				</view>
			</view>
			<uni-load-more v-if="showloading" :status="more"></uni-load-more>
			<!--餐饮管理组织-->
		</view>
	</view>
</template>

<script>
	// import uni
	// import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue"
	import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
	export default {
		components: {
			uniSearchBar,
			// uniLoadMore
		},
		data() {
			const currentDate = this.getDate({
			            format: true
			        })
			return {
				type:[],
				year:[],
				yearStatus:[],
				typeValue:'',
				yearValue:'',
				yearStatusValue:'',
				hasData: true, //是否还有数据
				bgData: [],
				page: 1,
				more: 'loading',
				showloading: false, //是否显示loading
			}
		},
		onShow() {
			console.log('credit');
		},
		onLoad(res) {
			this.getSociety()
			this.getType()
		},
		onReachBottom() {
			if (this.hasData) {
				this.page++
				this.showloading = true
				this.getSociety()
			}
		},
		methods: {
			typeChange(e){
				let index=e.detail.value
				this.typeValue=index
				this.getType()
			},
			yearChange(e){
				let index=e.detail.value
				this.yearValue=index
				this.getType()
			},
			yearStatusChange(e){
				let index=e.detail.value
				this.yearStatusValue=index
				this.getSociety()
			},
			tozhuXiangqing(id) {
				uni.navigateTo({
					url: './creditDetail/creditDetail?id='+id
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
				this.$get('v1/society/get-type')
				.then(res=>{
					this.type=this.toArray(res.data.type) 
					this.year=res.data.year
				})
			},
			getSociety() {
				let yearStatus = this.yearStatusValue
				this.$post('v1/society/society', {
						page: this.page,
						yearStatus
					})
					.then(res => {
						if (res.data.code == 200) {
							this.yearStatus=this.toArray(res.data.yearStatus) 
							if (res.data.data.info.length) {
								this.hasData = true
								this.bgData = this.bgData.concat(res.data.data.info)
							} else {
								this.hasData = false
							}
							this.showloading = false
						}
					})
					.catch(error => {
						console.log(error);
						this.showloading = false
					})
			}
		}
	}
</script>

<style>
	.xialajiantoublack {
		width: 20rpx;
		height: 15rpx;
		position: absolute;
		top: 17rpx;
		right:20rpx;
	}

	.chaxun {
		padding: 20rpx 0;
	}

	.cre-lei {
		display: flex;
		padding: 20rpx 10rpx 20rpx 25rpx;
		border-bottom: 1rpx solid #EAEAEA;
	}

	.zuinquire {
		width: 25%;
		text-align: center;
		display: flex;
		position: relative;
		/* margin-left: 25rpx; */
	}

	.zstate {
		font-weight: 600;
		font-size: 26rpx
	}

	.caorg {
		font-size: 26rpx;
		font-weight: 600;
		color: #333;
	}

	.crd {
		font-size: 24rpx;
		color: #8BC34A;
		float: right;
	}

	.sheteam {
		font-size: 24rpx;

	}

	.dengtime {
		float: right;
		color: #999;
		font-size: 24rpx;
		/* font-weight: 600; */
	}

	.team,
	.catering {
		overflow: hidden;
		line-height: 50rpx;
	}

	.peop {
		width: 26rpx;
		height: 22rpx;
		margin: 0 15rpx;
		vertical-align: middle;
	}

	.cmon {
		padding: 10rpx 30rpx;
		border-top: 2rpx solid #EAEAEA;
	}
</style>
