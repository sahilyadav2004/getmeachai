
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center flex-col text-white h-[44vh] gap-5">
        <div className="font-bold text-5xl">Buy me a chai</div>
        <p>
          {" "}
          A crowdfunding for creators.Get funded by your fans and
          followers.Start Now!
        </p>
        <div>
          <button
            type="button"
            class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Start Here
          </button>
          <button
            type="button"
            class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Read More
          </button>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>
      <div className="text-white container mx-auto py-32">
        <h2 className="text-3xl font-bold text-center mb-14">
          Your Fans can buy you a chai
        </h2>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col  items-center justify-center">
            <img
              src="https://en.pimg.jp/068/243/826/1/68243826.jpg"
              width={88}
              className="rounded-3xl p-2"
            />
            <p className="font-bold text-center ">Fans want to help</p>
            <p className=" text-center">Fans are available for help</p>
          </div>
          <div className="item space-y-3 flex flex-col  items-center justify-center">
            <img
              src="https://t3.ftcdn.net/jpg/01/94/67/20/360_F_194672016_pf5HYgLlm6XlSwuL7JE4Pqvdq0RFqK7V.jpg"
              width={100}
              className="rounded-3xl p-2"
            />
            <p className="font-bold text-center ">Fans want to help</p>
            <p className="text-center">Fans are available for help</p>
          </div>
          <div className="item space-y-3 flex flex-col  items-center justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/166/166258.png"
              width={90}
              className="rounded-3xl p-2"
            />
            <p className="font-bold text-center ">Fans want to help</p>
            <p className="text-center">Fans are available for help</p>
          </div>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>
      <div className="text-white container mx-auto py-32 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-center mb-14">
          Learn more about us
        </h2>
        <div className="flex gap-5 justify-around">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/QtaorVNAwbI?si=itBBloCT1CXGiQhu"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
}
