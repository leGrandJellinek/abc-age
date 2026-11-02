const mainImages: Record<string, string> = import.meta.glob('../assets/images/main/*', {
  eager: true,
  import: 'default'
})

const icons: Record<string, string> = import.meta.glob('../assets/icons/*', {
  eager: true,
  import: 'default'
})

export function getMainImage(name: string): string {
  return mainImages[`../assets/images/main/${name}`] || ''
}

export function getIcon(name: string): string {
  return icons[`../assets/icons/${name}`] || ''
}
