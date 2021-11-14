<template>
	<ion-page>

		<ion-header>
			<ion-toolbar>
				<ion-icon :icon="reorderThreeOutline" size="large" slot="start"></ion-icon>

				<ion-title>My Lists</ion-title>
				
				<ion-icon :icon="addCircleOutline" size="large" slot="end"></ion-icon>
			</ion-toolbar>
		</ion-header>

		<ion-content>
			<ion-card @click="goToTodo()">
				<ion-card-header>
					<ion-card-title>Monday dinner</ion-card-title>
				</ion-card-header>
				<ion-list>
					<ion-item>
						<ion-label>Airline</ion-label>
						<ion-label>3 kg</ion-label>
					</ion-item>
					<ion-item>
						<ion-label>Airline</ion-label>
						<ion-label class="highlight">2 piece</ion-label>
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

	methods: {
		goToTodo() {
			this.$router.push('/todo'); 
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

.highlight {
	background-color: rgb(3, 100, 211);
	border-radius: 15%;
	border-right: 2px solid  rgb(3, 100, 211);
	color: white !important;
}
</style>