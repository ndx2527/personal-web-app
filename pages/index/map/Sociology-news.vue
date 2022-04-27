<template>
	<view class="content">
		<NewsCard :newsList="news"></NewsCard>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				news: []
			}
		},
		methods: {
			getTiandata() {
				this.$u.get('http://api.tianapi.com/internet/index', {
					// 发送参数可以不填写
					key: 'c498f8d96e8d9ad2368513957311caf3',
					num: 10,
				}).then(res => {
					if (res.code == 200) {
						this.news = res.newslist;
					}
					console.log(this.news);
				});
			},
		},
		onLoad() {
			this.getTiandata()
		},
		onReachBottom() {
			// console.log('123')
		}
	}
</script>

<style>
	.content {
		padding: 30rpx;
	}
</style>
