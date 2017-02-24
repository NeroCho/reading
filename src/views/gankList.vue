<template>
	<div>
		<div class="top-grid">
			<mu-row gutter>
				<mu-col width="50">
					<div class="typename_fix"></div>
					<div class="typename">{{typeName}}</div>
				</mu-col>
				<mu-col width="50">
					<mu-flat-button @click="openBottomSheet" label="分类" class="flat-button" icon="list" />
				</mu-col>
			</mu-row>
		</div>

		<div class="infinite-container"  v-bind:style="{  height: height + 'px' }">
			<mu-card class="my-card" v-for="item of list">
				<mu-card-header :title="item.who">
				</mu-card-header>
				<mu-card-media v-if="item.images && item.images.length>0">
					<img :src="item.images[0]" />
				</mu-card-media>
				<mu-card-text>
					{{item.desc}}
				</mu-card-text>
			</mu-card>
			<mu-infinite-scroll :scroller="scroller" :loading="loading" @load="getGank" />
		</div>
		<mu-bottom-sheet :open="bottomSheet" @close="closeBottomSheet">
			<mu-list @itemClick="closeBottomSheet">
				<mu-sub-header>
					请选择一个
				</mu-sub-header>
				<mu-list-item title="前端" />
				<mu-list-item title="Android" />
				<mu-list-item title="iOS" />
				<mu-list-item title="拓展资源" />
			</mu-list>
		</mu-bottom-sheet>

	</div>
</template>

<style lang="less" scoped>
@import "../assets/theme.less";
.top-grid div[class*="col-"] {
  text-align: left;
  height: 36px;
  display: -webkit-box;
  margin-top:5px;
}
.typename_fix{
	line-height: 36px;
	background-color: @primaryColor;
	width: 4px;
    border-radius: 4px;
}
.typename{
	line-height: 36px;
	padding-left: 10px;
    font-size: large;
    font-weight: bolder;
}
.flat-button{
	border: 1px solid #bdbdbd;
    margin-left: auto;
    margin-right: 2px;
    display: block;
    background-color: #e6e6e6;
}
.my-card{
	margin-top: 5px;
}
.infinite-container{
	width: 100%;
	height:100%;
	overflow: auto;
	-webkit-overflow-scrolling: touch;
}
</style>
<script>
	import api from '../api'
	export default {
		data() {
			return {
				typeName: '前端',
				bottomSheet: false,
				pageCount: 10,
				pageNumber: 1,
				list: [],
				loading: false,
				scroller: null,
				height:window.screen.availHeight-56-41-48-10
			}
		},
		components: {

		},
		watch: {
			typeName: function (newTypeName) {
				this.list = []
				this.pageNumber = 1
				this.getGank()
			}
		},
		created() {
			this.getGank();
		},
		mounted() {
			this.scroller = this.$el.children[1]
		},
		methods: {
			closeBottomSheet(val) {
				let selected = val.title
				if (selected) {
					this.typeName = selected;
				}

				this.bottomSheet = false
			},
			openBottomSheet() {
				this.bottomSheet = true
			},
			getGank() {
				this.loading = true
				this.$http.get(api.getGank(this.typeName, this.pageCount, this.pageNumber)).then((res) => {
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