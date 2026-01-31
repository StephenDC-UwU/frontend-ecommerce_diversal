'use server'

import { cookies } from 'next/headers'
import axios from 'axios'

const STRAPI_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:1337'

export async function createCheckoutSession(products: any[], userId: number | null) {
    const cookieStore = await cookies()
    const jwt = cookieStore.get('jwt')?.value

    try {
        const headers: any = {}
        if (jwt) {
            headers['Authorization'] = `Bearer ${jwt}`
        }

        console.log("--- DEBUG CHECKOUT ---");
        console.log("URL:", `${STRAPI_URL}/api/orders`);
        console.log("JWT Present:", !!jwt);
        console.log("User ID:", userId);

        // Strip down the product data to minimum required for backend and order history
        const lineItems = products.map((product) => ({
            id: product.id,
            documentId: product.documentId,
            product_name: product.product_name,
            slug: product.slug,
            price: product.price,
            brand_name: product.brand?.brand_name,
            image: product.images?.[0]?.url,
            quantity: 1
        }));

        const { data } = await axios.post(`${STRAPI_URL}/api/orders`, {
            products: lineItems,
            user: userId
        }, {
            headers
        })

        return { stripeSession: data.stripeSession }
    } catch (error: any) {
        console.error('Checkout error:', error.response?.data?.error || error.message)
        return { error: error.response?.data?.error?.message || 'Failed to create checkout session.' }
    }
}
