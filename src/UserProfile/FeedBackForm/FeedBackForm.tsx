import { FormikProps } from "formik";
import React from "react";
import { FeedbackFormValues } from "./FeedBackFormWrapper";
import ATMTextField from "../atom/ATMTextField/ATMTextField";

type Props = {
  formikProps: FormikProps<FeedbackFormValues>;
};
const FeedBackForm = ({ formikProps }: Props) => {
  const { values, setFieldValue , handleReset } = formikProps;
  return (  
    <div className="bg-slate-200 p-4 rounded-lg">
      <div className="p-4 ">
      <div className="text-lg font-bold">Thankyou you so much for taking the time!</div>
      <p>Please Provide the below details!</p>
      </div>
      
      <div className="flex flex-col gap-4">
        <ATMTextField
          label="First Name"
          value={values?.name}
          onChange={(e) => setFieldValue("name", e.target.value)}
          placeholder="Enter Name"
          name="name"
        />
         <ATMTextField
          label="Last Name"
          value={values?.lastName}
          onChange={(e) => setFieldValue("lastName", e.target.value)}
          placeholder="Enter Last Name"
          name="lastName"
        />
         <ATMTextField
          label="Email"
          value={values?.email}
          onChange={(e) => setFieldValue("email", e.target.value)}
          placeholder="Enter Email"
          name="email"
        />
         <ATMTextField
          label="Mobile"
          value={values?.phone}
          onChange={(e) => setFieldValue("phone", e.target.value)}
          placeholder="Enter Mobile"
          name="phone"
        />
         <ATMTextField
          label="Country"
          value={values?.country}
          onChange={(e) => setFieldValue("country", e.target.value)}
          placeholder="Enter Country"
          name="country"
        />
      </div>

      <div className="flex gap-4 mt-6">

        <button className="bg-green-500 text-white font-medium p-2 rounded" type='submit'>
          Submit Feedback
        </button>
        <button className="bg-red-500 text-white font-medium p-2 rounded px-6" onClick={()=>handleReset()}>
          Reset
        </button>

      </div>
    </div>
  );
};

export default FeedBackForm;
