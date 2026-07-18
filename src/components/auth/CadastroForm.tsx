"use cliente "

import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {signIn} from "next-auth/react";
import {useRouter} from "next/navigation";
import {useState} from "react";
import link from "next/link"
import {CadastroSchema, cadastroSchema} from "@lib/validations/auth"
import {Input} from "@/components/ui/Input";
import {Button} from "@/components/ui/Button"

export function CadastroForm(){
    const router = useRouter();
    const [serverError, setServerError] = useState("");

    const {
        register,
        handleSubmit,
        formState:{errors, isSubmitting},
    } = useForm<CadastroSchema>({resolver: zodResolver(CadastroSchema)});
    async function onSubmit(data: cadastroSchema) {
        setServerError("");

        const res = await fetch("/api/users")
    }
}