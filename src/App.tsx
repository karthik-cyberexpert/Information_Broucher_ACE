import { Header } from './components/Header';
import { ImageSlider } from './components/ImageSlider';
import { BottomMenu } from './components/BottomMenu';

function App() {
  return (
    <div className="min-h-screen bg-[#0f0f11] text-white overflow-hidden relative selection:bg-blue-500/30">

      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px] animation-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px] animation-pulse delay-1000"></div>
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[30%] h-[30%] bg-white/5 rounded-full blur-[100px]"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-between min-h-screen w-full py-8 md:py-12 px-4 md:px-6 gap-4 md:gap-8">
        <div className="w-full flex justify-center">
          <Header />
        </div>

        <main className="w-full flex-grow flex items-center justify-center max-w-7xl mx-auto">
          <ImageSlider />
        </main>

        <div className="w-full flex justify-center">
          <BottomMenu />
        </div>
      </div>
    </div>
  );
}

export default App;
