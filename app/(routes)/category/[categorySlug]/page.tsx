"use client"
import { useGetProductsByCategory } from '@/api/useGetProductsByCategory';
import { useParams } from 'next/navigation';
import FiltersControlsCategory from './components/filters-controls-category';
import SkeletonSchema from '@/components/skeleton-schema';
import ProductCard from './components/product-card';
import { ResponseType } from '@/types/response';
import { ProductType } from '@/types/product';
import { useState } from 'react';
import { Separator } from '@/components/ui/separator';


export default function Page() {
    const params = useParams();
    const { categorySlug } = params;
    const { result, isLoading }: ResponseType<ProductType> = useGetProductsByCategory(categorySlug);
    const [filterOrigin, setFilterOrigin] = useState('');

    console.log(result);


    const filteredProducts = result !== null && !isLoading && (
        filterOrigin === ''
            ? result
            : result.filter((product: ProductType) => product.origin === filterOrigin)
    );

    return (
        <div className='max-w-6xl py-4 mx-auto sm:py-16 sm:px-24'>
            {result !== null && !isLoading && (
                <h1 className='text-3xl font-medium'>{result[0].sub_sub_category.sub_category.categories[0].category_name}</h1>
            )}

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