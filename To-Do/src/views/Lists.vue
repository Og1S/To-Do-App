<template>
	<ion-page>
		<div>
			<ion-icon name="reorder-three-outline" size="large"></ion-icon>
			<ion-icon name="add-circle-outline" size="large"></ion-icon>
		</div>

		<div>
			<ion-header>My Lists</ion-header>
		</div>

		<div>
			<ion-card>
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
						<ion-label>2 piece</ion-label>
					</ion-item>
				</ion-list>
			</ion-card>
		</div>
	</ion-page>
</template>

<script>


import { defineComponent } from 'vue';
import { IonPage,IonIcon,IonCard,IonCardHeader,IonCardTitle,IonList,IonItem,IonLabel } from '@ionic/vue';
import { addCircleOutline,reorderThreeOutline} from 'ionicons/icons';

export default defineComponent({

	components:{
		IonPage,IonIcon,IonCard,IonCardHeader,IonCardTitle,IonList,IonItem,IonLabel
	},

	setup(){

		return{

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
}

</style>