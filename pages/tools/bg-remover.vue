<template>
  <main class="bg-white">
    <div class="container mx-auto px-6 py-16 md:py-24">

      <div v-if="!outputUrl" class="max-w-3xl mx-auto">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">Remove Image Background</h1>
          <p class="text-lg text-slate-600 mt-4">100% automatically and free. No signup required.</p>
        </div>

        <div @dragover.prevent @drop.prevent="handleDrop"
          class="mt-10 bg-slate-50 border-2 border-dashed border-slate-300 rounded-2xl p-18 text-center transition-all hover:border-blue-500 hover:bg-blue-50">
          <div class="flex flex-col items-center">
            <div class="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4 cursor-pointer">
              <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
              </svg>
            </div>

            <input type="file" @change="handleFileUpload" class="hidden" ref="fileInput" accept="image/*" />
            <button @click="triggerFileInput"
              class="px-8 cursor-pointer py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition-all">
              Upload Image
            </button>
            <p class="text-slate-500 mt-4 text-sm">or drop a file here</p>
          </div>
        </div>

        <div class="mt-8 text-center">
          <p class="text-slate-500 mb-4">No image? Try one of these:</p>
          <div class="flex justify-center items-center space-x-4">
            <img v-for="img in demoImages" :key="img.id" :src="img.url" @click="handleDemoClick(img.url)"
              alt="Demo image"
              class="w-20 h-20 md:w-24 md:h-24 object-cover rounded-xl cursor-pointer border-2 border-transparent hover:border-blue-500 transition-all" />
          </div>
        </div>
      </div>


      <div v-else  class="max-w-4xl mx-auto">

        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900">Background Removed!</h1>
          <p class="text-lg text-slate-600 mt-4">Use the slider to compare. Download your image for free.</p>
        </div>

        <div class="relative w-fit mx-auto  overflow-auto rounded-2xl shadow-2xl border-4 border-white">
          <div class="relative w-fit  min-h-[100px] ">
            <img class="opacity-0" :src="outputUrl" alt="">
            <!-- Transparent image side with checkerboard -->
            <div class="absolute inset-0 z-10 "
              :style="{ clipPath: `polygon(0 0, ${sliderPosition1}% 0, ${sliderPosition1}% 100%, 0 100%)` }">
              <div class="checkerboard-bg absolute inset-0"></div>
              <img :src="outputUrl" alt="Image after background removal"
                class="object-contain absolute inset-0 pointer-events-none max-w-full max-h-full mx-auto" draggable="false" />
            </div>

            <!-- Full background image -->
            <div class="absolute inset-0 z-0">
              <img :src="originalUrl" alt="Image before background removal"
                class="object-contain absolute inset-0 pointer-events-none max-w-full max-h-full" draggable="false" />
            </div>
          </div>
        </div>




        <div class="mt-8 flex flex-col md:flex-row justify-center items-center gap-4">
          <a :href="outputUrl" download="background-removed.png"
            class="px-8 py-3 cursor-pointer bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition-all text-center w-full md:w-auto">
            Download Free
          </a>
          <button @click="reset"
            class="px-8 py-3 cursor-pointer bg-slate-200 text-slate-800 font-bold rounded-lg hover:bg-slate-300 transition-all w-full md:w-auto">
            Upload New Image
          </button>
        </div>


      </div>





      <div v-if="isLoading"
        class="fixed inset-0 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center z-50">
        <div class="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p class="mt-4 text-lg text-slate-700 font-semibold">Processing image, please wait...</p>
      </div>
      <div v-if="error" class="mt-6 text-center text-red-600 bg-red-100 p-4 rounded-lg">
        <p><strong>Error:</strong> {{ error }}</p>
      </div>




      <!-- Feature scroll before and after -->
      <div class="font-sans flex items-center justify-center py-20 px-6">
        <div class="w-full max-w-4xl text-center">

          <h2 class="text-4xl md:text-5xl font-bold text-slate-900">Stunning quality</h2>

          <div class="mt-8 mb-10 flex justify-center items-center space-x-2">
            <button class="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-semibold">Products</button>
            <button
              class="bg-white text-slate-600 px-5 py-2 rounded-full text-sm font-semibold hover:bg-slate-100">People</button>
            <button
              class="bg-white text-slate-600 px-5 py-2 rounded-full text-sm font-semibold hover:bg-slate-100">Animals</button>
            <button
              class="bg-white text-slate-600 px-5 py-2 rounded-full text-sm font-semibold hover:bg-slate-100">Cars</button>
            <button
              class="bg-white text-slate-600 px-5 py-2 rounded-full text-sm font-semibold hover:bg-slate-100">Graphics</button>
          </div>






          <div class="relative aspect-[6/3]  select-none rounded-2xl shadow-2xl overflow-hidden" ref="sliderContainer">

            <div class="absolute inset-0 z-10"
              :style="{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }">
              <div class="checkerboard-bg absolute inset-0"></div>

              <img :src="afterImage" alt="Image after background removal"
                class=" object-contain pointer-events-none absolute inset-0" draggable="false" />
            </div>

            <div class="absolute inset-0">
              <img :src="beforeImage" alt="Image before background removal" class=" object-contain pointer-events-none"
                draggable="false" />
            </div>

            <div class="absolute top-0 bottom-0 w-1 bg-white/50 cursor-ew-resize z-20"
              :style="{ left: `calc(${sliderPosition}% - 1px)` }" @mousedown="startDragging"
              @touchstart="startDragging">
              <div
                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-12 bg-white rounded-full border-4 border-blue-600 shadow-lg flex items-center justify-center pointer-events-none">
                <svg class="w-5 h-5 text-blue-600 rotate-90" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24" stroke-width="3" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                </svg>
              </div>
            </div>



          </div>




          <div class="mt-8">
            <a href="#" class="font-semibold text-blue-600 hover:text-blue-800 transition-colors group">
              See more samples <span class="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
            </a>
          </div>


        </div>
      </div>



    </div>


  </main>
