<template>
	<ion-page>
		<ion-header>
			<ion-toolbar>
				<ion-icon :icon="chevronBackOutline" size="large" class="backicon" slot="start"></ion-icon>
				<ion-title>Monday dinner</ion-title>
				<ion-icon :icon="trashOutline" size="large" class="trashicon" slot="end"></ion-icon>
			</ion-toolbar>
		</ion-header>

		<ion-content>
			<ion-list>
				<ion-item>
					<ion-checkbox></ion-checkbox>
					<ion-label>Airline</ion-label>
					<ion-label>3 kg</ion-label>
				</ion-item>
				<ion-item>
					<ion-checkbox></ion-checkbox>
					<ion-label>Airline</ion-label>
					<ion-label>3 kg</ion-label>
				</ion-item>
				<ion-item>
					<ion-checkbox></ion-checkbox>
					<ion-label>Airline</ion-label>
					<ion-label>3 kg</ion-label>
				</ion-item>
			</ion-list>
		</ion-content>
	</ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import { IonPage,IonIcon,IonList,IonItem,IonCheckbox,IonLabel,IonTitle,IonToolbar,IonHeader,IonContent } from '@ionic/vue';
import { chevronBackOutline,trashOutline } from 'ionicons/icons';

export default defineComponent({

	components:{
		IonPage,IonIcon,IonList,IonItem,IonCheckbox,IonLabel,IonTitle,IonToolbar,IonHeader,IonContent
	},

	setup(){

		return{
			chevronBackOutline,
			trashOutline
		}
	}

})
</script>

<style>

.backicon{
	color: lightskyblue;
}

.trashicon{
	color: red;
}

</style>