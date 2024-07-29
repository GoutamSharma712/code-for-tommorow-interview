import { ErrorMessage } from "formik";
import React from "react";

type Props = {
  name: string;
  label:string ;
  value: string;
  onChange: (e:React.ChangeEvent<HTMLInputElement>)=>void;
  className?: string;
  placeholder: string;
};

const ATMTextField = ({
  name,
  value,
  label ,
  onChange,
  className = 'p-2 rounded' ,
  placeholder,
}: Props) => {
  return (
    <div className='relative'>
        <div className="flex flex-col ">
        <label className="font-semibold ">{label} </label>
      <input
        name={name}
        value={value}
        onChange={(e)=>{onChange(e)}}
        className={className}
        placeholder={placeholder}
      />
      <ErrorMessage name={name}>{(errMsg) => <div className=" text-red-500 absolute -bottom-4 font-medium text-sm mt-0">{errMsg}</div>}</ErrorMessage>
    </div>
    </div>
  );
};

export default ATMTextField;
