<template>
	<ion-page>
		<ion-header>
			<ion-toolbar>
				<!-- <ion-icon :icon="chevronBackOutline" size="large" class="backicon" slot="start" @click="goToHome()"></ion-icon> -->
				<ion-buttons>
					<ion-back-button defaultHref="/lists" text="" />
				</ion-buttons>
				<ion-title>Monday dinner</ion-title>
				<ion-icon :icon="trashOutline" size="large" class="trashicon" slot="end" @click="clearAll()"></ion-icon>
			</ion-toolbar>
		</ion-header>

		<ion-content>
			<ion-list>
				<ion-item-sliding v-for="todo in todos" v-bind:key="todo.id">
					<ion-item>
						<!-- v-for="badge in badges" v-bind:key="badge.id" -->
						<div slot="start" position="relative">
							<ion-checkbox></ion-checkbox>
						</div>
						<ion-label>{{ todo.text }}</ion-label>
						<ion-badge @click.stop="openPicker()">{{ todo.badge }}</ion-badge>
					</ion-item>

					<ion-item-options side="end">
						<ion-item-option @click="removeTodo(todo.id)" color="danger">
							<ion-icon slot="icon-only" :icon="trashOutline"></ion-icon>
						</ion-item-option>
					</ion-item-options>
				</ion-item-sliding>

				<ion-item>
					<div slot="start" position="relative">
							<ion-checkbox :disabled="true"></ion-checkbox>
						</div>
					<ion-input type="text" v-model="todo" placeholder="Add ToDo" class="inputB"></ion-input>
					<ion-icon :icon="addCircleOutline" size="large" slot="end" @click="addTodo"></ion-icon>
					<!-- <button @click="addTodo">add</button> -->
				</ion-item>
				<!-- <div>
					<ion-button @click="openPicker">SHOW PICKER</ion-button>
					<p v-if="picked.task">picked: {{ picked.task.text }} </p>
				</div> -->
			</ion-list>
		</ion-content>
	</ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import { IonButtons, IonBackButton, IonPage,IonIcon,IonList,IonItem,IonCheckbox,IonLabel,IonTitle,IonToolbar,IonHeader,IonContent,IonInput,IonBadge,pickerController, IonItemSliding, IonItemOptions, IonItemOption} from '@ionic/vue';
import { chevronBackOutline,trashOutline,addCircleOutline } from 'ionicons/icons';

export default defineComponent({

	components:{
		IonButtons, IonBackButton, IonPage,IonIcon,IonList,IonItem,IonCheckbox,IonLabel,IonTitle,IonToolbar,IonHeader,IonContent,IonInput,IonBadge, IonItemSliding, IonItemOptions, IonItemOption
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
			badge: "",
			todo: '',
			todos: [
				{
				id: Math.random(),
				text: 'Meat',
				badge: 'Important',
				},
				{
				id: Math.random(),
				text: 'Rice',
				badge: 'Can Wait',
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
				badge: 'Not Selected',
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
				this.todo.badge = value;
				// this.todos.push({
				// 	id: this.todo.id,
				// 	badge: this.value,
				// })
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