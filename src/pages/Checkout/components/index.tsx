import { Trash } from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'
import { CoffeeComponentProps } from '../../../components/CoffeeItem'
import { ActionsContainer, AmountContainer, IconButton, MinusIcon, PlusIcon } from '../../../components/CoffeeItem/styles'
import { OrdersContext } from '../../../contexts/OrdersProvider'
import { CoffeeItemOrder, BaseButton } from './styles'

export default function CoffeeCartItem({ item }: CoffeeComponentProps) {
  const [order, setOrder] = useState(item);
  const [amount, setAmount] = useState(1);

  const { cart, addCoffeeToCart, removeCoffeeFromCart } = useContext(OrdersContext);

  function handleIncrementAmount() {
    setAmount(prevAmount => prevAmount + 1);
    setOrder(prevOrder => ({ ...prevOrder, amount: prevOrder.amount + 1 }));
  }

  function handleDecrementAmount() {
    setAmount(prevAmount => prevAmount > 1 ? prevAmount - 1 : 1);
    setOrder(prevOrder => ({ ...prevOrder, amount: prevOrder.amount > 1 ? prevOrder.amount - 1 : 1 }));
  }

  useEffect(() => {
    const cartItem = cart.find(cartItem => cartItem.id === item.id);

    if (cartItem) {
      setOrder(cartItem);
      setAmount(cartItem.amount);
    }
  }, [cart, item]);

  useEffect(() => {
    // aguardar para enviar o order atualizado
    addCoffeeToCart(order);
  }, [amount]);

  return (
    <CoffeeItemOrder>
      <img src={item.srcImg} />

      <div>
        <p>{item.title}</p>

        <ActionsContainer style={{ maxHeight: 32 }}>
          <AmountContainer>
            <IconButton type='button' onClick={handleDecrementAmount}>
              <MinusIcon weight='fill' size={14} />
            </IconButton>
            <span>{amount}</span>
            <IconButton type='button' onClick={handleIncrementAmount}>
              <PlusIcon weight='fill' size={14} />
            </IconButton>
          </AmountContainer>

          {/* remover submit action from button */}
          <BaseButton
            type='button'
            onClick={() => removeCoffeeFromCart(item)}
          >
            <Trash color='#8047F8' size={16} />
            Remover
          </BaseButton>
        </ActionsContainer>
      </div>

      <span>R$ {item.price}</span>
    </CoffeeItemOrder>
  )
}
