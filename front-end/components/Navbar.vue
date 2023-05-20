<template>
  <div
    class="navbar-container bg-white sticky top-0 border-black border-b-2 py-3 px-4 flex flex-col md:flex-row items-center justify-between"
  >
    <div class="text-xl font-bold">NOTES</div>
    <div class="w-full md:w-1/4 mt-4 md:mt-0">
      <SearchBar />
    </div>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";

export default {
  components: {
    SearchBar,
  },
};
</script>
