<template>
    <section id="downloader" class="relative text-center pt-32 pb-24 md:pt-40 md:pb-32 px-6">
        <div v-if="!outputurl" class="container mx-auto relative z-10">
            <h1 class="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight">YouTube Downloader</h1>
            <p class="text-xl text-slate-600 mt-4 max-w-2xl mx-auto">Download any YouTube video in seconds. Paste a link
                to get started.</p>

            <div class="max-w-2xl mx-auto mt-12">
                <form @submit.prevent="submitForm" class="relative">
                    <input v-model="inputUrl" type="text" placeholder="Paste YouTube video link here..."
                        class="w-full bg-white/80 border-2 border-slate-300 rounded-full py-4 pl-8 pr-36 text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-red-200 focus:border-red-500 transition-all shadow-lg text-lg">
                    <button type="submit"
                        class="absolute cursor-pointer right-2 top-1/2 -translate-y-1/2 bg-red-600 text-white font-semibold px-6 py-2.5 rounded-full shadow-lg shadow-red-500/30 hover:bg-red-700 transition-all transform hover:scale-105">
                        Download
                    </button>
                </form>
            </div>
        </div>


        <div v-else class="container mx-auto px-6">
            <h1 class="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-8">YouTube Downloader</h1>
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold text-slate-900">Your Video is Ready!</h2>
                <p class="text-slate-600 mt-3 max-w-2xl mx-auto">Choose your preferred format and quality below to save
                    the video to your device.</p>
            </div>

            <div class="max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded-lg border border-slate-200 shadow-lg">
                <div class="grid md:grid-cols-3 gap-6 md:gap-8">
                    <div class="md:col-span-1">
                        <img :src="videoData.thumbnail_url" alt="Video thumbnail"
                            class="rounded-lg w-full object-cover aspect-video shadow-md">
                        <h3 class="font-bold text-slate-800 mt-4 text-lg line-clamp-3">{{ videoData.title }} </h3>
                        <p class="text-sm text-slate-500 mt-2">{{ videoData.channel_name }}</p>
                    </div>

                    <div class="md:col-span-2">
                        <div class="flex border-b border-slate-200 mb-4">
                            <button @click="selectedTab = 'video'" :class="['font-semibold py-2 px-4 border-b-2 rounded-t-md',
                                selectedTab === 'video'
                                    ? 'border-red-600 text-red-600 bg-slate-100'
                                    : 'border-transparent text-slate-500 hover:text-red-600'
                            ]">
                                Video
                            </button>
                            <button @click="selectedTab = 'audio'" :class="['font-semibold py-2 px-4 border-b-2 rounded-t-md',
                                selectedTab === 'audio'
                                    ? 'border-red-600 text-red-600 bg-slate-100'
                                    : 'border-transparent text-slate-500 hover:text-red-600'
                            ]">
                                Audio
                            </button>
                        </div>


                        <template v-if="selectedTab === 'video'" >
                        <!-- Video Body -->
                        <div class="space-y-3">
                            <div v-for="(formats, resolution) in groupedByResolution" :key="resolution">
                                <!-- Resolution Header (toggle dropdown) -->
                                <button @click="expandedResolutions[resolution] = !expandedResolutions[resolution]"
                                    class="w-full cursor-pointer flex justify-between items-center bg-slate-50 p-3 rounded-md font-semibold text-slate-700 mb-2">
                                    <span>{{ resolution }}</span>
                                    <svg class="w-5 h-5 transition-transform"
                                        :class="{ 'rotate-180': expandedResolutions[resolution] }"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M5.23 7.21a.75.75 0 011.06 0L10 10.92l3.72-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 010-1.06z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </button>

                                <!-- Table for formats under each resolution -->
                                <div v-show="expandedResolutions[resolution]" class="p-2">
                                    <table class="w-full text-sm text-left">
                                        <thead class="text-xs text-slate-500 uppercase">
                                            <tr>
                                                <th class="py-2 px-2">Format</th>
                                                <th class="py-2 px-2">Filesize</th>
                                                <th class="py-2 px-2"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="format in formats" :key="format.itag"
                                                class="border-b border-slate-200">
                                                <td class="py-3 px-2 font-medium">
                                                    {{ format.container.toUpperCase() }}
                                                    <span class="text-slate-400">({{ format.video_codec.split('.')[0]
                                                        }})</span>
                                                </td>
                                                <td class="py-3 px-2">
                                                    {{ format.filesize_mb + 15 < 1000 ? format.filesize_mb.toFixed(2)
                                                        + ' MB' : (format.filesize_mb / 1024).toFixed(2) + ' GB' }}
                                                        </td>

                                                <td class="py-3 px-2 text-right">
                                                    <a href="javascript:void(0)" @click="openDownloadModal(format)"
                                                        class="bg-red-600 text-white font-bold px-3 py-1 rounded-md text-xs hover:bg-red-700">
                                                        Download
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>

                        </template>
                        <template v-else>

                        <!-- Audio Body -->
                        <div  class="md:col-span-2">
                
                            <!-- Audio Table -->
                            <div class="p-2">
                                <table class="w-full text-sm text-left">
                                    <thead class="text-xs text-slate-500 uppercase border-b border-slate-200">
                                        <tr>
                                            <th class="py-2 px-2">Bitrate</th>
                                            <th class="py-2 px-2">Format</th>
                                            <th class="py-2 px-2">Filesize</th>
                                            <th class="py-2 px-2 text-right">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="format in videoData.audio_options" :key="format.itag"
                                            class="border-b border-slate-100">
                                            <td class="py-3 px-2 font-medium">{{ format.abr }}</td>
                                            <td class="py-3 px-2">
                                                {{ format.audio_codec.toUpperCase() }}
                                            </td>
                                            <td class="py-3 px-2">
                                                {{ format.filesize_mb + 15 < 1000 ? format.filesize_mb.toFixed(2)
                                                    + ' MB' : (format.filesize_mb / 1024).toFixed(2) + ' GB' }} </td>
                                            <td class="py-3 px-2 text-right">
                                                <a href="javascript:void(0)" @click="DownloadAudio(format.itag)"
                                                    class="bg-red-600 text-white font-bold px-3 py-1 rounded-md text-xs hover:bg-red-700">
                                                    Download
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        </template>


                    </div>
                </div>

                <div class="mt-8 pt-6 border-t border-slate-200 text-center">
                    <a href="javascript:void(0)" @click="reset"
                        class="font-semibold text-blue-600 hover:text-blue-800 transition-colors group">
                        &larr; Download Another Video
                    </a>
                </div>
            </div>
        </div>


        <!-- Download Confirmation Modal -->
        <div v-if="showModal" class="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
            <div class="bg-white rounded-xl max-w-sm w-full shadow-xl p-6 text-left animate-fade-in">

                <template v-if="!showProgress">
                    <h3 class="text-xl font-bold text-slate-900 mb-2">Confirm Download</h3>
                    <p class="text-slate-600 text-sm mb-4">You're about to download:</p>
                    <ul class="text-slate-700 text-sm mb-4">
                        <!-- <li><strong>Resolution:</strong> {{ selectedFormat?.resolution }}</li> -->
                        <li><strong>Format:</strong> {{ selectedFormat?.container.toUpperCase() }}</li>
                        <li><strong>Filesize:</strong> {{ formatSize(selectedFormat?.filesize_mb) }}</li>
                    </ul>
                    <div class="flex justify-end space-x-3">
                        <button @click="showModal = false"
                            class="px-4 py-2 rounded-md text-sm font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200">
                            Cancel
                        </button>
                        <button @click="confirmDownload"
                            class="px-4 py-2 rounded-md text-sm font-semibold bg-red-600 text-white hover:bg-red-700">
                            OK
                        </button>
                    </div>
                </template>

                <template v-else>
                    <h3 class="text-lg font-semibold text-slate-900 mb-4 text-center">Render Video Quality...</h3>

                    <!-- Progress Bar -->
                    <div class="w-full bg-slate-200 h-3 rounded-full overflow-hidden mb-4">
                        <div class="bg-red-600 h-full transition-all duration-300 ease-in-out"
                            :style="{ width: progress + '%' }"></div>
                    </div>
                    <p class="text-center text-sm text-slate-600 mb-6">{{ progress.toFixed(0) }}%</p>

                    <!-- Spinner and Message -->
                    <div v-if="showProgressing" class="flex flex-col items-center justify-center mt-6">
                        <div
                            class="w-14 h-14 border-[5px] border-blue-500 border-t-transparent rounded-full animate-spin">
                        </div>
                        <p class="mt-4 text-slate-700 text-base font-medium">Processing video, please wait...</p>
                    </div>
                </template>


            </div>
        </div>




        <Loading :isLoading="loading" />

    </section>


    <section class="pb-24">
        <div class="container mx-auto px-6">
            <p class="text-center text-slate-500 font-semibold">Works on all your favorite browsers</p>
            <div class="flex justify-center items-center gap-x-8 md:gap-x-12 mt-6 grayscale opacity-70">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Chrome_icon_%28September_2014%29.svg"
                    alt="Chrome Logo" class="h-10 md:h-12">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Firefox_logo%2C_2019.svg"
                    alt="Firefox Logo" class="h-10 md:h-12">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/48/Microsoft_Edge_logo_%282019%29.svg"
                    alt="Edge Logo" class="h-10 md:h-12">
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d2/Safari_OS_X_El_Capitan_icon.png"
                    alt="Safari Logo" class="h-10 md:h-12">
            </div>
        </div>
    </section>

    <section id="how-to" class="py-24">
        <div class="container mx-auto px-6">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-slate-900">Get Videos in 3 Easy Steps</h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div class="bg-white p-8 rounded-lg border border-slate-200 animate-on-scroll">
                    <div
                        class="w-16 h-16 bg-slate-100 text-red-600 flex items-center justify-center rounded-xl mb-6 text-3xl font-bold">
                        1</div>
                    <h3 class="text-xl font-bold text-slate-900">Copy YouTube Link</h3>
                    <p class="text-slate-600 mt-2">Find your video on YouTube, click 'Share', and then 'Copy Link'.</p>
                </div>
                <div class="bg-white p-8 rounded-lg border border-slate-200 animate-on-scroll"
                    style="animation-delay: 150ms;">
                    <div
                        class="w-16 h-16 bg-slate-100 text-red-600 flex items-center justify-center rounded-xl mb-6 text-3xl font-bold">
                        2</div>
                    <h3 class="text-xl font-bold text-slate-900">Paste Link Here</h3>
                    <p class="text-slate-600 mt-2">Return to our website and paste the copied link into the input box
                        above.</p>
                </div>
                <div class="bg-white p-8 rounded-lg border border-slate-200 animate-on-scroll"
                    style="animation-delay: 300ms;">
                    <div
                        class="w-16 h-16 bg-slate-100 text-red-600 flex items-center justify-center rounded-xl mb-6 text-3xl font-bold">
                        3</div>
                    <h3 class="text-xl font-bold text-slate-900">Download Your File</h3>
                    <p class="text-slate-600 mt-2">Click "Download" and choose from the available formats to save the
                        file.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="features" class="py-24 bg-white border-y border-slate-200">
        <div class="container mx-auto px-6">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-slate-900">Powerful Features, Simple Interface</h2>
                <p class="text-slate-600 mt-3 max-w-2xl mx-auto">We provide all the tools you need for a fast and
                    seamless downloading experience.</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="glass-card p-8 rounded-2xl">
                    <div
                        class="w-16 h-16 rounded-xl bg-white/50 text-red-600 flex items-center justify-center mb-6 border border-white/30 transition-transform duration-300 hover:scale-110">
                        <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="2" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M9 12.75l1.5 1.5l3-3.75M12 21a9 9 0 100-18 9 9 0 000 18z" />
                        </svg>
                    </div>
                    <h3 class="font-bold text-xl mb-2">4K, HD & SD Formats</h3>
                    <p class="text-slate-600">Download videos in any available resolution, from 144p up to stunning 4K,
                        to suit your needs.</p>
                </div>
                <div class="glass-card p-8 rounded-2xl">
                    <div
                        class="w-16 h-16 rounded-xl bg-white/50 text-red-600 flex items-center justify-center mb-6 border border-white/30 transition-transform duration-300 hover:scale-110">
                        <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="2" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
                        </svg>
                    </div>
                    <h3 class="font-bold text-xl mb-2">MP3 Conversion</h3>
                    <p class="text-slate-600 mt-2">Easily extract and download the audio from any YouTube video as a
                        high-quality MP3 file.</p>
                </div>
                <div class="glass-card p-8 rounded-2xl">
                    <div
                        class="w-16 h-16 rounded-xl bg-white/50 text-red-600 flex items-center justify-center mb-6 border border-white/30 transition-transform duration-300 hover:scale-110">
                        <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="2" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
                        </svg>
                    </div>
                    <h3 class="font-bold text-xl mb-2">Playlist Support</h3>
                    <p class="text-slate-600 mt-2">Paste a playlist link to see all videos and download them
                        individually or as a batch.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="how-to" class="py-24">
        <div class="container mx-auto px-6">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div class="animate-on-scroll">
                    <h2 class="text-4xl font-bold text-slate-900">Simple as Copy & Paste</h2>
                    <p class="text-lg text-slate-600 mt-4">Our downloader does all the hard work for you. Just grab the
                        link and you're ready to go.</p>
                    <ul class="space-y-6 mt-8">
                        <li class="flex items-start">
                            <span
                                class="bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 mr-4">1</span>
                            <div>
                                <h4 class="font-bold text-lg">Copy YouTube Link</h4>
                                <p class="text-slate-600">Find your video, click the 'Share' button, and choose 'Copy
                                    Link'.</p>
                            </div>
                        </li>
                        <li class="flex items-start">
                            <span
                                class="bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 mr-4">2</span>
                            <div>
                                <h4 class="font-bold text-lg">Paste Link Here</h4>
                                <p class="text-slate-600">Return to our website and paste the link into the input box at
                                    the top of the page.</p>
                            </div>
                        </li>
                        <li class="flex items-start">
                            <span
                                class="bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 mr-4">3</span>
                            <div>
                                <h4 class="font-bold text-lg">Download Your File</h4>
                                <p class="text-slate-600">Click "Download" and choose from the available formats and
                                    quality options to save the file.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="animate-on-scroll" style="animation-delay: 150ms;">
                    <div class="relative">
                        <img src="https://i.imgur.com/u5vG8wQ.png"
                            alt="Screenshot of YouTube with copy link highlighted" class="rounded-xl shadow-xl w-full">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="faq" class="py-24 bg-white border-y border-slate-200">
        <div class="container mx-auto px-6 max-w-3xl">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-slate-900">Your Questions, Answered</h2>
            </div>
            <div class="space-y-4">
                <details class="bg-white p-6 rounded-lg group border-2 border-slate-200 hover:border-red-300">
                    <summary
                        class="flex justify-between items-center font-semibold text-slate-800 cursor-pointer text-lg">
                        Is
                        it legal to download YouTube videos? <span
                            class="plus-icon text-red-500 text-2xl transform transition-transform duration-300 group-open:rotate-135">+</span>
                    </summary>
                    <p class="text-slate-600 mt-4 pt-4 border-t border-slate-200">Downloading videos is generally
                        permissible for personal use. However, you must respect copyright laws. Re-uploading copyrighted
                        content without permission may be illegal.</p>
                </details>
                <details class="bg-white p-6 rounded-lg group border-2 border-slate-200 hover:border-red-300">
                    <summary
                        class="flex justify-between items-center font-semibold text-slate-800 cursor-pointer text-lg">
                        What formats and qualities can I download? <span
                            class="plus-icon text-red-500 text-2xl transform transition-transform duration-300 group-open:rotate-135">+</span>
                    </summary>
                    <p class="text-slate-600 mt-4 pt-4 border-t border-slate-200">You can download videos as MP4 or WEBM
                        files in resolutions up to 4K. You can also convert any video to a high-quality MP3 audio file.
                    </p>
                </details>
            </div>
        </div>
    </section>


