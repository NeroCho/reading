<template>
	<div>
		<div class="infinite-container" v-bind:style="{  height: height + 'px' }">
			<mu-list>
				<mu-sub-header>福利</mu-sub-header>
				<img class="fuli " :src="fuli.url " />
			</mu-list>
			<mu-divider />
			<mu-list>
				<mu-sub-header>前端</mu-sub-header>
				<mu-list-item v-for="item of frontEnd " v-bind:title="item.who ">
					<mu-avatar :src="item.images[0]+ '?imageView2/0/w/80' " slot="leftAvatar " v-if="item.images && item.images.length>0" />
					<span slot="describe">
                {{item.desc}}
              </span>
				</mu-list-item>
			</mu-list>

			<mu-divider />
			<mu-list>
				<mu-sub-header>Android</mu-sub-header>
				<mu-list-item v-for="item of android" v-bind:title="item.who">
					<mu-avatar :src="item.images[0]+'?imageView2/0/w/80'" slot="leftAvatar" v-if="item.images && item.images.length>0" />
					<span slot="describe">
                {{item.desc}}
              </span>
				</mu-list-item>
			</mu-list>

			<mu-divider />
			<mu-list>
				<mu-sub-header>iOS</mu-sub-header>
				<mu-list-item v-for="item of ios" v-bind:title="item.who">
					<mu-avatar :src="item.images[0]+'?imageView2/0/w/80'" slot="leftAvatar" v-if="item.images && item.images.length>0" />
					<span slot="describe">
                {{item.desc}}
              </span>
				</mu-list-item>
			</mu-list>

			<mu-divider />
			<mu-list>
				<mu-sub-header>休息视频</mu-sub-header>
				<mu-list-item v-for="item of vedio" v-bind:title="item.who">
					<mu-avatar :src="item.images[0]+'?imageView2/0/w/80'" slot="leftAvatar" v-if="item.images && item.images.length>0" />
					<span slot="describe">
                {{item.desc}}
              </span>
				</mu-list-item>
			</mu-list>
		</div>
	</div>
</template>

<style lang="less" scoped>
  @import "../assets/theme.less";
  .fuli {
    width:100%;
  }
  .loading {
    position: absolute;
    top: 0;
    left: 50%;
    background: #fff;
    width: 3rem;
    height: 3rem;
    margin-top: 70%;
    margin-left: -1.5rem;
    background: url('../../static/rage_loading.png') no-repeat;
    background-size: cover;
    -webkit-animation: rotating 5s  linear infinite;
    animation: rotating 5s linear infinite;
  }
  .loading-txt {
    position: absolute;
    top:0;
    color: #4a4a4a;
    margin-top: 90%;
    width: 100%;
    text-align:center;
  }

  @keyframes rotating {
      0%{
        transform: rotate(0deg);
      }
      100%{
        transform: rotate(360deg);
      }
  }
	.infinite-container{
	width: 100%;
	overflow: auto;
	-webkit-overflow-scrolling: touch;
}
</style>
<script>
	const ANDROID = 'Android', IOS = 'iOS', VEDIO = '休息视频', FRONTEND = '前端', FULI = '福利'
	import api from '../api'
	export default {
		data() {
			return {
				height: window.innerHeight - 56 - 48 - 10,
				fuli: '',
				frontEnd: [],
				ios: [],
				android: [],
				vedio: '',
				windowheight: window.innerHeight
			}
		},
		components: {

		},
		watch: {
			// '$route'(to, from) {
			//   const path = to.path
			//   var tmpArr = path.split('/')
			//   if (tmpArr[1] === 'index') {
			//     this.handleTabChange(tmpArr[2])
			//   }
			// }
		},
		created() {
			this.init()

			this.$store.commit('toggleGankLoading', false)
			// var tmpArr = this.$route.path.split('/')
			// if (tmpArr[1] === 'index') {
			//   this.handleTabChange(tmpArr[2])
			// }
		},
		methods: {
			init() {
				let fromStoreDaily = this.$store.state.daily;
				if (fromStoreDaily.hasData === false) {
					this.$http.get(api.getDaily()).then((res) => {

						let data = res.data
						this.fuli = data.results[FULI][0]
						this.frontEnd = data.results[FRONTEND]
						this.ios = data.results[IOS]
						this.android = data.results[ANDROID]
						this.vedio = data.results[VEDIO]

						data.hasData = true
						this.$store.commit('updateDaily', data)
					})
				} else {
					console.log('daily form cache')
					this.fuli = fromStoreDaily.results[FULI][0]
					this.frontEnd = fromStoreDaily.results[FRONTEND]
					this.ios = fromStoreDaily.results[IOS]
					this.android = fromStoreDaily.results[ANDROID]
					this.vedio = fromStoreDaily.results[VEDIO]
				}

			}
		},
		computed: {
		}
	}
</script>