<template>
	<ion-page>

		<ion-header>
			<ion-toolbar>
				<ion-icon :icon="reorderThreeOutline" size="large" slot="start" @click="openMenu()"></ion-icon>

				<ion-title>My Lists</ion-title>

				<ion-icon :icon="addCircleOutline" size="large" slot="end" @click="presentAlertPrompt"></ion-icon>
			</ion-toolbar>
		</ion-header>

		<ion-content>
			<A-list-card v-for="list in lists" :key="list.id" detailsPageName="List detail" :id="list.id"
				:text="list.text" />

		</ion-content>

	</ion-page>
</template>

<script>

import {defineComponent} from 'vue';
import {menuController,alertController} from '@ionic/vue';
import {addCircleOutline,reorderThreeOutline} from 'ionicons/icons';

import AListCard from './_components/a-list-card.vue'


export default {

	components: {
		AListCard
	},

	data() {
		return {
			addCircleOutline,
			reorderThreeOutline,
			category: '',
			lists: [{
				id: Math.random(),
				text: "Friday",
			}, ],
		}
	},

	methods: {
		openMenu() {
			menuController.enable(true, 'menu');
			menuController.open('menu');
		},

		async presentAlertPrompt() {
			const alert = await alertController
				.create({
					cssClass: 'prompt',
					header: 'Name of Category',
					inputs: [{
						name: 'categoryName',
						id: 'categoryNameId',
						placeholder: 'My meeting',
					}, ],
					buttons: [{
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
								// this.list = data.categoryName;
								if (this.lists.length === 0) {
									return;
								}
								this.lists.push({
									id: Math.random(),
									text: data.categoryName,
								})
							},
						},
					],
				});
			return alert.present();
		}
	}
}

</script>

<style scoped>

ion-icon {
	color: lightskyblue;
}

ion-header {
	color: white;
	font-size: 40px;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-weight: 600;
}

</style>