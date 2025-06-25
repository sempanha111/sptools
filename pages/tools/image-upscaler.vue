<template>
    <section class="relative text-center pt-32 pb-24 md:pt-48 md:pb-32 px-6 overflow-hidden">
        <div class="container mx-auto relative z-10">
            <h1 class="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight">AI Image Upscaler</h1>
            <p class="text-xl text-slate-600 mt-4 max-w-2xl mx-auto">Breathe new life into your images. Enlarge and
                enhance photos with stunning clarity and detail.</p>
            <div class="mt-10">
                <a href="#uploader"
                    class="bg-slate-900 text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-slate-800 transition-all transform hover:scale-105">
                    Upscale Image for Free
                </a>
            </div>
            <div class="relative w-full max-w-4xl mx-auto mt-16 select-none rounded-2xl shadow-2xl shadow-blue-500/10">
                <img src="https://i.imgur.com/8z2d5a3.jpeg" alt="High-resolution cat" class="w-full h-auto rounded-2xl"
                    draggable="false" />
                <div class="absolute w-64 h-64 rounded-full border-4 border-white shadow-2xl overflow-hidden"
                    style="top: 35%; left: 45%; transform: translate(-50%, -50%);">
                    <img src="https://i.imgur.com/uG2g521.jpeg" alt="Low-resolution cat detail"
                        class="absolute object-cover" style="width: 200%; height: 200%; top: -65%; left: -60%;"
                        draggable="false" />
                </div>
            </div>
        </div>
    </section>

    <section class="py-24">
        <div class="container mx-auto px-6">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-slate-900">Upscale in 3 Easy Steps</h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-6xl mx-auto">
                <div class="glass-card p-8 rounded-2xl animate-on-scroll">
                    <div
                        class="mx-auto w-20 h-20 rounded-full bg-white/50 text-blue-600 flex items-center justify-center mb-6 text-4xl font-bold border border-white/30">
                        1</div>
                    <h3 class="text-2xl font-bold text-slate-900">Upload Image</h3>
                    <p class="text-slate-600 mt-2">Click the button or drag and drop your JPG, PNG, or WebP file.</p>
                </div>
                <div class="glass-card p-8 rounded-2xl animate-on-scroll" style="animation-delay: 150ms;">
                    <div
                        class="mx-auto w-20 h-20 rounded-full bg-white/50 text-blue-600 flex items-center justify-center mb-6 text-4xl font-bold border border-white/30">
                        2</div>
                    <h3 class="text-2xl font-bold text-slate-900">Select Scale Factor</h3>
                    <p class="text-slate-600 mt-2">Choose to upscale your image by 2x or 4x for up to 4K resolution.</p>
                </div>
                <div class="glass-card p-8 rounded-2xl animate-on-scroll" style="animation-delay: 300ms;">
                    <div
                        class="mx-auto w-20 h-20 rounded-full bg-white/50 text-blue-600 flex items-center justify-center mb-6 text-4xl font-bold border border-white/30">
                        3</div>
                    <h3 class="text-2xl font-bold text-slate-900">Download Result</h3>
                    <p class="text-slate-600 mt-2">Our AI processes your image in seconds. Download your new high-res
                        photo.</p>
                </div>
            </div>
        </div>
    </section>



    <section id="uploader" class="py-24">
        <div class="container mx-auto px-6">
            <div v-if="!outputUrl" class="glass-card max-w-3xl mx-auto p-8 md:p-12 rounded-3xl text-center">

                <h2 class="text-4xl font-extrabold text-slate-900 leading-tight">Ready to Try?</h2>
                <p class="text-lg text-slate-600 mt-4">Get higher resolution photos in seconds. It's fast, simple, and free.</p>
                <div class="mt-8 flex justify-center items-center space-x-2 bg-white/50 p-1.5 rounded-xl max-w-xs mx-auto border border-white/30">
                  <button @click="upscaleFactor = '2'" :class="['w-full px-4 cursor-pointer py-2 rounded-lg font-semibold transition-all',  upscaleFactor === '2' ? 'bg-blue-600 text-white shadow' : 'text-slate-600 hover:bg-white/80']">2x Scale</button>
                  <button @click="upscaleFactor = '4'" :class="[ 'w-full px-4 cursor-pointer py-2 rounded-lg font-semibold transition-all', upscaleFactor === '4' ? 'bg-blue-600 text-white shadow' : 'text-slate-600 hover:bg-white/80']">4x Scale</button>
                </div>

                <div @dragover.prevent @drop.prevent="handleDrop"
                    class="mt-10 bg-slate-50 border-2 border-dashed border-slate-300 rounded-2xl p-18 text-center transition-all hover:border-blue-500 hover:bg-blue-50">
                    <div class="flex flex-col items-center">

                        <div @click="triggerFileInput" class="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4 cursor-pointer">
                            <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                            </svg>
                        </div>

                        <input type="file" ref="fileInput" @change="handleFileSelect" class="hidden" accept="image/*" />
                        <button @click="triggerFileInput"
                            class="px-8 cursor-pointer py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition-all">
                            Upload Image
                        </button>
                        <p class="text-slate-500 mt-4 text-sm">or drop a file here</p>
                    </div>
                </div>

            </div>
            <div v-else class="max-w-5xl mx-auto">
            <div class="text-center">
                <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900">Upscaling Complete!</h1>
                <p class="text-lg text-slate-600 mt-4">Move your mouse over the images to see a magnified comparison.</p>
            </div>

            <div  class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10"
                @mouseenter="isZoomVisible = true"
                @mouseleave="isZoomVisible = false"
                @mousemove="handleMouseMove">
                <div class="text-center">
                    <h3 class="font-bold text-slate-500 mb-2">Original</h3>
                    <div class="relative rounded-2xl shadow-xl overflow-hidden border-2 border-white" ref="beforeContainer">
                        <img :src="originalUrl" alt="Original image" class="w-full h-auto block">
                        <div v-if="isZoomVisible" class="absolute w-48 h-48 rounded-full border-4 border-white shadow-2xl pointer-events-none overflow-hidden" :style="loupeStyle">
                            <img :src="originalUrl" class="absolute object-none" :style="beforeZoomStyle" />
                        </div>
                    </div>
                </div>
                
                <div class="text-center">
                    <h3 class="font-bold text-blue-600 mb-2">Upscaled ({{ upscaleFactor }}x)</h3>
                    <div class="relative rounded-2xl shadow-xl overflow-hidden border-2 border-white">
                        <img :src="outputUrl" alt="Upscaled image" class="w-full h-auto block">
                        <div v-if="isZoomVisible" class="absolute w-48 h-48 rounded-full border-4 border-white shadow-2xl pointer-events-none overflow-hidden" :style="loupeStyle">
                            <img :src="outputUrl" class="absolute object-none" :style="afterZoomStyle" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-12 flex flex-col md:flex-row justify-center items-center gap-4">
                <a :href="outputUrl" :download="`upscaled-${upscaleFactor}x.png`" class="px-8 py-3 cursor-pointer bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition-all text-center w-full md:w-auto">
                Download Upscaled Image
                </a>
                <button @click="reset" class="px-8 py-3 cursor-pointer bg-slate-200 text-slate-800 font-bold rounded-lg hover:bg-slate-300 transition-all w-full md:w-auto">
                Upscale Another
                </button>
            </div>
            </div>

            
            <!-- <Loading :isLoading="isLoading" /> -->
            <ErrorMessage  :message="error" />



        </div>
    </section>





    <section class="py-24">
        <div class="container mx-auto px-6">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-slate-900">Perfect for Any Application</h2>
                <p class="text-slate-600 mt-3 max-w-2xl mx-auto">From professional projects to personal memories, our AI
                    upscaler brings clarity to all your images.</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                <div class="glass-card p-6 rounded-2xl animate-on-scroll">
                    <h3 class="font-bold text-xl text-slate-800 mb-4">E-commerce Products</h3>
                    <div class="grid grid-cols-2 gap-4">
                        <img src="https://i.imgur.com/uG2g521.jpeg" alt="blurry product"
                            class="rounded-lg object-cover w-full aspect-square">
                        <img src="https://i.imgur.com/8z2d5a3.jpeg" alt="sharp product"
                            class="rounded-lg object-cover w-full aspect-square">
                    </div>
                </div>
                <div class="glass-card p-6 rounded-2xl animate-on-scroll" style="animation-delay: 150ms;">
                    <h3 class="font-bold text-xl text-slate-800 mb-4">Digital Art & Illustration</h3>
                    <div class="grid grid-cols-2 gap-4">
                        <img src="https://i.imgur.com/9l2S8S5.jpeg" alt="blurry art"
                            class="rounded-lg object-cover w-full aspect-square">
                        <img src="https://i.imgur.com/DqGNB83.jpeg" alt="sharp art"
                            class="rounded-lg object-cover w-full aspect-square">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="py-24">
        <div class="container mx-auto px-6 max-w-3xl">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
            </div>
            <div class="space-y-4">
                <details class="glass-card p-6 rounded-2xl group" open>
                    <summary class="flex justify-between items-center font-semibold text-slate-800 cursor-pointer">What
                        is the maximum upload resolution? <span
                            class="text-blue-500 text-2xl transform transition-transform duration-300 group-open:rotate-45">+</span>
                    </summary>
                    <p class="text-slate-600 mt-4">You can upload images up to 12 megapixels. Our AI will then upscale
                        them by 2x or 4x, allowing you to achieve stunningly high resolutions.</p>
                </details>
                <details class="glass-card p-6 rounded-2xl group">
                    <summary class="flex justify-between items-center font-semibold text-slate-800 cursor-pointer">What
                        image formats are supported? <span
                            class="text-blue-500 text-2xl transform transition-transform duration-300 group-open:rotate-45">+</span>
                    </summary>
                    <p class="text-slate-600 mt-4">We support all common image formats, including JPG, PNG, and WebP.
                        The upscaled image will be delivered as a high-quality PNG file.</p>
                </details>
            </div>
        </div>
    </section>




