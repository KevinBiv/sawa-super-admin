import React from 'react';

function ClientCompany(props) {
  return (
    <div className='bg-white flex justify-between items-center md:space-x-2 py-3 px-3 mb-2'>
        <img src={props.profileImage} alt="" className='' />
        <div className='col-span-3'>
            <p className='text-xs font-semibold'>{props.companyName}</p>
            <p className='text-xs'><small>{props.employeesAndServices}</small></p>
        </div>
        <button>
            <img src={props.details} alt="" className='bg-white shadow-sm' />
        </button>
    </div>
  )
}

export default ClientCompany;