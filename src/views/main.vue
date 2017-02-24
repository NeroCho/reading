<template>
	<div>
		<mu-tabs :value="activeTab" @change="handleTabChange" class="view-tabs">
			<mu-tab value="dailyPush" title="每日推荐" />
			<mu-tab value="gankList" title="干货" />
			<mu-tab value="girls" title="福利" />
		</mu-tabs>
		<div class="loading-wrapper" v-if="$store.state.gankLoading">
			<div class="loading"></div>
			<div class="loading-txt">正在加载中</div>
		</div>
		<div class="container" v-show="!$store.state.gankLoading">
			<div class="wrapper">
				<template v-if="activeTab === 'dailyPush'">
					<dailyPush></dailyPush>
				</template>
				<template v-else-if="activeTab === 'gankList'">
					<gankList></gankList>
				</template>
				<template v-else>
					<girls></girls>
				</template>
			</div>
		</div>
	</div>
</template>
<style lang="less" scoped>
  @import "../assets/theme.less";
  .view-tabs {
    background-color: #fff;
    color: rgba(0,0,0,.87);
    >.mu-tab-link {
      color: rgba(102,102,102,1);
    }
    >.mu-tab-active{
      color: @primaryColor;
    }
  }

  .img-response {
    max-width: 100%;
    height: auto;
  }
  .wrapper {
    padding: 0 5px;
  }
  // 通用的标题样式
  .g-title {
    padding-left: 25px;
    color: #333;
    height: 35px;
    line-height: 35px;
    font-size: 16px;
    a {
      float: right;
      font-size: 12px;
      color: #666;
    }
  }
  // banner样式
  .banner-item {
    width: 100%;
    height: 7.4rem;
    background: url('../../static/banner-item-load.png') no-repeat;
    background-size: cover;
  }

  // 推荐歌单
  .song-list {
    background: url("../../static/aei.png") no-repeat left center;
    background-size: 20px 20px;
  }
  .item {
    position: relative;
    margin: 0 5px 5px 10px;
    height: 100%;
    a {
      color: rgba(0, 0, 0, 0.87);
    }
    .bar {
      position: absolute;
      top: 0;
      left: 0;
      color: #fff;
      width: 100%;
      text-align: right;
      padding: 2px 5px;
      background-color: rgba(0,0,0,.2);
    }

    &-img {
      min-width:5rem;
      min-height: 5rem;
    }

    &-img[lazy=loading] {
      background: url('../../static/default_cover.png') no-repeat;
      background-size: cover;
    }

    &-name {
      overflow : hidden;
      font-size: 12px;
      height: 1.7rem;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
  .mv {
    background: url("../../static/aee.png") no-repeat left center;
    background-size: 20px 20px;
    &-name {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
    &-item {
      position: relative;
      margin: 0 5px 5px 10px;
    }
    &-author {
      font-size: 12px;
      color: #666;
    }
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
</style>
<script>
	const ANDROID = 'Android', IOS = 'iOS', VEDIO = '休息视频', FRONTEND = '前端', FULI = '福利'
	import dailyPush from './dailyPush.vue'
	import girls from './girls.vue'
	import gankList from './gankList.vue'
	export default {
		data() {
			return {
				activeTab: 'dailyPush'
			}
		},
		components: {
			dailyPush,
			gankList,
			girls
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
		},
		methods: {
			handleTabChange(val) {
				this.activeTab = val
				// this.$router.push({ path: '/index/' + val })
			},
		},
		computed: {
		}
	}
</script>