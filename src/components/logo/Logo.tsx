import { LogoStyles } from './LogoStyles';

const Logo = (): JSX.Element => {
  return (
    <LogoStyles>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot-white"></div>
    </LogoStyles>
  );
};

export default Logo;
