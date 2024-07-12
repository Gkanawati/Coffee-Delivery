import { MapPin, ShoppingCart } from 'phosphor-react'
import {
  ActionsHeader,
  CartButton,
  CartContainer,
  Counter,
  HeaderContainer,
  HeaderContent,
  LocationButton
} from './styles'

import logo from '../../assets/Logo.svg'
import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { OrderProps, OrdersContext } from '../../contexts/OrdersProvider'

export function Header() {
  const { cart, orders } = useContext(OrdersContext);

  const isCartEmpty = cart.length === 0;

  const [lastOrder, setLastOrder] = useState({} as OrderProps);

  useEffect(() => {
    const lastOrder = orders[orders.length - 1];
    if (lastOrder) {
      setLastOrder(lastOrder);
    }
  }, [orders]);

  return (
    <HeaderContainer>
      <HeaderContent>
        <Link to={'/'}>
          <img src={logo} alt="Coffee Delivery Logo" />
        </Link>

        <ActionsHeader>
          <LocationButton href='#'>
            <MapPin weight='fill' size={22} />
            {lastOrder.address
              ? <span>{lastOrder.address?.city}, {lastOrder.address?.state}</span>
              : <span>São Paulo, SP</span>
            }
          </LocationButton>

          <CartButton to="/checkout">
            <ShoppingCart weight="fill" size={22} />
            {!isCartEmpty &&
              <Counter>
                <span>{cart.length}</span>
              </Counter>
            }
          </CartButton>
        </ActionsHeader>
      </HeaderContent>
    </HeaderContainer>
  )
}