export default function Content({title, content, button,WrapClassName,btnposition}) {

  return (
    
    <div className={WrapClassName}>
         <h2 className="absolute top-[15%] left-[5%] text-white text-6xl text-yellow-700 font-bold">
          {title}
        </h2>
        <div className="absolute top-[40%] left-[5%] text-black text-xl w-[450px] h-[250px] line-clamp-4">
          {content}
        </div>
        <button className={`absolute top-[${btnposition}%] left-[5%] bg-orange-100 hover:bg-orange-200 rounded-lg w-60 h-50 text-lg text-yellow-600 font-bold duration-300`}>
            {button}
            </button>



    </div>
  );
}