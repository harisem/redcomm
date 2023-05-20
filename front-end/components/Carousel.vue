<template>
  <swiper
    :slidesPerView="2"
    :spaceBetween="10"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :modules="modules"
    class="mySwiper px-2 text-left"
  >
    <swiper-slide
      v-for="item in data"
      :key="item.id"
      class="px-2 md:px-4 pt-[60px] md:pt-[80px] pb-6 text-md md:text-4xl lg:text-6xl"
      >{{item.title.toUpperCase()}}</swiper-slide
    >
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.swiper {
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>
