import request from '@/utils/request'

export const findBrand = (limit = 6) => {
  // 在这里犯了一个细节性问题   忘了写 return  导致后边找不到then
  return request('/home/brand', 'get', { limit })
}

// 获取广告图
export const findBanner = () => {
  return request('/home/banner', 'get')
}
// 新鲜好物
export const findNew = () => {
  return request('/home/new', 'get')
}
// 人气推荐
export const findHot = () => {
  return request('/home/hot', 'get')
}