</template>

<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue'
import axios from 'axios'

import Loading from '~/components/Loading.vue'
import ErrorMessage from '~/components/ErrorMessage.vue'

const inputUrl = ref('')
const outputurl = ref(false)
const loading = ref(false)

const videoData = ref<{
    title: string
    channel_name: string
    thumbnail_url: string
    video_options: {
        container: string
        filesize_mb: number
        fps: number
        itag: number
        resolution: string
        video_codec: string
    }[]
    audio_options: {
        itag: number
        type: string
        abr: string
        audio_codec: string
        filesize_mb: number
    }[]
}>({
    title: '',
    channel_name: '',
    thumbnail_url: '',
    video_options: [],
    audio_options: []
})

const groupedByResolution = ref<{
    [resolution: string]: {
        fps: number
        itag: number
        video_codec: string
        filesize_mb: number
        container: string
    }[]
}>({})

const expandedResolutions = ref<{
    [resolution: string]: boolean
}>({})



const submitForm = async () => {
    if (!inputUrl.value) {
        alert('Please Input Link Youtube')
        return
    }

    loading.value = true

    try {
        const res = await axios.get('http://127.0.0.1:8000/youtube-download/options', {
            params: { url: inputUrl.value }
        })

        outputurl.value = true
        videoData.value = res.data
        extractVideoUrls()
        console.log(videoData.value)
    } catch (error) {
        console.error('Error:', error)
    } finally {
        loading.value = false
    }
}


