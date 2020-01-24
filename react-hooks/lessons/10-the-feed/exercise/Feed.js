import React, { useEffect, useState, useReducer } from "react"
import FeedPost from "app/FeedPost"
import { loadFeedPosts, subscribeToNewFeedPosts } from "app/utils"
// import FeedFinal from './Feed.final'
// export default FeedFinal
export default Feed

const PER_PAGE = 3

let feedState = null

function Feed() {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "LOAD_POSTS": {
        return {
          ...state,
          posts: action.posts
        }
      }
      case "LOAD_NEW_POSTS": {
        return {
          ...state,
          newPosts: action.newPosts
        }
      }
      case "VIEW_NEW_POSTS": {
        return {
          ...state,
          posts: state.newPosts.concat(state.posts),
          perPageAmount: state.newPosts.length + state.perPageAmount,
          createdAt: Date.now(),
          newPosts: []
        }
      }
      case "VIEW_MORE": {
        return {
          ...state,
          perPageAmount: state.perPageAmount + PER_PAGE
        }
      }
      default: {
        throw new Error("Error in action naming!")
      }
    }
  }, feedState || {
    perPageAmount: PER_PAGE,
    posts: [],
    createdAt: Date.now(),
    newPosts: []
  })

  const { perPageAmount, posts, createdAt, newPosts } = state

  useEffect(() => {
    feedState = state
  })

  useEffect(() => {
    let loading = true
    loadFeedPosts(createdAt, perPageAmount).then(result => {
      if (loading) dispatch({ type: "LOAD_POSTS", posts: result })
    })
    return () => loading = false
  }, [perPageAmount, createdAt])

  useEffect(() => {
    return subscribeToNewFeedPosts(createdAt, posts => {
      dispatch({ type: "LOAD_NEW_POSTS", newPosts: posts })
    })
  }, [createdAt])


  const handleViewMore = () => {
    dispatch({ type: "VIEW_MORE" })
  }

  const handleViewNewPosts = () => {
    dispatch({ type: "VIEW_NEW_POSTS" })
  }

  return (
    <div className="Feed">
      <div className="Feed_button_wrapper">
        {newPosts.length > 0 && <button onClick={handleViewNewPosts} className="Feed_new_posts_button icon_button">
          View {newPosts.length} New Posts
        </button>}
      </div>
      {
        posts.map(item => (
          < FeedPost key={item.id} post={item}/>
        ))
      }

      <div className="Feed_button_wrapper">
        <button className="Feed_new_posts_button icon_button"
                onClick={handleViewMore}>View More
        </button>
      </div>
    </div>
  )
}
