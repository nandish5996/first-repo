import './new2.css'
import img1 from '../assets/logo.jpeg'
function New2() {


  return (
    <>
     <div className="main">
        <div className="top">
            <div className='top1'><img src={img1} />
            </div>
            <div className='top2'>Fan wishes</div>
            <div className='top3'>
                <div className='bar'>Promote My Business</div>
            </div>
        </div>
        <div className="bottom">
            <div className="bottomb">
                <div className='b1'>Product</div>
                <div className='b2'>
                    <div className='a1'><input type="checkbox" ></input>Personalised Video msg</div>
                     <div className='a2'><input type="checkbox" ></input>Meeet & Greet</div>
                      <div className='a3'><input type="checkbox" ></input>Video Call</div>
                       <div className='a4'><input type="checkbox" ></input>Social media Pro</div>
                </div>
                <div className='b3'>Sort By</div>
                <div className='b4'>
                    <div className='c1'><input type="radio" ></input>Popular</div>
                     <div className='c2'><input type="radio" ></input>Lowest_Price</div>
                      <div className='c3'><input type="radio" ></input>Highest_Price</div>
                       
                </div>
            </div>
        </div>
     </div>
 </>
  )
}
export default New2