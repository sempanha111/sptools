<template>
      <header class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-slate-200">
    <div class="container mx-auto px-6">
      <div class="flex justify-between items-center h-20">
        <a href="#" class="text-2xl font-bold text-slate-900">SP<span class="text-blue-600">-Tools</span></a>

        <nav class="hidden md:flex items-center space-x-2">
          <div class="group relative">
            <a href="#features"
              class="text-slate-600 hover:text-blue-600 font-semibold px-4 py-2 rounded-lg transition-colors flex items-center">
              Tools <svg class="w-4 h-4 ml-1 transition-transform group-hover:rotate-180"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </a>
            <div
              class="absolute top-full -left-1/2 mt-3 w-screen max-w-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
              <div class="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
                <div class="grid grid-cols-2 gap-6">
                  <a href="#" class="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-100 transition-colors">
                    <div
                      class="bg-blue-100 text-blue-600 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M6.75 7.5l3 2.25-3 2.25m3 0h3m-3 2.25l3 2.25M16.5 7.5l3 2.25-3 2.25m3 0h3m-3 2.25l3 2.25M12 21v-2.25m0 .383l-.621.622a2.25 2.25 0 01-3.182 0l-1.94-1.94a2.25 2.25 0 010-3.182l6.22-6.22a2.25 2.25 0 013.182 0l1.94 1.94a2.25 2.25 0 010 3.182l-6.22 6.22a2.25 2.25 0 01-3.182 0z" />
                      </svg></div>
                    <div>
                      <p class="font-semibold text-slate-800">AI Writer</p>
                      <p class="text-sm text-slate-500">Generate marketing copy</p>
                    </div>
                  </a>
                  <NuxtLink  to="/tools/bg-remover" class="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-100 transition-colors" >
                    <div class="bg-blue-100 text-blue-600 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                      </svg>
                    </div>
                    <div>
                      <p class="font-semibold text-slate-800">BG Remover</p>
                      <p class="text-sm text-slate-500">Erase image backgrounds</p>
                    </div>
                  </NuxtLink>

                  <a href="#" class="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-100 transition-colors">
                    <div
                      class="bg-blue-100 text-blue-600 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                      </svg></div>
                    <div>
                      <p class="font-semibold text-slate-800">Image Upscaler</p>
                      <p class="text-sm text-slate-500">Increase photo resolution</p>
                    </div>
                  </a>
                  <a href="#" class="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-100 transition-colors">
                    <div
                      class="bg-blue-100 text-blue-600 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                      </svg></div>
                    <div>
                      <p class="font-semibold text-slate-800">Code Assistant</p>
                      <p class="text-sm text-slate-500">Write & debug code</p>
                    </div>
                  </a>
                </div>
                <div class="mt-4 border-t border-slate-200 pt-4">
                  <a href="#tools"
                    class="font-semibold text-blue-600 hover:text-blue-800 transition-colors flex items-center">View All
                    Tools <span class="ml-2">&rarr;</span></a>
                </div>
              </div>
            </div>
          </div>
          <div class="group relative">
            <a href="#apps"
              class="text-slate-600 hover:text-blue-600 font-semibold px-4 py-2 rounded-lg transition-colors flex items-center">
              Apps <svg class="w-4 h-4 ml-1 transition-transform group-hover:rotate-180"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </a>
            <div
              class="absolute top-full -left-1/2 mt-3 w-screen max-w-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
              <div class="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
                <a href="#" class="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-100 transition-colors">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=100&h=100&auto=format&fit=crop"
                    class="w-16 h-16 rounded-lg object-cover flex-shrink-0" alt="CogniFlow Pro Icon" />
                  <div>
                    <p class="font-semibold text-slate-800">CogniFlow Pro</p>
                    <p class="text-sm text-slate-500">AI-assisted project management.</p>
                  </div>
                </a>
                <a href="#" class="mt-4 flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-100 transition-colors">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=100&h=100&auto=format&fit=crop"
                    class="w-16 h-16 rounded-lg object-cover flex-shrink-0" alt="PixelPerfect Studio Icon" />
                  <div>
                    <p class="font-semibold text-slate-800">PixelPerfect Studio</p>
                    <p class="text-sm text-slate-500">A full suite of AI image editing tools.</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div class="group relative">
            <a href="#news"
              class="text-slate-600 hover:text-blue-600 font-semibold px-4 py-2 rounded-lg transition-colors flex items-center">
              News <svg class="w-4 h-4 ml-1 transition-transform group-hover:rotate-180"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </a>
            <div
              class="absolute top-full -right-1/2 mt-3 w-screen max-w-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
              <div class="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
                <p class="font-semibold text-slate-800 px-3 mb-2">Latest Articles</p>
                <a href="#" class="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-100 transition-colors">
                  <img
                    src="https://images.unsplash.com/photo-1664574653729-2e0e96b3495d?q=80&w=100&h=100&auto=format&fit=crop"
                    class="w-12 h-12 rounded-lg object-cover flex-shrink-0" alt="Generative Models Thumbnail" />
                  <p class="text-sm text-slate-600">The Next Frontier of Generative Models</p>
                </a>
                <a href="#"
                  class="mt-2 flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-100 transition-colors">
                  <img
                    src="https://images.unsplash.com/photo-1593352219746-3e9a7efe79f9?q=80&w=100&h=100&auto=format&fit=crop"
                    class="w-12 h-12 rounded-lg object-cover flex-shrink-0" alt="Cybersecurity Thumbnail" />
                  <p class="text-sm text-slate-600">AI's Role in Modern Cybersecurity</p>
                </a>
              </div>
            </div>
          </div>
        </nav>

        <a href="#"
          class="hidden md:inline-block bg-blue-600 text-white font-semibold px-5 py-2.5 rounded-lg shadow-md hover:bg-blue-700 transition-all transform hover:scale-105">
          Get Started Free
        </a>
      </div>
    </div>
  </header>
</template>