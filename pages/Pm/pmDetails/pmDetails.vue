<template>
	<view> 
		<view >
				<WucTab :tab-list="tabList" :tabCur.sync="TabCur" @change="tabChange" :textFlex="true" :tabCur='TabCur' style="box-shadow:0px 0rpx 10rpx 0rpx rgba(153,153,153,0.1);"></WucTab>
		</view>
		
		
		<view v-if="TabCur==0">
			<view class="Activity" @click="toJiance">
				<text class="acty">发起活动监测</text>
				<image src="../../../static/back.png" mode="" class="rightKey tabright"></image>
			</view>
			<view class="content" >
				<uni-steps :options="arr" 
					direction="column" :active="active">
				</uni-steps>
			</view>
		</view>
		<view v-if="TabCur==1">
			<view class="content" v-for="(item,index) in execute" :key="index">
				<view class="oneInfo">
					一、基本信息
				</view>
				<view class="onName"  >
					<text class="proName">项目名称</text>
					<text class="proValue">{{item.name}}</text>
				</view>
				<view class="onName">
					<text class="proName">执行机构</text>
					<text class="proValue">{{item.company}}</text>
				</view>
				<view class="xKey">
					<image src="../../../static/xiaKey.png" mode="" class="xiakey"></image>
				</view>
			</view>
			<view >
				<view class="huiCon">
					<text>二、申报单位简介</text>
					<image src="../../../static/xiaKey.png" mode="" class="xiakey danwei"></image>
				</view>
				<view class="content con">
					111111111111
				</view>
				<view class="huiCon">
					<text>三、项目简介</text>
					<image src="../../../static/rightKey.png" mode="" class="rightKey danwei"></image>
				</view>
				<view class="content con">
					111111111111
				</view>
				<view class="huiCon">
					<text>四、项目论证</text>
					<image src="../../../static/xiaKey.png" mode="" class="xiakey danwei"></image>
				</view>
				<view class="content con">
					111111111111
				</view>
				<view class="content con">
					<view class="">
						<text class="biyao">(一)项目实施的必要性、可行性</text>
					</view>
					<view class="">
						<text class="texts" space="nbsp">  在革命建设改革各个历史时期，中国共产党运用马克思主义世界观和方法论，系统、具体、历史地分析中国社会运动及其发展规律，在实践过程中形成了实事求是、问题导向等一系列科学的思想方法和工作方法。习近平总书记关于掌握马克思主义思想方法和工作方法的重要论述，是马克思主义世界观和方法论在当代中国的具体运用</text>
					</view>
					<view class="proTwo">
						<text class="biyao">
							(二)项目实施的已有基础、具体方法和途径及进度安排、预期效果及完成时间
						</text>
					</view>
					<view class="">
						<text class="texts" space="nbsp">项目实施涵盖范围</text>
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
				<view class="content con">
					111111111111
				</view>
				<view class="huiCon">
					<text>七、主责单位意见</text>
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
			
			<view class=""><!-- 添加 -->
				<view class="huiCon">
					<text>初筛环节评审</text>
					<image src="../../../static/xiaKey.png" mode="" class="xiakey danwei"></image>
				</view>
				<view class="links">
					<view v-for="(item, index) in tit" :key="index" >
						<view class="titles" >
							<view class="titName">
								<text>xxx专家1</text>
							</view>
							<view class="numbers">
								20.00
							</view>
						</view>
						<view class="conTexts">
							<view class="">
								评审意见
							</view>
							<view >
								<text class="ctext">习近平总书记关于掌握马克思主义思想方法和工作方法的重要论述，是马克思主义世界观和方法论在当代中国的具体运用</text>
							</view>
						</view>
					</view>
					<view>
						<view class="titles" >
							<view class="titName">
								<text>评估机构</text>
							</view>
							<view class="numbers">
								20.00
							</view>
						</view>
						<view class="conTexts">
							<view class="">
								评审意见
							</view>
							<view >
								<text class="ctext">习近平总书记关于掌握马克思主义思想方法和工作方法的重要论述，是马克思主义世界观和方法论在当代中国的具体运用</text>
							</view>
						</view>
					</view>
					<view>
						<view class="titles" >
							<view class="titName">
								<text>主管单位</text>
							</view>
							<view class="numbers">
								20.00
							</view>
						</view>
						<view class="conTexts">
							<view class="">
								评审意见
							</view>
							<view >
								<text class="ctext">习近平总书记关于掌握马克思主义思想方法和工作方法的重要论述，是马克思主义世界观和方法论在当代中国的具体运用</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			
		</view>
		<view v-if="TabCur==2">
			<view class="Activity" @click="toRing()" >
						<text class="acty">项目过程活动监测</text>
						<image src="../../../static/back.png" mode="" class="rightKey huoright"></image>
					</view>
					<view class="content" v-for="(item,index) in execute" :key="index">
						<view class="oneInfo">
							一、项目信息
						</view>
						<view class="onName">
							<text class="proName">项目名称</text>
							<text class="proValue">{{item.name}}</text>
						</view>
						<view class="onName">
							<text class="proName">执行机构</text>
							<text class="proValue">{{item.company}}</text>
						</view>
						<view class="xKey">
							<image src="../../../static/xiaKey.png" mode="" class="xiakey"></image>
						</view>
					</view>
					<view class="huiCon" @click="open"  v-for="(item,index) in execute" :key="index">
						<text >二、项目申报书</text>
						<uni-popup ref="popup" type="center">
							<view class="shenbao">
								<view class="ples">
									<view class="select">请选择查看文件</view>
									<image src="../../../static/no.png" class="no" @click="close"></image>
								</view>
								<view class="wenjian">
									<view class="shu"  v-for="(item, index) in informData" :key="index">
										<image src="../../../static/books.png" class="books"></image>
										<view class="book">xzx申报书.doc</view>
									</view>
								</view>
							</view>
						</uni-popup>
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
					<view class="huiCon" @click="toAssess()" >
						<text>六、中期评估</text>
						<text  class="more">查看更多</text>
					</view>
					<view class="huiCon" @click="toPostPrject()" >
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
						<view class="statList-white" v-for="(item,index) in execute[0].mon" :key="index">
							<view class="staName">{{item.name}}</view>
							<view class="staName staMit">{{item.type}}</view>
							<view class="staName check"  >
								<text @click="open">查看</text>
								<uni-popup :show="true" type="middle">
									<view>使用插槽</view>
								</uni-popup>
								<!-- <uni-popup ref="popup" type="center">
									<view class="shenbao">
										<view class="ples">
											<view class="select">请选择查看文件</view>
											<image src="../../../static/no.png" class="no" @click="close"></image>
										</view>
										<view class="wenjian">
											<view class="shu"  v-for="(item, index) in informData" :key="index">
												<image src="../../../static/books.png" class="books"></image>
												<view class="book">xzx申报书.doc</view>
											</view>
										</view>
										
									</view>
								</uni-popup> -->
							</view>
							<view class="staName">{{item.created_at}}</view>
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
						<view class="statList-white" v-for="(item,index) in execute[0].mon" :key="index">
							<view class="staName">{{item.name}}</view>
							<!-- <view class="staName staMit">{{item.type}}</view> -->
							<view class="staName check"> {{item.project_id}} </view>
							<view class="staName">{{item.created_at}}</view>
						</view>
					</view>
		</view>
	</view>
