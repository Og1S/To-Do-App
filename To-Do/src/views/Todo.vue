<template>
	<ion-page>
		<ion-header>
			<ion-toolbar>
				<ion-icon :icon="chevronBackOutline" size="large" class="backicon" slot="start" @click="goToHome()"></ion-icon>
				<ion-title>Monday dinner</ion-title>
				<ion-icon :icon="trashOutline" size="large" class="trashicon" slot="end" @click="clearAll()"></ion-icon>
			</ion-toolbar>
		</ion-header>

		<ion-content>
			<ion-list>
				<ion-item-sliding>
					<ion-item v-for="todo in todos" v-bind:key="todo.id">
						<ion-checkbox></ion-checkbox>
						<ion-label>{{ todo.text }}</ion-label>
						<ion-button @click="removeTodo(todo.id)">❌</ion-button>
						<ion-badge @click="changeBadge">Important</ion-badge>
					</ion-item>

					<ion-item-options side="end">
						<ion-item-option @click="removeTodo(todo.id)">
							<ion-icon slot="icon-only" :icon="trashOutline"></ion-icon>
						</ion-item-option>
					</ion-item-options>
				</ion-item-sliding>

				<ion-item>
					<ion-checkbox :disabled="true"></ion-checkbox>
					<ion-input type="text" v-model="todo" placeholder="Add ToDo" class="inputB"></ion-input>
					<ion-icon :icon="addCircleOutline" size="large" slot="end" @click="addTodo"></ion-icon>
					<!-- <button @click="addTodo">add</button> -->
				</ion-item>
				<div>
					<ion-button @click="openPicker">SHOW PICKER</ion-button>
					<p v-if="picked.task">picked: {{ picked.task.text }} </p>
				</div>
			</ion-list>
		</ion-content>
	</ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import { IonPage,IonIcon,IonList,IonItem,IonCheckbox,IonLabel,IonTitle,IonToolbar,IonHeader,IonContent,IonInput,IonBadge,pickerController,IonButton, IonItemSliding, IonItemOptions, IonItemOption} from '@ionic/vue';
import { chevronBackOutline,trashOutline,addCircleOutline } from 'ionicons/icons';

export default defineComponent({

	components:{
		IonPage,IonIcon,IonList,IonItem,IonCheckbox,IonLabel,IonTitle,IonToolbar,IonHeader,IonContent,IonInput,IonBadge,IonButton, IonItemSliding, IonItemOptions, IonItemOption
	},

	data(){
		return{
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
			todo: '',
			todos: [
				{
				id: Math.random(),
				text: 'Meat',
				},
				{
				id: Math.random(),
				text: 'Rice',
				}
			],
		};
	},

	methods:{
		addTodo() {
			if (this.todo.length === 0) {
				return;
			}
			this.todos.push({
				id: Math.random(),
				text: this.todo,
			});
			this.todo = ''
		},

		removeTodo(todoId) {
			this.todos = this.todos.filter(todo => todo.id !== todoId);
		},

		clearAll() {
			this.todos = []
		},

		goToHome(){
		this.$router.push('/lists'); 
		},

		async openPicker() {
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
				this.picked = value;
				console.log(`Got Value ${value}`);
			},
			},
		],
		});
		await picker.present();
		},
	},

	setup(){

		return{
			chevronBackOutline,
			trashOutline,
			addCircleOutline
		}
	}

})


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