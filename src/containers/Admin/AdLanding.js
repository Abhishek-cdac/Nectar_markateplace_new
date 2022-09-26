import React from 'react'
import SideNav from '../../Components/SideNav'
import { AdminTabs } from '../../utils/Tabs'
import Footer from '../../Components/Footer'
import Header2 from '../../Components/Header/Header2'

const AdLanding = () => {
  return (
    <div>
       <Header2 />
      <SideNav Tabs = {AdminTabs}/>
      <Footer />
    </div>
  )
}

export default AdLanding
