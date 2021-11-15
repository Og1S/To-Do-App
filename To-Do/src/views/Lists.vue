<template>
	<ion-page>

		<ion-header>
			<ion-toolbar>
				<ion-icon :icon="reorderThreeOutline" size="large" slot="start"></ion-icon>

				<ion-title>My Lists</ion-title>
				
				<ion-icon :icon="addCircleOutline" size="large" slot="end" @click="newCategory"></ion-icon>
			</ion-toolbar>
		</ion-header>

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
import { IonPage,IonIcon,IonCard,IonCardHeader,IonCardTitle,IonList,IonItem,IonLabel, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { addCircleOutline,reorderThreeOutline} from 'ionicons/icons';

export default defineComponent({

	components:{
		IonPage,IonIcon,IonCard,IonCardHeader,IonCardTitle,IonList,IonItem,IonLabel, IonHeader, IonToolbar, IonTitle, IonContent
	},

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

		newCategory() {
			this.category = prompt("Name of Category");
			if (this.category.length === 0){
				return;
			}
			this.categories.push({
				id: Math.random(),
				text: this.category,
			})
		}
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