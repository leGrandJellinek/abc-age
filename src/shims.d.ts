/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<Record<string, unknown>, Record<string, unknown>, any>
  export default component
}

declare module 'swiper' {
  export const Pagination: any
  export const Navigation: any
  export const Swiper: any
  export default Swiper
}

declare module 'swiper/vue' {
  import type { DefineComponent } from 'vue'
  export const Swiper: DefineComponent<any, any, any>
  export const SwiperSlide: DefineComponent<any, any, any>
}

declare module '*.css'
declare module '*.scss'
declare module '*.sass'
declare module 'swiper/css'
declare module 'swiper/css/*'
