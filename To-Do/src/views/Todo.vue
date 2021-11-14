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
				<ion-item v-for="todo in todos" v-bind:key="todo.id">
					<ion-checkbox></ion-checkbox>
					<ion-label>{{ todo.text }}</ion-label>
					<ion-label>3 kg</ion-label>
				</ion-item>

				<ion-item>
					<input type="text" v-model="todo" placeholder="Add ToDo" class="inputB">
					<ion-icon :icon="addCircleOutline" size="large" slot="end" @click="addTodo"></ion-icon>
					<!-- <button @click="addTodo">add</button> -->
				</ion-item>
			</ion-list>
		</ion-content>
	</ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import { IonPage,IonIcon,IonList,IonItem,IonCheckbox,IonLabel,IonTitle,IonToolbar,IonHeader,IonContent } from '@ionic/vue';
import { chevronBackOutline,trashOutline,addCircleOutline } from 'ionicons/icons';

export default defineComponent({

	components:{
		IonPage,IonIcon,IonList,IonItem,IonCheckbox,IonLabel,IonTitle,IonToolbar,IonHeader,IonContent
	},

	data(){
		return{
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
			]
		}
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

		con() {
			console.log(this.todo)
		},

		clearAll() {
			this.todos = []
		},

		goToHome(){
		this.$router.push('/lists'); 
			}
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

.inputB{
	background-color: black;
	border: none;
	outline-width: 0;

}

</style>