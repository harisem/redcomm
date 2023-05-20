<template>
  <div class="relative">
    <input
      v-model="searchQuery"
      @focus="isFocused = true"
      @blur="isFocused = false"
      type="text"
      class="pl-10 pr-3 py-2 w-full rounded-full bg-gray-100 border border-gray-300 placeholder-gray-500 text-gray-700 focus:outline-none focus:ring-2 focus:ring-current focus:border-transparent"
      placeholder="Search Yours"
    />
    <svg
      class="absolute left-3 top-3 text-gray-500 w-5 h-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
    <svg
      v-if="isFocused || searchQuery"
      @click="clearSearch"
      class="absolute right-3 top-3 text-gray-500 w-5 h-5 cursor-pointer"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
      isFocused: false,
    };
  },
  methods: {
    clearSearch() {
      this.searchQuery = "";
    },
  },
};
</script>
