import Image from "next/image";
import Nav from "./component/Nav";
import Content from "./component/content";
import Banner from "./component/banner";
import Info from "./component/info";
import Footer from "./component/footer";

export default function Home() {
  const navItems = [ "認識數位性別暴力", "求助路徑", "培訓資源", "里程碑", "關於我們" ];
  const content1 = [ "數位型別暴力防治法", "我們需要認識數位性別暴力的存在和影響 並採取行動來防治和打擊這種行為。這包括了解如何保護自己的數位隱私和安全，如何防止數位性別暴力以及如何支持和幫助那些受到這種暴力的人。", "認識數位性別暴力" ];
  const content2 = [ "婦女權益促進委員會", "婦女協會致力於推動性別平等，為女性提供支持與發展的平台。協會通過舉辦講座、工作坊和公益活動，幫助女性提升自信、增強專業技能，並促進她們在職場、家庭和社會中的全面發展。活動內容涵蓋女性健康、法律權益、職場挑戰等方面，邀請專家分享知識", "更多關於我們" ];
  const content3 = [ "法規與組織", "婦女協會在推動性別平等與女性權益方面，經常涉及許多法規議題。首先，許多國家和地區的婦女協會積極倡導修改或完善關於性別平等的法律，特別是在勞動法、家庭法和反家庭暴力法等領域。例如，婦女協會通常會關注勞動市場中的性別歧視問題，並呼籲政府制定和執行更加嚴格的法律。", "其他相關法律" ];
  const content4 = ["尋求協助", "我們需要認識數位性別暴力的存在和影響 並採取行動來防治和打擊這種行為。這包括了解如何保護自己的數位隱私和安全，如何防止數位性別暴力以及如何支持和幫助那些受到這種暴力的人。", "了解受害者求助路徑" ];
  return (
    <div>
      <Nav navItems={navItems}/>

      <div className="relative w-[1536px] h-[350px]">
        <Image
          src="/imgs/Digital Gender Violence Drawing.png"
          alt="Next.js logo" 
          layout="fill"
          className="flex"
        />
        <Banner title={content1[0]} content={content1[1]} button={content1[2]}/>
        
      </div>
      <div className="relative w-[1536px] h-[1000px]  bg-white ">
        <div className="absolute w-[500px] h-[350px]">
          <Image
            src="/imgs/Women Right Abstract Geometric.png"
            alt="Women Right Abstract Geometric"
            width={500}
            height={350}
            className="flex mt-[150px] ml-[200px]"
          />
        </div>
        <Content title={content2[0]} content={content2[1]} button={content2[2]} WrapClassName="absolute w-[700px] h-[400px] ml-[800px] mt-[50px]" btnposition={85}/>
        <Content title={content3[0]} content={content3[1]} button={content3[2]} WrapClassName="absolute w-[700px] h-[400px] ml-[200px] mt-[500px]" btnposition={85}/>
        <Info wrapClassName=""/>
        <br/>
        <Info wrapClassName="mt-[200px]"/>
      </div>

      <div className="relative w-[1536px] h-[400px]">
        <Image
          src="/imgs/长发女孩背影提案.png"
          alt="long-hair-girl logo" 
          layout="fill"
          className="flex"
        />
        <Content title={content4[0]} content={content4[1]} button={content4[2]} WrapClassName="absolute w-[700px] h-[400px] ml-[800px]" btnposition={75}/>
      </div>

      <div className="relative w-[1536px] h-[200px] bg-gray-400">
      <div className="absolute top-[10%] left-[10%] text-white text-3xl font-bold">婦女權益促進委員會</div>
      <Footer/>

      </div>

      
      
      
    </div>
  );
}
