import { NextResponse } from 'next/server'
import { api } from './api'
import error from 'next/error'
import delay from 'delay'

export const getAllProductsService = async () => {
  return await api
    .get('?page=1&rows=8&sortBy=id&orderBy=DESC')
    .then((response) => response.data.products)
    .catch(() => {
      return NextResponse.json(error)
    })
}
