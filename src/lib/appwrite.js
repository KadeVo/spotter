import { Client, Databases, Account } from 'appwrite'

const client = new Client()
client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('65c45bfe686782636e1d')

export const account = new Account(client)
export const databases = new Databases(client)
export default client
