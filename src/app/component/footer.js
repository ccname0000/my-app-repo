import { FaFacebook } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
export default function Footer(){

    return (
        <div>
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
    );

} 