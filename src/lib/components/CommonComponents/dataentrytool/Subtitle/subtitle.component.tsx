import React from 'react'

export const Subtitle: React.FC<{ content: string }> = ({ content }) => {
  return (
    <div className='text-gray-500 font-medium text-base py-2'>
        { content }
    </div>
  )
}