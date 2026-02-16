import './new.css'
import img1 from '../assets/salim.png'
import img2 from '../assets/sul.png'
import img3 from '../assets/dj.png'
import img4 from '../assets/rahul.png'
import img5 from '../assets/search.png'
import img6 from '../assets/3097294.png'
function New() {


  return (
    <>
      <div className="main">
      <div className="top">
         <div className="tl">
          <div className="t1">Brand Enquiry</div>
        <div className="t2">Our Brand Endorsements</div>
        <div className="t3">Our Service</div>
        <div className="t4">Blogs</div>
        </div>
         <div className="tr">
          <div className="t5">Track Order</div>
        <div className="t6">Enter Celebrity Name
          <div className="searchb"><img src={img5} /></div>
        </div>
        <div className="t7">Enroll As A Celebrity</div>
         <div className="t8 ">Signup/Login</div>
         </div>
        
        
      </div>
      <div className='middle'>
        <div className='middlet'>
          <div className='middlet1'>ALL</div>
          <div className='middlet2'>
            <div className='let1'>Home</div>
            <div className='let2'><img src={img6} /></div>
            <div className='let3'>Celebrities</div>
          </div> 
        </div>
        <div className='middleb'>
          <div className='b1'><button>All</button></div>
          <div className='b2'>
            <button>Author</button></div>
          <div className='b3'><button>Movie Star</button></div>
          <div className='b4'><button>Tv Star</button></div>
          <div className='b5'><button>Music World</button></div>
          <div className='b6'><button>Influencer</button></div>
          <div className='b7'><button>More</button></div>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom1">
          <div className='bot1'>
          <div className="bottom1t"><img src={img1} />
            <div className='price1'>14999</div>
            </div>
          </div>
          <div className="bottom1b">Salim Merchant Music World</div>
        </div>
        <div className="bottom2">
          <div className='bot2'>
          <div className="bottom2t"><img src={img2} />
            <div className='price2'>12900</div>
           
          </div>
          <div className="bottom2b">Sulaiman Merchant Musical World</div>
           </div>
        </div>
        <div className="bottom3">
          <div className='bot3'>
          <div className="bottom3t">
            <img src={img3}  />
            <div className='price3'>49900</div>
          </div>
          <div className="bottom3b">DJ Aqeel Musical World</div>
          </div>
        </div>
        <div className="bottom4">
          <div className='bot4'>
          <div className="bottom4t"><img src={img4} />
            <div className='price4'>449</div>
          </div>
          <div className="bottom4b">Rahul Baweja Music World</div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}
export default New