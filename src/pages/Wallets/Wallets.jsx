import React from 'react'
import Loader from '../../components/Loader/Loader'
import StackingReward from '../../components/StackingReward/StackingReward'
import WalletLeading from '../../components/WalletLeading/WalletLeading'
import WalletsHero from '../../components/WalletsHero/WalletsHero'

function Wallets() {
  return (
    <div>
      <WalletsHero />
      <WalletLeading />
      <StackingReward />
    </div>
  )
}

export default Wallets