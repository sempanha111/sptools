<template>
  <section id="downloader" class="relative text-center pt-32 pb-16 md:pt-40 md:pb-24 px-6 bg-white overflow-hidden">


    <div v-if="!outputurl" class="container mx-auto relative z-10">
      <h1 class="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight">SP-Tools-Tiktok downloader
      </h1>
      <p class="text-xl text-slate-600 mt-4 max-w-2xl mx-auto">This is how you can use TikTok downloader  without watermark:</p>
      <div class="max-w-2xl mx-auto mt-10">
        <form @submit.prevent="submitForm" class="relative">
          <div class="absolute left-6 top-1/2 -translate-y-1/2 w-7 h-7">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="text-slate-400">
              <path fill="currentColor"
                d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0H283.87a162.55,162.55,0,1,1,164.13,209.91Z" />
            </svg>
          </div>
          <input v-model="inputUrl" type="text" placeholder="Paste TikTok video link here..."
            class="w-full bg-white border-2 border-slate-300 rounded-full py-4 pl-16 pr-36 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition-all shadow-sm text-lg">
          <button type="submit"
            class="absolute cursor-pointer right-2 top-1/2 -translate-y-1/2 bg-slate-900 text-white font-semibold px-6 py-2.5 rounded-full shadow-md hover:bg-slate-800 transition-all transform hover:scale-105">
            Download
          </button>
        </form>
        <ErrorMessage :message="errorMessage" />
      </div>
    </div>


    <div v-else class="container mx-auto text-center">
      <h1 class="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight">SP-Tools-Tiktok downloader</h1>

      <div class="mt-12">
        <h2 class="text-4xl font-bold text-slate-900">Your Download is Ready</h2>
        <p class="text-slate-600 mt-3 max-w-2xl mx-auto">Here is a preview of your video. Choose your desired format
          below.</p>
      </div>

      <div class="max-w-lg mx-auto mt-10 text-left">
        <div class="glass-card rounded-2xl shadow-2xl shadow-blue-500/10 overflow-hidden">

          <div class="relative h-64 bg-cover bg-center"
            :style="{ backgroundImage: `url(${videoData.bg_url})` }"
          >
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div class="absolute bottom-0 left-0 p-4 flex items-center gap-3">
              <img alt="Author Avatar" class="h-12 w-12 rounded-full border-2 border-white"
                :src="videoData.circle_img_url">
              <div>
                <h3 class="font-bold text-white shadow-sm">{{videoData.username}}</h3>
              </div>
            </div>
          </div>

          <div class="p-6">
            <p class="text-slate-700">{{ videoData.caption }}</p>

            <div class="mt-6 grid grid-cols-1 gap-3">
              <a :href="videoData.MP4" download
                class=" w-full text-center bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 flex items-center justify-center gap-2">
                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
                  <path
                    d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
                </svg>
                Download MP4
              </a>
              <a :href="videoData.MP4_HD" download
                class=" w-full text-center bg-slate-200 text-slate-800 font-semibold py-3 px-6 rounded-lg hover:bg-slate-300 transition-all flex items-center justify-center gap-2">
                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
                  <path
                    d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
                </svg>
                Download MP4 HD
              </a>
              <a :href="videoData.MP4_with_Watermark" download
                class=" w-full text-center bg-emerald-100 text-emerald-800 font-semibold py-3 px-6 rounded-lg hover:bg-emerald-200 transition-all flex items-center justify-center gap-2">
                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M7 4a3 3 0 016 0v6a3 3 0 11-6 0V4z" />
                  <path
                    d="M5.5 8.5a.5.5 0 01.5.5v1a3.5 3.5 0 007 0v-1a.5.5 0 011 0v1a4.5 4.5 0 01-4.5 4.475V16.5a.5.5 0 01-1 0v-1.525A4.5 4.5 0 014.5 10v-1a.5.5 0 01.5-.5z" />
                </svg>
                MP4 with Watermark
              </a>
            </div>

            <div class="mt-6 text-center">
              <button @click="reset"  class="font-semibold cursor-pointer text-blue-600 hover:text-blue-800 transition-colors group">
                &larr; Back to Downloader 
              </button>
            </div>

          </div>
        </div>
      </div>

    </div>

    <Loading :isLoading="loading"/>





  </section>



  <section class="py-24">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-slate-900">Why You Should Use Our TikTok Video Downloader</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div class="glass-card p-8 rounded-2xl text-center animate-on-scroll">
          <div
            class="mx-auto w-16 h-16 rounded-2xl bg-white/50 text-blue-600 flex items-center justify-center mb-6 border border-white/30">
            <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-slate-900">High Quality</h3>
          <p class="text-slate-600 mt-2">Our tool helps you download Full HD and 4K TikTok videos. Save as
            many videos as you want in MP4 format. Remove the TikTok watermark and enjoy the best
            quality with every download.</p>
        </div>
        <div class="glass-card p-8 rounded-2xl text-center animate-on-scroll" style="animation-delay: 150ms;">
          <div
            class="mx-auto w-16 h-16 rounded-2xl bg-white/50 text-blue-600 flex items-center justify-center mb-6 border border-white/30">
            <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-2.467m0 0l-2.225-2.51.569-2.467m0 0l2.225-2.51 2.467.569m0 0l2.51 2.225-2.467.569M12 21a9 9 0 110-18 9 9 0 010 18z" />
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-slate-900">Easy to Use</h3>
          <p class="text-slate-600 mt-2">Our downloader works on any device, including mobile phone, PC,
            or tablet, and supports all operating systems like Android, iOS, and Windows. No need to
            install any software.</p>
        </div>
        <div class="glass-card p-8 rounded-2xl text-center animate-on-scroll" style="animation-delay: 300ms;">
          <div
            class="mx-auto w-16 h-16 rounded-2xl bg-white/50 text-blue-600 flex items-center justify-center mb-6 border border-white/30">
            <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-slate-900">Free and Fast</h3>
          <p class="text-slate-600 mt-2">Our service provides fast TikTok video download in HD resolution.
            Save TT videos instantly without hidden fees. Our TikTok download without watermark service
            is always free.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="py-24 bg-slate-50 border-y border-slate-200">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="animate-on-scroll">
          <img src="https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=800&auto=format&fit=crop"
            alt="Person using a mobile phone" class="rounded-2xl shadow-xl w-full">
        </div>
        <div class="animate-on-scroll" style="animation-delay: 150ms;">
          <h3 class="text-3xl font-bold text-slate-900">Download TikTok video on your mobile phone</h3>
          <p class="text-lg text-slate-600 mt-4">To start a tiktok download video or remove a TT watermark
            on Android or iPhone, you’ll have to launch the TT app and choose a video. On the video
            page, you’ll see the arrow-shaped "Share" button on the right side of the screen. Tap on it,
            and select "Copy link". Now open our web page and paste the link into the text field. Then
            press the "Download video TikTok" button. The file will be saved without any logos and in
            mp4 format.</p>
        </div>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16">
        <div class="animate-on-scroll lg:order-last">
          <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop"
            alt="Person using a laptop" class="rounded-2xl shadow-xl w-full">
        </div>
        <div class="animate-on-scroll" style="animation-delay: 150ms;">
          <h3 class="text-3xl font-bold text-slate-900">TikTok video downloader for PC</h3>
          <p class="text-lg text-slate-600 mt-4">To use the tik tok video download without watermark hd
            app on PC or Mac, copy a link from the website. Next, go back to our website and paste the
            link in the input field on the main page. After that, click on the "Save TikTok" button to
            get the link. The TikTok video download works perfectly on Windows, Mac OS, and Linux. PC
            users are not required to install any additional apps.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="py-24">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-slate-900">Get Videos in 3 Easy Steps</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-6xl mx-auto">
        <div class="glass-card p-8 rounded-2xl animate-on-scroll">
          <div
            class="mx-auto w-20 h-20 rounded-full bg-white/50 text-blue-600 flex items-center justify-center mb-6 text-4xl font-bold border border-white/30">
            1</div>
          <h3 class="text-2xl font-bold text-slate-900">Copy TikTok Link</h3>
          <p class="text-slate-600 mt-2">Find the video you want on the TikTok app or website and copy its
            link.</p>
        </div>
        <div class="glass-card p-8 rounded-2xl animate-on-scroll" style="animation-delay: 150ms;">
          <div
            class="mx-auto w-20 h-20 rounded-full bg-white/50 text-blue-600 flex items-center justify-center mb-6 text-4xl font-bold border border-white/30">
            2</div>
          <h3 class="text-2xl font-bold text-slate-900">Paste Link Here</h3>
          <p class="text-slate-600 mt-2">Paste the link into the input box at the top of this page and
            click "Download".</p>
        </div>
        <div class="glass-card p-8 rounded-2xl animate-on-scroll" style="animation-delay: 300ms;">
          <div
            class="mx-auto w-20 h-20 rounded-full bg-white/50 text-blue-600 flex items-center justify-center mb-6 text-4xl font-bold border border-white/30">
            3</div>
          <h3 class="text-2xl font-bold text-slate-900">Save Your Video</h3>
          <p class="text-slate-600 mt-2">Your video will be ready in seconds. Save it to your device
            without any watermark.</p>
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
        <details class="glass-card p-6 rounded-2xl group">
          <summary class="flex justify-between items-center font-semibold text-slate-800 cursor-pointer">
            Is downloading TikTok videos legal? <span
              class="text-blue-500 text-2xl transform transition-transform duration-300 group-open:rotate-45">+</span>
          </summary>
          <p class="text-slate-600 mt-4">Downloading videos is generally legal for personal use. However,
            you should always respect copyright laws and not re-upload or distribute content without the
            creator's permission.</p>
        </details>
        <details class="glass-card p-6 rounded-2xl group">
          <summary class="flex justify-between items-center font-semibold text-slate-800 cursor-pointer">
            Do I need to install any software? <span
              class="text-blue-500 text-2xl transform transition-transform duration-300 group-open:rotate-45">+</span>
          </summary>
          <p class="text-slate-600 mt-4">No. Our TikTok downloader is a fully web-based tool. Everything
            works directly in your browser on any device, including mobile phones, tablets, and
            desktops.</p>
        </details>
        <details class="glass-card p-6 rounded-2xl group">
          <summary class="flex justify-between items-center font-semibold text-slate-800 cursor-pointer">
            Does this tool work for private videos? <span
              class="text-blue-500 text-2xl transform transition-transform duration-300 group-open:rotate-45">+</span>
          </summary>
          <p class="text-slate-600 mt-4">No. This tool can only access and download videos from public
            TikTok accounts. You cannot download videos from private accounts.</p>
        </details>
      </div>
    </div>
  </section>


</template>

<script lang="ts" setup>

import ErrorMessage from '~/components/ErrorMessage.vue';
import Loading from '~/components/Loading.vue';

import { ref } from 'vue';
import axios from 'axios';
// ✅ DO this:
const videoData = ref({
  bg_url: '',
  caption: '',
  username: '',
  circle_img_url: '',
  MP4: '',
  MP4_HD: '',
  MP4_with_Watermark: '',
})




const outputurl = ref(false)
const inputUrl  = ref('')
const errorMessage = ref('')
const loading = ref(false)

const submitForm = async () => {
  loading.value = true
  if (!inputUrl.value){
    alert('Please enter a TikTok video URL');
    return
  }

  try{
    const res = await axios.get('http://127.0.0.1:8000/tiktok-download', {
      params: {url: inputUrl.value}
    })

    videoData.value = res.data
    outputurl.value = true

    console.log(videoData)
  }
  catch(err){
    console.log("Fail submit", err)
    errorMessage.value = "Link Not Found. Please try again."
  }
  finally{
    loading.value = false
  }
}

const reset = () => {
  outputurl.value = false
  inputUrl.value = ''
  errorMessage.value = ''
}




</script>

<style></style>