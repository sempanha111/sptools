<template>
    <section id="downloader" class="relative text-center pt-32 pb-24 md:pt-40 md:pb-32 px-6">



        <div v-if="!outputUrl" class="container mx-auto relative z-10">
            <h1 class="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight">The Ultimate Facebook Video
                Downloader</h1>
            <p class="text-xl text-slate-600 mt-4 max-w-2xl mx-auto">Download any public Facebook video in HD without
                limits. Paste a link to get started.</p>

            <div class="max-w-2xl mx-auto mt-10">
                <form @submit.prevent="submitForm" class="relative">
                    <div class="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="text-slate-400">
                            <path fill="currentColor"
                                d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                        </svg>
                    </div>
                    <input v-model="inputUrl" type="text" placeholder="Paste Facebook video link here..."
                        class="w-full bg-white/80 border-2 border-slate-200 rounded-full py-4 pl-16 pr-36 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition-all shadow-sm text-lg">
                    <button type="submit"
                        class="absolute cursor-pointer right-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white font-semibold px-6 py-2.5 rounded-full shadow-lg shadow-blue-500/30 hover:bg-blue-700 transition-all transform hover:scale-105">
                        Download
                    </button>
                </form>
                <ErrorMessage :message="errmessage" />
            </div>
            <div class="mt-6 flex justify-center items-center gap-x-4 text-sm text-slate-500">
                <span>✓ HD & SD Options</span>
                <span>✓ MP3 Audio Supported</span>
                <span>✓ 100% Free & Secure</span>
            </div>

            
        </div>


        <div v-else class="container mx-auto px-6">
            <h1 class="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight">The Ultimate Facebook Video
                Downloader</h1>
            <div class="text-center mb-12 mt-12">
                <h2 class="text-4xl font-bold text-slate-900">Your Video is Ready!</h2>
                <p class="text-slate-600 mt-3 max-w-2xl mx-auto">Choose your preferred format and quality below to save
                    the video to your device.</p>
            </div>

            <div class="max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded-lg border border-slate-200 shadow-lg">
                <div class="grid md:grid-cols-3 gap-6 md:gap-8">

                    <div class="md:col-span-1">
                        <img src="https://images.unsplash.com/photo-1633968562817-6d8b33393ac4?q=80&w=600&h=400&auto=format&fit=crop"
                            alt="Video thumbnail" class="rounded-lg w-full object-cover aspect-video shadow-md">
                    </div>

                    <div class="md:col-span-2">
                        <div class="flex items-center gap-3">
                            <img src="https://i.imgur.com/kv3T2P9.jpg" alt="Author avatar"
                                class="w-10 h-10 rounded-full">
                            <span class="font-semibold text-slate-700">A Creator's Page</span>
                        </div>
                        <p class="mt-4 text-slate-600 line-clamp-2">{{ videoData.title }}</p>

                        <div class="mt-6 border-t border-slate-200 pt-6">
                            <p class="text-sm font-semibold text-slate-500 mb-3">Download Options:</p>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <a href="#"
                                    class="group flex items-center justify-center gap-2 w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20">
                                    <svg class="w-5 h-5 transition-transform group-hover:-translate-y-0.5"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
                                        <path
                                            d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
                                    </svg>
                                    <div>
                                        <span class="block leading-tight">Download HD</span>
                                        <span class="block text-xs opacity-70 leading-tight">(Est. 18.5 MB)</span>
                                    </div>
                                </a>
                                <a href="#"
                                    class="group flex items-center justify-center gap-2 w-full bg-white text-slate-700 font-semibold py-3 px-4 rounded-lg hover:bg-slate-200 transition-all border border-slate-300">
                                    <svg class="w-5 h-5 transition-transform group-hover:-translate-y-0.5"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
                                        <path
                                            d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
                                    </svg>
                                    <div>
                                        <span class="block leading-tight">Download SD</span>
                                        <span class="block text-xs text-slate-500 leading-tight">(Est. 8.2 MB)</span>
                                    </div>
                                </a>
                            </div>
                            <a href="#"
                                class="group flex items-center justify-center gap-2 w-full bg-emerald-100 text-emerald-800 font-semibold py-3 px-4 rounded-lg hover:bg-emerald-200 transition-all mt-3">
                                <svg class="w-5 h-5 transition-transform group-hover:-translate-y-0.5"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M7 4a3 3 0 016 0v6a3 3 0 11-6 0V4z" />
                                    <path
                                        d="M5.5 8.5a.5.5 0 01.5.5v1a3.5 3.5 0 007 0v-1a.5.5 0 011 0v1a4.5 4.5 0 01-4.5 4.475V16.5a.5.5 0 01-1 0v-1.525A4.5 4.5 0 014.5 10v-1a.5.5 0 01.5-.5z" />
                                </svg>
                                <div>
                                    <span class="block leading-tight">Download MP3 Audio</span>
                                    <span class="block text-xs text-emerald-600 leading-tight">(Est. 2.1 MB)</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="mt-12 text-center">
                    <a href="#" class="font-semibold text-blue-600 hover:text-blue-800 transition-colors group">
                        &larr; Download Another Video
                    </a>
                </div>
            </div>
        </div>


        <Loading :isLoading="loading" />
        








    </section>


    <section class="py-24">
        <div class="container mx-auto px-6">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-slate-900">The Most Powerful & User-Friendly Downloader</h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="glass-card p-8 rounded-2xl animate-on-scroll">
                    <div
                        class="w-16 h-16 rounded-xl bg-white/50 text-blue-600 flex items-center justify-center mb-4 border border-white/30">
                        <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="2" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M11.25 10.5c-.36-1.04-.9-2.01-1.59-2.883a2.49 2.49 0 00-3.32 0c-.69.873-1.23 1.843-1.59 2.883" />
                        </svg>
                    </div>
                    <h3 class="font-bold text-xl">Download in All Formats</h3>
                    <p class="text-slate-600 mt-2">Get your videos in Full HD (1080p) or Standard Definition (720p).
                        Need just the sound? Instantly convert any video to a high-quality MP3 audio file.</p>
                </div>
                <div class="glass-card p-8 rounded-2xl animate-on-scroll" style="animation-delay: 150ms;">
                    <div
                        class="mx-auto w-16 h-16 rounded-xl bg-white/50 text-blue-600 flex items-center justify-center mb-4 border border-white/30">
                        <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="2" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 2.18a14.98 14.98 0 00-5.84 7.38m5.84 2.58v4.8" />
                        </svg>
                    </div>
                    <h3 class="font-bold text-xl">Reels & Stories Support</h3>
                    <p class="text-slate-600 mt-2">Our downloader isn't just for standard videos. It fully supports
                        downloading Facebook Reels and Stories, so you can save any content you love.</p>
                </div>
                <div class="glass-card p-8 rounded-2xl animate-on-scroll" style="animation-delay: 300ms;">
                    <div
                        class="mx-auto w-16 h-16 rounded-xl bg-white/50 text-blue-600 flex items-center justify-center mb-4 border border-white/30">
                        <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="2" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M9 12.75l1.5 1.5l3-3.75M12 21a9 9 0 100-18 9 9 0 000 18z" />
                        </svg>
                    </div>
                    <h3 class="font-bold text-xl">No Software Needed</h3>
                    <p class="text-slate-600 mt-2">Everything works directly in your browser. There is nothing to
                        install on your computer or phone. It works perfectly on Windows, macOS, Android, and iOS.</p>
                </div>
            </div>
        </div>
    </section>




    <section class="py-24 bg-white border-y border-slate-200">
        <div class="container mx-auto px-6">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-slate-900">How to Use Our Downloader</h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-6xl mx-auto">
                <div class="p-8 animate-on-scroll">
                    <div
                        class="mx-auto w-20 h-20 rounded-full bg-slate-100 text-blue-600 flex items-center justify-center mb-6 text-4xl font-bold">
                        1</div>
                    <h3 class="text-2xl font-bold text-slate-900">Copy Video Link</h3>
                    <p class="text-slate-600 mt-2">Find your video on Facebook, click the 'Share' button, and choose
                        'Copy Link'.</p>
                </div>
                <div class="p-8 animate-on-scroll" style="animation-delay: 150ms;">
                    <div
                        class="mx-auto w-20 h-20 rounded-full bg-slate-100 text-blue-600 flex items-center justify-center mb-6 text-4xl font-bold">
                        2</div>
                    <h3 class="text-2xl font-bold text-slate-900">Paste Link Here</h3>
                    <p class="text-slate-600 mt-2">Return to our website and paste the link into the input box at the
                        top of the page.</p>
                </div>
                <div class="p-8 animate-on-scroll" style="animation-delay: 300ms;">
                    <div
                        class="mx-auto w-20 h-20 rounded-full bg-slate-100 text-blue-600 flex items-center justify-center mb-6 text-4xl font-bold">
                        3</div>
                    <h3 class="text-2xl font-bold text-slate-900">Download Video</h3>
                    <p class="text-slate-600 mt-2">Click "Download" and select your preferred quality to save the video
                        to your device.</p>
                </div>
            </div>
        </div>
    </section>



    <section class="py-24">
        <div class="container mx-auto px-6">
            <div class="grid lg:grid-cols-2 gap-12 items-center">
                <div class="animate-on-scroll">
                    <img src="https://images.unsplash.com/photo-1554426577-9426c167AA30?q=80&w=800&auto=format&fit=crop"
                        alt="Person watching video on a phone" class="rounded-2xl shadow-xl w-full">
                </div>
                <div class="animate-on-scroll" style="animation-delay: 150ms;">
                    <h2 class="text-4xl font-bold text-slate-900">The Best Tool to Download Facebook Reels & Videos</h2>
                    <p class="text-lg text-slate-600 mt-4">As you can see, our Facebook Reel Downloader helps you to
                        download all your favorite videos and save them from Facebook without needing the app. So you
                        can easily grab all the videos you want right to your device. All you need is a browser!</p>
                    <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div class="flex items-start space-x-3">
                            <div
                                class="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="2" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M9 12.75l1.5 1.5l3-3.75M12 21a9 9 0 100-18 9 9 0 000 18z" />
                                </svg>
                            </div>
                            <div>
                                <h4 class="font-bold text-slate-800">High Quality Downloads</h4>
                                <p class="text-sm text-slate-500">All downloaded videos are in their original, high
                                    quality without compression.</p>
                            </div>
                        </div>
                        <div class="flex items-start space-x-3">
                            <div
                                class="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="2" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75" />
                                </svg>
                            </div>
                            <div>
                                <h4 class="font-bold text-slate-800">Original Audio</h4>
                                <p class="text-sm text-slate-500">Save videos with their original sound or download the
                                    audio separately as an MP3.</p>
                            </div>
                        </div>
                        <div class="flex items-start space-x-3">
                            <div
                                class="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="2" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                </svg>
                            </div>
                            <div>
                                <h4 class="font-bold text-slate-800">Fastest Downloader</h4>
                                <p class="text-sm text-slate-500">Integrated with the latest technology, the whole
                                    download process takes just a few seconds.</p>
                            </div>
                        </div>
                        <div class="flex items-start space-x-3">
                            <div
                                class="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="2" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                                </svg>
                            </div>
                            <div>
                                <h4 class="font-bold text-slate-800">100% Safe</h4>
                                <p class="text-sm text-slate-500">Your privacy is protected. We don't store your data or
                                    download history.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="faq" class="py-24">
        <div class="container mx-auto px-6 max-w-3xl">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-slate-900">Your Questions, Answered</h2>
            </div>
            <div class="space-y-4">
                <details class="glass-card p-6 rounded-2xl group border-2 border-transparent hover:border-blue-200">
                    <summary class="flex justify-between items-center font-semibold text-slate-800 cursor-pointer">Can I
                        download private Facebook videos? <span
                            class="plus-icon text-blue-500 text-2xl transform transition-transform duration-300 group-open:rotate-45">+</span>
                    </summary>
                    <p class="text-slate-600 mt-4">No. To respect user privacy, our tool can only access and download
                        videos that are publicly available. You cannot download videos from private accounts or closed
                        groups.</p>
                </details>
                <details class="glass-card p-6 rounded-2xl group border-2 border-transparent hover:border-blue-200">
                    <summary class="flex justify-between items-center font-semibold text-slate-800 cursor-pointer">Is it
                        legal to download Facebook videos? <span
                            class="plus-icon text-blue-500 text-2xl transform transition-transform duration-300 group-open:rotate-45">+</span>
                    </summary>
                    <p class="text-slate-600 mt-4">Downloading videos is generally permissible for personal use and
                        offline viewing. However, you must respect copyright laws. Re-uploading or distributing someone
                        else's copyrighted content without their permission may be illegal.</p>
                </details>
            </div>
        </div>
    </section>
