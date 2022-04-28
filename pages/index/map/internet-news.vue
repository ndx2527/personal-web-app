<template>
	<view class="content">
		<NewsCard :newsList="news"></NewsCard>
		<u-loadmore :status="status" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				news: [],
				status: 'loadmore',
				page: 1
			}
		},
		methods: {
			getTiandata() {
				this.$u.get('http://api.tianapi.com/internet/index', {
					// 发送参数可以不填写
					key: 'c498f8d96e8d9ad2368513957311caf3',
					num: 10,
					page: this.page
				}).then(res => {
					if (res.code == 200) {
						this.news.push(...res.newslist);
						// this.news = res.newslist;
						console.log(this.news)
					}
				});
			},
		},
		onLoad() {
			this.getTiandata()
		},
		onReachBottom() {
			this.page++;
			this.status = 'loading';
			// this.getTiandata()
			setTimeout(() => {
				this.getTiandata()
			}, 800)
		}
	}
</script>

<style>
	.content {
		padding: 30rpx;
	}
</style>
