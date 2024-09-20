import { Toaster } from "@/components/ui/sonner";
import Flayer from "./components/flayer";
import Navbar from "./components/navbar";
import BooksSection from "./components/books-sections";
import MobileApp from "./components/mobile-app";
import Statistics from "./components/statistics";
import News from "./components/news";
import WeeklyReccomend from "./components/weekly-recommend";

function App() {
  return (
    <div>
      <Toaster />
      <Navbar />
      <Flayer />
      <BooksSection />
      <WeeklyReccomend />
      <MobileApp />
      <Statistics />
      <News />
    </div>
  );
}

export default App;
