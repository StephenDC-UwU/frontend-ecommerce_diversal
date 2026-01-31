
import BannerDiscount from "@/components/banner-discoun";
import BannerProduct from "@/components/banner-product";
import CarouselTextBanner from "@/components/carousel-text-banner";
import ChooseGender from "@/components/choose-gender";
import FeaturedProducts from "@/components/featured-products";
import HeaderBanner from "@/components/header-banner";


export default function Home() {
  return (
    <main>
      <HeaderBanner />
      <CarouselTextBanner />
      <FeaturedProducts />
      <BannerDiscount />
      <ChooseGender />
      <BannerProduct />
    </main>
  );
}



