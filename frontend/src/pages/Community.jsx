import React, { useEffect, useState } from 'react'
import { useAuth, useUser } from '@clerk/clerk-react'
import { dummyPublishedCreationData } from '../assets/assets'
import { Axis3D, Heart } from 'lucide-react'
import axios from 'axios'
import toast from 'react-hot-toast'


axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;


const Community = () => {
  const [Creations, setCreations] = useState([])
  const { user } = useUser()
  const [loading, setloading] = useState(true)
  const { getToken } = useAuth()


  const fetchCrations = async () => {
    try {
      const { data } = await axios.get('/api/user/get-published-creations', { headers: { Authorization: `Bearer ${await getToken()}` } })
      if (data.success) {
        setCreations(data.creations)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
    setloading(false)
  }

  const imageLikeToggle = async (id) => {
    try {
      const { data } = await axios.post('/api/user/toggle-like-creations', { id }, { headers: { Authorization: `Bearer ${await getToken()}` } })
      if (data.success) {
        toast.success(data.message)
        await fetchCrations()
      } else {
        toast.error(data.message)
      }

    } catch (error) {
      toast.error(error.message)

    }
  }

  useEffect(() => {
    if (user) {
      fetchCrations()
    }
  }, [user])

  return !loading ? (
    <div className='flex-1 h-full flex-col gap-4 p-6'>
      Creations
      <div className='bg-white h-full w-full rounded-xl overflow-y-scroll'>
        {
          Creations.map((creations, index) => (
            <div key={index} className='relative group inline-block pl-3 pt-3 w-full sm:w-1/2 lg:w-1/3'>
              <img src={creations.content} alt="" className='w-full h-full object-cover rounded-lg' />

              <div className='absolute bottom-0 top-0 right-0 left-3 flex gap-2 items-end justify-end group-hover:justify-between p-3 group-hover:bg-gradient-to-b from-transparent to-black/80 text-white rounded-lg'>
                <p className='text-sm hidden group-hover:block'>{creations.prompt}</p>

                <div className='flex gap-1 items-center'>
                  <p>{creations.likes.length}</p>
                  <Heart onClick={() => imageLikeToggle(creations.id)} className={`min-w-5 h-5 hover:scale-110 cursor-pointer ${creations.likes.includes(user.id) ? 'fill-red-500 text-red-600' : 'text-white'}`} />
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  ) : (
    <div className='flex flex-col justify-center items-center h-3/4 gap-4'>
      <div className='animate-spin rounded-full h-11 w-11 border-2 border-purple-500 border-t-transparent'>
      </div>
      <p className='text-sm text-gray-600 font-medium'>Loading...</p>
    </div>
  )
}

export default Community
