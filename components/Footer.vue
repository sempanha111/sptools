<template>
  <footer class="py-20 bg-slate-100 border-t border-slate-200">
      <div class="container mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-slate-900">Sign Up for Updates</h2>
          <p class="text-slate-600 mt-2">Get the latest AI tools and news delivered to your inbox weekly.</p>
          <form class="relative max-w-lg mx-auto mt-8">
            <input type="email" placeholder="Enter your email"
              class="w-full bg-white border-2 border-slate-300 rounded-full py-3.5 px-6 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition-all shadow-sm">
            <button type="submit"
              class="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white font-semibold px-5 py-2 rounded-full shadow-md hover:bg-blue-700 transition-all transform hover:scale-105">Subscribe</button>
          </form>
        </div>
        <div
          class="flex flex-col md:flex-row justify-between items-center text-center md:text-left mt-20 pt-8 border-t border-slate-200">
          <p class="text-slate-500">&copy; 2025 AI Hub. All Rights Reserved.</p>
          <div class="flex space-x-6 mt-4 md:mt-0">
            <a href="#" class="text-slate-500 hover:text-blue-600 transition-colors">Privacy Policy</a>
            <a href="#" class="text-slate-500 hover:text-blue-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
</template>
