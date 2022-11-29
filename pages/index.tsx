import Logo from 'src/common/components/logo/Logo';
import { HomeStyles } from 'styles/HomeStyles';

export default function Home() {
  return (
    <HomeStyles>
      <>
        <div className="container">
          <div className="inner-container">
            <h1>My startup progress</h1>
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
