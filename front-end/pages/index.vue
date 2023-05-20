<script setup>
import { computed } from "vue";

const showAddModal = ref(false);

const { data: notes } = await useFetch("/api/notes");

const highPriority = computed(() => {
  const data = notes.value.data;
  return data.filter((item) => item.tag === "High Priority");
});
</script>

<template>
  <div class="mx-auto">
    <Navbar />
    <div class="border-black border-b-2">
      <Carousel :data="highPriority" />
    </div>
    <div class="pr-4 pt-4">
      <button
        @click="showAddModal = true"
        class="flex items-center space-x-2 px-4 py-2 font-medium text-xl ml-auto"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 3a1 1 0 00-1 1v5H4a1 1 0 100 2h5v5a1 1 0 102 0v-5h5a1 1 0 100-2h-5V4a1 1 0 00-1-1z"
            clip-rule="evenodd"
          />
        </svg>
        <span>ADD NEW</span>
      </button>
    </div>
    <div v-if="pending">Loading...</div>
    <div
      v-else
      class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2 px-4 py-2 mt-4"
    >
      <Card v-for="(item, index) in notes.data" :key="index" :item="item" />
    </div>

    <!-- Modal -->
    <Modal v-if="showAddModal" @close="showAddModal = false" />
  </div>
</template>

<style>
.card {
  width: 100%;
}
</style>
