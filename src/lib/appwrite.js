import { Client, Databases, Account } from 'appwrite'
// import PROJECTID from '../../.env'

const client = new Client()
client.setEndpoint('https://cloud.appwrite.io/v1').setProject('test')

export const account = new Account(client)
export const databases = new Databases(client)
