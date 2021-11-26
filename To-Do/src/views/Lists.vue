<template>
	<ion-page>

		<ion-header>
			<ion-toolbar>
				<ion-icon :icon="reorderThreeOutline" size="large" slot="start" @click="openMenu()"></ion-icon>

				<ion-title>My Lists</ion-title>
				
				<ion-icon :icon="addCircleOutline" size="large" slot="end" @click="presentAlertPrompt"></ion-icon>
			</ion-toolbar>
		</ion-header>

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
		<ion-router-outlet id="main"></ion-router-outlet>

		<ion-content>
			<ion-card @click="goToTodo()" v-for="category in categories" v-bind:key="category.id">
				<ion-card-header>
					<ion-card-title>{{ category.text }}</ion-card-title>
				</ion-card-header>
				<ion-list>
					<ion-item>
						<ion-label>Airline</ion-label>
						<ion-badge>3 kg</ion-badge>
					</ion-item>
					<ion-item>
						<ion-label>Airline</ion-label>
						<ion-badge>2 piece</ion-badge>
					</ion-item>
				</ion-list>
			</ion-card>
		</ion-content>
		
	</ion-page>
</template>

<script>


import { defineComponent } from 'vue';
import {menuController, alertController} from '@ionic/vue';
import { addCircleOutline,reorderThreeOutline} from 'ionicons/icons';

export default defineComponent({

	data() {
		return{
			category: '',
			categories: [
				{
					id: Math.random(),
					text: "Friday"
				},
			],
		}
	},

	methods: {
		goToTodo() {
			this.$router.push('/todo'); 
		},

		openMenu() {
			menuController.enable(true, 'menu');
			menuController.open('menu');
		},

		async presentAlertPrompt() {
			const alert = await alertController
				.create({
					cssClass: 'prompt',
					header: 'Name of Category',
					inputs: [
						{
						name: 'categoryName',
						id: 'categoryNameId',
						placeholder: 'My meeting',
						},
					],
					buttons: [
					{
					text: 'Cancel',
					role: 'cancel',
					cssClass: 'cancelButton',
					handler: () => {
						console.log('Confirm Cancel')
					},
					},
					{
					text: 'Ok',
					handler: data => {
						this.category = data.categoryName;
						if (this.category.length === 0){
							return;
						}
						this.categories.push({
							id: Math.random(),
							text: this.category,
						})
					},
					},
				],
			});
		return alert.present();
		},
	},


	setup(){

		return{
			addCircleOutline,
			reorderThreeOutline
		}
	}

})


</script>

<style>
ion-icon {
	color: lightskyblue;
}

ion-header{
	color: white;
	font-size: 40px;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-weight: 600;
}

ion-list{
	font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	color: white;
	font-weight: 300;
}

</style>