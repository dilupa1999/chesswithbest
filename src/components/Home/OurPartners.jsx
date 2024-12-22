import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

import logo1 from "../../assets/png-transparent-atm-bank-of-ceylon-money-dfcc-bank-bank-text-logo-sign-thumbnail-removebg-preview 1.png";
import logo2 from "../../assets/images-removebg-preview 1.png";
import logo3 from "../../assets/1592809842-removebg-preview 1.png";
import logo4 from "../../assets/channels4_profile-removebg-preview 1.png";

import advertisment1 from "../../assets/Rectangle 26.png";
import advertisment2 from "../../assets/Rectangle 27.png";
import advertisment3 from "../../assets/Rectangle 30.png";
import advertisment4 from "../../assets/Rectangle 31.png";
import advertisment5 from "../../assets/Rectangle 30.png";

export default function OurPartners() {
  const logos = [logo1, logo2, logo3, logo4];
  const banners = [advertisment1, advertisment2, advertisment3, advertisment4,advertisment5];

  return (
    <div className="py-8 bg-gray-50">
      {/* Title Section */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-orange-600">Our Partners</h2>
        <p className="justify-center max-w-4xl mx-auto mt-4 text-gray-700">
          At Chess With The Best, our partners play a crucial role in
          advancing our mission to nurture chess talent. This section highlights
          the organizations, institutions, and communities that collaborate with
          us to provide exceptional learning experiences and opportunities for
          players worldwide.
        </p>
      </div>

      {/* Logo Section */}
      <div className="mx-auto ">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center p-4 bg-white rounded-lg ">
                <img
                  src={logo}
                  alt={`Partner Logo ${index + 1}`}
                  className="object-contain w-32 h-32"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Banners Section */}
      {/* Banners Section */}
      <div className="p-5 mx-auto mt-0  lg:p-28">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {banners.map((banner, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center bg-white rounded-lg shadow-lg">
                <img
                  src={banner}
                  alt={`Advertisement Banner ${index + 1}`}
                  className="object-cover rounded-lg h-90 w-90"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
