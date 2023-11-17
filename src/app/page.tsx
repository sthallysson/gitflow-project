import Aside from './components/Aside/Aside';
import { Header } from './components/header';
import Main from './components/Main';

import { Footer } from '../../componente/footer';

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
