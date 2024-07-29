import React from 'react'
import { RxCross2 } from 'react-icons/rx'

const MOLCard = () => {
  return (
    <div className="bg-white p-3 rounded-lg">
              <div className="flex justify-end">
                <RxCross2 size="2em" color="red" />
                </div>
                <div className="text-md font-semibold">doloribus ad provident suscipit at</div>
                <div className='line-clamp-1'>qui consequuntur ducimus possimus quisquam amet similique suscipit porro ipsam amet eos veritatis officiis exercitationem vel fugit aut necessitatibus totam omnis rerum consequatur expedita quidem cumque explicabo
                </div>
                <div className="text-gray-300 font-medium">Mon ,21 Dec 2020 14.57 GMT</div>
                <img
                  className="rounded-lg "
                  src="https://img.freepik.com/free-photo/group-diverse-people-having-business-meeting_53876-25060.jpg"
                  alt="image-tag"
                />
             
            </div>
  )
}

export default MOLCard