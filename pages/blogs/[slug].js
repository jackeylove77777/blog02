import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Link from 'next/link'

export default function Post({ frontmatter: { title, date, cover_image }, slug, content }) {
  return (
    <div className="max-w-[1100px] md:mt-8 mt-4 md:p-5 p-3 mx-auto">
      <div className="md:text-3xl text-black text-2xl">{title}</div>
      <div className=" text-slate-500 text-lg ">{date}</div>

      <div className="mt-4 overflow-hidden">
        <img
          src={cover_image}
          className="transform transition-transform duration-700 hover:scale-125"
        />
      </div>
      <div className=" border-t-2 p-4 ">
        <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
      </div>
    </div>
  );
}


export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))

  const paths = files.map(filename => ({
    params: {
      slug:filename.replace('.md','')
    }
  }))
  return {
    paths,
    fallback:false
  }
}
export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.md'),
    'utf-8'
  )

  const { data: frontmatter, content } = matter(markdownWithMeta)
  return {
    props: {
      frontmatter,
      slug,
      content
    }
  }
}