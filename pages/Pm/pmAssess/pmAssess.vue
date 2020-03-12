<template>
	<view>
		<view class="huiCon">
			<text>一、项目申报书</text>
		</view>
		<view class="content declaration" v-for="(item,index) in data" :key="index">
			<a :href="item.pifu" download class="book">xzx实施方案.doc</a>
			<view class="bookRight">
				<a :href="item.pifu" download><image src="../../../static/load.png" mode="" class="load"></image></a>
				<a :href="item.pifu"  target="_blank" class="look">预览</a>
			</view>
		</view>
		<view class="huiCon">
			<text>二、项目实施方案</text>
		</view>
		<view class="content declaration" v-for="(item,index) in data" :key="index">
			<a :href="item.probook" download class="book">xzx实施方案.doc</a>
			<view class="bookRight">
				<a :href="item.probook" download><image src="../../../static/load.png" mode="" class="load"></image></a>
				<a :href="item.probook" download class="look">预览</a>
			</view>
		</view>
		<view class="huiCon">
			<text>三、中期报告</text>
			<image src="../../../static/xiaKey.png" mode="" class="xiakey danwei"></image>
		</view>
		<view class="content">
			<view class="basic">1、基本信息</view>
			<view class="info">项目名称：婚博会</view>
			<view class="info">机构名称：婚礼机构</view>
			<view class="info">项目起止日期：2019-09-09至2019-10-10</view>
			<view class="info">
					<text class="fengong">项目执行团队人员构成及分工：</text>
					<text class="crew">中国共产党运用马克思主义世界观和方法论</text>
			</view>
		</view>
		<view class="huiCon">
			<text>四、项目调整申请表及批复意见表</text>
		</view>
		<view class="content declaration" v-for="(item,index) in data" :key="index">
			<a :href="item.pifu" download class="book">xzx实施方案.doc</a>
			<view class="bookRight">
				<a :href="item.pifu" download><image src="../../../static/load.png" mode="" class="load"></image></a>
				<a :href="item.pifu"  target="_blank" class="look">预览</a>
			</view>
		</view>
		<view class="huiCon">
			<text>五、活动类/培训类/会议类材料</text>
		</view>
		<view class="content declaration activity">
			<view class="active">
				<text>活动一：婚博会</text>
			</view>
			<view class="projectDesign" v-for="(item,index) in data" :key="index">
				<a :href="item.pifu" download class="book">xzx实施方案.doc</a>
				<view class="bookRight">
					<a :href="item.pifu" download><image src="../../../static/load.png" mode="" class="load"></image></a>
					<a :href="item.pifu"  target="_blank" class="look">预览</a>
				</view>
			</view>
			<view class="active">
				<text>活动二：婚博会</text>
			</view>
			<view class="projectDesign" v-for="(item,index) in data" :key="index">
				<a :href="item.pifu" download class="book">xzx实施方案.doc</a>
				<view class="bookRight">
					<a :href="item.pifu" download><image src="../../../static/load.png" mode="" class="load"></image></a>
					<a :href="item.pifu"  target="_blank" class="look">预览</a>
				</view>
			</view>
		</view>
		<view class="huiCon">
			<text>六、财务中期预算表</text>
		</view>
		<view class="content declaration" v-for="(item,index) in data" :key="index">
			<a :href="item.pifu" download class="book">xzx实施方案.doc</a>
			<view class="bookRight">
				<a :href="item.pifu" download><image src="../../../static/load.png" mode="" class="load"></image></a>
				<a :href="item.pifu"  target="_blank" class="look">预览</a>
			</view>
		</view>
		<view class="huiCon">
			<text>七、其他类</text>
		</view>
		<view class="content declaration" v-for="(item,index) in data" :key="index">
			<a :href="item.probook" download class="book">xzx实施方案.doc</a>
			<view class="bookRight">
				<a :href="item.probook" download><image src="../../../static/load.png" mode="" class="load"></image></a>
				<a :href="item.probook" download class="look">预览</a>
			</view>
		</view>
		<view class="huiCon">
			<text>八、中期PPT文件</text>
		</view>
		<view class="content declaration lastCon" v-for="(item,index) in data" :key="index">
			<a :href="item.promise" download class="book">xzx实施方案.doc</a>
			<view class="bookRight">
				<a :href="item.promise" download><image src="../../../static/load.png" mode="" class="load"></image></a>
				<a :href="item.promise" download class="look">预览</a>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data:null,
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
				})
			},
			// navigate(url){
			// 	uni.downloadFile({
			// 	  url: url,
			// 	  success: function (res) {
			// 	    var filePath = res.tempFilePath;
			// 	    uni.openDocument({
			// 	      filePath: filePath,
			// 	      success: function (res) {
			// 	        console.log('打开文档成功');
			// 	      }
			// 	    });
			// 	  }
			// 	});
			// 	// uni.navigateTo({
			// 	// 	url:'../../doc/doc?src='+e
			// 	// })
			// },
		}
	}
</script>

<style>
a{
	text-decoration: none;
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
.xiakey{
	width: 22rpx;
	height: 12rpx;
}
.danwei{
	float: right;
	margin-top: 20rpx;
	padding-right: 30rpx;
}
/*  */
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
.crew{
	width: 300rpx;
	float: right;
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
.lastCon{
	margin-bottom: 150rpx;
}
</style>
