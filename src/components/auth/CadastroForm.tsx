"use cliente "

import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {signIn} from "next-auth/react";
import {useRouter} from "next/navigation";
import {useState} from "react";
import link from "next/link"
import {cadastroSchema, type CadastroSchema} from "@lib/validations/auth"
import {Input} from "@/components/ui/Input";
import {Button} from "@/components/ui/Button"