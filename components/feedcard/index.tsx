import Image from "next/image";

const FeedCard: React.FC = () => {
  return (
    <div className="border border-r-0 border-l-0 border-b-0 border-gray-600 p-5 hover:bg-slate-900 transition-all cursor-pointer">
      <div className="grid grid-cols-12">
        <div className="col-span-1">
          <Image
            className="rounded-full"
            src="https://avatars.githubusercontent.com/u/36075179?v=4"
            alt="user-image"
            height={50}
            width={50}
          />
        </div>
        <div className="col-span-11">
          <h5>Lokesh Negi</h5>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
            libero at ducimus culpa deleniti explicabo sed, odio doloremque
            obcaecati ullam in sapiente cum. In ratione rem iste ea tenetur
            reprehenderit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
