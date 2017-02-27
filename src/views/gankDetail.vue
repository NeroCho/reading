<template>
	<div>
	<mu-linear-progress :size="4" color="red" v-if="isloading"/>
		<div class="loading-wrapper" v-if="isloading">
			<div class="loading"></div>
			<div class="loading-txt">正在加载中</div>
		</div>
		<div v-show="!isloading">
			<div class="ar" v-bind:style="{ height: height + 'px' }" v-html="htmlCode"></div>
		</div>
</template>

<script>
	export default {
		data() {
			return {
				url: '',
				htmlCode: '',
				height: window.innerHeight - 56 - 10,
				isloading:true
			}
		},
		created() {

		},
		activated() {
			this.isloading = true
			this.htmlCode = ''
			this.url = this.$route.params.url

			this.$http.get(this.url).then((res) => {
				console.log(res)
				this.htmlCode = res.data
				this.isloading = false
			})
		}
	}
</script>

<style scoped>
	.ar{
		overflow-y: auto;
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
</style>