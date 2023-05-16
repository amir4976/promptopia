import RootLayout from "./Layout"
import Feeds from "@components/Feeds"
function Home() {
  
  return (
<section className="w-full flex-center flex-col text-center">
  <h1 className="head_text text_center">
    discover & share
  <br  className="max-md:hidden"/>
    <span className="orange_gradient text-center">AI - powered promps</span>
    
    </h1>
    <p className="desc text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae alias nihil totam quis numquam consectetur quod, corporis eum nemo labore aut amet natus qui esse perspiciatis perferendis fugit, enim dolorem!</p>



    {/* feed */}
    <Feeds/>
</section>
   
  )
}

export default Home