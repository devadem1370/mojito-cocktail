import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <div className='bg-red-500'>App</div>
  )
}

export default App