import { useState } from "react";
import uits from "../../assets/img/uits.jpg";

function SideBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const bar = document.getElementById("bar")


  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      console.log(bar);
      bar.classList.toggle("hidden")
    }
  };

  return (
    <div>
      <div className="nav xl:w-[25%] items-center xl:h-[100px] flex">
        <div className="logo xl:w-[300px] xl:h-[100px] w-[350px] flex gap-5 items-center ml-[150px]   xl:ml-[10px] md:ml-[580px]">
          <img src={uits} alt="" className="xl:w-[80px] xl:h-[80px] w-[60px] h-[60px] md:w-[80px] md:h-[80px]" />
          <h1 className="font-bold xl:text-[20px] xl:w-[250px]">UCHKURGAN IT <br /> SCHOOL</h1>
        </div>
        <div className="user xl:block hidden xl:ml-[1400px]">
          <div className="flex h-[100px] items-center gap-5 ">
            <i className='bx bx-bell text-[25px] text-[#868686]'></i>
            <i className='bx bx-user-circle text-[37px] text-[#868686]'></i>
            <div className="text mr-[10px]">
              <h2 className="text-[18px] font-bold">Otabek Xolmamatov</h2>
              <p className="text-[#868686]">O'quvchi</p>
            </div>
          </div>
        </div>
        <i className='bx bx-menu  absolute  text-[35px] xl:hidden block md:ml-[15px]' onClick={handleMenuClick}></i>
      </div>
      <hr />
    </div>
  );
}

export default SideBar;
