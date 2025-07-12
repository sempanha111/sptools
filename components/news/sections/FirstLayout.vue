<template>
  <section class="grid md:grid-cols-3 gap-4">
    <div class="md:col-span-2 relative rounded-lg overflow-hidden group shadow-lg">
      <a href="#">
        <img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1200&auto=format&fit=crop"
          class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          alt="Featured Post">
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div class="absolute bottom-0 left-0 p-6">
          <span class="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">TECH</span>
          <h2 class="text-3xl font-bold text-white mt-2 leading-tight transition group-hover:underline">Global Summit
            Concludes with Historic AI Regulation Agreement</h2>
          <div class="flex items-center gap-4 text-slate-300 text-sm mt-2">
            <div class="flex items-center gap-1.5"><i data-lucide="user-circle" class="w-4 h-4"></i> Jane Doe</div>
            <div class="flex items-center gap-1.5"><i data-lucide="calendar" class="w-4 h-4"></i> {{ new
              Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) }}</div>
          </div>
        </div>
      </a>
    </div>
    <div class="md:col-span-1 space-y-4">
      <div class="relative rounded-lg overflow-hidden group shadow-lg h-1/2">
        <a href="#" class="h-full block">
          <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop"
            class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" alt="Post">
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div class="absolute bottom-0 left-0 p-4">
            <span class="bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded">WORLD</span>
            <h3 class="font-bold text-md text-white leading-tight mt-1 transition group-hover:underline line-clamp-2">
              Market Reacts to New Inflation Data</h3>
          </div>
        </a>
      </div>
      <div class="relative rounded-lg overflow-hidden group shadow-lg h-1/2">
        <a href="#" class="h-full block">
          <img src="https://images.unsplash.com/photo-1552667466-07770ae110d0?q=80&w=1200&auto=format&fit=crop"
            class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" alt="Post">
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div class="absolute bottom-0 left-0 p-4">
            <span class="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">SPORT</span>
            <h3 class="font-bold text-md text-white leading-tight mt-1 transition group-hover:underline line-clamp-2">
              Championship Finals Set After Dramatic Semi-Finals</h3>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

