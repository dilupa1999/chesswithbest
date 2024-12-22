
import backgroundImage from '../../assets/Rectangle 18.png';

export default function OurHistory() {
  return (
    <div className="relative flex items-center justify-center w-full bg-orange-200 min-h-[450px]">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl p-6 mx-auto text-left text-white lg:mr-7">
        <h1 className="mb-6 text-4xl font-bold md:text-5xl">OUR HISTORY</h1>
        <p className="text-lg leading-relaxed md:text-xl">
          Rajeendra Kalugampitiya is a visionary leader and strategic thinker, with a passion for both chess and business. His extensive experience as the Director of the National Chess Academy at the Chess Federation of Sri Lanka and Vice President of the Chess Federation of Sri Lanka reflects his deep commitment to the development of the sport.
        </p>

        {/* Chess Pieces Design */}
        {/* <div className="flex justify-center mt-6 md:mt-10">
          <div className="grid grid-cols-5 gap-2 md:gap-4">
            {[...Array(10)].map((_, index) => (
              <div
                key={index}
                className="w-8 h-8 bg-black rounded-full md:w-10 md:h-10"
              />
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
}
