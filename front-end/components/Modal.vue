<template>
  <div
    class="modal fixed w-full h-full top-0 left-0 flex items-center justify-center"
  >
    <div
      class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
    ></div>
    <div
      class="modal-container bg-white border border-2 border-black w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto"
    >
      <div class="modal-content py-4 text-left px-6">
        <div class="flex justify-between items-center pb-3">
          <div
            class="modal-close cursor-pointer z-50 ml-auto space-x-2"
            @click="closeModal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-black font-bold"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
        <div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="title"
              >Title</label
            >
            <input
              type="text"
              id="title"
              v-model="title"
              class="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter title"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="tags"
              >Tags</label
            >
            <input
              type="text"
              id="tags"
              v-model="tags"
              class="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter tags"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="description"
              >Description</label
            >
            <textarea
              id="description"
              v-model="description"
              class="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter description"
            ></textarea>
          </div>
        </div>
        <div class="modal-footer flex justify-end pt-4">
          <button
            class="hover:text-red-500 text-black font-bold py-2 px-4 rounded mr-2"
            @click="deleteItem"
          >
            Delete
          </button>
          <button
            class="bg-slate-800 hover:bg-black text-white font-bold py-2 px-4 rounded"
            @click="saveItem"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //   props: {
  //     formTitle: {
  //       type: String,
  //       default: "Modal Title",
  //     },
  //   },
  data() {
    return {
      title: "",
      tags: "",
      description: "",
    };
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
    deleteItem() {
      // Handle delete logic
    },
    saveItem() {
      // Handle save logic
    },
  },
};
</script>

<style scoped>
/* Component-specific styles go here */
</style>
