<template>
	<view class="content">
		<view class="header">
			<view class="header-title">
				题目:
			</view>
			<view class="header-text">
				新冠肺炎的最长潜伏期一般是多久？
				新冠肺炎的最长潜伏期一般是多久？
				新冠肺炎的最长潜
			</view>
		</view>
		<view class="card">
			<view class="card-title">
				选择答案
			</view>
			<view class="card-line"></view>
			<view class="card-answer">
				<view class="card-answerLi">
					<view class="card-answerNum">A</view>
					<view class="card-text">1-2天</view>
				</view>
				<view class="card-answerLi">
					<view class="card-answerNum">B</view>
					<view class="">3-7天</view>
				</view>
				<view class="card-answerLi">
					<view class="card-answerNum">C</view>
					<view class="">14天</view>
				</view>
				<view class="card-answerLi">
					<view class="card-answerNum">D</view>
					<view class="">28天</view>
				</view>
			</view>
		</view>
		<view class="analysis">
			解析：新型冠状病毒感染性肺炎属于呼吸道传播性疾病，该病一般最常见的传播途径有飞沫传播，气溶胶传播，粪口传播及眼部粘膜传播，潜伏期一般为3-5天，最长不超过14天左右，也有因人而异，超过以上天数。或许以无症状感染者，不发病。该病确诊有赖于核酸病毒检测，同时做好多饮水，勤洗手，出门戴口罩，避免人群聚集，导致交叉感染。
		</view>

		<view class="bottom-button">
			<u-button type="primary" plain>查看解析</u-button>
			<u-button type="error" plain>下一题</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	page {
		height: 100vh;
		width: 100vw;
		background-color: rgb(250, 247, 248);
		padding-top: 30rpx;

		.header {
			height: 200rpx;
			width: 100%;
			background-color: #fff;
			padding: 30rpx;
			color: rgb(195, 80, 76);
			line-height: 1.5;

			.header-title {
				font-size: 36rpx;
				font-weight: 600;
				margin-bottom: 10rpx;
			}
		}

		.card {
			margin: 30rpx auto;
			width: 700rpx;
			background: #FFFFFF;
			box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.06);
			border-radius: 4px;
			border: 1px solid #E4E7ED;
			display: flex;
			flex-direction: column;

			.card-title {
				text-align: center;
				height: 80rpx;
				line-height: 80rpx;
				font-size: 40rpx;
			}

			.card-line {
				width: 100%;
				height: 2rpx;
				background: #E4E7ED;
			}

			.card-answer {
				display: flex;
				flex-direction: column;
				padding: 20rpx;

				.card-answerLi {
					display: flex;
					align-items: center;
					padding: 15rpx 10rpx;

					.card-answerNum {
						background-color: rgb(158, 152, 154);
						border-radius: 50%;
						height: 60rpx;
						width: 60rpx;
						line-height: 60rpx;
						text-align: center;
						margin-right: 20rpx;
						color: #FFFFFF;
					}

					.card-text {
						color: $u-content-color;
					}
				}
			}
		}

		.bottom-button {
			display: flex;
			position: fixed;
			bottom: 35rpx;
			left: 50rpx;
			right: 50rpx;
		}

		.analysis {
			padding: 0rpx 40rpx;
			padding-bottom: 200rpx;
			color: $u-content-color;
			font-size: 32rpx;
			line-height: 1.8;
			text-indent: 2em;
		}
	}
</style>
