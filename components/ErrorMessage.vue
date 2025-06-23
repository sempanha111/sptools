<template>
    <div v-if="message" class="mt-6 text-center text-red-600 bg-red-100 p-4 rounded-lg">
      <p><strong>Error:</strong> {{ message }}</p>
    </div>
  </template>
  
  <script setup>
  defineProps({
    message: String,
  })
  </script>
  