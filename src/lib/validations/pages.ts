import {z} from "zod";

export const createPageSchema = z.object({
    title: z.string().default("Sem título"),
    icon: z.string().optional(),
    parentId: z.string().optional(),
    workspaceId: z.string().min(1),
});

export const updatePageSchema = z.object({
    title: z.string().optional(),
    icon: z.string().nullable().optional(),
    cover: z.string().nullable().optional(),
    favorite: z.boolean().optional(),
    archived: z.boolean().optional(),
    deleted: z.boolean().optional(),
    parentId: z.string().nullable().optional(),
});

export type CreatePageSchema = z.infer<typeof createPageSchema>
export type UpdatePageSchema = z.infer<typeof updatePageSchema>