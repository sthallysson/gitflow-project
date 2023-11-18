import Aside from './components/Aside/Aside';
import { Footer } from './components/Footer/footer';
import { Header } from './components/header';
import Main from './components/Main';

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <Aside />
      <Footer />
    </>
  );
}
