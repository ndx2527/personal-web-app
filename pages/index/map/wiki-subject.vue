<template>
	<view class="content">
		<view class="header">
			<view class="header-title">
				题目:
			</view>
			<view class="header-text">
				{{question.title}}
			</view>
		</view>
		<view class="card">
			<view class="card-title">
				选择答案
			</view>
			<view class="card-line"></view>
			<view class="card-answer">
				<view class="card-answerLi" :class="{ error:choose=='A',correct: question.answer=='A'&&state}"
					@click="chooseAnswer('A')">
					<view class="card-answerNum">A</view>
					<view class="card-text">{{question.answerA}}</view>
				</view>
				<view class="card-answerLi" :class="{  error:choose=='B',correct: question.answer=='B'&&state}"
					@click="chooseAnswer('B')">
					<view class="card-answerNum">B</view>
					<view class="card-text">{{question.answerB}}</view>
				</view>
				<view class="card-answerLi" :class="{  error:choose=='C',correct: question.answer=='C'&&state}"
					@click="chooseAnswer('C')">
					<view class="card-answerNum">C</view>
					<view class="card-text">{{question.answerC}}</view>
				</view>
				<view class="card-answerLi" :class="{  error:choose=='D',correct: question.answer=='D'&&state}"
					@click="chooseAnswer('D')">
					<view class="card-answerNum">D</view>
					<view class="card-text">{{question.answerD}}</view>
				</view>
			</view>
		</view>
		<view class="analysis" v-if="parsing">
			<text>答案：{{question.answer}}</text>
			<br>
			<text>解析：{{question.analytic?question.analytic:'无'}}</text>
		</view>

		<view class="bottom-button">
			<u-button type="primary" plain @click='lookParsing'>查看解析</u-button>
			<u-button type="error" plain @click="nextQuestion">下一题</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		// 点击以后锁定状态
		// 正确答案为绿色，如果选错，你选的答案为红色，然后答题状态改为true
		data() {
			return {
				question: {
					analytic: "",
					answer: "",
					answerA: "",
					answerB: "",
					answerC: "",
					answerD: "",
					title: "",
				},
				state: false, // 记录答题状态，true为已经答题
				choose: '', // 你选择的答案
				parsing: false, // 解析开关
			}
		},
		onLoad() {
			this.getTiandata()
		},
		methods: {
			// 发送请求，获取数据
			getTiandata() {
				this.$u.get('http://api.tianapi.com/baiketiku/index', {
					// 发送参数可以不填写
					key: 'c498f8d96e8d9ad2368513957311caf3',
				}).then(res => {
					this.question = res.newslist[0];
					console.log(res);
					console.log(this.question);
				});
			},
			// 点击下一题
			nextQuestion() {
				this.state = false; // 答题状态改为false
				this.choose = '' // 选择的答案置空
				this.parsing = false;
				this.getTiandata()
			},
			// 点击选择答案
			chooseAnswer(value) {
				if (!this.state) {
					this.state = true;
					this.choose = value;
				}
			},
			// 查看解析
			lookParsing() {
				if (this.state) {
					this.parsing = true;
				}
			}
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
					margin: 3px 0;
					box-sizing: border-box;
					border: solid rgb(255, 255, 255) 1px;

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
						width: 540rpx;
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
			justify-content: space-around;
		}

		.analysis {
			padding: 0rpx 40rpx;
			padding-bottom: 200rpx;
			color: $u-content-color;
			font-size: 32rpx;
			line-height: 1.8;
			// text-indent: 2em;
		}

		// 回答错误
		.error {
			border: solid rgb(255, 0, 0) 1px !important;
			background-color: rgba(255, 0, 0, 0.1);
			border-radius: 4px;
			box-sizing: border-box;
		}

		// 正确答案
		.correct {
			background-color: rgba(34, 193, 31, 0.1);
			border: solid rgb(34, 193, 31) 1px !important;
			border-radius: 4px;
			box-sizing: border-box;
		}
	}
</style>
