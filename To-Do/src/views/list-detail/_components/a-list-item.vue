<template>
	<ion-item-sliding>
		<ion-item>
			<div slot="start" position="relative">
				<ion-checkbox></ion-checkbox>
			</div>

			<ion-label>{{ text }}</ion-label>

			<ion-badge @click.stop="openPicker(id)">{{ badge }}</ion-badge>
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

	data(){
		return{
			chevronBackOutline,
			trashOutline,
			addCircleOutline,
			pickingOptions: {
				name: "task",
				options: [
					{ text: "Important", value: "important" },
					{ text: "Can Wait", value: "canwait" },
					{ text: "Free Time", value: "freetime" },
				],
				},
				picked: {
				tasks: "",
			},
		};
	},

	methods:{

		removeTodo(todoId) {
				this.todos = this.todos.filter(todo => todo.id !== todoId);
			},

		async openPicker(todoID) {
		const picker = await pickerController.create({
		columns: [this.pickingOptions],
		buttons: [
			{
			text: "Cancel",
			role: "cancel",
			},
			{
			text: "Confirm",
			handler: (value) => {
				const todo = this.todos.find(todo => todo.id == todoID);
				todo.badge = value.task.text;
			},
			},
		],
		});
		await picker.present();
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