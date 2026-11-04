export interface MenuItem {
  id: number
  title: string
  href?: string
}

export interface FooterIcon {
  id: number
  icon: string
  name?: string
  href?: string
}

export interface FooterInfo {
  id: number
  title: string
  info: string
  icon: string
}

export interface CommentItem {
  id: number
  userName: string
  city: string
  title: string
  comment: string
  img: string
}

export interface BlogPost {
  id: number
  title: string
  descr: string
  img: string
}

export interface Product {
  id: number
  title: string
  reviews: number
  stars: number
  descr: string
  img: string
  category?: 'toddlers' | 'creative' | 'educational'
  isHit?: boolean
  isNew?: boolean
  isWholesale?: boolean
}

export interface AdvantageItem {
  id: number
  title: string
  descr: string
  color: string
}

export interface TagItem {
  id: number
  title: string
  active: boolean
}
