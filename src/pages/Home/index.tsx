import { Clock, Coffee, Package, ShoppingCart } from 'phosphor-react';
import {
  HomeContainer,
  IntroContainer,
  Title,
  Subtitle,
  MainText,
  TopicsItem,
  IconContainer,
  TopicsContainer,
  ContentContainer,
  CoffeeSection,
  ContentIntro
} from './styles';

import blurBg from '../../assets/Background.svg';
import mainImg from '../../assets/Imagem.svg';
import CoffeeItem from '../../components/CoffeeItem';
import coffees from '../../mockapi/coffees';

export function Home() {
  return (
    <HomeContainer>
      <IntroContainer>
        <ContentIntro>
          <MainText>
            <Title>
              Encontre o café perfeito para qualquer hora do dia
            </Title>

            <Subtitle>
              Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
            </Subtitle>

            <TopicsContainer>
              <div>
                <TopicsItem>
                  <IconContainer bgColor='yellow-dark'>
                    <ShoppingCart size={16} weight='fill' color='#fff' />
                  </IconContainer>
                  <span>
                    Compra simples e segura
                  </span>
                </TopicsItem>

                <TopicsItem>
                  <IconContainer bgColor='yellow'>
                    <Clock size={16} weight='fill' color='#fff' />
                  </IconContainer>
                  <span>
                    Entrega rápida e rastreada
                  </span>
                </TopicsItem>
              </div>

              <div>
                <TopicsItem>
                  <IconContainer bgColor='base-text'>
                    <Package size={16} weight='fill' color='#fff' />
                  </IconContainer>
                  <span>
                    Embalagem mantém o café intacto
                  </span>
                </TopicsItem>

                <TopicsItem>
                  <IconContainer bgColor='purple'>
                    <Coffee size={16} weight='fill' color='#fff' />
                  </IconContainer>
                  <span>
                    O café chega fresquinho até você
                  </span>
                </TopicsItem>
              </div>
            </TopicsContainer>
          </MainText>
          <img src={mainImg} alt="" />
        </ContentIntro>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        >
          <filter id="blur">
            <feGaussianBlur stdDeviation="5" />
          </filter>
          <image xlinkHref={blurBg} width="100%" height="100%" filter="url(#blur)" />
        </svg>
      </IntroContainer>

      <ContentContainer>
        <h3>Nossos cafés</h3>

        <CoffeeSection>
          {coffees.map(item => (
            <CoffeeItem key={item.id} item={item} />
          ))}
        </CoffeeSection>
      </ContentContainer>
    </HomeContainer>
  )
}
