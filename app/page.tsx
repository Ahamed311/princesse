import HeroSection from './components/HeroSection';
import NoticeSection from './components/NoticeSection';
import MessageSection from './components/MessageSection';
import GallerySection from './components/GallerySection';
import MusicSection from './components/MusicSection';
import Footer from './components/Footer';
import ScrollIndicator from './components/ScrollIndicator';

export default function Home() {
  return (
    <>
      <ScrollIndicator />
      <main className="min-h-screen">
        <HeroSection />
        <NoticeSection />
        <MessageSection />
        <GallerySection />
        <MusicSection />
        <Footer />
      </main>
    </>
  );
}
