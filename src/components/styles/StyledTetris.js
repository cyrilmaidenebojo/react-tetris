import styled from 'styled-components';
import bgImage from '../../img/bg.jpg';

export const StyledTetrisWrapper = styled.div`
  width:100vw;
  height:100vh;
  background:#000;
  background-size:cover;
  background:url(${bgImage}) #000;
  overflow:hidden;
`;

export const StyledTetris = styled.div`
  display:grid;
  grid-template-columns:2fr 1.2fr;
  align-items:center;
  padding:2rem;
  margin:0 auto;
  max-width:800px;

  aside {
    display:grid;
    align-self:start;
  }
`;
