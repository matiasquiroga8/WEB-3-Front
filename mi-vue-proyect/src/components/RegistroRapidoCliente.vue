<template>
    <v-card class="pa-6 mx-auto" max-width="400">
        <v-card-title class="text-h6 text-center">
            Registro rápido de clientes
        </v-card-title>

        <v-card-text>
            <!-- Campo de texto con v-model -->
            <v-text-field v-model="nombreCliente" label="Nombre del cliente" variant="outlined" clearable />

            <!-- Botón de registro -->
            <v-btn color="primary" block class="mt-4" @click="registrarCliente">
                Registrar
            </v-btn>

            <!-- Confirmación visual -->
            <v-alert v-if="mensajeBienvenida" type="success" class="mt-4" border="start" elevation="2">
                {{ mensajeBienvenida }}
            </v-alert>
        </v-card-text>
    </v-card>
</template>

<script setup>
import { ref } from "vue";

const nombreCliente = ref("");
const mensajeBienvenida = ref("");

function registrarCliente() {
    if (nombreCliente.value.trim() !== "") {
        // Simulación de guardado en "base de datos"
        console.log(`Cliente registrado: ${nombreCliente.value}`);

        // Mostrar mensaje de confirmación
        mensajeBienvenida.value = `¡Bienvenido/a, ${nombreCliente.value}! 🎉`;

        // Limpiar el campo
        nombreCliente.value = "";
    } else {
        mensajeBienvenida.value = "Por favor ingrese un nombre válido.";
    }
}
</script>

<style scoped>
.v-card {
    border-radius: 12px;
}
</style>
