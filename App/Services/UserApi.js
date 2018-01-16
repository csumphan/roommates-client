import { create } from 'apisauce'

import Config from '../Config/AppConfig'

const { apiUrl} = Config

const api = create({ baseURL: `${apiUrl}/users` })

export const login = (credential) =>
  api.post('/login', credential)
