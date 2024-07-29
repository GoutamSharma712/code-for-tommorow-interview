import React from "react";
import { RxCross2 } from "react-icons/rx";
import { useDeletePostDataMutation } from "../../services/userProfileService";

type Props = {
  heading: string;
  description: string;
  userId: string;
};

const MOLParaCard = ({ heading, description, userId }: Props) => {
  const [deletePost] = useDeletePostDataMutation();

  const deleteUserPost = (userId: string) => {
    deletePost(userId).then((res) => {
      alert(`deleted Successfully user ${userId}`);
    });
  };
  return (
    <div className="grid grid-cols-12 gap-5 items-center">
      <div className=" col-span-11 flex gap-3 bg-white shadow-lg p-3 rounded-lg ">
        <img
          className="w-16 h-16 rounded-full"
          src="https://www.shutterstock.com/image-photo/teamwork-meeting-tablet-business-people-600nw-2251938325.jpg"
          alt="user-image"
        />
        <div>
          <div className="font-bold text-md line-clamp-1">{heading} </div>
          <div className="text-md line-clamp-1">{description}</div>
          <div className="text-gray-300 font-medium">
            Mon ,21 Dec 2020 14.57 GMT
          </div>
        </div>
      </div>
      <div className="bg-white p-1 rounded-full h-10  w-10 col-span-1 cursor-pointer">
        <RxCross2
          onClick={() => deleteUserPost(userId)}
          size="2em"
          color="red"
        />
      </div>
    </div>
  );
};

export default MOLParaCard;
