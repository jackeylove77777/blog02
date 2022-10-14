import React from 'react'
import Link from 'next/link'
const Post = ({ post}) => {
  return (
    <div className="border rounded-xl hover:border-indigo-600 drop-shadow-sm hover:shadow-xl relative">
      <div className="w-full overflow-hidden">
        <img
          src={post.frontmatter.cover_image}
          className="transform hover:scale-[1.4] transition-transform duration-500"
        />
      </div>
      <div className="p-4 flex flex-col items-start md:gap-1 gap-0">
        <div className=" text-slate-500 text-md">
          Date: {post.frontmatter.date}
        </div>
        <div className="md:text-2xl text-xl text-black dark:text-white">
          {post.frontmatter.title}
        </div>
        <div className=" text-md">
          {post.frontmatter.excerpt}
        </div>
        <div className="mt-4">
          <Link href={`/blogs/${post.slug}`}>
            <button
              className="border rounded-xl bg-indigo-600 text-white
       hover:text-slate-900 hover:border-indigo-600 hover:bg-gray-100 md:px-6 px-3 py-2"
            >
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Post