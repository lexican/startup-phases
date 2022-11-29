import Logo from 'src/common/components/logo/Logo';
import Phase from 'src/common/components/phase/Phase';
import { HomeStyles } from 'styles/HomeStyles';

export default function Home() {
  return (
    <HomeStyles>
      <>
        <div className="container">
          <div className="inner-container">
            <h1>My startup progress</h1>
            <Phase isCompleted={false} phaseNumber={1} title="Setup" />
          </div>
        </div>
        <div className="footer">
          <h2>AUDITION ASSIGNMENT</h2>
          <Logo />
        </div>
      </>
    </HomeStyles>
  );
}
