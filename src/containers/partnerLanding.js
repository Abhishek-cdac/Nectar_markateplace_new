import React from 'react'
import Header2 from '../Components/Header/Header2'
import Footer from '../Components/Footer'
import SideNav from '../Components/SideNav'
import { PartnerTabs } from '../utils/Tabs'

const partnerLanding = () => {

  return (
    <div>
      <Header2 />
      <SideNav Tabs = {PartnerTabs}/>
      <Footer />
    </div>
  )
}

export default partnerLanding
