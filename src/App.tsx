import { Toaster } from "@/components/ui/sonner";
import Flayer from "./components/flayer";
import Navbar from "./components/navbar";
import BooksSection from "./components/books-sections";
import MobileApp from "./components/mobile-app";

function App() {
  return (
    <div>
      <Toaster />
      <Navbar />
      <Flayer />
      <BooksSection />
      <MobileApp />
    </div>
  );
}

export default App;
