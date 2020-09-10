import React from 'react'
import "./style.css"
import PostCard from "./postCard"
import {useDataAPI} from "../utils"

const Blog = () => {
      const [{data, isLoading, isError}] = useDataAPI("http://eliashami.com/index.php/wp-json/wp/v2/posts", [])

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

      // useEffect(() => doFetch("posts"), [doFetch])

      return (
            <>
                  { isLoading ? (
                        <div>Loading...</div>
                  ) : (
                        <ul className="post-list">
                              { 
                                    isError ? <div>Something went wrong ...</div> : (
                                          data?.map(post => (
                                                <PostCard key={post.id} post={post} />
                                          ))
                                    )
                              }
                        </ul>
                        
                  )}
            </>
      )
}

export default Blog 