const mainImages = import.meta.glob('../assets/images/main/*', { eager: true, import: 'default' });
const icons = import.meta.glob('../assets/icons/*', { eager: true, import: 'default' });

export function getMainImage(name) {
  return mainImages[`../assets/images/main/${name}`] || '';
}

export function getIcon(name) {
  return icons[`../assets/icons/${name}`] || '';
}
