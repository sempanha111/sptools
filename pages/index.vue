<template>
  <section id="home" class="relative pt-40 pb-28 md:pt-48 md:pb-36 text-center overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-full z-0">
          <div class="hero-glow-1 absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl"></div>
          <div class="hero-glow-2 absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-400 rounded-full filter blur-3xl"></div>
      </div>
      <div class="absolute inset-0 bg-slate-50/50 z-10"></div>
      
      <div class="container mx-auto px-6 relative z-20">
        <h1 class="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight animate-fade-in-up" style="animation-delay: 100ms;">
          The Ultimate Toolkit for
          <span class="gradient-heading block mt-2 md:mt-4">AI-Powered Innovation</span>
        </h1>
        <p class="mt-6 text-lg text-slate-600 max-w-2xl mx-auto animate-fade-in-up" style="animation-delay: 200ms;">
          Explore an entire ecosystem of cutting-edge AI tools, apps, and news, all in one place.
        </p>
        <a href="#features" class="mt-10 inline-block bg-blue-600 text-white font-bold px-8 py-4 rounded-lg shadow-lg shadow-blue-500/30 hover:bg-blue-700 transition-all transform hover:scale-105 animate-fade-in-up" style="animation-delay: 300ms;">
          Explore All Tools
        </a>
      </div>
    </section>

    <section class="py-24 bg-slate-50">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <div class="mx-auto w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
              <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-slate-900">All-in-One Platform</h3>
            <p class="text-slate-600 mt-2">Access dozens of tools, apps, and news sources without leaving the site.</p>
          </div>
          <div>
            <div class="mx-auto w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
              <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-slate-900">Completely Free</h3>
            <p class="text-slate-600 mt-2">Our core tools and features are free to use, with no hidden costs.</p>
          </div>
          <div>
            <div class="mx-auto w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
              <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0011.667 0l3.181-3.183m-11.667 0l4.992-4.992m-4.993 0l3.181-3.183a8.25 8.25 0 0111.667 0l3.181 3.183" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-slate-900">Always Updated</h3>
            <p class="text-slate-600 mt-2">We constantly add new tools and the latest news to keep you ahead.</p>
          </div>
        </div>
      </div>
    </section>


    <section id="features" class="py-24 bg-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-slate-900">Explore Our Full Suite of AI Tools</h2>
          <p class="text-slate-600 mt-3 max-w-3xl mx-auto">From content creation to developer utilities, we have a
            powerful, free AI tool for every task. Discover what you can build today.</p>
        </div>

        <div>
          <!-- <h3 class="text-3xl font-bold text-slate-800 mb-8">Image & Video</h3> -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a href="./background-remover.html"
              class="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/10 hover:-translate-y-2 flex flex-col justify-between animate-fade-in-up">
              <div>
                <div class="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4"><svg
                    class="w-8 h-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                  </svg></div>
                <h4 class="font-bold text-2xl text-slate-800">Background Remover</h4>
                <p class="text-slate-500 mt-2">Instantly erase backgrounds from any image with a single click. Perfect
                  for portraits, products, and graphics.</p>
              </div>
              <p class="font-semibold text-blue-600 mt-4 self-start">Try Now &rarr;</p>
            </a>
            <a href="#"
              class="bg-white p-6 rounded-2xl border border-slate-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/10 hover:-translate-y-2 animate-fade-in-up"
              style="animation-delay: 100ms;">
              <div class="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4"><svg
                  class="w-8 h-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.776 48.776 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008v-.008z" />
                </svg></div>
              <h4 class="font-bold text-lg text-slate-800">Image Generator</h4>
              <p class="text-sm text-slate-500 mt-1">Create unique visuals from text.</p>
            </a>
            <a href="#"
              class="bg-white p-6 rounded-2xl border border-slate-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/10 hover:-translate-y-2 animate-fade-in-up"
              style="animation-delay: 200ms;">
              <div class="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4"><svg
                  class="w-8 h-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                </svg></div>
              <h4 class="font-bold text-lg text-slate-800">Image Upscaler</h4>
              <p class="text-sm text-slate-500 mt-1">Increase resolution 2x or 4x.</p>
            </a>
            <a href="#"
              class="bg-white p-6 rounded-2xl border border-slate-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/10 hover:-translate-y-2 animate-fade-in-up"
              style="animation-delay: 300ms;">
              <div class="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4"><svg
                  class="w-8 h-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 013-3h0a3 3 0 013 3v8.25a3 3 0 01-3 3h0z" />
                </svg></div>
              <h4 class="font-bold text-lg text-slate-800">Voiceover Generator</h4>
              <p class="text-sm text-slate-500 mt-1">Convert text to natural speech.</p>
            </a>
            <a href="#"
              class="bg-white p-6 rounded-2xl border border-slate-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/10 hover:-translate-y-2 animate-fade-in-up"
              style="animation-delay: 400ms;">
              <div class="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4"><svg
                  class="w-8 h-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg></div>
              <h4 class="font-bold text-lg text-slate-800">Video Downloader</h4>
              <p class="text-sm text-slate-500 mt-1">Save videos from popular platforms.</p>
            </a>
          </div>
        </div>


      </div>
    </section>

    <section id="apps" class="py-24 bg-slate-50 relative overflow-hidden">
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-radial-gradient(ellipse at center, rgba(6, 182, 212, 0.1), transparent 70%) z-0">
      </div>
      <div class="container mx-auto px-6 relative z-10">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-slate-900">Featured Apps & Articles</h2>
          <p class="text-slate-600 mt-3 max-w-2xl mx-auto">Discover powerful applications and stay informed with our
            hand-picked articles.</p>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div
            class="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-600/10 hover:-translate-y-2 flex flex-col">
            <div class="relative w-full">
              <img
                src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800&h=400&auto=format&fit=crop"
                class="w-full h-64 rounded-xl object-cover" alt="AI Code on a screen" />
              <span
                class="absolute top-4 left-4 text-sm font-semibold text-blue-600 bg-white/80 backdrop-blur-sm py-1.5 px-4 rounded-full">Development</span>
            </div>
            <div class="flex flex-col flex-grow mt-6">
              <h3 class="text-2xl font-bold text-slate-900">The Rise of AI Code Assistants</h3>
              <p class="text-slate-600 mt-2 flex-grow">Exploring how tools like GitHub Copilot are fundamentally
                changing the landscape of software development.</p>
              <a href="#"
                class="mt-4 inline-block font-semibold text-blue-600 hover:text-blue-800 transition-colors group">
                Read Full Article <span
                  class="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
              </a>
            </div>
          </div>
          <div class="space-y-8">
            <div
              class="bg-white p-6 rounded-2xl border border-slate-200 shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-600/10 hover:-translate-y-2 flex items-center space-x-4">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=200&h=200&auto=format&fit=crop"
                class="w-20 h-20 rounded-xl object-cover flex-shrink-0" alt="CogniFlow Pro App Icon" />
              <div class="flex-grow">
                <h3 class="text-xl font-bold text-slate-900">CogniFlow Pro</h3>
                <p class="text-slate-600 mt-1">AI-assisted project management.</p>
              </div>
              <a href="#"
                class="w-10 h-10 flex-shrink-0 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 hover:bg-blue-600 hover:text-white transition-all">
                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
              </a>
            </div>
            <div
              class="bg-white p-6 rounded-2xl border border-slate-200 shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-600/10 hover:-translate-y-2 flex items-center space-x-4">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=200&h=200&auto=format&fit=crop"
                class="w-20 h-20 rounded-xl object-cover flex-shrink-0" alt="PixelPerfect Studio App Icon" />
              <div class="flex-grow">
                <h3 class="text-xl font-bold text-slate-900">PixelPerfect</h3>
                <p class="text-slate-600 mt-1">Full suite of AI image editing tools.</p>
              </div>
              <a href="#"
                class="w-10 h-10 flex-shrink-0 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 hover:bg-blue-600 hover:text-white transition-all">
                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
              </a>
            </div>
            <div class="text-center pt-2">
              <a href="#" class="font-semibold text-blue-600 hover:text-blue-800 transition-colors group">
                View all apps <span class="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-5">
          <div
            class="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200 transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/10 hover:-translate-y-2 flex flex-col animate-fade-in-up"
            style="animation-delay: 100ms;">
            <img
              src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800&h=400&auto=format&fit=crop"
              class="w-full h-48 object-cover" alt="AI Code on a screen" />
            <div class="p-6 flex flex-col flex-grow">
              <span
                class="text-sm font-semibold text-blue-600 bg-blue-100 py-1 px-3 rounded-full self-start">Development</span>
              <h3 class="text-xl font-bold text-slate-900 mt-4">The Rise of AI Code Assistants</h3>
              <p class="text-slate-600 mt-2 flex-grow">Exploring how tools like GitHub Copilot are changing the
                landscape of software development.</p>
              <a href="#"
                class="mt-4 inline-block font-semibold text-blue-600 hover:text-blue-800 transition-colors group self-start">Read
                More <span class="inline-block transition-transform group-hover:translate-x-1">&rarr;</span></a>
            </div>
          </div>
          <div
            class="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200 transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/10 hover:-translate-y-2 flex flex-col animate-fade-in-up"
            style="animation-delay: 200ms;">
            <img
              src="https://images.unsplash.com/photo-1664574653729-2e0e96b3495d?q=80&w=800&h=400&auto=format&fit=crop"
              class="w-full h-48 object-cover" alt="Abstract AI art" />
            <div class="p-6 flex flex-col flex-grow">
              <span class="text-sm font-semibold text-purple-600 bg-purple-100 py-1 px-3 rounded-full self-start">Ethics
                & Society</span>
              <h3 class="text-xl font-bold text-slate-900 mt-4">Navigating the Ethics of Generative AI</h3>
              <p class="text-slate-600 mt-2 flex-grow">A deep dive into the societal impact and ethical considerations
                of advanced AI models.</p>
              <a href="#"
                class="mt-4 inline-block font-semibold text-blue-600 hover:text-blue-800 transition-colors group self-start">Read
                More <span class="inline-block transition-transform group-hover:translate-x-1">&rarr;</span></a>
            </div>
          </div>
          <div
            class="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200 transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/10 hover:-translate-y-2 flex flex-col animate-fade-in-up"
            style="animation-delay: 300ms;">
            <img src="https://images.unsplash.com/photo-1555774694-3bd1f361973a?q=80&w=800&h=400&auto=format&fit=crop"
              class="w-full h-48 object-cover" alt="Computer hardware" />
            <div class="p-6 flex flex-col flex-grow">
              <span
                class="text-sm font-semibold text-emerald-600 bg-emerald-100 py-1 px-3 rounded-full self-start">Hardware</span>
              <h3 class="text-xl font-bold text-slate-900 mt-4">New Chip Architectures for AI Workloads</h3>
              <p class="text-slate-600 mt-2 flex-grow">How specialized processors are accelerating machine learning
                tasks at an incredible rate.</p>
              <a href="#"
                class="mt-4 inline-block font-semibold text-blue-600 hover:text-blue-800 transition-colors group self-start">Read
                More <span class="inline-block transition-transform group-hover:translate-x-1">&rarr;</span></a>
            </div>
          </div>
          <div
            class="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200 transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/10 hover:-translate-y-2 flex flex-col animate-fade-in-up"
            style="animation-delay: 300ms;">
            <img src="https://images.unsplash.com/photo-1555774694-3bd1f361973a?q=80&w=800&h=400&auto=format&fit=crop"
              class="w-full h-48 object-cover" alt="Computer hardware" />
            <div class="p-6 flex flex-col flex-grow">
              <span
                class="text-sm font-semibold text-emerald-600 bg-emerald-100 py-1 px-3 rounded-full self-start">Hardware</span>
              <h3 class="text-xl font-bold text-slate-900 mt-4">New Chip Architectures for AI Workloads</h3>
              <p class="text-slate-600 mt-2 flex-grow">How specialized processors are accelerating machine learning
                tasks at an incredible rate.</p>
              <a href="#"
                class="mt-4 inline-block font-semibold text-blue-600 hover:text-blue-800 transition-colors group self-start">Read
                More <span class="inline-block transition-transform group-hover:translate-x-1">&rarr;</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script setup>
useHead({
  title: 'ToolifyHub – All-in-One AI Tools, Apps & News',
  meta: [
    {
      name: 'description',
      content: 'Discover free AI tools, app downloads, and the latest tech news at ToolifyHub. Fast, SEO-friendly, and always up to date.'
    },
    {
      name: 'keywords',
      content: 'AI tools, app downloads, tech news, productivity tools, Tailwind, Nuxt 3'
    },
    { property: 'og:title', content: 'ToolifyHub – All-in-One AI Tools, Apps & News' },
    { property: 'og:description', content: 'Free online tools, guides and AI content. No signup, just speed.' },
    { property: 'og:image', content: 'https://yourdomain.com/og-image.jpg' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://yourdomain.com' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'ToolifyHub – AI Tools, Apps & News' },
    { name: 'twitter:description', content: 'Fast, free AI tools & app downloads you’ll love.' },
    { name: 'twitter:image', content: 'https://yourdomain.com/og-image.jpg' }
  ]
})
</script>
