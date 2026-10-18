import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PlaceholderSection from './components/PlaceholderSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />

      <main id="main-content">
        <Hero />

        {/* Journey placeholder — replace with real content in future session */}
        <PlaceholderSection
          id="journey"
          title="My Journey"
          subtitle="Timelines, projects, and milestones — this section is being crafted and will be available soon."
          accentColor="blue"
        />

        {/* About placeholder */}
        <PlaceholderSection
          id="about"
          title="About Me"
          subtitle="A deeper look into who I am, what drives me, and the things I care about. Coming soon."
          accentColor="violet"
        />

        {/* Contact placeholder */}
        <PlaceholderSection
          id="contact"
          title="Get in Touch"
          subtitle="Have an idea, a question, or just want to say hi? A full contact form is on its way."
          accentColor="blue"
        />
      </main>

      <Footer />
    </>
  );
}

export default App;
