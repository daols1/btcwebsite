import React from 'react'
import BenefitCards from '../../components/BenefitCards/BenefitCards'
import Companies from '../../components/Companies/Companies'
import HomeHero from '../../components/HomeHero/HomeHero'

function Home() {
  return (
    <div>
      <HomeHero />
      <BenefitCards />
      <Companies />
    </div>
  )
}

export default Home