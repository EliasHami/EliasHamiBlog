import React from 'react'
import "./style.css"
import { Link } from "react-router-dom"
import parse from "html-react-parser"

const PostCard = ({post}) => {
      return (
            <Link to={'blog/posts/'+ post.id} className="card">
                  <img src={require("./numero1.jpg")} alt="Avatar" className="card-img"/>
                  <h3 className="card-title">{post?.title?.rendered}</h3>
                  <p className="card-fade">{parse(post?.excerpt?.rendered)}</p>
            </Link>
      )
}

export default PostCard 