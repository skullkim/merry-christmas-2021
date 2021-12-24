
import Background from "./components/Background";
import Tree from "./components/Tree";
import Gift from "./components/Gift";
import Music from "./components/Music";

function App() {
  return (
   <>
     <Background>
       <Tree />
       <Gift />
       <Music />
     </Background>
   </>
  );
}

export default App;
