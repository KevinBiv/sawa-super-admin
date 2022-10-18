import React from 'react';
import download from "../../assets/images/download-gray.png";
import invoice from "../../assets/images/invoice 3.png";

function TransactionsReportTypes(props) {
  return (
    <div className='grid lg:grid-cols-3 border border-2 py-2'>
        <div className='col-span-2'>
            <img src={invoice} alt="" className='inline mx-3' />
            <p className='inline text-sm'>{props.type}</p>
        </div>
        <button className='flex justify-end items-center'>
        <img src={download} alt="" className='justify-self-end self-center mx-3'/>
        </button>
    </div>
  )
}

export default TransactionsReportTypes