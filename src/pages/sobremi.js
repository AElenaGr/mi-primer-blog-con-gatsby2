import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
const SobreMi = () => {
  return (
    <Layout pageTitle="Sobre Mí">
      <p>Hola que hace</p>
    </Layout>

  )
}
export const Head = () => <Seo sobremi="Sobre mí"/>


export default SobreMi