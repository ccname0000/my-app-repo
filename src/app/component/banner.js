export default function Banner({title, content, button}) {

    return (
        <div>
        <div className="absolute w-[200px] h-[200px] bg-amber-200 ml-[820px] mt-[520px]"></div>
        <h2 className="absolute top-[15%] left-[5%]  text-6xl text-white font-bold">
          {title}
        </h2>
        <div className="absolute top-[40%] left-[5%] text-white text-xl w-[450px] h-[250px] line-clamp-4">
          {content}
        </div>
        <button className={`absolute top-[80%] left-[5%] bg-orange-100 hover:bg-orange-200 rounded-lg w-60 h-50 text-lg text-yellow-600 font-bold duration-300`}>
            {button}
            </button>
            </div>
    );
}