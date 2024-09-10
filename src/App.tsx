import { Toaster } from "@/components/ui/sonner";
import Flayer from "./components/flayer";
import Navbar from "./components/navbar";
import BooksSection from "./components/books-sections";

function App() {
  return (
    <div>
      <Toaster />
      <Navbar />
      <Flayer />
      <BooksSection />
    </div>
  );
}

export default App;