const selectedTab = ref('video')
// const selectedTab = () => {

// }


const extractVideoUrls = () => {
    groupedByResolution.value = {}

    for (const item of videoData.value.video_options) {
        const res = item.resolution
        if (!groupedByResolution.value[res]) {
            groupedByResolution.value[res] = []
        }

        groupedByResolution.value[res].push({
            fps: item.fps,
            itag: item.itag,
            video_codec: item.video_codec,
            filesize_mb: item.filesize_mb,
            container: item.container
        })
    }

    // Initialize dropdown expanded state
    expandedResolutions.value = {}
    for (const resolution in groupedByResolution.value) {
        expandedResolutions.value[resolution] = false // open by default
    }

}

const Download = async (itag: number) => {
    try {
        const response = await fetch(
            'http://127.0.0.1:8000/youtube-download/download?' +
            new URLSearchParams({
                url: inputUrl.value,
                itag: itag.toString()
            }),
            {
                method: 'GET'
            }
        )

        const blob = await response.blob()
        const filename = `${videoData.value.title} video.mp4`

        const link = document.createElement('a')
        link.href = URL.createObjectURL(blob)
        link.download = filename
        link.click()

        URL.revokeObjectURL(link.href)
        showModal.value = false
    } catch (err) {
        console.error('Download failed', err)
    }
}

