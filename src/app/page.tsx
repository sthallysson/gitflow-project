import styles from './page.module.css';
import { Footer } from '../../componente/footer';
import Section from './components/Section/Section';
import { Header } from './components/header';

export default function Home() {
  return (
    <Header />
    <Section />
    <Footer />
  );
}
