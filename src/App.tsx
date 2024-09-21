import { Toaster } from "@/components/ui/sonner";
import Flayer from "./components/flayer";
import Navbar from "./components/navbar";
import BooksSection from "./components/books-sections";
import MobileApp from "./components/mobile-app";
import Statistics from "./components/statistics";
import News from "./components/news";
import WeeklyReccomend from "./components/weekly-recommend";
import Promo_books from "./components/promo-books";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Toaster />
      <Navbar />
      <Flayer />
      <BooksSection />
      <WeeklyReccomend />
      <Promo_books />
      <MobileApp />
      <Statistics />
      <News />
      <Footer />
    </div>
  );
}

export default App;
