"use client"

import Input from "@/app/ui/design-system/inputs/Input"
import {useState} from "react";
import {loginFormData} from "@/app/login/types";
import {inputTypes, registerFields} from "@/app/register/lib";

interface RegisterFormProps {
    onSubmit: (data: loginFormData) => void;
}

export default function RegisterFrom({onSubmit}: RegisterFormProps) {
    const [formData, setFormData] = useState<loginFormData>({email: "", password: ""});

    const handleChange = (field: string, value: string) => {
        setFormData(prev => ({
            ...prev, [field]: value
        }))
    }

    return (
        <main className="flex flex-col items-center justify-center h-screen">
            <form onSubmit={(e) => {
                e.preventDefault();
                onSubmit(formData);
            }
            }>
                <Input
                    type={inputTypes.TEXT}
                    placeholder={"firstname"}
                    onChange={(e) => {
                        handleChange(registerFields.FIRSTNAME, e)
                    }}
                />
                <Input
                    type={inputTypes.TEXT}
                    placeholder={"lastname"}
                    onChange={(e) => {
                        handleChange(registerFields.LASTNAME, e)
                    }}
                />
                <Input
                    type={"email"}
                    placeholder={"email"}
                    value={formData.email}
                    onChange={(e) => {
                        handleChange("email", e)
                    }
                    }/>
                <Input type={"password"} placeholder={"password"} value={formData.password} onChange={(e) => {
                    handleChange("password", e)
                }
                }/>
                <Input type={"submit"} value={"Login"} className={"bg-white text-black "}/>
            </form>
        </main>
    )
}