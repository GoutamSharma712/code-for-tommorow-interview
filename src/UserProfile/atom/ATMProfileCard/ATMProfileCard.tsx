import React from 'react'

const ATMProfileCard = () => {
  return (
    <div className="bg-white p-4 flex rounded gap-10 items-center">
              <div>
                <img
                  className="w-16 h-16 rounded-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe05J4DxnNpLgbFLw3Bl_2Txp34snC636HWA&s"
                  alt="user-image"
                />
              </div>
              <div>
                <p className="text-lg font-bold">Hi, Reader,</p>
                <p>Here's your News!</p>
              </div>
            </div>
  )
}

export default ATMProfileCard