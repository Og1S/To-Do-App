<template>
	<ion-page>
		<div>
			<ion-icon name="chevron-back-outline" size="large" class="backicon"></ion-icon>
			<ion-icon name="trash-outline" size="large" class="trashicon"></ion-icon>
		</div>

		<div>
			<h1>Monday dinner</h1>
		</div>

		<div>
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
		</div>
	</ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import { IonPage,IonIcon,IonList,IonItem,IonCheckbox,IonLabel } from '@ionic/vue';
import { chevronBackOutline,trashOutline } from 'ionicons/icons';

export default defineComponent({

	components:{
		IonPage,IonIcon,IonList,IonItem,IonCheckbox,IonLabel
	},

	setup(){

		return{

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