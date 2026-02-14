import {IRegister} from "@/app/register/types";

export const register = async (userData: IRegister): Promise<Partial<IRegister>> => {
    const response = await fetch("http://localhost:8080/user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    })

    if (!response.ok) {
        const errorData: JSON = await response.json().catch();
        console.log(errorData);
        throw new Error("Erreur lors de l'inscription !")
    }

    return userData;
}