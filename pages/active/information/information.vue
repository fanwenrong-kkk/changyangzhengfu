<template>
	<view class="infro_box">
		<view class="content">
			<view class="infor_list">
				<text class="infor_names">机构名称</text>
				<view class="inputs">
					<input type="text" class="texts"  v-model="name"/>
				</view>
			</view>
			<view class="infor_list">
				<image src="../../../static/infor_xing.png" mode="" class="peop"></image>
				<text class="infor_name">联系人1</text>
				<view class="inputs">
					<input type="text" class="texts" v-model="contact" />
				</view>
			</view>
			<view class="infor_list">
				<image src="../../../static/infor_xing.png" mode="" class="peop"></image>
				<text class="infor_name">职务</text>
				<view class="inputs">
					<input type="text" class="texts" v-model="posts" />
				</view>
			</view>
			<view class="infor_lists">
				<image src="../../../static/infor_xing.png" mode="" class="peop"></image>
				<text class="infor_name">联系方式</text>
				<view class="inputs">
					<input type="text" class="texts" v-model="phone" />
				</view>
			</view>
		</view>
		<view class="content">
			<view class="infor_list">
				<text class="infor_name">联系人2</text>
				<view class="inputs">
					<input type="text" class="texts" v-model="contact_t" />
				</view>
			</view>
			<view class="infor_list">
				<text class="infor_name">职务</text>
				<view class="inputs">
					<input type="text" class="texts" v-model="posts_t" />
				</view>
			</view>
			<view class="infor_lists">
				<text class="infor_name">联系方式</text>
				<view class="inputs">
					<input type="text" class="texts" v-model="phone_t" />
				</view>
			</view>
		</view>
		<view class="content">
			<view class="infor_list">
				<text class="infor_name">联系人3</text>
				<view class="inputs">
					<input type="text" class="texts" v-model="contact_th" />
				</view>
			</view>
			<view class="infor_list">
				<text class="infor_name">职务</text>
				<view class="inputs">
					<input type="text" class="texts" v-model="posts_th" />
				</view>
			</view>
			<view class="infor_lists">
				<text class="infor_name">联系方式</text>
				<view class="inputs">
					<input type="text" class="texts" v-model="phone_th" />
				</view>
			</view>
		</view>
		<view class="content">
			<view class="infor_list">
				<text class="infor_name">联系人4</text>
				<view class="inputs">
					<input type="text" class="texts" v-model="contact_f" />
				</view>
			</view>
			<view class="infor_list">
				<text class="infor_name">职务</text>
				<view class="inputs">
					<input type="text" class="texts" v-model="posts_f" />
				</view>
			</view>
			<view class="infor_lists">
				<text class="infor_name">联系方式</text>
				<view class="inputs">
					<input type="text" class="texts" v-model="phone_f" />
				</view>
			</view>
		</view>
		<view class="content">
			<view class="infor_list">
				<text class="infor_name">联系人5</text>
				<view class="inputs">
					<input type="text" class="texts" v-model="contact_v" />
				</view>
			</view>
			<view class="infor_list">
				<text class="infor_name">职务</text>
				<view class="inputs">
					<input type="text" class="texts"  v-model="posts_v" />
				</view>
			</view>
			<view class="infor_lists">
				<text class="infor_name">联系方式</text>
				<view class="inputs">
					<input type="text" class="texts"  v-model="phone_v" />
				</view>
			</view>
		</view>
		<view class="content">
			<view class="infor_list">
				<text class="infor_name">联系人6</text>
				<view class="inputs">
					<input type="text" class="texts" v-model="contact_s" />
				</view>
			</view>
			<view class="infor_list">
				<text class="infor_name">职务</text>
				<view class="inputs">
					<input type="text" class="texts" v-model="posts_s" />
				</view>
			</view>
			<view class="infor_lists">
				<text class="infor_name">联系方式</text>
				<view class="inputs">
					<input type="text" class="texts" v-model="phone_s" />
				</view>
			</view>
		</view>
		<button type="primary" class="apply_btn" @click="requestinfo()">立即报名</button>
	</view>
	
</template>

<script>
	export default{
		data(){
			return{
				name:"",
				id:"",
				contact:"",
				posts:"",
				phone:"",
				contact_t:"",
				posts_t:"",
				phone_t:"",
				contact_th:"",
				posts_th:"",
				phone_th:"",
				contact_f:"",
				posts_f:"",
				phone_f:"",
				contact_v:"",
				posts_v:"",
				phone_v:"",
				contact_s:"",
				posts_s:"",
				phone_s:""
			}
		},
		onLoad(options){
			console.log(options.id+options.name)
			this.name=options.name
			this.id=options.id
		},
		methods:{
			requestinfo(){
				this.$post('v1/actives/apply-active',{
					'organization_name':'organization_name',
					'active_id':'active_id',
					'data':[
						{
							contact:this.contact,
							posts:this.posts,
							phone:this.phone
						},
						{
							contact:this.contact_t,
							posts:this.posts_t,
							phone:this.phone_t
						},
						{
							contact:this.contact_th,
							posts:this.posts_th,
							phone:this.phone_th
						},
						{
							contact:this.contact_f,
							posts:this.posts_f,
							phone:this.phone_f
						},
						{
							contact:this.contact_v,
							posts:this.posts_v,
							phone:this.phone_v
						},
						{
							contact:this.contact_s,
							posts:this.posts_s,
							phone:this.phone_s
						}
					]
				})
				.then(res=>{
					console.log(res)
					if(this.contact&&this.posts&&this.phone){
						uni.navigateTo({
							url:'../perActiveApply/perActiveApply'
						})
					}
					uni.showToast({
						title:'信息不能为空！'
					})
				}).catch(err=>{
					console.log(err)
				})
			},
		}
	}
</script>

<style>
.inputs{
	float: right;
}
.texts{
	/* border: 1rpx solid; */
	margin-top: 10rpx;
}
.infor_list,.infor_lists{
	border-bottom: 1px solid #EAEAEA;
	line-height: 60rpx;
	position: relative;

}
.infor_lists{
	border: none !important;
}
.infor_name{
	color: #333;
	font-size: 28rpx;
	padding: 0 18rpx;
}
.infor_rt{
	float: right;
}
.peop{
	width: 14rpx;
	height: 18rpx;
	margin: 0 15rpx;
	vertical-align: middle;
	position: absolute;
	left: -20rpx;
	top: 20rpx;
}
.apply_btn{
	background: #C30D24;
	margin: 20rpx 30rpx;
	border-radius: 30rpx;
}
</style>
