import styled from 'styled-components';
import {ITypoProps} from './interface/Itypo';
//import { Title } from "./styles/typo.styles";

interface IProps {
  primary?: boolean;
}

const Button = styled.button<IProps>`
  color: ${(props) => (props.primary ? 'white' : 'palevioletred')};
`;

const Typo: React.FC<ITypoProps> = (props) => {
  return (
    <div>
      <h1>{props.data}</h1>
      <Button primary>hqo</Button>
    </div>
  );
};

export default Typo;
