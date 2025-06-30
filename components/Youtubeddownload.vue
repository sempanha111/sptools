<template>
    <div class="container mx-auto px-6">
      <h1 class="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-8">YouTube Downloader</h1>
  
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-slate-900">Your Video is Ready!</h2>
        <p class="text-slate-600 mt-3 max-w-2xl mx-auto">
          Choose your preferred format and quality below to save the video to your device.
        </p>
      </div>
  
      <div class="max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded-lg border border-slate-200 shadow-lg">
        <div class="grid md:grid-cols-3 gap-6 md:gap-8">
          <div class="md:col-span-1">
            <img :src="videoData.thumbnail_url" alt="Video thumbnail"
                 class="rounded-lg w-full object-cover aspect-video shadow-md">
            <h3 class="font-bold text-slate-800 mt-4 text-lg line-clamp-3">{{ videoData.title }}</h3>
            <p class="text-sm text-slate-500 mt-2">{{ videoData.channel_name }}</p>
          </div>
  
          <div class="md:col-span-2">
            <div class="flex border-b border-slate-200 mb-4">
              <button class="font-semibold py-2 px-4 border-b-2 border-red-600 text-red-600">Video</button>
              <button class="font-semibold py-2 px-4 text-slate-500 hover:text-red-600">Audio</button>
            </div>
  
            <!-- Loop all resolutions -->
            <div class="space-y-4">
              <div v-for="(formats, resolution) in groupedByResolution" :key="resolution">
                <!-- Resolution Header (toggle dropdown) -->
                <button
                @click="expandedResolutions[resolution] = !expandedResolutions[resolution]"
                class="w-full flex justify-between items-center bg-slate-50 p-3 rounded-md font-semibold text-slate-700 mb-2"
                >
                <span>{{ resolution }}</span>
                <svg
                    class="w-5 h-5 transition-transform"
                    :class="{ 'rotate-180': expandedResolutions[resolution] }"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06 0L10 10.92l3.72-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 010-1.06z"
                    clip-rule="evenodd"
                    />
                </svg>
                </button>
  
                <!-- Format list -->
                <div v-show="expandedResolutions[resolution]" class="mt-2 px-2">
                  <table class="w-full text-sm text-left border border-slate-200 rounded-md">
                    <thead class="bg-slate-100 text-xs text-slate-600 uppercase">
                      <tr>
                        <th class="py-2 px-3">Format</th>
                        <th class="py-2 px-3">Filesize</th>
                        <th class="py-2 px-3 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="format in formats" :key="format.itag" class="border-t border-slate-200">
                        <td class="py-2 px-3 font-medium">
                          {{ format.container.toUpperCase() }}
                          <span class="text-slate-400">({{ format.video_codec.split('.')[0] }})</span>
                        </td>
                        <td class="py-2 px-3">
                          {{ format.filesize_mb < 1000
                            ? format.filesize_mb.toFixed(2) + ' MB'
                            : (format.filesize_mb / 1024).toFixed(2) + ' GB' }}
                        </td>
                        <td class="py-2 px-3 text-right">
                          <a
                            href="javascript:void(0)"
                            @click="Download(format.itag)"
                            class="bg-red-600 text-white px-3 py-1 text-xs font-bold rounded hover:bg-red-700"
                          >
                            Download
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Reset -->
        <div class="mt-8 pt-6 border-t border-slate-200 text-center">
          <a href="javascript:void(0)" @click="reset"
             class="font-semibold text-blue-600 hover:text-blue-800 transition-colors group">
            &larr; Download Another Video
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'VideoDownload',
    data() {
      return {
        videoData: {
          thumbnail_url: 'https://via.placeholder.com/640x360.png?text=Thumbnail',
          title: 'Sample Video Title Goes Here',
          channel_name: 'Sample Channel'
        },
        groupedByResolution: {
          '1080p': [
            { itag: 1, container: 'mp4', video_codec: 'avc1.640028', filesize_mb: 124.5 },
            { itag: 2, container: 'webm', video_codec: 'vp9', filesize_mb: 98.3 }
          ],
          '720p': [
            { itag: 3, container: 'mp4', video_codec: 'avc1.4d401f', filesize_mb: 88.2 }
          ],
          '480p': [
            { itag: 4, container: 'mp4', video_codec: 'avc1.4d401e', filesize_mb: 56.7 }
          ]
        },
        expandedResolutions: {}
      };
    },
    mounted() {
      this.$nextTick(() => {
        for (const resolution in this.groupedByResolution) {
          this.$set(this.expandedResolutions, resolution, true);
        }
      });
    },
    methods: {
      Download(itag) {
        alert(`Downloading format with itag ${itag}`);
        // replace with real logic
      },
      reset() {
        alert("Resetting to download new video");
        // replace with real logic
      }
    }
  };
  </script>
  
  <style scoped>
  /* Optional: smooth transition for dropdown */
  [ v-show ] {
    transition: all 0.3s ease;
  }
  </style>
  