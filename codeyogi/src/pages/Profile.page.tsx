import { useFormik } from "formik";
import React from "react";
import {FC, memo } from "react";
import * as yup from 'yup';
import { meUpdate } from "../api/auth";
import Button from "../components/Button/Button";
import InputTwo from "../components/InputTwo";
import { meSelector } from "../selectors/auth.selectors";

import { useAppSelector } from "../store";





interface Props{
    
}



const ProfilePage: FC<Props> = () => {

    
  const user = useAppSelector(meSelector);

    const form = useFormik({
        initialValues : {
            
            firstName: user?.first_name,
            middleName: user?.middle_name ? user.middle_name : "undefined",
            lastName: user!.last_name,
            
            date:user?.birth_date ? user.birth_date : "undeifned" ,
            phoneNumber:user?.phone_number ? user.phone_number : "undefined"
        },
        
        validationSchema:yup.object().shape({
            firstName:yup.string().required().min(3),
            middleName:yup.string().min(3),
            lastName:yup.string().required().min(3),
            description:yup.string().required().min(20),
            
        }),
        
        enableReinitialize:true,
        onSubmit:(userData) => {
            meUpdate(userData);
            console.log("submit");
        }
    });
    return (
        <div className="w-full mx-4 mt-10 " >
            <div className="rounded-md mt-13.45 border shadow-lg p-5">
                <h2 className="mx-2 mt-1 mb-10">GENERAL INFORMATION</h2>
                <form className="flex ">
                    <img src={user!.profile_pic_url} onError = {(e:any) => {
                e.target.onerror=null;
                e.target.src="/avatar.jpg"
                
              } } alt="" className="object-cover rounded-lg shadow mr-11 w-28 h-28" />
                    <div >
                        <div className="flex">
                    <InputTwo id="firstname" type="name" {...form.getFieldProps("firstName")}  autoComplete="first-name" touched={form.touched.firstName} error={form.errors.firstName} placeholder="First Name " className=" w-96" />
                    <InputTwo id="middlename"  type="name" {...form.getFieldProps("middleName")} autoComplete="middle-name" touched={form.touched.middleName} error={form.errors.middleName} placeholder="Middle Name" className="inline mx-2 w-96" />
                    </div>
                    <div className="flex">
                    <InputTwo id="lastname" type="name" autoComplete="last-name" {...form.getFieldProps("lastName")}  touched={form.touched.lastName} error={form.errors.lastName} placeholder="Last Name" className="w-64 mr-2 "  />
                    <InputTwo id="date" type="date" autoComplete="bday" {...form.getFieldProps("date")}  touched={form.touched.date} className="w-64" placeholder="date"  />
                    </div>
                    <InputTwo id="phone-number" type="number" autoComplete="tel" {...form.getFieldProps("phoneNumber")} touched={form.touched.phoneNumber} className="w-64" placeholder="Phone Number" />
                    </div>
                    <Button type="submit" theme="indigo" themeClasses=""
            >save</Button>   
                </form>
               
            </div>
        </div>
    );
};
    
ProfilePage.defaultProps = {

}    

    
export default memo(ProfilePage);