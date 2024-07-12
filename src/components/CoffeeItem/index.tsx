import { ShoppingCart } from 'phosphor-react';
import { useContext, useEffect, useState } from 'react';
import { OrdersContext } from '../../contexts/OrdersProvider';
import { ActionsContainer, AmountContainer, BuyContainer, CoffeeContainer, CoffeeDescription, CoffeeTitle, IconButton, MinusIcon, PlusIcon, PriceContainer, PriceText, ShopButton, TagItem, TagsContainer } from './styles'
import CustomModal from '../CustomModal';
import { useNavigate } from 'react-router-dom';

export interface CoffeeItemProps {
  id: number;
  title: string;
  tags: string[];
  description: string;
  srcImg: string;
  price: string;
  amount: number;
}

export interface CoffeeComponentProps {
  item: CoffeeItemProps;
}

export default function CoffeeItem({ item }: CoffeeComponentProps) {
  const navigate = useNavigate();

  const [order, setOrder] = useState(item);
  const [amount, setAmount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { id, title, description, price, srcImg, tags } = order;

  const { cart, addCoffeeToCart } = useContext(OrdersContext);

  function handleIncrementAmount() {
    setAmount(prevAmount => prevAmount + 1);
    setOrder(prevOrder => ({ ...prevOrder, amount: prevOrder.amount + 1 }));
  }

  function handleDecrementAmount() {
    setAmount(prevAmount => prevAmount > 0 ? prevAmount - 1 : 0);
    setOrder(prevOrder => ({ ...prevOrder, amount: prevOrder.amount > 0 ? prevOrder.amount - 1 : 0 }));
  }

  const handleGoToCart = () => {
    setIsModalOpen(false);
    navigate('/checkout');
  };

  function handleAddCoffeeToCart() {
    if (amount === 0) return;

    addCoffeeToCart(order);
    setIsModalOpen(true);
  }

  useEffect(() => {
    const cartItem = cart.find(item => item.id === id);

    if (cartItem) {
      setOrder(cartItem);
      setAmount(cartItem.amount);
    }
  }, [cart, id]);

  return (
    <CoffeeContainer>
      <img src={srcImg} alt={title} />

      <TagsContainer>
        {tags.map(item => (
          <TagItem key={item}>
            <span>{item}</span>
          </TagItem>
        ))}
      </TagsContainer>

      <CoffeeTitle>{title}</CoffeeTitle>

      <CoffeeDescription>
        {description}
      </CoffeeDescription>

      <BuyContainer>
        <PriceContainer>
          <span>R$</span>

          <PriceText>{price}</PriceText>
        </PriceContainer>

        <ActionsContainer>
          <AmountContainer>
            <IconButton onClick={() => handleDecrementAmount()}>
              <MinusIcon weight='fill' size={14} />
            </IconButton>
            <span>
              {amount}
            </span>
            <IconButton onClick={() => handleIncrementAmount()}>
              <PlusIcon weight='fill' size={14} />
            </IconButton>
          </AmountContainer>

          <ShopButton onClick={handleAddCoffeeToCart}>
            <ShoppingCart weight='fill' color='#fff' size={23} />
          </ShopButton>
        </ActionsContainer>
      </BuyContainer>

      <CustomModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        goAction={handleGoToCart}
        goActionText='Ir para o Carrinho'
        title='Produto adicionado ao carrinho!'
        description="Deseja finalizar a compra ou continuar comprando?"
        cancelText='Continuar Comprando'
      />
    </CoffeeContainer>
  )
}
