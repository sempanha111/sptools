<template>
    <div v-if="isLoading"
        class="fixed inset-0 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center z-50">
        <div class="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p class="mt-4 text-lg text-slate-700 font-semibold">Processing image, please wait...</p>
    </div>
</template>
<script setup>
defineProps({
    isLoading: Boolean,
})
</script>