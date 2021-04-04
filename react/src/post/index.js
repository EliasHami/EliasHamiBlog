import React, { useEffect } from 'react'
import "./style.css"
import { useDataAPI} from "../utils"
import { useParams  } from "react-router-dom"
import parse from "html-react-parser"

const Post = () => {
      const { id } = useParams()
      const [{data, isLoading, isError}, doFetch] = useDataAPI("http://eliashami.com/index.php/wp-json/wp/v2/posts/" + id, {})
      
      useEffect(() => {
            doFetch("posts/" + id)
      }, [id, doFetch])
      
      const content = data.content?.rendered && parse(data.content.rendered)

      console.log({content0 : data.content?.rendered, content })

      return (
            <>
            { isLoading ? (
                  <div>Loading...</div>
            ) : (
                  <ul className="post-list">
                        { 
                              isError ? <div>Something went wrong ...</div> : (
                                    data && (
                                          <article className="article">
                                                <h2>{ data.title?.rendered }</h2>
                                                {/* <h5>{ data.created_at }</h5> */}
                                                <p>{ content }</p>
                                          </article>)
                              )
                        }
                  </ul>
                  
            )}
      </>
      )
}

export default Post