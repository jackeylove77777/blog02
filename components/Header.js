import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <div className="w-full h-[48px] bg-indigo-600">
      <div className="w-full md:max-w-[1100px] md:mx-auto h-full flex items-center ">
        <Link href="/" >
          <span className="text-lg text-white mx-2 md:mx-4 hover:cursor-pointer">博客首页</span>
        </Link>
      </div>
    </div>
  );
}

export default Header