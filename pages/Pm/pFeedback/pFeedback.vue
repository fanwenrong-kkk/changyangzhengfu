<template>
	<view>
		<view class="content">
			<view class="acDiv">
				<text class="proName">项目名称</text>
				<text class="ProCont">婚博会</text>
			</view>
			<view class="acDiv">
				<text class="proName">机构名称</text>
				<text class="ProCont">婚礼机构</text>
			</view>
			<view class="acDiv">
				<text class="proName">活动名称</text>
				<text class="ProCont">婚博会</text>
			</view>
			<view class="acDiv">
				<text class="proName">活动地点</text>
				<text class="ProCont">山东省青岛市和本社区</text>
			</view>
			<view class="acDiv">
				<text class="proName">活动内容</text>
				<text class="ProCont pContent">山东省青岛市和本社区山东省青岛市和本社区山东省青岛和本社区</text>
			</view>
			<view class="acDiv">
				<text class="proName">预计参加人数</text>
				<text class="ProCont">5人</text>
			</view>
			<view class="acDiv">
				<text class="proName">项目联系人</text>
				<text class="ProCont">陈总</text>
			</view>
			<view class="acDiv">
				<text class="proName">联系方式</text>
				<text class="ProCont">13210623438</text>
			</view>
			<view class="acDiv">
				<text class="proName proTime">预约时间</text>
				<view class="ProCont">
					<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange" class="uni-input">
						<view >{{date}}</view>
					</picker>
				</view>
			</view>
			<view class="acDiv last">
				<view class="">
					活动反馈
				</view>
				<view class="feedback">
					示例文字示例文字示例文字示例文字示例文字示例文字示例文字示例文字示例文字
				</view>
				<view>
					<upload-img class="imagess"
						:width="160"
						:height="160"
						bgsrc="../../static/temp/bg.png"
						@chooseimg="handleChooseImg">
					</upload-img>
				</view>
			</view>
		</view>
		<button type="primary" class="apply">立即报名</button>
		
	</view>
</template>

<script>
	import uploadImg from '@/components/amazarashi-uploadimg/uploadImg.vue'
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	export default {
		components: {uniPopup,uploadImg},
		data() {
			const currentDate = this.getDate({
			            format: true
			        })
			return {
				date: currentDate,
				src:''
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
			 handleChooseImg(e){
				console.log('imageSrc:',e);
			},
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
.apply{
	background-color: #C30D24;
	width: 620rpx;
	line-height: 78rpx;
	border-radius: 40rpx;
	font-size: 28rpx;
	margin-top: 40rpx;
}
.imagess{
	margin: 20rpx 15rpx;
	box-shadow:0px 0px 16px 0px rgba(102,102,102,0.06);
}
.feedback{
	padding: 20rpx;
	background-color: #F5F5F5;
	color: #666;
}
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
