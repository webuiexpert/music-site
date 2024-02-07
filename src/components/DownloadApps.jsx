import React from 'react'
import Appimg from '../assets/images/App_Store.png'
import Gpayimg from '../assets/images/Google_Play.png'

function DownloadApps() {
    const downloadImg = "w-[10rem] h-[3rem] border-[2px] border-[#232a4e] rounded-[0.7rem] object-cover	"
  return (
    <div className='download'>
        <div className="download_images flex justify-between w-[100%] rounded-[5px] gap-5 mt-2">
        <img src={Gpayimg} alt="" className={downloadImg}/>
            <img src={Appimg} alt="" className={downloadImg}/>
            
        </div>

    </div>
  )
}

export default DownloadApps