import React from 'react'
import Layout from '../../Components/Layouts/Layout'
import  "../../styles/HomeStyle.css"
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'
import Section7 from './Section7'

const Home = () => {
  return (
    <div>
      <Layout>
        {/*home section list  */}
        <Section1/>
        <Section2/> {/* Home about*/}
        <Section3/>  {/*home menu*/}
        {<Section4/>} {/*Home promotion*/}
        {<Section5/>}  {/*shop part*/}
        {<Section6/>} {/*blog part*/}
        {<Section7/>} {/* contact part*/}
      </Layout>
    </div>
  )
}

export default Home
