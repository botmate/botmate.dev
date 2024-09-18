import Why from '#/components/why';
import Featutres from '#/components/features';
import Hero from '#/components/hero';
import Plugins from '#/components/plugins';
import Footer from '#/components/footer';
import FAQs from '#/components/faqs';
import GetStarted from '#/components/get-started';

function Home() {
  return (
    <>
      <Hero />
      <Featutres />
      <Plugins />
      <Why />
      <FAQs />
      <GetStarted />
      <Footer />
    </>
  );
}

export default Home;