</template>

<script>
	import uniSteps from '@/components/uni-steps/uni-steps.vue'
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	import WucTab from '@/components/wuc-tab/wuc-tab.vue';
	export default {
	    data() {
	        return {
				tit:[1,2,3,4],
				data:null,
				ProjectDetails:[],
				informData:[1,2,3,4],
				execute:[],
				del:[],
				arr:[],
				active:3,
	          TabCur: 0,
	          tabList: [{ name: '项目进展' }, { name: '申报信息' }, { name: '执行信息' }],
	        }},
		 components:{ WucTab ,uniPopup,uniSteps},
		 onLoad(res) {
		 	if(res.id){
		 		this.id=res.id
		 		this.getDel()
		 	}
		 	
		 },
		 onShow() {
		 	this.getExecute()
			this.postDetset()
		 },
	    methods: {  
			getDel(){
				let _this=this
				let id = this.id
				this.$post('v1/project/details',{id})
				.then(res => {
					if (res.code == 200) {
						_this.type=res.data.ProjectDetails
						// this.area=res.data.area
						// this.status=res.data.status
					}
				})
				.catch()
			},
			getExecute(){
				this.$get('v1/pro/execute?id=154')
				.then(res=>{
					this.execute=res.data.data
				})
			},
			postDetset(){
				let id = this.id
				this.$post('v1/project/detset',{id})
				.then(res=>{
					this.del=res.data.data
					for (let i=0;i<this.del.ProjectReview.length;i++) {
						let obj={};
						obj.title=this.del.ProjectReview[i].string;
						this.arr.push(obj)
					}
				})
			},
	        tabChange(index) {
	            this.TabCur = index;
	        },
			toRing(){
				uni.navigateTo({
					url:'../pmNotJoin/pmNotJoin'
				})
			},
			toAssess(){
				uni.navigateTo({
					url:'../pmAssess/pmAssess'
				})
			},
			toPostPrject(){
				uni.navigateTo({
					url:'../pmPostProject/pmPostProject'
				})
			},
			toJiance(){
				uni.navigateTo({
					url:'../pmMonitor/pmMonitor'
				})
			},
			open(){
			        // 需要在 popup 组件，指定 ref 为 popup
			         this.$refs.popup.open()
			     },
			close(){
				this.$refs.popup.close()
			}
			
	    }
	}
