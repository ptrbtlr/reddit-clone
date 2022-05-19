import React from 'react'
import { useSession } from 'next-auth/react'
import Avatar from './Avatar'

const Postbox = () => {
  const { data: session } = useSession()

  return (
    <form>
      <div className="flex items-center space-x-3">
        {/* AVATAR */}
        <Avatar />

        <input
          disabled={!session}
          className="flex-1 rounded-md bg-gray-50 p-2 pl-5 outline-none"
          type="text"
          placeholder={
            session ? 'Enter a title to create a Post' : 'Sign In to post'
          }
        />
      </div>
    </form>
  )
}

export default Postbox
