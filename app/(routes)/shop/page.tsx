"use client"
import { useGetProducts } from '@/api/useGetProducts';
import FiltersControlsCategory from './[categorySlug]/components/filters-controls-category';
import SkeletonSchema from '@/components/skeleton-schema';
import ProductCard from './[categorySlug]/components/product-card';
import { ResponseType } from '@/types/response';
import { ProductType } from '@/types/product';
import { useState } from 'react';
import { Separator } from '@/components/ui/separator';

export default function Page() {
    const { result, isLoading }: ResponseType<ProductType> = useGetProducts();
    const [filterOrigin, setFilterOrigin] = useState('');

    const filteredProducts = result !== null && !isLoading && (
        filterOrigin === ''
            ? result
            : result.filter((product: ProductType) => product.origin === filterOrigin)
    );

    return (
        <div className='max-w-6xl py-4 mx-auto sm:py-16 sm:px-24'>
            <h1 className='text-3xl font-medium'>All Products</h1>

            <Separator className='my-4 bg-primary' />

            <div className='sm:flex sm:justify-between'>
                <FiltersControlsCategory setFilterOrigin={setFilterOrigin} />

                <div className='grid gap-2 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-14'>
                    {isLoading && (
                        <SkeletonSchema grid={3} />
                    )}
                    {Array.isArray(filteredProducts) && filteredProducts !== null && !isLoading && (
                        filteredProducts.map((product: ProductType) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    )}
                    {Array.isArray(filteredProducts) && filteredProducts !== null && !isLoading && filteredProducts.length === 0 && (
                        <p>Oh this moment we dont have stock sorry... </p>
                    )}
                </div>
            </div>
        </div>
    )
}
