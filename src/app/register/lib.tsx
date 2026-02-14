export type inpuType = "text" | "email" | "password" | "submit";

export const inputTypes: Record<string, inpuType> = {
    TEXT : "text",
    PASSWORD : "password",
    SUBMIT: "submit",
    EMAIL: "email",
}

export type registerField =
    "firstname"
    | "lastname"
    | "email"
    | "password";

export const registerFields: Record<string, registerField> = {
    FIRSTNAME: "firstname",
    LASTNAME: "lastname",
    EMAIL: "email",
    PASSWORD: "password",
}