const reset = () => {
    outputurl.value = false
    inputUrl.value = ''
    videoData.value = {
        title: '',
        channel_name: '',
        thumbnail_url: '',
        video_options: [],
        audio_options: []
    }
    groupedByResolution.value = {}
    expandedResolutions.value = {}
}

const showModal = ref(false)
const showProgress = ref(false)
const selectedFormat = ref<any>(null)
const progress = ref(0)
const showProgressing = ref(false)
let progressInterval: ReturnType<typeof setInterval> | null = null

const openDownloadModal = (format: any) => {
    selectedFormat.value = format
    showModal.value = true
    showProgress.value = false
    progress.value = 0
}


const confirmDownload = () => {
    Download(selectedFormat.value.itag)
    showProgress.value = true

    const sizeMb = selectedFormat.value?.filesize_mb
    const estimatedTime = Math.max(19000, Math.min(sizeMb * 750, 28000)) // Simulate 2s–8s


    const stepCount = 99
    const stepTime = estimatedTime / stepCount
    let currentStep = 0

    progressInterval = setInterval(() => {
        currentStep++
        progress.value = Math.min(100, (currentStep / stepCount) * 100)

        if (progress.value >= 100 && selectedFormat.value) {
            clearInterval(progressInterval!)
            showProgressing.value = true
        }
    }, stepTime)
}

