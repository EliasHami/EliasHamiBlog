import React from 'react'
import "./style.css"
import PostCard from "./postCard"
import {useDataAPI} from "../utils"

const Blog = () => {
      const [{data, isLoading, isError}] = useDataAPI("https://dev.to/api/articles?username=eliashami", [])

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