"use client"

import RegisterFrom from "@/app/register/compoenents/RegisterForm";
import {IRegister} from "@/app/register/types";
import {register} from "@/app/register/register";


export default function Register() {
    const submitForm = (data: IRegister) => {
        console.log(
            register(data)
        )
        ;
    }
    return (
        <div className={"bg-gray-950"}>
            <RegisterFrom onSubmit={(e) => submitForm(e)}/>
        </div>
    )
}