<template>
	<view>
		<WucTab :tab-list="tabList" :tabCur.sync="TabCur" @change="tabChange" :textFlex="true" :tabCur='2' class="tablist"></WucTab>
		<view class="Activity">
			<text class="acty">项目过程活动监测</text>
			<image src="../../../static/back.png" mode="" class="rightKey"></image>
		</view>
		<view class="content">
			<view class="oneInfo">
				一、项目信息
			</view>
			<view class="onName">
				<text class="proName">项目名称</text>
				<text class="proValue">婚博会</text>
			</view>
			<view class="onName">
				<text class="proName">执行机构</text>
				<text class="proValue">婚礼机构</text>
			</view>
			<view class="xKey">
				<image src="../../../static/xiaKey.png" mode="" class="xiakey"></image>
			</view>
		</view>
		<view class="huiCon">
			<text>二、项目申报书</text>
			<image src="../../../static/rightKey.png" mode="" class="rightKey danwei"></image>
		</view>
		<view class="huiCon">
			<text>三、实施方案</text>
			<image src="../../../static/rightKey.png" mode="" class="rightKey danwei"></image>
		</view>
		<view class="huiCon">
			<text>四、立项批复文件</text>
			<image src="../../../static/rightKey.png" mode="" class="rightKey danwei"></image>
		</view>
		<view class="huiCon">
			<text>五、服务承诺书</text>
			<image src="../../../static/rightKey.png" mode="" class="rightKey danwei"></image>
		</view>
		<view class="huiCon">
			<text>六、中期评估</text>
			<text  class="more">查看更多</text>
		</view>
		<view class="huiCon">
			<text>七、结项评估</text>
			<text  class="more">查看更多</text>
		</view>
		<view class="content">
			<view class="statement">
				<text class="stat">月工作统计报表</text>
				<text class="news">优秀活动新闻稿</text>
			</view>
			<view class="statList">
				<view class="staName">项目名称</view>
				<view class="staName">提交情况</view>
				<view class="staName">文件名称</view>
				<view class="staName">提交时间</view>
			</view>
			<view class="statList-white">
				<view class="staName">世界婚博</view>
				<view class="staName staMit">正常提交</view>
				<view class="staName check"> 查看 </view>
				<view class="staName">2019-10-05</view>
			</view>
			<view class="statList">
				<view class="staName">世界婚博</view>
				<view class="staName severity">严重提交</view>
				<view class="staName check"> 查看 </view>
				<view class="staName">2019-10-05</view>
			</view>
			<view class="statList-white staLast">
				<view class="staName">世界婚博</view>
				<view class="staName delay">延迟提交</view>
				<view class="staName check"> 查看 </view>
				<view class="staName">2019-10-05</view>
			</view>
		</view>
		<view class="content">
			<view class="statement">
				<text class="news">月工作统计报表</text>
				<text class="stat">优秀活动新闻稿</text>
			</view>
			<view class="statList">
				<view class="staName">项目名称</view>
				<view class="staName">文件名称</view>
				<view class="staName">提交时间</view>
			</view>
			<view class="statList-white">
				<view class="staName">世界婚博</view>
				<view class="staName check"> timg.doc </view>
				<view class="staName">2019-10-05</view>
			</view>
			<view class="statList">
				<view class="staName">世界婚博</view>
				<view class="staName check"> timg.doc </view>
				<view class="staName">2019-10-05</view>
			</view>
			<view class="statList-white staLast">
				<view class="staName">世界婚博</view>
				<view class="staName check"> timg.doc </view>
				<view class="staName">2019-10-05</view>
			</view>
		</view>
	</view>
</template>

<script>
	import WucTab from '@/components/wuc-tab/wuc-tab.vue';
	export default {
		data() {
		    return {
		      TabCur: 0,
		      tabList: [{ name: '项目进展' }, { name: '申报信息' }, { name: '执行信息' }],
		    }},
		 components:{ WucTab },
		methods: {
		    tabChange(index) {
		        this.TabCur = index;
		    }
		}
	}
</script>

<style>
.tablist{
	box-shadow: 0 0 60rpx 0 #E6E6E6;
}
.Activity{
	width: 630rpx;
	height: 80rpx;
	background-color: #C30D24;
	border-radius: 15rpx;
	margin: 0 auto;
	padding:0 30rpx
}
.acty{
	color: #fff;
	line-height: 80rpx;
}
.rightKey{
	width: 14rpx;
	height: 26rpx;
	vertical-align: middle;
	float: right;
	margin:25rpx 0;
}
.oneInfo{
	border-bottom: 1rpx solid #EAEAEA;
	font-size: 26rpx;
	font-weight: 600;
	line-height: 60rpx;
}
.proName{
	font-size: 24rpx;
	padding: 10rpx 20rpx;
}
.proValue{
	float: right;
}
.onName{
	padding: 10rpx 10rpx;
	font-size: 26rpx;
	font-weight: 600;
}
.xiakey{
	width: 22rpx;
	height: 12rpx;
}
.xKey{
	width: 100%;
	text-align: center;
}
.huiCon{
	width:650rpx;
	background-color: #F6F6F6;
	margin: 10rpx auto;
	border-radius: 15rpx;
	padding:10rpx 20rpx;
	font-weight: 600;
	font-size: 26rpx
}
.danwei{
	float: right;
	margin-top: 13rpx;
	padding-right: 30rpx;
}
.rightKey{
	width: 12rpx;
	height: 22rpx;
}
.more{
	color: #6184EF;
	font-size: 26rpx;
	float: right;
	font-weight: normal;
	margin-right: 20rpx;
}
.stat,.news{
	color: #1E91F2;
	font-size:30rpx;
	margin: 0  60rpx;
}
.news{
	color: #333;
}
.content{
	width: 690rpx;
	padding: 0;
	padding-bottom: 10rpx;
}
.statList,.statList-white{
	display: flex;
	justify-content:space-around;
	background-color: #F9F9FB;
}
.staName{
	font-size: 22rpx;
	line-height: 50rpx;
	
}
.statement{
	line-height: 80rpx;
}
.statList-white{
	background-color: #fff;
	text-align: center;
}
.staMit{
	color: #1E9E49;
}
.check{
	color:#6D73E1 ;
	margin-left: 30rpx;
}
.severity{
	color:#FF0000 ;
}
.delay{
	color: #FF8A00;
}
.staLast{
	padding:0 0rpx 20rpx;
}
</style>
