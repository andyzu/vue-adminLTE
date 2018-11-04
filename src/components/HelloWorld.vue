<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<h2>使用说明</h2>
		<ul>
			<li>
				这里是使用介绍，很简单的一个东西，方便大家使用 vue+adminLTE ! 是按照中国人的习惯来进行优化的。
			</li>
			<li>
				<a href="http://router.vuejs.org/" target="_blank">使用说明</a>
			</li>
			<li>
				<a href="https://cn.vuejs.org/index.html/" target="_blank">vue官网（中文版）</a>
			</li>
			<li>
				<a href="https://adminlte.io/" target="_blank">AdminLTE官网</a>
			</li>
			<br>
		</ul>
		<h2>友情赞助</h2>
		<ul>
			<li>
				<a href="http://router.vuejs.org/" target="_blank">支付宝二维码</a>
			</li>
			<li>
				<a href="http://vuex.vuejs.org/" target="_blank">微信二维码</a>
			</li>
			<li>
				<a href="http://vue-loader.vuejs.org/" target="_blank">联系我</a>
			</li>
		</ul>
	</div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {
                msg: '欢迎您使用 vue + AdminLTE !'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1, h2 {
		font-weight: normal;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		display: inline-block;
		margin: 0 10px;
	}

	a {
		color: #42b983;
	}
</style>
