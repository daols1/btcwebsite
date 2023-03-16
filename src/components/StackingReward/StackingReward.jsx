import React from 'react'
import { Link } from 'react-router-dom'
import './StackingReward.scss'

function StackingReward() {
  return (
    <div className='container stacking-rewards'>
        <div className='stacking-rewards-inner'>
            <div>
                <h1>Stacking Rewards</h1>
                <p>Estimate your rewards and see how simple it is to receive staking rewards with BTCA</p>
                <p>There is no way to know how many nodes are running on the network, and how much PIV is being staked at any given time, so these calculations are educated estimates.</p>
            </div>
            <div>
                <div>
                    <p>Total BTCA staked</p>
                    <h1>10 000</h1>
                </div>
                <p>Estimated 6.5% annual reward</p>
                <section>
                    <div className='flexed-li'>
                        <p>Daily rewards: <span>1.343945 BTCA</span></p>
                        <p>Weekly rewards: <span>23.343945 BTCA</span></p>
                        <p>Mothly rewards: <span>23.343945 BTCA</span></p>
                        <p>Yearly rewards: <span>23.343945 BTCA</span></p>
                    </div>
                </section>
            </div>
            <div>
                <p>Reliable and Simple</p>
                <h2>Cold Stacking</h2>
                <p>Delegate your BTCA for staking to a hot wallet while maintaining full control and security of your BTCA offline.</p>
                <Link className='btn bg-green'>Cold Stacking</Link>
            </div>
            <div>
                <p>Reliable and Simple</p>
                <h2>Cold Stacking</h2>
                <p>Delegate your BTCA for staking to a hot wallet while maintaining full control and security of your BTCA offline.</p>
                <Link className='btn bg-green'>Cold Stacking</Link>
            </div>
        </div>
    </div>
  )
}

export default StackingReward