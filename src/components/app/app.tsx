import { Footer } from '../footer/footer';
import { Gentleman } from '../gentleman/gentlemanspecs';
import { Header } from '../header/header';
import { Info } from '../info/info';

export function App() {
  return (
    <div>
      <Header></Header>
      <Info></Info>
      <Gentleman></Gentleman>
      <Footer></Footer>
    </div>
  );
}
