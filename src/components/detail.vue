<template>
	<div>
		<h1>{{ msg }}</h1>
		<h2>Essential Links</h2>
	</div>
</template>

<script>
	export default {
		name: 'hello',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		},
		created() {
			console.log(this.$router.params)
		},
		watch: {
			'$route'(to, from) {
				console.log(to);
				console.log(from);
			}
		},
	}
</script>

<style scoped>

</style>