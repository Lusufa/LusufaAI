import React, { useState } from 'react'
import Markdown from 'react-markdown'

const Creationitem = ({ item }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className="bg-white border shadow-md rounded-xl p-4 flex flex-col cursor-pointer"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex justify-between items-center gap-4">
        <div>
          <h2>{item.prompt}</h2>
          <p className="text-gray-600">
            {item.type} - {new Date(item.created_at).toLocaleDateString()}
          </p>
        </div>
        <button className="bg-[#eff6ff] border border-[#bfdbfe] rounded-md px-4 py-2 text-[#1e40af]">
          {item.type}
        </button>
      </div>

      {expanded && (
        <div className="mt-4 text-gray-600">
          {item.type === "image" ? (
            <img
              src={item.content}
              alt="image"
              className="w-full h-auto rounded-md"
            />
          ) : (
            <div className='reset-tw'><Markdown>{item.content}</Markdown></div>
          )}
        </div>
      )}
    </div>
  )
}

export default Creationitem
