import React from 'react'
import BenefitCards from '../../components/BenefitCards/BenefitCards'
import Companies from '../../components/Companies/Companies'
import HomeHero from '../../components/HomeHero/HomeHero'
import Ready from '../../components/Ready/Ready'
import ShowApp from '../../components/ShowApp/ShowApp'

function Home() {
  return (
    <div>
      <HomeHero />
      <BenefitCards />
      <Companies />
      <ShowApp />
      <Ready />
    </div>
  )
}

export default Home