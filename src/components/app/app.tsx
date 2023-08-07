import { Footer } from '../footer/footer';
import { Gentlemen } from '../gentleman/gentlemenspecs';
import { Header } from '../header/header';
import { Info } from '../info/info';

export function App() {
  return (
    <div>
      <Header></Header>
      <Info></Info>
      <Gentlemen></Gentlemen>
      <Footer></Footer>
    </div>
  );
}
