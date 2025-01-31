import React from 'react'
import Contact from './Contact'
import NoticeBanner from './NoticeBanner'
import HomeContent from './HomeContent'
import DetailsContent from './DetailsContent'
import GoogleMap from './Google_Map'
import SiteLayout from './Site_Layout'
import Gallery from './Gallery'


function Advert() {
  return (
    <>
    <Contact/>
    <NoticeBanner/>
    <HomeContent/>
    <GoogleMap/>
    <SiteLayout/>
    <Gallery/>
    <DetailsContent/>  
    </>
  )
}

export default Advert
