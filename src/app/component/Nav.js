export default function Nav({navItems}) {
    
  return (
    <div className="relative bg-amber-100">
        <div className="absolute  flex mt-5 ml-20 text-amber-500 font-bold text-2xl">
          logo
        </div>

        <div className="relative flex justify-end font-bold">
            {navItems.map((item, index) => (
                <button key={index} className="p-8 hover:bg-amber-200 text-yellow-600 duration-300">{item}</button>
            ))}
        </div>

    </div>
  );
}