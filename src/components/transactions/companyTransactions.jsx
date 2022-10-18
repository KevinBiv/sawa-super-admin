import React from "react";


function CompanyTransactions(props) {
    return(
        <div className="mb-4">
            <div className="flex justify-between items-center">
            <div>
                <p className="text-sm text-darkblue font-bold">{props.company}</p>
                <p className="text-xs font-light">{props.transactions}</p>
            </div>
            <p className="text-darkblue font-bold text-base">{props.amount}</p>
            </div>
            <hr className="mt-2" />
        </div>
    )
}

export default CompanyTransactions;