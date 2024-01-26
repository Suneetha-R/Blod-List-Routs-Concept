// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {title, description, publishedDate} = props

  return (
    <div>
      <div className="blogs">
        <h1 className="heading">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="pera">{description}</p>
      <hr />
    </div>
  )
}
export default BlogItem
