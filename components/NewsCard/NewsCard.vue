<template>
	<view>
		<view v-for="(item,index) in newsList" :key="index">
			<view class="card">
				<view class="card-text">
					<view class="card-title">
						{{item.title}}
					</view>
					<view class="card-info">
						<span>{{item.source}}</span>
						<span>{{timediffer(new Date(item.ctime))}}</span>
					</view>
				</view>
				<view class="">
					<img :src="item.picUrl" alt="" width="120" height="100">
				</view>
			</view>
			<u-line class="line" color="red" />
		</view>
	</view>
</template>

<script>
	export default {
		name: "NewsCard",
		data() {
			return {};
		},
		props: {
			newsList: {
				type: Array,
				default: () => [],
			},
		},
		methods: {
			// 时差计算(传入时间戳)
			timediffer(last, now) {
				const options = {
					year: '年前',
					month: '个月前',
					day: '天前',
					hour: '小时前',
					minute: '分钟前',
					second: '秒前',
					just: '刚刚',
				}
				if (!now) {
					var now = new Date();
				}
				const timer = (now - last) / 1000; // 获取秒数
				let tip = '';
				if (timer <= 0 || Math.floor(timer / 60) <= 0) { // 小于60s,刚刚
					tip = options.just;
				} else if (timer < 60 * 60) {
					tip = Math.floor(timer / 60) + `${options.minute}`;
				} else if (timer < 60 * 60 * 24) {
					tip = Math.floor(timer / 3600) + `${options.hour}`;
				} else if (timer < 60 * 60 * 24 * 30) {
					tip = Math.ceil(timer / 86400) + `${options.day}`;
				} else {
					tip = Math.floor(timer / (86400 * 24)) + `${options.month}`;
				}
				return tip;
			}
		}
	}
</script>

<style lang="scss">
	.card {
		display: flex;
		margin-bottom: 5rpx;
		align-items: center;
		height: 127px;

		.card-text {
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			height: 100%;
			width: 220px;
		}

		.card-title {
			color: #222;
			font-size: 36rpx;
			font-weight: 600;
		}

		.card-info {
			color: #999;

			span {
				padding: 0 10rpx;
			}
		}
	}
</style>
