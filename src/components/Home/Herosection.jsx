import bg1 from "../../assets/pngtree-knight-chess-piece-png-image_13893150-removebg-preview 1.png";
import bg2 from "../../assets/pngtree-knight-chess-piece-png-image_13893150-removebg-preview 2.png";
import MainBackgroundImg from "../../assets/pngegg1.png";

export default function Herosection() {
  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-fixed bg-center bg-cover "
      style={{
        backgroundImage: `url(${MainBackgroundImg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 row-auto bg-black bg-opacity-50"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
        {/* Main Title */}
        <h1 className="text-5xl font-bold md:text-[150px]">Chess</h1>
        <h2 className="mt-4 text-2xl font-semibold md:text-4xl">
          With The Best
        </h2>

        {/* Images */}
        <div className="absolute z-10 -translate-y-1/2 top-1/2 left-4 md:left-16">
          <img
            src={bg1}
            alt="Left Chess Piece"
            className="hidden w-34 md:w-38 lg:block"
          />
        </div>
        <div className="absolute z-10 -translate-y-1/2 top-1/2 right-4 md:right-16">
          <img
            src={bg2}
            alt="Right Chess Piece"
            className="hidden w-34 md:w-38 lg:block"
          />
        </div>
      </div>

      {/* Paragraph Section */}
      <div className="absolute z-10 px-4 py-10 text-white bg-black bg-opacity-50">
        <p className="max-w-3xl mx-auto text-sm leading-relaxed text-center md:text-lg">
          Chess is a strategic board game played between two opponents on a
          64-square checkered board. Each player commands an army of 16 pieces,
          including a king, queen, rooks, bishops, knights, and pawns, aiming to
          checkmate the opponent s king. Combining elements of strategy,
          tactics, and foresight, chess challenges players to think critically
          and plan several moves ahead. It is a timeless game enjoyed by
          millions worldwide, blending intellect and competition.
        </p>
      </div>
    </div>
  );
}
