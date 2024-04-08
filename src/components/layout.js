import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText
} from './layout.module.css'
import { StaticImage } from 'gatsby-plugin-image'

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`query{
        site {
        siteMetadata {
            description
            title
            siteUrl
        }
        }
    }`)
    return (
        <div className={container}>
            <header>
            <h1>{data.site.siteMetadata.title}</h1>  
            <h2>{data.site.siteMetadata.description}</h2>  
            </header>
            <StaticImage src="../images/icon.png" width={100}></StaticImage>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}><Link className={navLinkText} to='/'>Home</Link></li>
                    <li className={navLinkItem}><Link className={navLinkText} to='/sobremi'>Sobre mí</Link></li>
                    <li className={navLinkItem}><Link className={navLinkText} to='/blog'>Blog</Link></li>
                    <li className={navLinkItem}><Link className={navLinkText} to='/donde-estamos'>Dónde estamos</Link></li>
                </ul>
            </nav>
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
                <footer className='footer'> &copy; aeg {new Date().getFullYear()}
                <p className={navLinkItem}><a href='https://github.com/AElenaGr'>Github</a></p>
                </footer>
                {/* {new Date().getFullYear()} Para la fecha actualizada*/}
            </main>
        </div>
    )
}

export default Layout

