"use client"
import { useGetProductsByCategory } from '@/api/useGetProductsByCategory';
import { Separator } from '@radix-ui/react-dropdown-menu';
import { useParams } from 'next/navigation';
import FiltersControlsCategory from './components/filters-controls-category';

export default function Page() {
    const params = useParams();
    const { categorySlug } = params;

    const { result, isLoading } = useGetProductsByCategory(categorySlug);

    console.log(result);

    return (
        <div className='max-w-6xl py-4 mx-auto sm:py-16 sm:px-24'>
            {result != null && !isLoading && (
                <h1 className='text-3xl font-medium'>{result[0].sub_sub_category.sub_category.categories[0].category_name}</h1>
            )}
            <Separator />

            <div className='sm:flex sm:justify-between'>
                <FiltersControlsCategory />
            </div>


        </div>
    )
}