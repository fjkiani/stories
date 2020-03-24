import React from 'react'
import PostCard from "./PostCard"
import styles from "../css/postlist.module.css"
import Nav from "./Nav"

//pass the posts data array
export default function PostList({posts}) {
    // console.log(posts)
    return (
        <section className={styles.posts}>
        <Nav/>
        <div className ={styles.center}>
        {/* iterate through each node property and pass it to the card component  */}
        {posts.map(({node}, index) => {
            return <PostCard key={index} post={node}/>
        })}
        </div>
        
        </section>
       
            
    
    )
}
