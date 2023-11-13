import { api } from './api'
import error from 'next/error'
import delay from 'delay'

export const getAllProductsService = async () => {
  const res = await api
    .get('?page=1&rows=8&sortBy=id&orderBy=DESC')
    .then((response) => response.data.products)
    .catch(() => {
      console.log('error', error)
    })

  await delay(2000)
  return res
}
