import Header from '../Header';
import Footer from '../Footer';

import styled from 'styled-components';

function AboutUs(){
  return (
    <>
      <Header />
        <Main>
          <Section>
            <Div>
              <p>Quem somos</p>
              <strong>Rafael Longo</strong>
              <strong>Simone Alcalá</strong>
              
              <div>
                Estudantes da <br/>Driven Education
                <img src='//theme.zdassets.com/theme_assets/11147376/4a615f826ebe264e8f557023bda9bd2f9d5ef093.png'
                    alt='Driven' />
              </div>

            </Div>
          </Section>
        </Main>
      <Footer/>
    </>
  );
}

const Main = styled.main`
  width: 100vw;
  height: 100vh;
  background-image: url(https://hdwallback.net/wp-content/uploads/2018/02/Game-4k-Wallpapers-of-PC-games.jpg);
  background-size: cover;
  background-position: top;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  
`;

const Section = styled.section`
  width: 320px;
  background:rgb(242,243,244);
  border-radius: 8px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.75);
`;

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  opacity: 100%;
  color: rgb(178,34,34);
  
  p {
    font-family:  'Creepster', cursive;
    font-size: 24px;
    margin-bottom: 15px;
  }

  strong{
    font-size: 18px;
    margin-bottom: 5px;
  }

  img{
    width: 50px;
  }
  
  div{
    margin-top: 10px;
    display: flex;
    align-items: center;
    line-height: 20px;
    text-align: end;
  }
`;


export default AboutUs;