</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

body {
    font-family: 'Inter', sans-serif;
    background-color: #f0f4f9;
    /* A very light, cool gray */
}

/* The main animated "Aurora" background */
body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 15% 25%, rgba(6, 182, 212, 0.2), transparent 40%),
        radial-gradient(circle at 85% 75%, rgba(59, 130, 246, 0.2), transparent 40%),
        radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.15), transparent 50%);
    z-index: -1;
    animation: rotate-glow 20s linear infinite;
}

@keyframes rotate-glow {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

.glass-card {
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.3);
}

@keyframes fade-in-up {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-on-scroll {
    opacity: 0;
    animation: fade-in-up 0.8s ease-out forwards;
    animation-timeline: view();
    animation-range-start: entry 10%;
    animation-range-end: entry 40%;
}
</style>

<script setup>
import { ref, computed } from 'vue';

// --- STATE MANAGEMENT ---
// For the uploader and result display
const fileInput = ref(null);
const isLoading = ref(false);
const error = ref('');
const outputUrl = ref(null);
const originalUrl = ref(null);
const originalDimensions = ref('');
const newDimensions = ref('');
const upscaleFactor = ref('2'); // Can be '2' or '4'

// For the synchronized zoom/loupe effect
const beforeContainer = ref(null);
const isZoomVisible = ref(false);
const zoomPosition = ref({ x: 0, y: 0 });
const ZOOM_LEVEL = 2.5; // How much the loupe magnifies

// --- API CONFIGURATION ---
// Using the local endpoint you provided
const API_ENDPOINT = 'http://localhost:8000/upscale/';

// --- EVENT HANDLERS & LOGIC ---

// Triggers the hidden file input when the "Upload" button is clicked
const triggerFileInput = () => {
  fileInput.value.click();
};

// Handles file selection from the input
const handleFileSelect = (e) => {
  const file = e.target.files[0];
  if (file) processFile(file);
};

// Handles file selection from a drag-and-drop action
const handleDrop = (e) => {
  const file = e.dataTransfer.files[0];
  if (file) processFile(file);
};

// Resets the component to its initial state
const reset = () => {
  outputUrl.value = null;
  originalUrl.value = null;
  error.value = '';
  if (fileInput.value) {
    fileInput.value.value = ''; // Clear the file input
  }
};

// The main function to process the image file
const processFile = async (file) => {
  if (!file.type.startsWith('image/')) {
    error.value = 'Only image files are allowed.';
    return;
  }
  
  reset(); // Clear previous results
  isLoading.value = true;
  originalUrl.value = URL.createObjectURL(file); // Create a URL for the "before" image

  // Read the original image to get its dimensions for display
  const reader = new FileReader();
  reader.onload = (e) => {
    const img = new Image();
    img.onload = () => {
      originalDimensions.value = `${img.width} x ${img.height}`;
      const newWidth = img.width * parseInt(upscaleFactor.value);
      const newHeight = img.height * parseInt(upscaleFactor.value);
      newDimensions.value = `${newWidth} x ${newHeight}`;
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);

  const formData = new FormData();
  formData.append('file', file);
  formData.append('scale', upscaleFactor.value);

  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      body: formData,
    });

    // **CORRECTED ERROR HANDLING**
    // First, check if the response is not OK.
    if (!response.ok) {
      // Try to get a specific error message from the server if possible
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.detail || `Server responded with status ${response.status}`);
    }

    // If the response is OK, get the image blob
    const blob = await response.blob();
    outputUrl.value = URL.createObjectURL(blob);

  } catch (err) {
    error.value = 'Failed to upscale image: ' + err.message;
    // Clear the URLs on error so the user isn't stuck on the result screen
    originalUrl.value = null;
    outputUrl.value = null;
  } finally {
    isLoading.value = false;
  }
};

