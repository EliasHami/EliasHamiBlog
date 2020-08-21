import React, { useState, useEffect } from 'react'
import "./style.css"
import { useParams  } from "react-router-dom"

const Post = ({firebase}) => {
      const { id } = useParams()
      const [post, setPost] = useState({})

      useEffect(() => {
            firebase.database().ref('/posts/' + id)
                  .once('value', data => {
                        const post = data.val() || {}
                        setPost(post)
                  })
      }, [firebase, id])

      return (
            <article class="article">
                  <h2>{ post.title }</h2>
                  <h5>{ post.created_at }</h5>
                  <p>{ post.content }</p>
            </article>
      )
}

export default Post