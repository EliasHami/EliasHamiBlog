import React from 'react'
import "./style.css"
import { Link } from "react-router-dom"

const PostCard = ({post}) => {
      return (
            <Link to={'posts/'+ post.id} className="card">
                  <img src={require("./numero1.jpg")} alt="Avatar" className="card-img"/>
                  <h3 className="card-title">{post?.id}</h3>
                  <p className="card-fade">{post?.content}</p>
            </Link>
      )
}

export default PostCard 