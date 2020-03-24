import React from 'react'
import Image from 'gatsby-image'
import styles from '../css/postcard.module.css'
import {Link} from "gatsby"

export default function PostCard({post}) {
    //look for the particular properties through destructure and set up variables
    const {title, date, author, slug} = post.frontmatter
    const img = post.frontmatter.image.childImageSharp.fluid 
    return (
        <article className={styles.card}>
         <div className={styles.image}>
            <Image fluid={img} />
         </div>
         <div className={styles.info}>
         <div>
            <h2>{title}</h2>
            <h6>
                <span>By {author}</span> /
                <span>{date}</span>
            </h6>
            <post>{post.excerpt}</post>
            <br></br>
            <Link to={slug} className={styles.link}>Read More</Link>

         </div>
         
         </div>


        </article>
    )
}