</template>

<script setup>

import { ref } from 'vue';

const originalUrl = ref(null);
const outputUrl = ref(null);
const isLoading = ref(false);
const error = ref(null);
const fileInput = ref(null);
const sliderValue = ref(50);


const demoImages = [
  { id: 1, url: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 2, url: 'https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 3, url: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=400' },
];

const triggerFileInput = () => {
  fileInput.value.click();
};

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    processFile(file);
  }
};

const handleDrop = (event) => {
  const file = event.dataTransfer.files[0];
  if (file && file.type.startsWith('image/')) {
    processFile(file);
  }
};

const handleDemoClick = async (imageUrl) => {
  isLoading.value = true;
  error.value = null;
  try {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    const file = new File([blob], "demo.jpg", { type: blob.type });
    processFile(file);
  } catch (err) {
    error.value = 'Failed to fetch demo image. ' + err.message;
    isLoading.value = false;
  }
};

const processFile = async (file) => {
  reset();
  isLoading.value = true;
  originalUrl.value = URL.createObjectURL(file);

  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await fetch('http://localhost:8000/remove-bg/', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.errors?.[0]?.title || 'Failed to process image');
    }

    const blob = await response.blob();
    outputUrl.value = URL.createObjectURL(blob);
  } catch (err) {
    console.log(err)
    error.value = 'Error removing background: ' + err.message;
  } finally {
    sliderPosition1.value = 0;
    animateSliderOnce()
    isLoading.value = false;
  }
};

const reset = () => {
  originalUrl.value = null;
  outputUrl.value = null;
  error.value = null;
  sliderValue.value = 50;
};



let animationInterval = null

const animateSliderOnce = () => {
  animationInterval = setInterval(() => {
    if (sliderPosition1.value >= 100) {
      clearInterval(animationInterval) // ✅ Stop when done
    } else {
      sliderPosition1.value += 1
    }
  }, 10) // adjust speed if needed
}