// --- LOGIC FOR THE SYNCHRONIZED ZOOM ---

const handleMouseMove = (event) => {
    if (!beforeContainer.value) return;
    const rect = beforeContainer.value.getBoundingClientRect();
    zoomPosition.value = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
};

const loupeStyle = computed(() => ({
    top: `${zoomPosition.value.y}px`,
    left: `${zoomPosition.value.x}px`,
    transform: 'translate(-50%, -50%)',
}));

const beforeZoomStyle = computed(() => {
    if (!beforeContainer.value) return {};
    const LOUPE_DIAMETER = 192; // w-48
    return {
        width: `${beforeContainer.value.clientWidth * ZOOM_LEVEL}px`,
        height: `${beforeContainer.value.clientHeight * ZOOM_LEVEL}px`,
        top: `-${zoomPosition.value.y * ZOOM_LEVEL - (LOUPE_DIAMETER / 2)}px`,
        left: `-${zoomPosition.value.x * ZOOM_LEVEL - (LOUPE_DIAMETER / 2)}px`,
    };
});

const afterZoomStyle = computed(() => {
    if (!beforeContainer.value) return {};
    const LOUPE_DIAMETER = 192; // w-48
    return {
        width: `${beforeContainer.value.clientWidth * ZOOM_LEVEL}px`,
        height: `${beforeContainer.value.clientHeight * ZOOM_LEVEL}px`,
        top: `-${zoomPosition.value.y * ZOOM_LEVEL - (LOUPE_DIAMETER / 2)}px`,
        left: `-${zoomPosition.value.x * ZOOM_LEVEL - (LOUPE_DIAMETER / 2)}px`,
    };
});
</script>