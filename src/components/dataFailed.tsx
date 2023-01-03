import React from 'react'

type dafProps = {
    text: string
}

export const DataFailed = ({text}: dafProps) => {
  return (
    <div className='dataFailure'>
        <h1>{text}</h1>
        <p>Contact the admin for adjustment</p>
    </div>
  )
}
