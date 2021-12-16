<template>
	<ion-item-sliding>
		<ion-item>
			<div slot="start" position="relative">
				<ion-checkbox></ion-checkbox>
			</div>

			<ion-label>{{ text }}</ion-label>

			<ion-badge @click.stop="$emit('openPicker', id)">{{ badge }}</ion-badge>
		</ion-item>

		<ion-item-options side="end">
			<ion-item-option @click="removeTodo(id)" color="danger">
				<ion-icon slot="icon-only" :icon="trashOutline"></ion-icon>
			</ion-item-option>
		</ion-item-options>
	</ion-item-sliding>
</template>

<script>
import { chevronBackOutline,trashOutline,addCircleOutline } from 'ionicons/icons';
import { pickerController} from '@ionic/vue';

export default {
	props: {
		id: {
			required: true
		},

		badge: {
			required: true
		},

		text: {
			required: true
		}
	},

	data() {
		return {
			chevronBackOutline,
			trashOutline,
			addCircleOutline,
		};
	},

	methods: {

		removeTodo(todoId) {
			this.$emit("itemDelete", todoId)
		},

	}
}
</script>

<style>

.backicon{
	color: lightskyblue;
	cursor: pointer;
}

.trashicon{
	color: red;
}

</style>