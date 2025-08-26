import React from 'react'
import { AiToolsData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'

const AiTools = () => {
  const navigate = useNavigate()
  const { user } = useUser()

  return (
    <div className='px-4 sm:px-20 xl:px-32 my-24'>
      <h2 className='text-2xl sm:text-4xl font-semibold text-center mb-8'>AI Tools</h2>
      <p className='text-center text-gray-600 mb-12'>
        Explore our suite of AI tools designed to enhance your creative process.
      </p>

      <div className='flex flex-wrap mt-10 justify-center'>
        {AiToolsData.map((tool, index) => (
          <div
            key={index}
            className='relative group m-4 max-w-xs cursor-pointer'
            onClick={() => user && navigate(tool.path)}
          >
            {/* Gradient ring (shows only on hover) */}
            <div
              className='absolute -inset-[1px] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0'
              style={{ background: `linear-gradient(135deg, ${tool?.bg?.from || '#7c3aed'}, ${tool?.bg?.to || '#f472b6'})` }}
            />
            {/* Soft glow outside */}
            <div
              className='absolute -inset-3 rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 pointer-events-none z-0'
              style={{ background: `linear-gradient(135deg, ${tool?.bg?.from || '#7c3aed'}, ${tool?.bg?.to || '#f472b6'})` }}
            />

            {/* Card content */}
            <div className='relative z-10 p-8 rounded-xl bg-[#FDFDFE] shadow-lg border border-gray-100 transition-transform duration-300 group-hover:border-transparent group-hover:-translate-y-1'>
              {/* Icon with its own gradient background */}
              <div
                className='inline-flex items-center justify-center h-10 w-10 rounded-xl mb-4'
                style={{ background: `linear-gradient(135deg, ${tool?.bg?.from || '#7c3aed'}, ${tool?.bg?.to || '#f472b6'})` }}
              >
                <tool.Icon className='h-5 w-5 text-white' />
              </div>

              <h3 className='font-semibold text-lg'>{tool.title}</h3>
              <p className='text-gray-600'>{tool.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AiTools
