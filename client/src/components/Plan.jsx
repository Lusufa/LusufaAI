import React from 'react'
import { PricingTable } from '@clerk/clerk-react'

const Plan = () => {
  return (
    <div className='max-w-2xl  mx-auto z-20 my-30'>
        <div className='text-center'>
          <h2 className='text-2xl font-semibold mb-4'>Choose Your Plan</h2>
          <p className='text-gray-600 mb-8'>
            Select a plan that fits your needs and start your journey with us.
          </p>
        </div>
        <div className='mt-8'>
            <PricingTable />
        </div>
    </div>
  )
}

export default Plan