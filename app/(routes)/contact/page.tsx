"use client"

import { ContactFormSection } from "./components/contact-form";
import { HeaderBannerForm } from "./components/header-form";

const Page = () => {
    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24" >
            <HeaderBannerForm />
            <ContactFormSection />
        </div>
    );
}

export default Page;