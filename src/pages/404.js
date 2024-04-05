import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const NotFoundPage = function(){
  return(
    <Layout>
    <h1>Página NO encontrada</h1>
    </Layout>
  )
}
export default NotFoundPage

export const Head = () => <title>Not found</title>