</template>


<script lang="ts" setup>

import Loading from '~/components/Loading.vue';
import ErrorMessage from '~/components/ErrorMessage.vue';

import { ref } from 'vue';
import axios from 'axios';

const outputUrl = ref(false)
const loading = ref(false)
const errmessage = ref('')
const inputUrl = ref('')
const videoData = ref<{
  title: string
  formats: { format: string; url: string }[]
}>({
  title: '',
  formats: [],
})

const audio_only_url = ref('')
const sd_url = ref('')
const hd_url = ref('')

const submitForm = async () => {
    
    if (!inputUrl.value){
        alert("Please enter a TikTok video URL")
        return
    }

    loading.value = true

    try {
        const res = await axios.get('http://127.0.0.1:8000/facebook-download', {
            params: {url: inputUrl.value}
        })


        videoData.value = res.data
        extractVideoUrls()
        outputUrl.value = true
        // console.log(videoData.value.formats)


    } catch (error) {
        console.log(error)
        errmessage.value = "Unable to download anything from this URL."
    }
    finally{
        loading.value = false
    }


}

const extractVideoUrls = () => {
  let count = 0

  for (const item of videoData.value.formats) {
    const format = item.format.toLowerCase()

    if (!audio_only_url.value && format.includes('audio only')) {
      audio_only_url.value = item.url
      count++
    } else if (!sd_url.value && format.startsWith('sd')) {
      sd_url.value = item.url
      count++
    } else if (!hd_url.value && format.startsWith('hd')) {
      hd_url.value = item.url
      count++
    }

    if (count >= 3) break
  }

  console.log(audio_only_url.value)
  console.log(sd_url.value)
  console.log(hd_url.value)
}




</script>