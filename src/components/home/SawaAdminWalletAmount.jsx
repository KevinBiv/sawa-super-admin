import React from 'react'
import line from "../../assets/images/Line 34.png";

function SawaAdminWalletAmount() {
  return (
    <div className='bg-darkblue p-4 mt-4 text-white'>
        <div>
            <p className='text-xs'>Sawa Admin Wallet</p>
            <p className='text-4xl font-bold'>19,500,000</p>
            <p>Million Rwandan Francs</p>
        </div>
        <div className='mt-4 flex justify-between items-center text-center'>
            <div>
                <p>Currency</p>
                <p>Rwf</p>
            </div>
            <img src={line} alt="" />
            <div>
                <p>Transactions</p>
                <p>120</p>
            </div>
        </div>
    </div>
  )
}

export default SawaAdminWalletAmount