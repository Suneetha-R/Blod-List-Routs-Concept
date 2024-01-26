// Write your JS code here
import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails

  return (
    <li className="blog-list-container">
      <BlogItem
        title={title}
        description={description}
        publishedDate={publishedDate}
      />
    </li>
  )
}
export default BlogList
