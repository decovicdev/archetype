
import Navbar from '@components/CustomNavbar'
import BlogsGrid from '@components/BlogsGrid'
export const POSTS_PER_PAGE = 10

export async function getStaticProps() {
  const posts = []
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return { props: { initialDisplayPosts, posts, pagination } }
}

export default function Blog({ posts, initialDisplayPosts, pagination }) {
  return (
    <div className="bg-fullscreencover">
      <Navbar/>
      <BlogsGrid/>
      <main>

      </main>
      
    </div>
  )
}