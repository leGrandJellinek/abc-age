import { describe, it, expect } from 'vitest'
import { getMainImage, getIcon } from '../assets'

describe('assets helper', () => {
  it('returns valid asset URL for existing main image', () => {
    const img = getMainImage('AboutCompanyBG.png')
    expect(img).toBeTruthy()
    expect(typeof img).toBe('string')
  })

  it('returns empty string for non-existent image', () => {
    const img = getMainImage('non_existent_img_12345.png')
    expect(img).toBe('')
  })

  it('returns valid asset URL for existing icon', () => {
    const icon = getIcon('search.svg')
    expect(icon).toBeTruthy()
    expect(typeof icon).toBe('string')
  })

  it('returns empty string for non-existent icon', () => {
    const icon = getIcon('non_existent_icon_12345.svg')
    expect(icon).toBe('')
  })
})