</script>

<style>
.ctext{
	color: #666;
	opacity: 0.8;
	font-size: 24rpx
}
.conTexts{
	padding: 40rpx;
}
.links{
	width: 690rpx;
	margin: 0 auto;
	box-shadow:0px 10rpx 10rpx 10rpx rgba(153,153,153,0.1);
	border-radius: 20rpx;
	/* border-top-left-radius: 20rpx;
	border-top-right-radius: 20rpx; */
}
/* .title{
	border-top-left-radius: 20rpx;
	border-top-right-radius: 20rpx;
} */
.titles{
	width: 650rpx;
	display: flex;
	background-color: #F9F9FB;
	padding:10rpx 20rpx;
	
}
.titName{
	margin-left: 20rpx;
	width: 200rpx
}
.numbers{
	width: 450rpx;
	text-align: right;
	padding-right: 20rpx;
	color: #EE8C4E;
}
.no{
	width: 15rpx;
	height: 15rpx;
	float: right;
	margin: 30rpx 30rpx 0 0;
}
.select{
	font-size: 24rpx;
	margin: 0 auto;
	padding: 20rpx 0;
}
.wenjian,.ples{
	display: flex;
}
.shu{
	text-align: center;
	padding: 20rpx 5rpx;
}
.shenbao{
	background-color: #fff;
	border-radius: 15rpx;
	
}
.books{
	width: 95rpx;
	height: 91rpx;
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
.dui{
	width: 40rpx;
	height: 40rpx;
}
.xian{
	width: 4rpx;
	height: 80rpx;
	background-color: #6184EF;
	position: relative;
	top: 40rpx;
	left: -24rpx;
}
.last{
	display: flex;
	margin-bottom: 40rpx;
	padding: 0 30rpx;
}
.pro{
	margin-left: 20rpx;
}
.xing{
	width: 41rpx;
	height: 42rpx;
}
.zgpro{
	opacity:0.6;
	margin-bottom:40rpx
}



.oneInfo{
	border-bottom: 1rpx solid #EAEAEA;
	font-size: 26rpx;
	font-weight: 600;
	line-height: 60rpx;
	padding: 0 20rpx;
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
	font-size: 25rpx;
	font-weight: normal;
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
	padding: 50rpx 20rpx;
}
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
	margin:15rpx 0;
}
.tabright{
	margin-top: 15px;
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
	margin: 0  50rpx;
}
.news{
	color: #333;
}
.content{
	width: 630rpx;
	padding: 30rpx;
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
	display: initial;
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
.huoright{
	margin-top: 27rpx;
}
</style>
