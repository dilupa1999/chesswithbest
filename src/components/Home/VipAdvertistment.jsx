import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay } from "swiper/modules"; // Import Autoplay module
import advertisment1 from "../../assets/Rectangle 19.png";
import advertisment2 from "../../assets/Rectangle 19.png";
import advertisment3 from "../../assets/Rectangle 19.png";

const slidesData = [
  {
    image: advertisment1,
    title: "WESTALD CHESS CLUB",
    description:
      "Chess is a strategic board game played between two opponents on a 64-square checkered board. Each player commands an army of 16 pieces, including a king, queen, rooks, bishops, knights, and pawns, aiming to checkmate the opponent's king.",
    buttonText: "Contact Now",
  },
  {
    image: advertisment2,
    title: "WESTALD CHESS CLUB",
    description:
      "Join us for exciting chess matches every Friday from 4 PM to 5 PM at Westald Club Hall. New members always welcome!",
    buttonText: "Contact Now",
  },
  {
    image: advertisment3,
    title: "WESTALD CHESS CLUB",
    description:
      "Experience the thrill of strategic gameplay and improve your skills. Perfect for chess enthusiasts of all levels.",
    buttonText: "Contact Now",
  },
];

export default function VipAdvertistment() {
  return (
    <div className="py-8 bg-gray-100">
      <div className="mx-auto ">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 4000, // Slide changes every 3 seconds
            disableOnInteraction: false, // Keeps autoplay active even after user interaction
          }}
          modules={[Pagination, Autoplay]} // Include Autoplay module
          className="mySwiper"
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center justify-center overflow-hidden bg-white rounded-lg shadow-lg lg:flex-row ">
                <div className="lg:w-1/4 border-spacing-1">
                  <img
                    src={slide.image}
                    alt={`Advertisment ${index + 1}`}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6 lg:w-1/2">
                  <h2 className="text-2xl font-bold text-orange-600">
                    {slide.title}
                  </h2>
                  <p className="mt-5 text-gray-700 p-">{slide.description}</p>
                  <button className="px-6 py-3 mt-6 font-bold text-white bg-orange-500 rounded hover:bg-orange-600">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
