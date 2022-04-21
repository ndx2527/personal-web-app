<template>
	<view class="set-ul">
		<view class="" v-for="(item,index) in list" :key="index">
			<navigator class="set-li" :url="item.url">
				<view>
					<u-icon name="calendar" color="#0faeff" size="28"></u-icon>
					<text>{{item.name}}</text>
				</view>
				<u-icon name="arrow-right" color="#858585" size="28"></u-icon>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						name: "社会新闻",
						url: "./map/Sociology-news"
					},
					{
						name: "百科题库",
						url: "./map/wiki-subject"
					},
					{
						name: "IT资讯",
						url: "./map/IT-news"
					},
					{
						name: "今日头条新闻",
						url: "./map/today-news"
					},
					{
						name: "垃圾分类新闻",
						url: "./map/rubbish-news"
					},
					{
						name: "周公解梦",
						url: "./map/zhou-dreams"
					},
					{
						name: "一站到底",
						url: "./map/stand-last"
					},
					{
						name: "经典台词",
						url: "./map/classic-lines"
					},
					{
						name: "互联网资讯",
						url: "./map/internet-news"
					},
				]
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.set-ul {
		padding: 15rpx;

		.set-li {
			padding: 30rpx;
			display: flex;
			justify-content: space-between;
			font-size: 28rpx;

			text {
				margin: 30rpx;
			}
		}
	}
</style>
