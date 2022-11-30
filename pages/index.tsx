import Logo from 'src/components/logo/Logo';
import PhaseList from 'src/components/phase-list/PhaseList';
import RandomFact from 'src/components/random-fact/RandomFact';
import { HomeStyles } from 'styles/HomeStyles';

export default function Home() {
  return (
    <HomeStyles>
      <RandomFact />
      <div className="container">
        <div className="inner-container">
          <h1>My startup progress</h1>
          <PhaseList />
        </div>
      </div>
      <div className="footer">
        <h2>AUDITION ASSIGNMENT</h2>
        <Logo />
      </div>
    </HomeStyles>
  );
}
