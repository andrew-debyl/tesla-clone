import React from 'react'
import './HeaderBlock.css'

function HeaderBlock() {
  return (
    <div className='headerBlock'>
        <div className="headerBlock__info">
            <div className="headerBlock__infoText">
                <h1 className='headerBlock__h1'>Model 3</h1>
                <h4 className='headerBlock__h4'>Order Online for <span className='underline__words'>Touchless Delivery</span></h4>
            </div>
            <div className="headerBlock__actions">
                <button className='headerBlock__buttonPrimary'>custom order</button>
                <button className='headerBlock__buttonSecondary'>existing inventory</button>
            </div>
        </div>
    </div>
  )
}

export default HeaderBlock