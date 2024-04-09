import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

export const query = graphql`
  query {
    allMdx {
      nodes {
        frontmatter {
          title
          date
          slug
        }
        excerpt
      }
    }
  }
`;

const Blog = ({ data }) => {
  return (
    <Layout pageTitle="Mi Blog">
      <h2>Lista de entradas del blog</h2>

      {data.allMdx.nodes.map((node) => (
        <div>
          <p>{node.frontmatter.date}</p>
          <h2>{node.frontmatter.title} </h2>
          {/* <p>{node.excerpt}</p> */}
          <button> 

            <Link to={`/blog/${node.frontmatter.slug}`}> Leer más</Link>  
          
          </button>
          <hr/>
          {/* <li key={node.name}>{node.name}</li> */}
        </div>
      ))}
    </Layout>
  );
};

export const Head = () => <Seo title="Mi Blog" />;

export default Blog;
