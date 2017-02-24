<template>
	<div>
		<div class="fixed-bar">
			<mu-appbar>
				<mu-icon-button icon='menu' slot="left" @click="toggle()" />
				<div class="appbar-btn-group">
					<mu-flexbox>
						<mu-flexbox-item class="flex-demo">
							<mu-icon-button icon='fiber_new' @click="goToIndex" />
						</mu-flexbox-item>
						<mu-flexbox-item class="flex-demo">
							<mu-icon-button icon='movie' @click="goToMovie" />
						</mu-flexbox-item>
						<mu-flexbox-item class="flex-demo">
							<mu-icon-button icon='book' @click="goToBook" />
						</mu-flexbox-item>
					</mu-flexbox>
				</div>
				<mu-icon-button icon='search' slot="right" />
			</mu-appbar>
		</div>
		<div class="view">
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</div>

		<mu-drawer :open="open" :docked="docked" @close="toggle()">
			<mu-list @itemClick="docked ? '' : toggle()">
				<mu-list-item title="Menu Item 1" />
				<mu-list-item title="Menu Item 2" />
				<mu-list-item title="Menu Item 3" />
				<mu-list-item v-if="docked" @click.native="open = false" title="Close" />
			</mu-list>
		</mu-drawer>
	</div>
</template>
<style lang="less" scoped>
  .fixed-bar {
    position: fixed;
    width: 100%;
    top:0;
    left: 0;
    z-index: 150;
  }
  .view {
    margin-top: 56px;
    margin-bottom: 2.3rem;
  }
  .flex-demo {
    text-align: center;
    line-height: 32px;
    color:rgba(249, 242, 242, 0.9)
  }
  .appbar-btn-group {
    width: 60%;
    margin-left: 20%;
  }
</style>
<script>
	export default {
		data() {
			return {
				open: false,
				docked: false
			}
		},
		created() {
			// 当created函数时监测路由信息,防止页面刷新tab高亮错误
			var tmpArr = this.$route.path.split('/')
			if (tmpArr[1] === 'index') {
				this.handleTabChange(tmpArr[2])
			}
		},
		// watch函数监测路由的变化,保持tab面板的高亮位置正确
		watch: {
			'$route'(to, from) {
				const path = to.path
				var tmpArr = path.split('/')
				if (tmpArr[1] === 'index') {
					this.handleTabChange(tmpArr[2])
				}
			}
		},
		methods: {
			toggle(flag) {
				this.open = !this.open
				this.docked = !flag
			},
			handleTabChange(val) {
				this.activeTab = val
				this.$router.push({ path: '/index/' + val })
			},
			goToIndex() {
				this.$router.push({ path: '/index/main' })
			},
			goToMovie() {
				this.$router.push({ path: '/index/movies' })
			},
			goToBook() {
				this.$router.push({ path: '/index/books' })
			}
		}
	}
</script>