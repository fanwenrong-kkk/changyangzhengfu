<template>
	<view>
		<view class="detail_box" v-if="tab==1">
			<view class="content">
					<view class="detail" >
						<text class="detail_lf">
							活动名称
						</text>
						<view class="inputs">
							{{info.active_name}}
						</view>
					</view>
					<view class="detail">
						<text class="detail_lf">
							组织机构
						</text>
						<view class="inputs">
							{{info.organization_name}}
						</view>
					</view>
					<view class="detail">
						<text class="detail_lf">
							截止时间
						</text>
						<view class="inputs">
							{{info.end_time}}
						</view>
					</view>
					<view class="detail">
						<text class="detail_lf">
							活动地点
						</text>
						<view class="inputs">
							{{info.place}}
						</view>
					</view>
					<view class="detail">
						<text class="detail_lf">
							活动联系人
						</text>
						<view class="inputs">
							{{info.contacts}}
						</view>
					</view>
					<view class="detail">
						<text class="detail_lf">
							联系方式
						</text>
						<view class="inputs">
							{{info.phone}}
						</view>
					</view>
					<view class="detail last">
						<text class="detail_lf">
							活动详情
						</text>
						<view class="introduce">
							{{info.detail}}
						</view>
					</view>
				</view>
			<button type="primary" class="apply_btn" @click="toDetail()">立即报名</button>
		</view>
		
		
		<view class="" v-if="tab==2">
			<view class="detail_box">
				<view class="content">
					<view class="detail">
						<text class="detail_lf">
							状态
						</text>
						<text class="texts stats">{{info.status}}</text>
					</view>
						<view class="detail">
							<text class="detail_lf">
								活动名称
							</text>
							<text class="texts">{{info.active_name}}</text>
						</view>
						<view class="detail">
							<text class="detail_lf">
								组织机构
							</text>
							<text class="texts">{{info.organization_name}}</text>
						</view>
						<view class="detail">
							<text class="detail_lf">
								截止时间
							</text>
							<text class="texts">{{info.end_time}}</text>
						</view>
						<view class="detail">
							<text class="detail_lf">
								活动地点
							</text>
							<view class="city">
								<text class="texts ">{{info.place}}</text>
							</view>
							
						</view>
						<view class="detail">
							<text class="detail_lf">
								活动联系人
							</text>
							<text class="texts">{{info.contacts}}</text>
						</view>
						<view class="detail">
							<text class="detail_lf">
								联系方式
							</text>
							<text class="texts">{{info.phone}}</text>
						</view>
						<view class="detail">
							<text class="detail_lf">
								活动详情
							</text>
							<view class="introduce">
								{{info.detail}}
							</view>
						</view>
						<view class="detail">
							<text class="detail_lf">
								参会人数
							</text>
							<text class="texts">112</text>
						</view>
						<view class="detail">
							<text class="detail_lf">
								参会明细
							</text>
							<image src="../../../static/rightKey.png" class="rightKey"></image>
						</view>
						<view class="detail last">
							<text class="detail_lf">
								参会二维码
							</text>
							<view class="erweima">
								<image :src="info.code_url" mode=""></image>
							</view>
						</view>
					</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				info:'',
				tab:1
			}
		},
		onLoad(res) {
			this.detailGet()
		},
		methods:{
			toDetail(){
				let id=this.info.id
				let name=this.info.organization_name
				uni.navigateTo({
					url:'../information/information?id='+id+"&name="+name
				})
			},
			detailGet(){
				let id=2 
				let url='v1/actives/actives?id='+id
				this.$get(url)
				.then(res=>{
					if(res.code==200){
						this.info=res.data
						// console.log(this.info.id)
						// console.log(999)
					}else{
						console.log(101010)
						
					}
				})
			}
		}
	}
</script>
<style>
	.erweima image{
		width: 250rpx;
		height: 250rpx;
		margin: 40rpx auto;
	}
	.rightKey{
		width: 20rpx;
		height: 25rpx;
		float: right;
		margin: 26rpx 40rpx 0 0;
		
	}
	.city{
		width: 350rpx;
		float: right;
		padding: 20rpx 0;
	}
	.stats{
		color: #8BC34A;
	}
	.inputs{
		float: right;
	}
	.texts{
		/* border: 1rpx solid; */
		margin-top: 15rpx;
		color: #666;
	}
	.detail{
		border-bottom: 1px solid #EAEAEA;
		overflow: hidden;
		line-height: 80rpx;
		
	}
	.detail_lf{
		width: 300rpx;
		display: inline-block;
		color: #333333;
	}
	
	.introduce{
		color: #666666;
		padding-bottom: 20rpx;
	}
	.apply_btn{
		background: #C30D24;
		margin: 20rpx 30rpx;
		border-radius: 30rpx;
	}
	.last{
		border: 0;
	}
	.apply_btn{
		margin-top: 100rpx;
	}
</style>
