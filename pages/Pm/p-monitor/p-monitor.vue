<template>
	<view>
		<view class="content">
			<view class="acDiv">
				<text class="proName">项目名称</text>
				<input type="text" class="ProCont" placeholder="婚博会"/>
				<!-- <text >婚博会</text> -->
			</view>
			<view class="acDiv">
				<text class="proName">机构名称</text>
				<input type="text" class="ProCont" placeholder="婚礼机构"/>
				<!-- <text class="ProCont">婚礼机构</text> -->
			</view>
			<view class="acDiv">
				<text class="proName">活动名称</text>
				<input type="text" class="ProCont" placeholder="婚博会"/>
				<!-- <text class="ProCont">婚博会</text> -->
			</view>
			<view class="acDiv">
				<text class="proName">活动地点</text>
				<input type="text" class="ProCont" placeholder="山东省青岛市和本社区"/>
				<!-- <text class="ProCont">山东省青岛市和本社区</text> -->
				
			</view>
			<view class="acDiv">
				<text class="proName">活动内容</text>
				<textarea type="text" class="ProCont pContent" placeholder="山东省青岛市和本社区山东省青岛市和本社区山东省青岛和本社区"  ></textarea>
				<!-- <text class="ProCont pContent">山东省青岛市和本社区山东省青岛市和本社区山东省青岛和本社区</text> -->
			</view>
			<view class="acDiv">
				<text class="proName">预计参加人数</text>
				<input type="text" class="ProCont" placeholder="5人"/>
				<!-- <text class="ProCont">5人</text> -->
			</view>
			<view class="acDiv">
				<text class="proName">项目联系人</text>
				<input type="text" class="ProCont" placeholder="陈总"/>
				<!-- <text class="ProCont">陈总</text> -->
			</view>
			<view class="acDiv">
				<text class="proName">联系方式</text>
				<input type="text" class="ProCont" placeholder="13210623438"/>
				<!-- <text class="ProCont">13210623438</text> -->
			</view>
			<view class="acDiv last">
				<text class="proName proTime">时间</text>
				<view class="ProCont">
					<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange" class="uni-input">
						<view >{{date}}</view>
					</picker>
				</view>
			</view>
		</view>
		<view class="but">
			<button type="primary" class="reject" @click="open">驳回</button>
			<uni-popup ref="popup" type="center">
				<view class="pu-box">
					<view >
						请输入驳回理由
					</view>
					<view >
						<image src="../../../static/cha.png" class="cuo" @click="close()"></image>
					</view>
					<form class="">
						<input type="text" class="form-text" placeholder="请输入"/>
					</form>
					<button type="primary" class="submit">提交</button>
				</view>
			</uni-popup>
			<button type="primary"  class="truejoin">确认参加</button>
		</view>
		
	</view>
</template>

<script>
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	export default {
		components: {uniPopup},
		data() {
			const currentDate = this.getDate({
			            format: true
			        })
			return {
				date: currentDate
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
			close(){
				 this.$refs.popup.close()
			},
			open(){
			         this.$refs.popup.open()
			      },
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index = e.target.value
			},
			bindDateChange: function(e) {
				this.date = e.target.value
			},
			bindTimeChange: function(e) {
				this.time = e.target.value
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
.submit{
	background-color: #3F51B5;
	width: 170rpx;
	line-height: 55rpx;
	border-radius: 5rpx;
	font-size: 24rpx;
	margin-top: 60rpx;
}
.pu-box{
	background-color: #fff;
	width: 540rpx;
	border-radius: 15rpx;
	text-align: center;
	padding: 20rpx 30rpx;
	
}
.form-text{
	border:2rpx solid #EAEAEA;
	border-radius:5rpx;
	margin: 30rpx;
	line-height: 60rpx;
	padding: 15rpx 40rpx;
	text-align: left;
	font-size: 24rpx;
	
}
.cuo{
	width: 25rpx;
	height: 25rpx;
	position: absolute;
	right: 30rpx;
	top: 35rpx;
}
.but{
	display: flex;
	position: absolute;
	bottom: 0;
	width: 100%;
}
.reject{
	width: 50%;
	background-color: #FF9800;
	color: #fff;
	border-radius:0;
}
.truejoin{
	width: 50%;
	background-color: #C30D24;
	color:#fff;
	border-radius:0;
}
.acDiv{
	border-bottom: 3rpx solid #EAEAEA;
	padding: 20rpx 0;
	margin: 0 20rpx;
	overflow: hidden;
	font-weight: 400;
}
.last{
	border-bottom: 0;
	padding-bottom:80rpx ;
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
	/* display: none; */
	text-align: left;
	width: 415rpx;
	line-height: 60rpx;
	/* overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap */
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
