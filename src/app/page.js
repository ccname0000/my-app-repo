import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
export default function Home() {
  
  return (
    <div>
      <div className="relative bg-amber-100 h-20 w-[1536px]">
        <div className="absolute  flex mt-5 ml-20 text-amber-500 font-bold text-2xl">
          logo
        </div>

        <div className="relative flex justify-end font-bold">
          <button className="p-8 hover:bg-amber-200 text-yellow-600 duration-300">認識數位性別暴力</button>
          <button className="p-8 hover:bg-amber-200 text-yellow-600 duration-300">求助路徑</button>
          <button className="p-8 hover:bg-amber-200 text-yellow-600 duration-300">培訓資源</button>
          <button className="p-8 hover:bg-amber-200 text-yellow-600 duration-300">里程碑</button>
          <button className="p-8 hover:bg-amber-200 text-yellow-600 duration-300">關於我們</button>
        </div>

      </div>

      <div className="relative w-[1536px] h-[350px]">
        <Image
          src="/imgs/Digital Gender Violence Drawing.png"
          alt="Next.js logo" 
          layout="fill"
          className="flex"
        />

        <h2 className="absolute top-[15%] left-[5%] text-white text-6xl font-bold">
          數位型別暴力防治法
        </h2>
        <div className="absolute top-[40%] left-[5%] text-white text-xl w-[450px] h-[250px] line-clamp-4">
          我們需要認識數位性別暴力的存在和影響 並採取行動來防治和打擊這種行為。這包括了解如何保護自己的數位隱私和安全，如何防止數位性別暴力以及如何支持和幫助那些受到這種暴力的人。
        </div>
        <button className="absolute top-[75%] left-[5%] bg-orange-100 hover:bg-orange-200 rounded-lg w-60 h-50 text-lg text-yellow-600 font-bold duration-300">認識數位性別暴力</button>

        
      </div>
      <div className="relative w-[1536px] h-[1100px]  bg-white ">
        <div className="absolute w-[500px] h-[350px]">
          <Image
            src="/imgs/Women Right Abstract Geometric.png"
            alt="Women Right Abstract Geometric"
            width={500}
            height={350}
            className="flex mt-[150px] ml-[200px]"
          />
        </div>
        <div className="absolute ml-[820px] mt-[70px] font-bold text-6xl text-yellow-700">婦女權益促進委員會</div>
        <div className="absolute ml-[820px] mt-[170px]  w-[600px] h-[250px]  text-lg font-bold">婦女協會致力於推動性別平等，為女性提供支持與發展的平台。協會通過舉辦講座、工作坊和公益活動，幫助女性提升自信、增強專業技能，並促進她們在職場、家庭和社會中的全面發展。活動內容涵蓋女性健康、法律權益、職場挑戰等方面，邀請專家分享知識，協助女性應對各種困難。協會也積極參與公益事業，關愛弱勢群體，尤其是貧困婦女和兒童，推動社會關注女性問題。婦女協會的目標是創建一個平等、包容的社會環境，讓每位女性都能夠實現自己的價值，並為社會的發展作出貢獻。</div>
        <button className="absolute ml-[820px] mt-[400px] bg-yellow-800 hover:bg-yellow-600 rounded-lg w-40 h-50 text-lg text-orange-100 font-bold duration-300">更多關於我們</button>
        <div className="absolute ml-[150px] mt-[550px] font-bold text-7xl text-yellow-700">法規與組織</div>
        <div className="absolute ml-[150px] mt-[650px]  w-[600px] h-[250px]  text-lg font-bold">婦女協會在推動性別平等與女性權益方面，經常涉及許多法規議題。首先，許多國家和地區的婦女協會積極倡導修改或完善關於性別平等的法律，特別是在勞動法、家庭法和反家庭暴力法等領域。例如，婦女協會通常會關注勞動市場中的性別歧視問題，並呼籲政府制定和執行更加嚴格的法律，以保障女性在工作場所中的平等待遇，消除性別薪資差距。另一方面，婦女協會也會推動家庭法改革，強調女性在離婚、子女撫養等法律事務中的平等權利，確保女性在家庭關係中的法律地位。</div>
        <button className="absolute ml-[150px] mt-[900px] bg-yellow-800 hover:bg-yellow-600 rounded-lg w-40 h-50 text-xl text-orange-100 font-bold duration-300">其他相關法律</button>

        <div className="absolute w-[200px] h-[200px] bg-amber-200 ml-[820px] mt-[520px]"></div>
        <div className="absolute w-[200px] h-[200px] bg-amber-200 ml-[820px] mt-[750px]"></div>
        
        <div className="absolute ml-[1050px] mt-[520px] font-bold text-4xl text-yellow-700">相關文件</div>
        <div className="absolute ml-[1050px] mt-[570px] w-[320px] h-[350px] font-bold">婦女協會致力於推動性別平等，提供女性支持與發展的平台，促進她們在職場、家庭和社會中的全面發展，並參與公益事業。</div>
        <button className="absolute ml-[1050px] mt-[650px] border-4 border-yellow-700 bg-white hover:bg-yellow-200 rounded-lg w-40 h-50 text-xl text-yellow-700 font-bold duration-300">下載法規</button>
        <div className="absolute ml-[1050px] mt-[750px] font-bold text-4xl text-yellow-700">相關文件</div>
        <div className="absolute ml-[1050px] mt-[800px] w-[320px] h-[350px] font-bold">婦女協會致力於推動性別平等，提供女性支持與發展的平台，促進她們在職場、家庭和社會中的全面發展，並參與公益事業。</div>
        <button className="absolute  ml-[1050px] mt-[880px] border-4 border-yellow-700 bg-white hover:bg-yellow-200 rounded-lg w-40 h-50 text-xl text-yellow-700 font-bold duration-300">前往網站</button>
      </div>

      <div className="relative w-[1536px] h-[400px]">
        <Image
          src="/imgs/长发女孩背影提案.png"
          alt="long-hair-girl logo" 
          layout="fill"
          className="flex"
        />
        <h2 className="absolute top-[15%] left-[55%] text-yellow-700 text-6xl font-bold">
          尋求協助
        </h2>

        <div className="absolute top-[40%] left-[55%] font-bold text-xl w-[450px] h-[250px] line-clamp-4">
        我們需要認識數位性別暴力的存在和影響 並採取行動來防治和打擊這種行為。這包括了解如何保護自己的數位隱私和安全，如何防止數位性別暴力以及如何支持和幫助那些受到這種暴力的人。
        </div>
        <button className="absolute top-[75%] left-[55%] bg-yellow-800 hover:bg-yellow-600 rounded-lg w-60 h-50 text-xl text-orange-100 font-bold duration-300">了解受害者求助路徑</button>
        
      </div>

      <div className="relative w-[1536px] h-[200px] bg-gray-400">
      <div className="absolute top-[10%] left-[10%] text-white text-3xl font-bold">婦女權益促進委員會</div>
      <div className="absolute top-[35%] left-[10%] text-white font-bold">
        10058<br/>台北市中正區杭州南路一段15號9樓<br/><br/>(02) 2371-2100
        </div>

        <div className="absolute top-[10%] left-[40%] text-white font-bold text-lg">
          首頁<br/><br/>認識數位性別暴力<br/><br/>求助途徑
          </div>

          <div className="absolute top-[10%] left-[60%] text-white font-bold text-lg">
          培訓資源<br/><br/>里程碑<br/><br/>關於我們
          </div>

          <div className="absolute top-[10%] left-[75%] text-white font-bold text-xl">Follow us </div>

          <div className="absolute flex top-[30%] left-[75%] space-x-4">
          <FaFacebook size={30} color="white"/><IoLogoLinkedin size={30} color="white"/><IoLogoInstagram size={30} color="white"/>
          </div>

      </div>

      
      
      
    </div>
  );
}
