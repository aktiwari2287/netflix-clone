import './App.css';
import { Row } from './components/Row';
import {requests} from './requests'
export const App = () => {
  return (
    <div className="App">
      <Row title="Animated Movies" fetchUrl={requests.fetchAnimation}></Row>
      <Row title="Science-Fiction Movies" fetchUrl={requests.fetchSciFi}></Row>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}></Row>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}></Row>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}></Row>
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies}></Row>
      <Row title="Mysteries Movies" fetchUrl={requests.fetchMystery}></Row>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}></Row>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}></Row>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}></Row>
      <Row title="Documenties" fetchUrl={requests.fetchDocumentaries}></Row>
      <Row title="Western" fetchUrl={requests.fetchWestern}></Row>
      <Row title="TV Shows" fetchUrl={requests.fetchTv}></Row>

    </div>
  );
}
