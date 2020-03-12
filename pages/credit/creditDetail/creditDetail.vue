<template>
	<view>
		<view class="content" >
			<!-- v-for="(item, index) in detail" :key="index" -->
			<view class="texture">
				<text class="nature">组织名称</text>
				<text class="navalue">{{detail.name}}</text>
			</view><!--组织-->
			<view class="texture" >
				<text class="nature">状态</text>
				<text class="navalue">正常</text>
			</view><!--状态-->
			<view class="texture" >
				<text class="nature">统一信用代码</text>
				<text class="navalue">{{detail.unicode}}</text>
			</view><!--统一信用代码-->
			<view class="texture" >
				<text class="nature">登记日期</text>
				<text class="navalue">{{detail.reg_time}}</text>
			</view><!--登记日期-->
			<view class="texture" >
				<text class="nature">注册地址</text>
				<text class="navalue">{{detail.reg_area}}</text>
			</view><!--注册地址-->
			<view class="texture" >
				<text class="nature">社会组织类型</text>
				<text class="navalue">{{detail.society_type}}</text>
			</view><!--社会组织类型-->
			<view class="texture" >
				<text class="nature">法定代表人</text>
				<text class="navalue">{{detail.legal_person}}</text>
			</view><!--法定代表人-->
			<view class="texture" >
				<text class="nature">业务主管单位</text>
				<text class="navalue">{{detail.supervisor}}</text>
			</view><!--业务主管单位-->
			<view class="texture" >
				<text class="nature">开办资金</text>
				<text class="navalue">{{detail.money}}</text>
			</view><!--开办资金-->
			<view class="texture" >
				<text class="nature">有效日期-开始</text>
				<text class="navalue">{{detail.start_time}}</text>
			</view><!--有效日期-开始-->
			<view class="texture" >
				<text class="nature">有效日期-结束</text>
				<text class="navalue">{{detail.society_type}}</text>
			</view><!--有效日期-结束-->
			<view class="texture" >
				<text class="nature">业务范围</text>
				<text class="navalue range">{{detail.business}}</text>
			</view><!--业务主管单位-->
			<view class="texture">
				<text class="nature">变更信息</text>
				<text class="navalue change_info">{{detail.change_info}}</text>
			</view><!--变更信息-->
			<view class="texture">
				<text class="nature">2015年检情况</text>
				<text class="navalue"></text>
			</view><!--变更信息-->
			<view class="texture">
				<text class="nature">2016年检情况</text>
				<text class="navalue">合格</text>
			</view><!--变更信息-->
			<view class="texture">
				<text class="nature">2017年检情况</text>
				<text class="navalue">合格</text>
			</view><!--变更信息-->
			<view class="texture">
				<text class="nature">2018年检情况</text>
				<text class="navalue">合格</text>
			</view><!--变更信息-->
			<view class="texture">
				<text class="nature">评估情况</text>
				<text class="navalue">{{detail.assess}}</text>
			</view><!--评估情况-->
			<view class="texture">
				<text class="nature">承接政府购买服务情况</text>
				<text class="navalue">{{detail.accept_buy}}</text>
			</view><!--承接政府购买服务情况-->
			<view class="texture">
				<text class="nature">接收表彰情况</text>
				<text class="navalue">{{detail.accept_honor}}</text>
			</view><!--接收表彰情况-->
			<view class="texture">
				<text class="nature">行政处罚情况</text>
				<text class="navalue">{{detail.admini_punish}}</text>
			</view><!--行政处罚情况-->
			<view class="texture">
				<text class="nature">活动异常情况</text>
				<text class="navalue">{{detail.activity_unusual}}</text>
			</view><!--活动异常情况-->
			<view class="texture">
				<text class="nature">活动异常情况开始时间</text>
				<text class="navalue">{{detail.activity_unusual_start}}</text>
			</view><!--活动异常情况开始时间-->
			<view class="texture">
				<text class="nature">活动异常情况结束时间</text>
				<text class="navalue">{{detail.activity_unusual_end}}</text>
			</view><!--活动异常情况结束时间-->
			<view class="texture">
				<text class="nature">严重失信情况</text>
				<text class="navalue">{{detail.break_faith}}</text>
			</view><!--严重失信情况-->
			<view class="texture">
				<text class="nature">严重失信开始时间</text>
				<text class="navalue">{{detail.break_faith_start}}</text>
			</view><!--严重失信开始时间-->
			<view class="texture">
				<text class="nature">严重失信结束时间</text>
				<text class="navalue">{{detail.break_faith_end}}</text>
			</view><!--严重失信结束时间-->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				detail:[]
			}
		},
		onLoad(options) {
			this.id=options.id
			console.log(options)
			this.getDatails()
		},
		methods: {
			getDatails() {
				let id=this.id
				let data={
					id:id
				}
				this.$get('v1/soc/credit',data)
				.then(res=>{
					this.detail=res.data[0]
				})
			}
		}
	}
</script>

<style>
.texture{
	border-bottom: 2rpx solid #EAEAEA;
	line-height: 60rpx;
	padding: 10rpx;
	margin: 0 20rpx;
	overflow: hidden;
}
.nature{
	font-size:28rpx;
	font-weight:600;
	color:rgba(51,51,51,1);
	float: left;
}
.navalue{
	float: right;
	color:#666 ;
	font-size: 26rpx;
	line-height: 45rpx;
	text-align: right;
	width: 290rpx;
}
.range{
	width: 100%;
}
.change_info{
	width: 320px;
}
</style>
