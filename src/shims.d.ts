/// <reference types="vite/client" />

declare module 'swiper' {
  export interface SwiperModule {}
  export const Pagination: SwiperModule
  export const Navigation: SwiperModule
  export class Swiper {
    constructor(container: string | HTMLElement, options?: Record<string, unknown>)
  }
  export default Swiper
}

declare module 'swiper/vue' {
  import type { DefineComponent } from 'vue'
  export const Swiper: DefineComponent<Record<string, unknown>, Record<string, unknown>, unknown>
  export const SwiperSlide: DefineComponent<Record<string, unknown>, Record<string, unknown>, unknown>
}

declare module '*.css'
declare module '*.scss'
declare module '*.sass'
declare module 'swiper/css'
declare module 'swiper/css/*'
