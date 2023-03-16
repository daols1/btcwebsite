import React from 'react'
import './WalletLeading.scss'

function WalletLeading() {
  return (
    <div className='container wallet'>
      <div className='wallet-inner'>
        <div className='spanned'>
          <h1>Get more Owning small</h1>
          <p>Whether you are a developer, merchant, end user or window buyer, we welcome you to the BTCA community.</p>
        </div>
        <div>
          <h3>Consistent Block Time </h3>
          <p>The fixed interval between blocks is 60 seconds. Time protocol version 2 greatly reduces the variation in the actual interval between blocks.</p>
        </div>
        <div>
          <h3>Secure Network</h3>
          <p>A distributed network of individual nodes ensures that every transaction and block added to the blockchain is verified, ensuring that blocks and transactions are valid.</p>
        </div>
        <div>
          <h3>Less energy consumption</h3>
          <p>The fixed interval between blocks is 60 seconds. Time protocol version 2 significantly reduces the variation in the actual interval between blocks.</p>
        </div>
        <div>
          <h3>Honest Staking</h3>
          <p>Each UTXO has a chance to win a bet with a linear decrease in difficulty depending on the value of the UTXO.</p>
        </div>
      </div>
    </div>
  )
}

export default WalletLeading