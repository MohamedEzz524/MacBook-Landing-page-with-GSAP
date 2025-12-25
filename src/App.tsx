import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductViewer from './components/ProductViewer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
function App() {
  return (
    <main className="App">
      <Navbar />
      <Hero />
      <ProductViewer />
    </main>
  );
}

export default App;
