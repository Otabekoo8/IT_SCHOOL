
import { NavLink } from "react-router-dom";

function Navbar() {
  return (



    <div id="bar" className="z-5 xl:block hidden">
      <div>
      <div className="grid gap-5 h-full  bg-[#fff]">
      <NavLink to="/kirish" className="text-[#000] flex items-center gap-4 z-10 w-[320px] h-[40px] pl-[25px] font-bold text-[19px] hover:bg-[#ffb62f33] hover:text-[#ffbc3e]">
      <i className='bx bx-home-alt xl:text-[25px]'></i>
        Bosh sahifa</NavLink>
      <NavLink to="/mening-kurslarim" className="text-[#000] flex items-center gap-4 z-10 w-[320px] h-[40px] pl-[25px] font-bold text-[19px] hover:bg-[#ffb62f33] hover:text-[#ffbc3e]">
      <i className='bx bx-code-block text-[25px]'></i>
        Mening kurslarim</NavLink>
      <NavLink to="/barcha-kurslar" className="text-[#000] flex items-center gap-4 z-10 w-[320px] h-[40px] pl-[25px] font-bold text-[19px] hover:bg-[#ffb62f33] hover:text-[#ffbc3e]">
      <i className='bx bxs-credit-card-front text-[25px]'></i>
        Barcha kurslar</NavLink>
      <NavLink to="/videolar" className="text-[#000] flex items-center gap-4 z-10 w-[320px] h-[40px] pl-[25px] font-bold text-[19px] hover:bg-[#ffb62f33] hover:text-[#ffbc3e]">
      <i className='bx bxs-videos text-[25px]'></i>
        Videolar</NavLink>
      <NavLink to="/sertifikat" className="text-[#000] flex items-center gap-4 z-10 w-[320px] h-[40px] pl-[25px] font-bold text-[19px] hover:bg-[#ffb62f33] hover:text-[#ffbc3e]">
      <i className='bx bx-certification text-[25px]'></i>
        Sertifikatlarim</NavLink>
        <div className="flex h-[100px] items-center gap-5 pl-[25px] xl:hidden block">
            {/* <i className='bx bx-bell text-[25px] text-[#868686]'></i> */}
            <i className='bx bx-user-circle text-[25px] text-[#868686]'></i>
            <div className="text mr-[10px]">
              <h2 className="text-[18px] font-bold">Otabek Xolmamatov</h2>
              <p className="text-[#868686]">O'quvchi</p>
            </div>
          </div>
      <NavLink to="/" className="text-[#000] flex items-center gap-4 z-10 w-[320px] h-[60px] mt-[380px] pl-[25px] font-bold text-[19px] ">
      <i className='bx bx-log-in text-[25px]'></i>
        <h1 className="text-[red]">Chiqish</h1></NavLink>
      </div>
      </div>
    </div>

  )
}

export default Navbar