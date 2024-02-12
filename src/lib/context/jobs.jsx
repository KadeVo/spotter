import { databases } from '../appwrite'
import { ID, Query } from 'appwrite'
import { createContext, useContext, useEffect, useState } from 'react'

const IdeasContext = createContext()

export const SPOTTER_DATABASE_ID = import.meta.env.VITE_DATABASEID
export const SPOTTER_COLLECTION_ID = import.meta.env.VITE_COLLECTIONID

export function useIdeas() {
  return useContext(IdeasContext)
}

export function IdeasProvider(props) {
  const [ideas, setIdeas] = useState([])

  async function add(idea) {
    const response = await databases.createDocument(
      SPOTTER_DATABASE_ID,
      SPOTTER_COLLECTION_ID,
      ID.unique(),
      idea
    )
    setIdeas((ideas) => [response.$id, ...ideas].slice(0, 10))
  }

  async function remove(id) {
    await databases.deleteDocument(
      SPOTTER_DATABASE_ID,
      SPOTTER_COLLECTION_ID,
      id
    )
    setIdeas((ideas) => ideas.filter((idea) => idea.$id !== id))
    await init()
  }

  async function init() {
    const response = await databases.listDocuments(
      SPOTTER_DATABASE_ID,
      SPOTTER_COLLECTION_ID,
      [Query.orderDesc('$createdAt'), Query.limit(10)]
    )
    setIdeas(response.documents)
  }

  useEffect(() => {
    init()
  }, [])

  return (
    <IdeasContext.Provider value={{ current: ideas, add, remove }}>
      {props.children}
    </IdeasContext.Provider>
  )
}
