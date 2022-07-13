import { NextApiRequest, NextApiResponse } from 'next'
import { ApiError } from 'next/dist/server/api-utils'

export default function api(request:NextApiRequest, response: NextApiResponse) {
  const id = request.query

  const users = [
    {id: 1, name: 'Diego'},
    {id: 2, name: 'Dani'},
    {id: 3, name: 'Rafa'},
  ]

  return response.json(users)
}

