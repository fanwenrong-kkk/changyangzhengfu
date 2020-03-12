<template>
	<view>
		<view class="content">
			<view class="acDiv">
				<text class="proName">项目名称</text>
				<text class="ProCont" v-model="pro_id ">婚博会</text>
			</view>
			<view class="acDiv">
				<text class="proName">机构名称</text>
				<text class="ProCont" v-model="org_id">婚礼机构</text>
			</view>
			<view class="acDiv">
				<text class="proName">活动名称</text>
				<input type="text" class="ProCont" v-model="active_name"/>
				<!-- <text class="ProCont">{{}}</text> -->
			</view>
			<view class="acDiv">
				<text class="proName">活动地点</text>
				<input type="text" class="ProCont" v-model="place"/>
				<!-- <text class="ProCont">{{place}}</text> -->
			</view>
			<view class="acDiv">
				<text class="proName">活动内容</text>
				<input type="text" class="ProCont" v-model="detail"/>
				<!-- <text class="ProCont pContent">{{detail}}</text> -->
			</view>
			<view class="acDiv">
				<text class="proName">预计参加人数</text>
				<input type="text" class="ProCont" v-model="count"/>
				<!-- <text class="ProCont">{{count}}人</text> -->
			</view>
			<view class="acDiv">
				<text class="proName">项目联系人</text>
				<input type="text" class="ProCont" v-model="contacts"/>
				<!-- <text class="ProCont">{{contacts}}</text> -->
			</view>
			<view class="acDiv">
				<text class="proName">联系方式</text>
				<input type="text" class="ProCont" v-model="phone"/>
				<!-- <text class="ProCont">{{phone}}</text> -->
			</view>
			<view class="acDiv">
				<text class="proName proTime">时间</text>
				<view class="ProCont">
					<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange" class="uni-input">
						<view >{{date}}</view>
					</picker>
				</view>
			</view>
			<view class="acDiv supervise" >
				<view class="proName">检测方</view>
				<view>
					<radio-group name="" @change="typeChange">
						<label class="radio" >
							<radio value="1" :checked="true" class="jiance"/>
							<image src="../../../static/jia.png" mode="" class="jia"></image>
							<text>满意度方</text>
						</label>
						<label class="radio" >
							<radio value="2"  class="jiance"/>
							<image src="../../../static/jia.png" mode="" class="jia"></image>
							<text>评估机构</text>
						</label>
					</radio-group>
					
				</view>
			</view>
			
		</view>
		<button type="primary" class="apply" @click="postSpro()">提交</button>
	</view>
</template>

<script>
	export default {
		data() {
			const currentDate = this.getDate({
			            format: true
			        })
			return {
				'date': currentDate,
				'pro_id':'1',
				'org_id':'2',
				'active_name':'',
				'place':'',
				'detail':'',
				'count':'',
				'contacts':'',
				'phone':'',
				'radio':'1',
				'end_time':'2018'
				// end_time:_this.end_time,
				
				
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
		onLoad() {
			this.postSpro()
		},
		methods: {
			typeChange(e){
				this.radio=e.detail.value
				console.log(e)
			},
			postSpro(){
				var _this=this
				this.$post('v1/actives/activespro',{
					type:this.radio,
					pro_id:this.pro_id,
					org_id:this.org_id,
					active_name:this.active_name,
					place:this.place,
					detail:this.detail,
					count:this.count,
					contacts:this.contacts,
					phone:this.phone,
					end_time:this.end_time
				})
				.then(res=>{
					console.log(res)
					if(this.pro_id&&this.org_id&&this.active_name&&this.place&&this.detail&&this.count&&this.contacts&&this.phone&&this.end_time){
						uni.navigateTo({
							url:'../pmDetails/pmDetails'
						})
					}
					uni.showToast({
						title:'信息不能为空！'
					})
				})
			},
			// bindPickerChange: function(e) {
			// 	console.log('picker发送选择改变，携带值为', e.target.value)
			// 	this.index = e.target.value
			// },
			bindDateChange: function(e) {
				this.date = e.target.value
			},
			// bindTimeChange: function(e) {
			// 	this.time = e.target.value
			// },
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
.apply{
	background-color: #C30D24;
	width: 620rpx;
	line-height: 78rpx;
	border-radius: 40rpx;
	font-size: 28rpx;
	margin-top: 40rpx;
}
.acDiv{
	border-bottom: 3rpx solid #EAEAEA;
	padding: 20rpx 0;
	margin: 0 20rpx;
	overflow: hidden;
	font-weight: 400;
}
.proName{
	font-size: 28rpx;
}
.ProCont{
	font-size: 26rpx;
	float: right;
	width: 415rpx;
	text-align: right;
	line-height: 40rpx;
}
.pContent{
	text-align: left;
}

.proTime{
	padding-top: 10rpx;
}
.uni-input{
	padding: 0;
}
.radio{
	margin: 0 44rpx;
}
.jia{
	width: 26rpx;
	height: 30rpx;
	vertical-align: middle;
	margin: 20rpx 10rpx;
}
.supervise{
	border: 0;
}
</style>
