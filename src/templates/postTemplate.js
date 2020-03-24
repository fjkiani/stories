import React from 'react'
import styles from "../css/postTemplate.module.css"
import {Link} from 'gatsby'
import {graphql} from 'gatsby'
import Image from 'gatsby-image'
import Layout from '../components/layout'
import Nav from "../components/Nav"
import {MDXRenderer} from 'gatsby-plugin-mdx'




//data that comes from the query

const postTemplate = ({data}) =>{
    //destructure 
    const {title, date, author, image} = data.mdx.frontmatter;
    //grab the body and render what is in the body
    const {body} = data.mdx
    //setup the image
    const img = image.childImageSharp.fluid 
  
    return (
  
        <Layout> 
            <section className={styles.template}>
            <Link to='/' className={styles.link}>Back to all posts</Link>
            <div className={styles.info}>
            <h1>{title}</h1>
            <h4>
                <span>By {author}</span> / <span>{date}</span>
            </h4>
            </div>
            <Image fluid={img}/>
            <div className={styles.content}>
            <MDXRenderer>{body}</MDXRenderer>
            
            
            </div>

            <Link to='/' className={styles.link}>Back to all posts</Link>
            
            </section>
           
        </Layout>
    )
}

//setup graphql query 
export const query = graphql`
query getPost($slug:String!) {
    mdx (frontmatter:{slug:{eq:$slug}}){
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
        author
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      body
    }
  }
  
  


`

export default postTemplate
