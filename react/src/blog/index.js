import React, {useState, useEffect} from 'react'
import "./style.css"
import PostCard from "./postCard"

const Blog = (props) => {
      const [posts, setPosts] = useState([])

      // this is run once (unless firebase changes)
      // it will listen to changes on ref /posts and set posts state
      // when Unmounted ref will be cleaned off
      // useEffect(() => {
      //       const ref = props.firebase.database().ref('/posts')
      //       const listener = ref.on('value', data => {
      //             const posts = data.val() || [];
      //             setPosts(posts)
      //       })

      //       return(() => ref.off('value', listener))
      // }, [props.firebase])

      useEffect(async() => {
            const response = await fetch('http://eliashami.com/index.php/wp-json/wp/v2/posts')
            const json = await response.json()
            setPosts(json || [])
            // .then(response => setPosts(response.json() || []))
                  // .then(data => console.log(data));
      }, [])

      return (
            <ul class="post-list">
                  { 
                        posts?.map(post => (
                              <PostCard post={post} />
                        ))
                  }
            </ul>
      )
}

export default Blog 