import Why from '#/components/why';
import Featutres from '#/components/features';
import Hero from '#/components/hero';
import Plugins from '#/components/plugins';
import Footer from '#/components/footer';
import FAQs from '#/components/faqs';
import GetStarted from '#/components/get-started';
import Header from '#/components/header';

function Home() {
  return (
    <div className="overflow-hidden">
      {/* <Header /> */}
      <Hero />
      <Featutres />
      <Plugins />
      <Why />
      <FAQs />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default Home;
