<template>
	<view>
		<WucTab :tab-list="tabList" :tabCur.sync="TabCur" @change="tabChange" :textFlex="true" :tabCur='tabCur'></WucTab>
		<view class="content">
			<view class="oneInfo">
				一、基本信息
			</view>
			<view class="onName">
				<text class="proName">项目名称</text>
				<text class="proValue">申报单位</text>
			</view>
			<view class="onName">
				<text class="proName">执行机构</text>
				<text class="proValue">申报单位</text>
			</view>
			<view class="xKey">
				<image src="../../../static/xiaKey.png" mode="" class="xiakey"></image>
			</view>
		</view>
		<view class="huiCon">
			<text>二、申报单位简介</text>
			<image src="../../../static/xiaKey.png" mode="" class="xiakey danwei"></image>
		</view>
		<view class="huiCon">
			<text>三、项目简介</text>
			<image src="../../../static/rightKey.png" mode="" class="rightKey danwei"></image>
		</view>
		<view class="huiCon">
			<text>四、项目论证</text>
			<image src="../../../static/xiaKey.png" mode="" class="xiakey danwei"></image>
		</view>
		<view class="content con">
			<view class="">
				<text class="biyao">(一)项目实施的必要性、可行性</text>
			</view>
			<view class="">
				<text class="texts" space="nbsp">  在革命建设改革各个历史时期，中国共产党运用马克思主义世界观和方法论，系统、具体、历史地分析中国社会运动及其发展规律，在实践过程中形成了实事求是、问题导向等一系列科学的思想方法和工作方法。习近平总书记关于掌握马克思主义思想方法和工作方法的重要论述，是马克思主义世界观和方法论在当代中国的具体运用</text>
			</view>
			<view class="proTwo">
				<text class="biyao">(二)项目实施的已有基础、具体方案和途径及进度安排、预期效果及完成时间</text>
			</view>
			<view class="">
				<text class="texts" space="nbsp">在实践过程中形成了实事求是、问题导向等一系列科学的思想方法和工作方法。习近平总书记关于掌握马克思主义思想方法和工作方法的重要论述，是马克思主义世界观和方法论在当代中国的具体运用</text>
			</view>
		</view>
		<view class="huiCon">
			<text>五、经费预算</text>
			<image src="../../../static/xiaKey.png" mode="" class="xiakey danwei"></image>
		</view>
		<view class="content">
			<image src="../../../static/budget%20.png" mode="" class="budget"></image>
		</view>
		<view class="huiCon">
			<text>六、申报单位承诺</text>
			<image src="../../../static/rightKey.png" mode="" class="rightKey danwei"></image>
		</view>
		<view class="huiCon">
			<text>七、项目主责单位意见</text>
			<image src="../../../static/xiaKey.png" mode="" class="xiakey danwei"></image>
		</view>
		<view class="content declaration">
			<text class="book">xzx申报书.doc</text>
			<view class="bookRight">
				<image src="../../../static/load.png" mode="" class="load"></image>
				<text class="look">预览</text>
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
	padding: 20rpx;
	font-weight: 600
}
.danwei{
	float: right;
	margin-top: 20rpx;
	padding-right: 30rpx;
}
.rightKey{
	width: 12rpx;
	height: 22rpx;
}
.con{
	width:600rpx;
	padding:40rpx
}
.biyao{
	font-size: 28rpx;
	font-weight: 600;
	opacity: 0.8;
}
.texts{
	font-size: 24rpx;
	opacity: 0.6;
}
.proTwo{
	margin-top: 40rpx;
}
.budget{
	width: 620rpx;
	height: 268rpx;
	margin-left: 20rpx;
}
.book{
	color: #295498;
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
.declaration{
	padding: 50rpx 20rpx ;
}
</style>
