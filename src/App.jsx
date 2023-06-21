import Bot from "./components/Bot";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="bg-bgImg bg-no-repeat bg-center bg-cover flex flex-col h-screen">
      <Header />
      <Bot />
      <Footer />
    </div>
  );
}

export default App;
