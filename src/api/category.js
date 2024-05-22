import request from '@/utils/request'
export const findAllCategory = () => {
  return request('/home/category/head', 'get')
}
export const findTopCategory = (id) => {
  return request('/category', 'get', { id })
}
/**
 * 获取二级分类筛选条件的数据
 * @params {String} id - 二级分类ID
 */
export const findSubCategroyFilter = (id) => {
  return request('/category/sub/filter', 'get', { id })
}
