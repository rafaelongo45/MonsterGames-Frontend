import dayjs from "dayjs";
import styled from "styled-components"

function RenderFooter(){
  const currentYear = dayjs().format('YYYY');

  return <Footer> &#127279; MonsterGames {currentYear}</Footer>
}

export default RenderFooter

const Footer = styled.footer`
  width: 100%;
  height: 30px;
  background-color: var(--header-color);
  color: #c5c5c5;
  font-family: 'Creepster', cursive;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
`;