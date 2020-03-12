<template>
	<view>
		<uni-search-bar :radius="100" @confirm="search" placeholder="搜索" bgColor="#000" style="margin: 0 40rpx;"></uni-search-bar>
		<view class="content manage">
			<view class="cre-lei">
				<view class="items cr-times"  @click="showTime()">
					<text class="zstate"> 时间 </text>
					<image src="../../static/xialajiantoublack.png" class="xialajiantoublack"></image>
				</view>
				<view class="items">
					<picker mode="selector" :range="type" range-key="name" @change="typeChange" >
						<view class="zstate">项目类型</view>
					</picker>
					<image src="../../static/xialajiantoublack.png" class="xialajiantoublack"></image>
				</view>
				<view class="items">
					<picker mode="selector" :range="status" range-key="name"  @change="statusChange" >
						<view class="zstate">项目环节</view>
					</picker>
					<image src="../../static/xialajiantoublack.png" class="xialajiantoublack"></image>
				</view>
				<view class="items" >
					<picker mode="selector" :range="area" range-key="name"  @change="areaChange" >
						<view class="zstate">所属区域</view>
					</picker>
					<image src="../../static/xialajiantoublack.png" class="xialajiantoublack"></image>
				</view>
				
			</view>
			<view class="cmon" v-for="(item, index) in comData" :key="item.id" @click="toDetails()">
				<view class="catering">
					<text class="caorg">{{item.name}}</text>
					<text class="group">{{item.status}}</text>
				</view>
				<view class="team">
					<text class="sheteam">{{item.party_id}}</text>
					<image src="../../static/site.png" mode="" class="peop">{{item.postaladdress}}</image>
					<text class="dengtime">{{item.protime}}</text>
				</view>
			</view>
			
			<rangeDatePick :show="isShow" :showchange="isShow" :start="startDate" :end="endDate" :value="dateValue" @change="bindChange"
			 @cancel="bindCancel" themeColor="#4C83D6" fields="day"></rangeDatePick>
			<!--餐饮管理组织-->
		</view>
	</view>
</template>

<script>
	import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
	import rangeDatePick from '@/components/range-dtpicker/range-dtpicker.vue';
	export default {
		components: {
			uniSearchBar,
			rangeDatePick
		},

		data() {
			return {
				type:[],
				area:[],
				status:[],
				// 选择的值，传给后台的
				typeValue:'',
				statusValue:'',
				areaValue:'',
				dateValue: [],
				isShow: false,
				comData: []
			}
		},
		onLoad() {
			this.getPerject()
			this.getList()
		},
		onShow() {
			console.log('pm');
		},
		
		methods: {
			//选项方法
			statusChange(e){
				let index = e.detail.value
				this.statusValue = index
				this.getList()
			},
			typeChange(e){
				let index = e.detail.value
				console.log(index);
				this.typeValue =index
				this.getList()
			},
			areaChange(e){
				let index = e.detail.value
				this.areaValue =index
				this.getList()
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
			getList(start_time="",end_time=""){
				let type = this.typeValue
				let area = this.areaValue
				let status = this.statusValue
				let time = this.dateValue
				console.log(time);
				if(time.length){
					start_time = time[0]
					end_time = time[1]
				}
				this.$get('v1/project/list',{type,area,status,start_time:start_time?start_time:'',end_time:end_time?end_time:'',page:1,num:1})
				.then(res=>{
					this.comData=res.data.data.info
					console.log(res);
				})
			},
			getPerject() {
				this.$get('v1/project/get-info')
					.then(res => {
						if (res.code == 200) {
							this.type=this.toArray(res.data.type) 
							this.area=this.toArray(res.data.area)
							this.status=this.toArray(res.data.status)
						}
					})
					.catch()
			},
			showTime() {
				this.isShow = true
			},
			bindChange(e) {
				console.log(e);
				this.dateValue = e
				this.isShow = false
				this.getList()

			},
			bindCancel(e) {
				console.log(e);
				this.isShow = false
			},

			search(e) {
				console.log(e.value);
			},
			toDetails(id = 0) {
				uni.navigateTo({
					url: 'pmDetails/pmDetails?id=' + id
				})
			},

			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
				if (type === 'start') {
					day = 1
					year = year - 10;
				} else if (type === 'end') {
					year;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			}
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		}
	}
</script>

<style>

	.xialajiantoublack {
		width: 20rpx;
		height: 15rpx;
		position: absolute;
		top:17rpx;
		right: 20rpx;
	}

	.manage {
		padding: 20rpx 0;
	}

	.cre-lei {
		display: flex;
		padding: 5rpx 10rpx 20rpx 25rpx;
		border-bottom: 1rpx solid #EAEAEA;
	}

	.items {
		width: 25%;
		display: flex;
		position: relative;
		margin: 0 10rpx;
	}
	.cr-times{
		width: 17%;
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

	.group {
		font-size: 24rpx;
		color: #688DF7;
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
		width: 16rpx;
		height: 24rpx;
		margin: 0 10rpx 0 50rpx;
		vertical-align: middle;
	}

	.cmon {
		padding: 20rpx 30rpx;
		border-top: 2rpx solid #EAEAEA;
	}
</style>
