import React from 'react'
import Loader from '../../components/Loader/Loader'
import StackingReward from '../../components/StackingReward/StackingReward'
import WalletLeading from '../../components/WalletLeading/WalletLeading'
import WalletsHero from '../../components/WalletsHero/WalletsHero'
import WallettDoc from '../../components/WallettDoc/WallettDoc'

function Wallets() {
  return (
    <div>
      <WalletsHero />
      <WalletLeading />
      <StackingReward />
      <WallettDoc />
    </div>
  )
}

export default Wallets