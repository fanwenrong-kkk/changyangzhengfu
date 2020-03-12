<template>
	<view>
		<view class="huiCon">
			<text>一、项目申报书</text>
		</view>
		<view class="content declaration" v-for="(item,index) in data" :key="index" >
			<a :href="item.pifu" download class="book">xzx实施方案.doc</a>
			<view class="bookRight">
				<a :href="item.pifu" download><image src="../../../static/load.png" mode="" class="load"></image></a>
				<a :href="item.pifu"  target="_blank" class="look">预览</a>
			</view>
		</view>
		<view class="huiCon">
			<text>二、立项批复文件</text>
		</view>
		<view class="content declaration" v-for="(item,index) in data" :key="index">
			<a :href="item.pifu" download class="book">xzx实施方案.doc</a>
			<view class="bookRight">
				<a :href="item.pifu" download><image src="../../../static/load.png" mode="" class="load"></image></a>
				<a :href="item.pifu"  target="_blank" class="look">预览</a>
			</view>
		</view>
		<view class="huiCon">
			<text>三、实施方案</text>
		</view>
		<view class="content declaration" v-for="(item,index) in data" :key="index">
			<a :href="item.pifu" download class="book">xzx实施方案.doc</a>
			<view class="bookRight">
				<a :href="item.pifu" download><image src="../../../static/load.png" mode="" class="load"></image></a>
				<a :href="item.pifu"  target="_blank" class="look">预览</a>
			</view>
		</view>
		<view class="huiCon">
			<text>四、街道（地区办事处）关于2019年社会建设资金购买社会组织服务结项材料的说明</text>
		</view>
		<view class="content declaration" v-for="(item,index) in data" :key="index">
			<a :href="item.pifu" download class="book">xzx实施方案.doc</a>
			<view class="bookRight">
				<a :href="item.pifu" download><image src="../../../static/load.png" mode="" class="load"></image></a>
				<a :href="item.pifu"  target="_blank" class="look">预览</a>
			</view>
		</view>
		<view class="huiCon">
			<text>五、项目实施各阶段情况报告</text>
		</view>
		<view class="content declaration" v-for="(item,index) in data" :key="index">
			<a :href="item.pifu" download class="book">xzx实施方案.doc</a>
			<view class="bookRight">
				<a :href="item.pifu" download><image src="../../../static/load.png" mode="" class="load"></image></a>
				<a :href="item.pifu"  target="_blank" class="look">预览</a>
			</view>
		</view>
		<view class="content" > 
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
			<view class="statList-white" v-for="(item,index) in data[0].mon" :key="index">
				<view class="staName">{{item.name}}</view>
				<view class="staName staMit">{{item.type}}</view>
				<view class="staName check"> {{item.project_id}} </view>
				<view class="staName">{{item.created_at}}</view>
			</view>
			<!-- <view class="statList">
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
			</view> -->
		</view>
		<view class="huiCon">
			<text>六、中期评估报告</text>
		</view>
		<view class="content declaration activity" v-for="(item,index) in data" :key="index">
			<view class="actives">
				<text>8.1 中期评估报告</text>
			</view>
			<view class="projectDesign">
				<a :href="item.pifu" download class="book">xzx实施方案.doc</a>
				<view class="bookRight">
					<a :href="item.pifu" download><image src="../../../static/load.png" mode="" class="load"></image></a>
					<a :href="item.pifu"  target="_blank" class="look">预览</a>
				</view>
			</view>
			<view class="actives">
				<text>8.2中期评估报告会</text>
			</view>
			<view class="projectDesign">
				<a :href="item.pifu" download class="book">xzx实施方案.doc</a>
				<view class="bookRight">
					<a :href="item.pifu" download><image src="../../../static/load.png" mode="" class="load"></image></a>
					<a :href="item.pifu"  target="_blank" class="look">预览</a>
				</view>
			</view>
		</view>
		<view class="huiCon">
			<text>七、结项报告</text>
			<image src="../../../static/xiaKey.png" mode="" class="xiakey danwei"></image>
		</view>
		<view class="content">
			<view class="basic">1、基本信息</view>
			<view class="info">项目名称：婚博会</view>
			<view class="info">机构名称：婚礼机构</view>
			<view class="info">项目起止日期：2019-09-09至2019-10-10</view>
			<view class="info">
					<text class="fengong">项目执行团队人员构成及分工：</text>
					<text >中国共产党运用马克思主义世界观和方法论</text>
			</view>
		</view>
		<view class="huiCon">
			<text>八、项目调整申请及批复</text>
		</view>
		<view class="content declaration"  v-for="(item,index) in data" :key="index">
			<a :href="item.pifu" download class="book">xzx实施方案.doc</a>
			<view class="bookRight">
				<a :href="item.pifu" download><image src="../../../static/load.png" mode="" class="load"></image></a>
				<a :href="item.pifu"  target="_blank" class="look">预览</a>
			</view>
		</view>
		<view class="huiCon">
			<text>九、会议活动的相关资料（通知、议程、参加人员名单及
