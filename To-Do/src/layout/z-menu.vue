<template>
	<ion-menu side="start" menu-id="menu" content-id="main">
		<ion-header>
			<ion-toolbar>
				<ion-title>All Lists</ion-title>
			</ion-toolbar>
		</ion-header>
		
		<ion-content>
			<ion-list v-for="category in categories" v-bind:key="category.id">
				<ion-item @click="goToTodo()">
					<ion-label>{{ category.text }}</ion-label>
				</ion-item>
			</ion-list>
		</ion-content>
	</ion-menu>
</template>

<script>
export default {
	data() {
		return{
			categories: [
				{
					id: Math.random(),
					text: "Friday"
				},
			],
		}
	},
}
</script>

<style scoped>
ion-list{
	font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	color: white;
	font-weight: 300;
}
</style>