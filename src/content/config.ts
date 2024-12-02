import { z, defineCollection } from 'astro:content'

const productSchema = z.object({
    id: z.string(),
    name: z.string(),
    price: z.number(),
    description: z.string().optional(),
    cover: z.string(),
    images: z.array(z.string()).optional(),
    publishedAt: z.coerce.date().optional(),
})

export type Product = z.infer<typeof productSchema>
export const productCollection = defineCollection({ schema: productSchema })

export const collections = {
    products: productCollection,
}
