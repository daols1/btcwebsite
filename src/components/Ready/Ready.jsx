import React from 'react'
import './Ready.scss'
import img1 from '../../assets/home/setup/img1.png'
import img2 from '../../assets/home/setup/img2.png'
import img3 from '../../assets/home/setup/img3.png'

function Ready() {
  return (
    <div className='container ready'>
        <h1>Ready to start?</h1>
        <p>Whether you are a developer, merchant, end user or window buyer, we welcome you to the BTCA community.</p>
        <div className='instruct-card'>
            <div>
                <span>Step 1</span>
                <hr />
                <h3>Download the app</h3>
                <img src={img1} alt="" srcset="" />
            </div>
            <div>
                <span>Step 2</span>
                <hr />
                <h3>Register</h3>
                <img src={img2} alt="" srcset="" />
            </div>
            <div>
                <span>Step 3</span>
                <hr />
                <h3>Enjoy</h3>
                <img src={img3} alt="" srcset="" />
            </div>
        </div>
        <form>
            <h2>Never miss an update</h2>
            <p>Don't miss out on any of the exciting BTCA developments - stay ahead of the game by subscribing to our newsletter today! Subscribe to our newsletter now and start taking your cryptocurrency investments to the next level!</p>
            <input type="email" name="" id="" ></input>
        </form>
    </div>
  )
}

export default Ready