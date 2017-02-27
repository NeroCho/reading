<template>
	<div>
		<div class="infinite-container" v-bind:style="{  height: height + 'px' }">
			<mu-grid-list class="gridlist">
				<mu-grid-tile v-for="item in list">
					<img :src="item.url" />
					<span slot="title">{{item.desc}}</span>
					<span slot="subTitle">by <b>{{item.who}}</b></span>
					<mu-icon-button icon="star_border" slot="action" />
				</mu-grid-tile>
			</mu-grid-list>

			<mu-infinite-scroll :scroller="scroller" :loading="loading" @load="init" />
		</div>
	</div>
</template>

<style lang="less" scoped>
@import "../assets/theme.less";
.infinite-container{
	width: 100%;
	height:100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	overflow: auto;
	-webkit-overflow-scrolling: touch;
}
// .gridlist{
// 	width:100%;
// 	overflow-y: auto;
// }

</style>
<script>
	const ANDROID = 'Android', IOS = 'iOS', VEDIO = '休息视频', FRONTEND = '前端', FULI = '福利'
	import api from '../api'
	export default {
		data() {
			return {
				bottomSheet: false,
				pageCount: 10,
				pageNumber: 1,
				list: [],
				loading: false,
				scroller: null,
				height: window.innerHeight - 56 - 48 - 10
			}
		},
		components: {

		},
		created() {
			this.init();
		},
		mounted() {
			this.scroller = this.$el.children[0]
		},
		methods: {
			init() {
				this.loading = true
				this.$http.get(api.getGirls(this.pageCount, this.pageNumber)).then((res) => {
					this.list = this.list.concat(res.data.results)
					this.pageNumber++
					this.loading = false
				})
			}
		},
		computed: {
		}
	}
</script>