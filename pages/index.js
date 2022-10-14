import Head from 'next/head'
import Post from '../components/Post'
import { sortByDate } from '../utils'
import matter from 'gray-matter'
import fs from "fs";
import path from "path";

export default function Home({ posts }) {
  console.log('in Home');
  console.log(posts);
  return (
    <>
      <Head>
        blog02
      </Head>
      <div className="w-full md:max-w-[1100px] md:mx-auto">
          <div className="w-full  md:p-16 p-4 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-16 gap-4">
              {posts.map((post) => 
                <Post post={post} key={post.slug}></Post>
              )}
            </div>
          </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  // 读取所有的markdown文件
  const files = fs.readdirSync(path.join('posts'))
  const posts = files.map(filename => {
    const slug = filename.replace('.md', '')//用作路由
    
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
    
    //markdown文件上方的描述信息
    const meta = matter(markdownWithMeta);
    const { data: frontmatter } = meta
    return {
      slug,
      frontmatter
    }
  })
  console.log(posts);
  return {
    props: {
      posts:posts.sort(sortByDate)
    }
  }
}
