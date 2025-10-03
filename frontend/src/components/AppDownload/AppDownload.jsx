import { assets } from "../../assets/assets"


const AppDownload = () => {
  return (
    <div id="app-download" className="px-6 m-auto my-[100px] text-[max(3vw,20px)] text-center font-medium">
        <p>For Better Experience Download <br /> UrbanFeast App</p>
        <div className="flex gap-6 mt-10 justify-center">
            <img className="w-[max(30vw,120px)] max-w-[180px] translate-0.5 cursor-pointer hover:scale-110" src={assets.play_store} alt="" />
            <img className="w-[max(30vw,120px)] max-w-[180px] translate-0.5 cursor-pointer hover:scale-110" src={assets.app_store} alr="" />
        </div>
    </div>
  )
}

export default AppDownload
