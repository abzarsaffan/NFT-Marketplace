
import Navbar from "../Navbar";
import Marketplace from '../Marketplace';
import "./topfold.css"
import TrendingNfts from '../TrendingNfts';
import InfoSection from '../InfoSection';
import Footer from "../Footer/Footer";

import './style.css';

<div styleName=""></div>




const TopFold = () => {
    
  return (
    <div>
        <Navbar></Navbar>
    <div className="topfold absolute-center">
        <div className="tf-left">
            <div className="tf-heading">
                Anytime / Anywhere <span className="heading-gradient">e-Services</span> 
            </div>
            <div className="tf-description">
                Department of Survey and Settlement<br></br>
                Government of Tamil Nadu
            </div>
            
            <div className="tf-left-infoStats">
                <div className="tf-is-infoItem absolute-center">
                    <div className="tf-infoItem-count">200K+</div>
                    <div className="tf-infoItem-label">Records</div>

                </div>
                <div className="tf-is-infoItem absolute-center">
                    <div className="tf-infoItem-count">10K+</div>
                    <div className="tf-infoItem-label">Owners</div>

                </div>
                <div className="tf-is-infoItem absolute-center">
                    <div className="tf-infoItem-count">423K+</div>
                    <div className="tf-infoItem-label">Community</div>

                </div>
            </div>
        </div>
        <div className="tf-right">
            <div className="tf-r"></div>
            <div className="tf-right-diamond">
                <div className="tf-r-diamond-item  absolute-center">
                    <img className="tf-r-diamond-img" alt="diamond-banner" src="https://4.bp.blogspot.com/-C9RO7uxF_eA/XtlUEpA3C2I/AAAAAAAA12Q/tOrCvs1H45o2U2IcfMpi5FvHS23d01JqwCLcBGAsYHQ/s1600/India_flag_with_emblem.gif"/>
                </div>
                <div className="tf-r-diamond-item absolute-center">
                    <img className="tf-r-diamond-img" alt="diamond-banner" src="https://lh3.googleusercontent.com/p/AF1QipMKbDAtulkykMxXT_xFpqNmxt5DTZZ8hVsDl_LY=w768-h768-n-o-v1"/>
                </div>
                <div className="tf-r-diamond-item absolute-center">
                    <img className="tf-r-diamond-img" alt="diamond-banner" src="https://pbs.twimg.com/profile_images/766217782115565568/I6GCj1N4_400x400.jpg"/>
                </div>
                <div className="tf-r-diamond-item absolute-center">
                    <img className="tf-r-diamond-img" alt="diamond-banner" src="https://content.jdmagicbox.com/comp/chennai/77/044p3002277/catalogue/land-administration-department-chepauk-chennai-government-organisations-2jiv2sn.jpg?clr="/>
                </div>
                
            </div>
        </div>
    </div>

   
    <Marketplace />
    <InfoSection />
    <Footer />
     </div>
  )
}

export default TopFold