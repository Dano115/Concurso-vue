<script setup>
import {ref} from 'vue'

const name = ref("")

const startGame = ()=> {
    if(name.value===""){
        alert("Introduce tu nombre y comienza el juego")
    }else{
        console.log("el juego a comenzado para: " + name.value)
    }
} 
</script>
<template>


<form @submit.prevent="startGame">
    <label for="nombre">Nombre: </label>
    <input type="text" id="name" v-model="name" placeholder="Escribe tu nombre" required>
    <button type="submit">Start</button>
</form>

<p v-if="name ===''">Escribe tu nombre arriba para continuar.</p>
<p v-else=""> ¡Bienvenido {{name}}! Comencemos</p>
</template>
<style></style>