onMounted(() => {
  
})

onUnmounted(() => {
  clearInterval(animationInterval)
})


// --- PROPS ---
// This makes the component reusable. You can pass different images to it.
const props = defineProps({
  beforeImage: {
    type: String,
    // Placeholder image with a background
    default: '/images/tools/dog-before.png',
  },
  afterImage: {
    type: String,
    // The SAME image but with the background removed (as a PNG)
    default: '/images/tools/dog-after.png',
  },
});

// --- COMPONENT STATE ---
const sliderContainer = ref(null); // A reference to the main div
const sliderPosition = ref(50);   // The slider's position (0-100%)
const sliderPosition1 = ref(0);   // The slider's position (0-100%)
const isDragging = ref(false);    // A flag to know if we are currently dragging

// --- METHODS ---
// This function runs when you click or touch the slider handle
const startDragging = (event) => {
  isDragging.value = true;
  // Prevent default browser actions like selecting text while dragging
  event.preventDefault();
};

// This function runs when you release the mouse button or lift your finger
const stopDragging = () => {
  isDragging.value = false;
};

// This function runs whenever the mouse or your finger moves
const onDrag = (event) => {
  // Only run if we are actively dragging and the component is mounted
  if (!isDragging.value || !sliderContainer.value) return;

  // Get the horizontal position of the mouse/finger
  const clientX = event.touches ? event.touches[0].clientX : event.clientX;

  // Get the dimensions and position of the container
  const rect = sliderContainer.value.getBoundingClientRect();

  // Calculate the new position inside the container
  let newX = clientX - rect.left;

  // Make sure the handle doesn't go outside the container
  if (newX < 0) newX = 0;
  if (newX > rect.width) newX = rect.width;

  // Update the slider's position as a percentage
  sliderPosition.value = (newX / rect.width) * 100;
};

// --- LIFECYCLE HOOKS ---
// Add event listeners to the whole window to ensure smooth dragging even if the cursor leaves the handle
onMounted(() => {
  window.addEventListener('mousemove', onDrag);
  window.addEventListener('touchmove', onDrag);
  window.addEventListener('mouseup', stopDragging);
  window.addEventListener('touchend', stopDragging);
});

// Clean up the event listeners when the component is removed to prevent memory leaks
onUnmounted(() => {
  window.removeEventListener('mousemove', onDrag);
  window.removeEventListener('touchmove', onDrag);
  window.removeEventListener('mouseup', stopDragging);
  window.removeEventListener('touchend', stopDragging);
});


const originalImage = ref('/images/tools/dog-before.png')
const processedImage = ref('/images/tools/dog-after.png')
// SEO and Metadata using useHead (for Nuxt.js)
useHead({
  title: 'Remove Background from Image – Free AI BG Remover',
  meta: [
    { name: 'description', content: 'Remove image backgrounds instantly with our free AI-powered background remover. Fast, clean, no watermark – perfect for ecommerce & content creators.' },
    { name: 'keywords', content: 'bg remover, background remover, remove bg, transparent background, free background remover, AI remove background' },
    { property: 'og:title', content: 'Free AI Background Remover – AI Hub' },
    { property: 'og:description', content: 'Upload your photo and remove the background in seconds with our lightning-fast AI tool. No signup needed.' },
    { property: 'og:image', content: 'https://yourdomain.com/images/bg-remover-preview.jpg' }, // Replace with a real preview image URL
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "AI Background Remover",
        operatingSystem: "All",
        applicationCategory: "MultimediaApplication",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      }),
    },
  ],
});
</script>
<style scoped>
/* This CSS creates the classic checkerboard pattern */
.checkerboard-bg {
  background-color: #e5e7eb;
  /* fallback light gray */
  background-image:
    linear-gradient(45deg, #d1d5db 25%, transparent 25%),
    linear-gradient(-45deg, #d1d5db 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #d1d5db 75%),
    linear-gradient(-45deg, transparent 75%, #d1d5db 75%);
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
  z-index: 0;
}

</style>