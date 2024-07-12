import {
  ContentContainer,
  IconContainer,
  InfoBorder,
  InfoContainer,
  OrderInfo,
  SuccessContainer,
  TextContainer,
} from './styles';

import motoBoyImg from '../../assets/motoBoy_Illustration.svg';
import { Clock, CurrencyDollar, MapPin } from 'phosphor-react';
import { useNavigate, useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { OrderProps, OrdersContext } from '../../contexts/OrdersProvider';

export default function Success() {
  const navigate = useNavigate();

  const { getOrderById } = useContext(OrdersContext);
  const { orderId } = useParams()

  const [selectedOrder, setSelectedOrder] = useState<OrderProps>({} as OrderProps);

  useEffect(() => {
    if (!orderId) {
      alert('Pedido não encontrado');
      navigate('/');
    }

    const order = getOrderById(Number(orderId));
    setSelectedOrder(order!);

    console.log(order);
    console.log(order?.address?.street);
  }, []);

  const paymentMethod: { [key: string]: string } = {
    creditCard: 'Cartão de Crédito',
    debitCard: 'Cartão de Débito',
    money: 'Dinheiro',
  }

  return (
    <SuccessContainer>
      <TextContainer>
        <h2>Uhu! Pedido confirmado</h2>

        <p>Agora é só aguardar que logo o café chegará até você</p>
      </TextContainer>

      <ContentContainer>
        <InfoContainer>
          <InfoBorder />
          <OrderInfo>
            <IconContainer bgColor='purple'>
              <MapPin size={16} weight='fill' color='#fff' />
            </IconContainer>
            <div>
              <span>Entrega em </span>
              <strong>Rua {selectedOrder?.address?.street}, {selectedOrder?.address?.number}</strong>
              <br />
              <span>{selectedOrder?.address?.neighborhood}, {selectedOrder?.address?.city} - {selectedOrder?.address?.state}</span>
            </div>
          </OrderInfo>

          <OrderInfo>
            <IconContainer bgColor='yellow'>
              <Clock size={16} weight='fill' color='#fff' />
            </IconContainer>
            <div>
              <span>Previsão de entrega</span>
              <br />
              <strong>20 min - 30 min</strong>
            </div>
          </OrderInfo>

          <OrderInfo>
            <IconContainer bgColor='yellow-dark'>
              <CurrencyDollar size={16} weight='fill' color='#fff' />
            </IconContainer>
            <div>
              <span>Pagamento na entrega</span>
              <br />
              <strong>{paymentMethod[selectedOrder?.paymentMethod]}</strong>
            </div>
          </OrderInfo>
        </InfoContainer>

        <img src={motoBoyImg} />
      </ContentContainer>
    </SuccessContainer>
  )
}
