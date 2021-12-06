<template>
	<ion-card @click="$router.push({name: detailsPageName, params: {id: id}})">
		<ion-card-header>
			<ion-card-title>{{ text }}</ion-card-title>
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
</template>

<script>
export default {
	props: {
		id: {
			required: true
		},

		detailsPageName: {
			required: true
		},

		text: {
			required: true
		}
	}
}
</script>
