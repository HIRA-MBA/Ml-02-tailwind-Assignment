import Image from "next/image";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar"

export default function Home() {
  return (
    <div className="h-screen" >
      
 <Header></Header>
 <Navbar></Navbar>
 <div className="flex h-[60%]" >
  <div className="w-1/2 flex flex-col  justify-center items-start ">
  <h1 className=" font-bold text-[40px] ">Glam & GLow  </h1>
  
  <p className="">An example of intricate workmanship and detail, elegant necklaces and long
     and short chains form a part of our desirable collection.</p>
  <button style={{backgroundColor:'#A29875'}} className="text-white rounded-[10px] w-[288px] h-[58px] mt-[50px] ">Explore Now</button>
  </div>
  <div className="w-1/2 flex justify-center items-center pt-[100px]">
  <Image
  src={'./images/rs-group-wrap.svg'}
  alt="iamge"
  width={200}
  height={200}
  />
</div>



 </div>
</div>
  );
}