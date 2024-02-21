import Background from './Components/Backgound'
import Foreground from './Components/Foreground'


const page = () => {
  return (
    <>
    <div className="w-full h-screen bg-zinc-800 relative">
     <Background/>
     <Foreground/>
     
    </div>
    </>
  )
}

export default page