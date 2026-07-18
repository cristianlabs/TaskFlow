import {z} from "zod";

export const loginSchema = z.object({
    email: z.string().email("Email inválido"),
    password: z.string().min(1, "Senha obrigatória"),
});

export const cadastroSchema = z.object({
    name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
    email: z
        .string()
        .min(8, "Senha deve ter pelo menos 8 caracteres")
        .regex(/[A-Z]/, "Deve ter ao menos uma letra maiúscula")
        .regex(/[0-9]/, "Deve conter ao menos um número"),
});

export type LoginSchema = z.infer<typeof loginSchema>;
export type CadastroSchema = z.infer<typeof cadastroSchema>;