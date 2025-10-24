"use client"
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const PageSucess = () => {
    const router = useRouter();

    return (
        <div className="max-w-5xl p-4 mx-auto sm:py-16 sm:px-24">
            <div className="flex flex-col-reverse gap-2 sm:flex-row">
                <div className="flex justify-center sm:min-w-[400px]">
                    <Image src={"/success.jpg"} alt='success' width={250} height={500} className='round' />
                </div>
                <div>
                    <h1 className='text-3xl'>Thank you for shopping with Diversal!</h1>
                    <p className='my-3'>{`Your order is confirmed and we’re already working hard to prepare your items. We truly appreciate your support and your decision to choose us. You'll receive a separate email notification as soon as your package ships.`}</p>
                    <p className='my-3'>We hope you love your new purchase!</p>
                    <Button
                        onClick={() => router.push("/")}
                    >Back To Store</Button>
                </div>
            </div>
        </div>
    );
}

export default PageSucess;

