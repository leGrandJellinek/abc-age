import 'vue'

declare module 'vue' {
  interface ComponentCustomProperties {
    $getMainImage: (name: string) => string
    $getIcon: (name: string) => string
  }
}