签到表、现场照片或视频、会议纪要、活动总结报告媒体
报道满意度测评表及报告等）</text>
		</view>
		<view class="content declaration activity"  v-for="(item,index) in data" :key="index">
			<view class="active">
				<text>活动一：婚博会</text>
			</view>
			<view class="projectDesign">
				<a :href="item.pifu" download class="book">xzx实施方案.doc</a>
				<view class="bookRight">
					<a :href="item.pifu" download><image src="../../../static/load.png" mode="" class="load"></image></a>
					<a :href="item.pifu"  target="_blank" class="look">预览</a>
				</view>
			</view>
			<view class="active">
				<text>活动二：婚博会</text>
			</view>
			<view class="projectDesign">
				<a :href="item.pifu" download class="book">xzx实施方案.doc</a>
				<view class="bookRight">
					<a :href="item.pifu" download><image src="../../../static/load.png" mode="" class="load"></image></a>
					<a :href="item.pifu"  target="_blank" class="look">预览</a>
				</view>
			</view>
		</view>
		<view class="huiCon">
			<text>十、反映项目实施效果的相关材料（媒体报道、获奖情况
文字成果、案例等）</text>
		</view>
		<view class="content declaration" v-for="(item,index) in data" :key="index">
			<a :href="item.pifu" download class="book">xzx实施方案.doc</a>
			<view class="bookRight">
				<a :href="item.pifu" download><image src="../../../static/load.png" mode="" class="load"></image></a>
				<a :href="item.pifu"  target="_blank" class="look">预览</a>
			</view>
		</view>
		<view class="huiCon">
			<text>十一、财务管理制度</text>
		</view>
		<view class="content declaration" v-for="(item,index) in data" :key="index">
			<a :href="item.pifu" download class="book">xzx中期评估.doc</a>
			<view class="bookRight">
				<a :href="item.pifu" download><image src="../../../static/load.png" mode="" class="load"></image></a>
				<a :href="item.pifu" target="_blank" class="look">预览</a>
			</view>
		</view>
		<view class="huiCon">
			<text>十二、项目经费表</text>
		</view>
		<view class="content declaration lastCon" v-for="(item,index) in data" :key="index">
			<a :href="item.pifu" download class="book">xzx中期评估.doc</a>
			<view class="bookRight">
				<a :href="item.pifu" download><image src="../../../static/load.png" mode="" class="load"></image></a>
				<a :href="item.pifu"  target="_blank" class="look">预览</a>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data:[],
				// mon:[]
			}
		},
		onShow() {
			this.getExecute()
		},
		methods: {
			getExecute(){
				this.$get('v1/pro/execute?id=154')
				.then(res=>{
					this.data=res.data.data
					// this.mon=res.data.data.mon[0]
				})
			},
		}
	}
</script>

<style>
page{
	background-color: #fff;
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
.declaration{
	padding: 50rpx 20rpx ;
}
.book{
	color: #295498;
	margin-left: 40rpx;
}
.load{
	width: 29rpx;
	height: 28rpx;
	vertical-align: middle;
}
.look{
	color: #5397FD;
	font-size: 24rpx;
	margin:0 30rpx;
}
.bookRight{
	float: right;
}


.stat,.news{
	color: #1E91F2;
	font-size:30rpx;
	margin: 0 56rpx;
}
.news{
	color: #333;
}
.content{
	width: 630rpx;
	padding: 20rpx 30rpx 80rpx;
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

.huiCon{
	width:650rpx;
	background-color: #F6F6F6;
	margin: 10rpx auto;
	border-radius: 15rpx;
	padding:10rpx 20rpx;
	font-weight: 600;
	font-size: 26rpx
}
.actives{
	background-color: #F9F9FB;
	padding: 0 35rpx;
	margin: 10rpx 30rpx;
	border-radius: 15rpx;
	line-height: 60rpx;
}
.active{
	background-color: #F9F9FB;
	padding: 0 35rpx;
}
.activity{
	width: 690rpx;
	padding: 0rpx;
}
.projectDesign{
	padding: 50rpx 20rpx;
}
.basic{
	font-size: 24rpx;
	
}
.info{
	line-height: 70rpx;
	overflow: hidden;
	font-size: 22rpx;
	color: #999;
}
.fengong{
	float: left;
}
.xiakey{
	width: 22rpx;
	height: 12rpx;
}
.danwei{
	float: right;
	margin-top: 20rpx;
	padding-right: 30rpx;
}
.lastCon{
	margin-bottom: 100rpx;
}
</style>
