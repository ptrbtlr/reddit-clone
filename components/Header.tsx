import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div>
      <div className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
        <Image
          objectFit="contain"
          src="https://links.papareact.com/fqy"
          layout="fill"
        />
      </div>
    </div>
  )
}

export default Header
