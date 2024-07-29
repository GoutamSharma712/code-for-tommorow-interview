import React, { useEffect, useState } from "react";
import MOLCard from "./MOLImageCard/MOLCard";
import MOLParaCard from "./MOLParaCard/MOLParaCard";
import FeedBackFormWrapper from "./FeedBackForm/FeedBackFormWrapper";
import ATMProfileCard from "./atom/ATMProfileCard/ATMProfileCard";
import ATMToggleButton from "./atom/ATMToggleButton/ATMToggleButton";
import ATMPagination from "./atom/ATMPagination/ATMPagination";
import { usePostDataQuery } from "../services/userProfileService";
import { useDispatch, useSelector } from "react-redux";
import { setCardData } from "../redux/Feature/userProfileSlice";
import { RootState } from "../redux/store";

const UserProfile = () => {

  const dispatch = useDispatch()

  const [selectedToggle, setSelectedToggle] = useState<"Card" | "Para" | 'Form'>("Card");
  const [page , setPage] = useState(1)

  const{cardData }:any = useSelector((state:RootState)=>state.card )

  const { data, isLoading, isFetching } = usePostDataQuery({limit : 6 , page:page});
  

  useEffect(() => {
    dispatch(setCardData(data)) ;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isLoading, isFetching]);

  return (
    <div className="flex justify-center h-screen">
      <div className="container  ">
        <div className="bg-blue-300 rounded grid grid-cols-12 p-7">
          <div className="col-span-3 flex flex-col gap-5 shadow-lg bg-blue-200 p-3 rounded-lg h-full">
            <ATMProfileCard/>
           <ATMToggleButton selectedToggle={selectedToggle} setSelectedToggle={setSelectedToggle} />
            <div className="bg-white p-4 rounded ">
              <p className="text-xl font-bold text-center">Have a Feedback ?</p>
              <button onClick={()=>setSelectedToggle('Form')} className="py-2 font-medium bg-green-300 rounded w-full  flex justify-center">
                We're Listening!
              </button>
            </div>
          </div>
          <div className="col-span-9 p-5">
           <div className="flex flex-col gap-4 w-full">
           { (isLoading && isFetching) ?   Array(6)?.fill(0).map((el:any)=>{
              return(
                <div className='animate-pulse h-[80px]  rounded-lg bg-slate-400 w-full' > 
                </div>
              )
            }) : selectedToggle === "Card" ? (
              <div className="flex flex-col gap-4">
                {cardData?.map((el: any, ind: number) => {
                  return (
                    <div key={ind}>
                      <MOLParaCard description={el?.body} heading={el?.title} userId={el?.id} />
                    </div>
                  );
                })} 
                <div className="flex justify-center">
                    <ATMPagination page={page} setPage={setPage}/>
                </div>
              </div> 
            ) : (selectedToggle === 'Para' ? (
              <div className="grid grid-cols-3 gap-10">
                <MOLCard />
                <MOLCard />
                <MOLCard />
                <MOLCard />
                <MOLCard />
                <MOLCard />
              </div>
            ) : <FeedBackFormWrapper/>)}
           </div>
             
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
