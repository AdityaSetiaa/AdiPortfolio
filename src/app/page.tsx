import Background from "./Component/Background";
import MainPage from "./Component/MainPage"

export default function Home() {
  return (
    <div className="w-full h-full font-mono">   
    <Background/>    
      <MainPage/>
    </div>
  );
}
