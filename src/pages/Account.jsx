import React from 'react'
import SavedShows from '../components/SavedShows'

const Account = () => {
  return (
      <div>
          <div className="w-full text-white">
              <img className='w-full h-[400px] object-cover' src=" https://assets.nflxext.com/ffe/siteui/vlv3/5fd505fa-f425-4a18-b3cc-00dd2638f541/fef93e0b-0e0a-481c-82e7-c7f65b2ddb5d/NG-en-20220704-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="/" />
          <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]"></div>
              <div className="absolute top-[20%] p-4 md:p-8">
                  <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>
          </div>
          </div>
          <SavedShows/>
    </div>
  )
}

export default Account