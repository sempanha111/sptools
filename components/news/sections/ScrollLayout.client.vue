<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const props = defineProps({
  apiUrl: {
    type: String,
    default: 'https://api.restful-api.dev/objects/4'
  }
})

interface Post {
  id: number;
  name: string;
  data: {
    color: string;
    price: number;
  }
}
const {data: Post, pending, error} = await useFetch<Post>(props.apiUrl)

// console.log(Post.value)


// {
//     "id": "4",
//     "name": "Apple iPhone 11, 64GB",
//     "data": {
//         "price": 389.99,
//         "color": "Purple"
//     }
// }
// const posts = [
//   {
//     img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop',
//     title: 'Unveiling the Hidden Gems of the Amalfi Coast',
//     author: 'Marco Polo',
//     date: '09/10/2025'
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop',
//     title: 'Unveiling the Hidden Gems of the Amalfi Coast',
//     author: 'Marco Polo',
//     date: '09/10/2025'
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop',
//     title: 'Unveiling the Hidden Gems of the Amalfi Coast',
//     author: 'Marco Polo',
//     date: '09/10/2025'
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop',
//     title: 'Unveiling the Hidden Gems of the Amalfi Coast',
//     author: 'Marco Polo',
//     date: '09/10/2025'
//   },
// ]
</script>



<template>
  <div v-if="pending">
      Loading Product...
    </div>
    <div v-else-if="error">
      Sorry, an error occurred.
    </div>
  <section v-else-if="Post">
    <div class="flex items-center border-b-4 border-teal-500 pb-2 mb-6">
      <h3 class="font-bold text-2xl text-slate-800">DISCOVER TRAVEL ✈️</h3>
    </div>
    <swiper :modules="[ Navigation, Pagination, Autoplay]" :slides-per-view="1" :space-between="20" :loop="true" navigation pagination autoplay class="rounded-lg shadow-lg">
 

    

      <h1>{{ Post.name }}</h1>
      
      <ul>
        <li><strong>Color:</strong> {{ Post.data.color }}</li>
        <li><strong>Price:</strong> {{ Post.data.price }}</li>
        <li><strong>ID:</strong> {{ Post.id }}</li>
      </ul>
      <!-- <swiper-slide v-for="(item, index) in posts" :key="index">
        <div class="w-full flex-shrink-0 relative">
          <img :src="item.img"
            class="w-full h-96 object-cover" alt="Backpacking">
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div class="absolute bottom-0 left-0 p-6">
            <h4 class="text-3xl font-bold text-white leading-tight transition group-hover:underline">{{ item.title }}</h4>
            <div class="flex items-center gap-4 text-slate-200 text-sm mt-3">
              <div class="flex items-center gap-1.5"><i data-lucide="user-circle" class="w-4 h-4"></i> {{  item.author }}
              </div>
              <div class="flex items-center gap-1.5"><i data-lucide="calendar" class="w-4 h-4"></i> {{  item.date }}</div>
            </div>
          </div>
        </div>
      </swiper-slide> -->

    </swiper>
    
  </section>
</template>
