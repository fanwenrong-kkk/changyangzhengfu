<template>
	<view>
		<view class="content">
			<view class="acDiv">
				<text class="proName">项目名称</text>
				<!-- <input type="text" class="ProCont" placeholder="婚博会"/> -->
				<text class="ProCont">{{pmData.name}}</text>
			</view>
			<view class="acDiv">
				<text class="proName">机构名称</text>
				<input type="text" class="ProCont" placeholder="婚博会"/>
				<!-- <text class="ProCont">婚礼机构</text> -->
			</view>
			<view class="acDiv">
				<text class="proName">活动名称</text>
				<input type="text" class="ProCont" placeholder="婚博会"/>
				<!-- <text class="ProCont">婚博会</text> -->
			</view>
			<view class="acDiv">
				<text class="proName">活动地点</text>
				<input type="text" class="ProCont" placeholder="婚博会"/>
				<!-- <text class="ProCont">婚博会</text> -->
			</view>
			<view class="acDiv">
				<text class="proName">活动内容</text>
				<textarea type="text" class="ProCont pContent" placeholder="山东省青岛市和本社区山东省青岛市和本社区山东省青岛和本社区"  ></textarea>
				<!-- <text class="ProCont">婚博会</text> -->
			</view>
			<view class="acDiv">
				<text class="proName">预计参赛人数</text>
				<input type="text" class="ProCont" placeholder="婚博会"/>
				<!-- <text class="ProCont">婚博会</text> -->
			</view>
			<view class="acDiv">
				<text class="proName">项目联系人</text>
				<input type="text" class="ProCont" placeholder="婚博会"/>
				<!-- <text class="ProCont">婚博会</text> -->
			</view>
			<view class="acDiv">
				<text class="proName">联系方式</text>
				<input type="text" class="ProCont" placeholder="婚博会"/>
				<!-- <text class="ProCont">婚博会</text> -->
			</view>
		</view>
		<view class="goodFeedback" @click="toAttend()">满意度方反馈</view>
		<view class="content">
			<view class="acDiv" @click="toProExtion()">
				<text class="proName">状态</text>
				<text class="ProCont">无法参加</text>
			</view>
			<view class="acDiv">
				<text class="proName">反馈意见</text>
				<view class="feedback">无法参加无法参加无法参加无法参加无法参加无法参加无法参加无法参加无法参加无法参加无法参加</view>
			</view>
			<view class="acDiv Ytime">
				<text class="proName">预约时间</text>
				<ePicker startYear="2020" endYear="2030" defaultValue="2020-02-23" @btnConfirm="confirm" class="ProCont" >
					<text>请选择</text> 
				</ePicker>
				<!-- <text class="ProCont">请选择</text> -->
			</view>
			<button type="primary"  class="toInitiate">重新发起</button>
		</view>
		<view class="goodFeedback">评估机构反馈</view>
		<view class="content">
			<view class="acDiv" @click="toShowJoin()">
				<text class="proName">状态</text>
				<text class="ProCont">无法参加</text>
			</view>
			<view class="acDiv" @>
				<text class="proName">反馈意见</text>
				<view class="feedback">
					<textarea placeholder="反馈意见反馈意见反馈意见反馈意见反馈意见反馈意见反馈意见反馈意见反馈意见反馈意见反馈意见反馈意见反馈意见反馈意见反馈意见反馈意见反馈意见"></textarea>
				</view>
			</view>
			<view class="acDiv Ytime">
				<text class="proName">预约时间</text>
				<ePicker startYear="2020" endYear="2030" defaultValue="2020-02-23" @btnConfirm="confirm" class="ProCont" >
					<text>请选择</text> 
				</ePicker>
				<!-- <input type="date"   class="ProCont" placeholder="请选择" /> -->
				<!-- <text class="ProCont">请选择</text> -->
			</view>
			<button type="primary"  class="toInitiate">重新发起</button>
		</view>
	</view>
</template>

<script>
	    import ePicker from '@/components/e-picker/e-picker.vue'
	export default {
		components:{
		    ePicker
		},
		data() {
			return {
				pmData:[],
				name:''
			}
		},
		onShow() {
			this.getList()
		},
		methods: {
			confirm(obj){
                console.log(obj)
            },
			toProExtion(){
				uni.navigateTo({
					url:'../pmNotJoin/pmNotJoin'
				})
			},
			toShowJoin(){
				uni.navigateTo({
					url:'../pmShowJoin/pmShowJoin'
				})
			},
			toAttend(){
				uni.navigateTo({
					url:'../pmHaveAttend/pmHaveAttend'
				})
			},
			getList() {
				this.$get('v1/pro/execute?id=154')
				.then(res=>{
					this.pmData=res.data.data.info
					console.log(res);
				})
			}
		}
	}
</script>

<style>
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
	color: #666;
}
.pContent{
	text-align: left;
}
.goodFeedback{
	font-size: 28rpx;
	color: #666;
	margin: 0 40rpx;
}
.feedback{
	color: #666;
	margin: 0 30rpx;
}
.Ytime{
	border: 0;
}
.toInitiate{
	width:450rpx;
	border-radius: 50rpx;
	background-color: #C30D24;
	line-height: 60rpx;
	font-size: 28rpx;
	margin: 20rpx auto 20rpx;
}
</style>
