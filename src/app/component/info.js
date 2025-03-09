export default function Info({wrapClassName}) {

    return (
        <div className={wrapClassName}>
        <div className="absolute w-[200px] h-[200px] bg-amber-200 ml-[820px] mt-[520px]"></div>
        <div className="absolute  ml-[1050px] mt-[520px] font-bold text-4xl text-yellow-700">相關文件</div>
        <div className="absolute ml-[1050px] mt-[570px] w-[320px] h-[350px] font-bold">婦女協會致力於推動性別平等，提供女性支持與發展的平台，促進她們在職場、家庭和社會中的全面發展，並參與公益事業。</div>
        <button className="absolute ml-[1050px] mt-[650px] border-4 border-yellow-700 bg-white hover:bg-yellow-200 rounded-lg w-40 h-50 text-xl text-yellow-700 font-bold duration-300">下載法規</button>
        </div>
    )


}