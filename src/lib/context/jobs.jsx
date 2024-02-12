import { databases } from '../appwrite'
import { ID, Query } from 'appwrite'
import { createContext, useContext, useEffect, useState } from 'react'

const IdeasContext = createContext()

export const SPOTTER_DATABASE_ID = import.meta.env.VITE_DATABASEID
export const SPOTTER_COLLECTION_ID = import.meta.env.VITE_COLLECTIONID

export function useJobs() {
  return useContext(IdeasContext)
}

export function IdeasProvider(props) {
  const [jobs, setJobs] = useState([])

  async function add(job) {
    const response = await databases.createDocument(
      SPOTTER_DATABASE_ID,
      SPOTTER_COLLECTION_ID,
      ID.unique(),
      job
    )
    setJobs((jobs) => [response.$id, ...jobs].slice(0, 10))
  }

  async function remove(id) {
    await databases.deleteDocument(
      SPOTTER_DATABASE_ID,
      SPOTTER_COLLECTION_ID,
      id
    )
    setJobs((jobs) => jobs.filter((jobs) => jobs.$id !== id))
    await init()
  }

  async function init() {
    const response = await databases.listDocuments(
      SPOTTER_DATABASE_ID,
      SPOTTER_COLLECTION_ID,
      [Query.orderDesc('$createdAt'), Query.limit(10)]
    )
    setJobs(response.documents)
  }

  useEffect(() => {
    init()
  }, [])

  return (
    <IdeasContext.Provider value={{ current: jobs, add, remove }}>
      {props.children}
    </IdeasContext.Provider>
  )
}
