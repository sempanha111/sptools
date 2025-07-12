<template>
  <div class="container mx-auto px-4 py-8 pt-28">
    <div class="grid lg:grid-cols-3 gap-8">
      <div class="lg:col-span-2 space-y-8">
        <NewsSectionsFirstLayout  />
        <LazyNewsSectionsSecondLayoutVue />
        <LazyNewsSectionsScrollLayout api-url="http://127.0.0.1:8000/api/test" />
        <!-- <LazyNewsSectionsScrollLayout api-url="https://api.restful-api.dev/objects/5" /> -->
      </div>
    </div>
  </div>
</template>
