import React from 'react'

function ActiveUsers(props) {
  return (
    <div>
        <div>
            <p>{props.activeUsers}</p>
            <p>{props.newActiveUsers}</p>
        </div>
        <hr />
        <div>
            <p>{props.service}</p>
            <p>{props.label}</p>
        </div>
    </div>
  )
}

export default ActiveUsers;