const formatSize = (sizeMb?: number) => {
    if (!sizeMb) return ''
    return sizeMb < 1000
        ? sizeMb.toFixed(2) + ' MB'
        : (sizeMb / 1024).toFixed(2) + ' GB'
}


// const openDownloadModalAudio = (format: any) => {
//     selectedFormat.value = format
//     showModal.value = true
//     showProgress.value = false
// }

const DownloadAudio = async (itag: number) => {
    try {
        const response = await fetch(
            'http://127.0.0.1:8000/youtube-download/audio?' +
            new URLSearchParams({
                url: inputUrl.value,
                itag: itag.toString()
            }),
            {
                method: 'GET'
            }
        )

        if (!response.ok) {
            throw new Error('Download failed: ' + response.statusText)
        }

        const blob = await response.blob()

        // ✅ Extract filename from Content-Disposition header
        let filename = 'audio.mp3'
        const disposition = response.headers.get('Content-Disposition')

        if (disposition) {
            // 1. Decode RFC5987 (filename*=utf-8'')
            const encodedMatch = disposition.match(/filename\*=utf-8''(.+)/i)
            if (encodedMatch && encodedMatch[1]) {
                filename = decodeURIComponent(encodedMatch[1])
            } else {
                // 2. Fallback: filename="..."
                const fallbackMatch = disposition.match(/filename="?([^"]+)"?/)
                if (fallbackMatch && fallbackMatch[1]) {
                    filename = fallbackMatch[1]
                }
            }

            // 3. Extract extension
            const ext = filename.substring(filename.lastIndexOf('.'))

            // 4. Use your custom title with the extracted extension
            filename = `${videoData.value.title}${ext}`
        }

        // // ✅ Create and click download link
        const link = document.createElement('a')
        link.href = URL.createObjectURL(blob)
        link.download = filename
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        URL.revokeObjectURL(link.href)

        showModal.value = false
    } catch (err) {
        console.error('Download failed', err)
    }
}



</script>


<style scoped>
@keyframes fade-in {
    from {
        opacity: 0;
        transform: scale(0.95);
    }

    to {
        opacity: 1;
        transform: scale(1);
    }
}

.animate-fade-in {
    animation: fade-in 0.2s ease-out;
}
</style>