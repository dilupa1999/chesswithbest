import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Course01 from "../../assets/pexels-darshan394-2695392.jpg";
import Course02 from "../../assets/pexels-indeedsaeed-846070.jpg";
import Course03 from "../../assets/pexels-pixabay-260024.jpg";
import Course04 from "../../assets/pexels-vlada-karpovich-6115019.jpg";
import Course05 from "../../assets/pexels-pixabay-260024.jpg";

export default function OurCourses() {
  const courses = [
    {
      image: Course01,
      title: "Course 01",
      description:
        "Chess is a strategic board game played between two opponents on a 64-square checkered board.",
    },
    {
      image: Course02,
      title: "Course 02",
      description:
        "Chess is a strategic board game played between two opponents on a 64-square checkered board.",
    },
    {
      image: Course03,
      title: "Course 03",
      description:
        "Chess is a strategic board game played between two opponents on a 64-square checkered board.",
    },
    {
      image: Course04,
      title: "Course 04",
      description:
        "Chess is a strategic board game played between two opponents on a 64-square checkered board.",
    },
    {
        image: Course05,
        title: "Course 04",
        description:
          "Chess is a strategic board game played between two opponents on a 64-square checkered board.",
      },
  ];

  return (
    <div className="py-12 bg-gray-100 ">
      <h2 className="mb-6 text-5xl font-bold text-center text-orange-600">
        Our Courses
      </h2>
      <p className="p-5 ml-5 text-center text-gray-700 lg:mb-12 lg:mr-5">
        Explore our range of expertly designed courses at Chess With The Best
        tailored for beginners to advanced players. Unlock strategies, enhance
        skills, and master the game with guidance from top chess professionals.
      </p>

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className="max-w-6xl mx-auto"
      >
        {courses.map((course, index) => (
          <SwiperSlide key={index} className="p-4">
            <div className="relative items-center justify-center row-auto overflow-hidden bg-white shadow-md border-top hover:shadow-lg group ">
              <hr className="w-auto h-3 bg-orange-500" />
              {/* Image */}
              <img
                src={course.image}
                alt={course.title}
                className="object-cover w-full h-48"
              />

              {/* Overlay */}
              <div className="absolute inset-0 flex items-center justify-center text-white transition-opacity duration-300 bg-black opacity-0 bg-opacity-70 ">
                <h3 className="text-xl font-bold">{course.title}</h3>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-center text-gray-800">
                  {course.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {course.description}
                </p>
                <button className="flex items-center justify-center px-4 py-2 mt-4 text-sm font-medium text-white bg-orange-600 rounded hover:bg-orange-700">
                  View More
                </button>
              </div>
              <hr className="w-auto h-3 bg-orange-500" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
