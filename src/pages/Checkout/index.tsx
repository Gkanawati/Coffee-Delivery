import { useContext, useState } from 'react';
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from 'phosphor-react';
import {
  AddressContainer,
  CardContainer,
  CheckoutContainer,
  CoffeeCard,
  ComplementField,
  ContainerInputWithText,
  EmptyCartContainer,
  FormStyled,
  HeadTitle,
  HelperText,
  InputContainer,
  OptionalField,
  OrderContainer,
  PaymentContainer,
  PaymentOptionButton,
  ResumeOrderValues,
  StyledField,
  SubmitButton,
  TitleForm
} from './styles';
import CoffeeCartItem from './components';
import { OrderProps, OrdersContext } from '../../contexts/OrdersProvider';
import { formatCurrency, validateCEP } from '../../utils/utils';
import { Controller, useForm } from 'react-hook-form';
import axios from 'axios';
import { maskCEP, unmaskValue } from '../../utils/utils';
import { useNavigate } from 'react-router-dom';
import CustomModal from '../../components/CustomModal';

interface OrderData {
  cep: string;
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
  paymentMethod: string;
}

const initialFormValues: OrderData = {
  cep: '',
  street: '',
  number: '',
  complement: '',
  neighborhood: '',
  city: '',
  state: '',
  paymentMethod: 'creditCard',
}

export default function Checkout() {
  const navigate = useNavigate();
  const { cart, productsPrice, deliveryPrice, totalPrice, createOrder, calculateDeliveryPriceByState } = useContext(OrdersContext);

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('creditCard');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    setError,
    clearErrors,
    reset,
    control,
    formState: { dirtyFields, errors },
  } = useForm({ defaultValues: initialFormValues });

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  async function fillAddressInputs(cep: string) {
    if (!cep || cep.length < 8) {
      setValue('street', '', { shouldDirty: true });
      setValue('neighborhood', '', { shouldDirty: true });
      setValue('city', '', { shouldDirty: true });
      setValue('state', '', { shouldDirty: true });
      return;
    }

    clearErrors('cep');
    clearErrors('street');
    clearErrors('neighborhood');
    clearErrors('city');
    clearErrors('state');

    try {
      const apiCepResponse = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

      if (apiCepResponse) {
        // handle cep not found
        const getAddressResult = apiCepResponse.data;
        if (!getAddressResult?.erro) {
          setValue('street', getAddressResult.logradouro, { shouldDirty: true });
          setValue('neighborhood', getAddressResult.bairro, { shouldDirty: true });
          setValue('city', getAddressResult.localidade, { shouldDirty: true });
          setValue('state', getAddressResult.uf, { shouldDirty: true });
          setModalTitle('Endereço encontrado!');
          handleOpenModal();
          calculateDeliveryPriceByState(getAddressResult.uf);
        } else {
          setModalTitle('CEP não encontrado');
          handleOpenModal();
        }
      }
    } catch (error) {
      console.log('fillAddressInputs ~ error:', error);
      setModalTitle('Erro ao buscar Endereço');
      handleOpenModal();
    }
  }

  function onSubmit(data: any) {
    // increment cart_data to data
    console.log('onSubmit ~ data:', data);

    const formattedOrder: OrderProps = {
      cart: cart,
      date: new Date().toISOString(),
      address: {
        cep: data.cep,
        street: data.street,
        number: data.number,
        complement: data.complement,
        neighborhood: data.neighborhood,
        city: data.city,
        state: data.state,
      },
      paymentMethod: data.paymentMethod,
      totalPrice: totalPrice,
    }

    console.log('onSubmit ~ formattedOrder:', formattedOrder);

    setTimeout(() => {
      try {
        const orderId = createOrder(formattedOrder);
        navigate(`/success/${orderId}`);
        reset();
      } catch (error) {
        console.log('onSubmit ~ error:', error);
        setModalTitle('Erro ao realizar pedido');
        handleOpenModal();
      }
    }, 500);
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CheckoutContainer>

          <AddressContainer>
            <HeadTitle>
              Complete seu pedido
            </HeadTitle>

            <CardContainer>
              <TitleForm>
                <MapPinLine color='#C47F17' size={22} />
                <div>
                  <h4>
                    Endereço de Entrega
                  </h4>

                  <p>
                    Informe o endereço onde deseja receber seu pedido
                  </p>
                </div>
              </TitleForm>

              <FormStyled>
                <InputContainer>
                  <Controller
                    name='cep'
                    control={control}
                    rules={{ required: 'Campo obrigatório' }}
                    render={({ field: { ref, onChange, ...field } }) => (
                      <StyledField
                        {...field}
                        style={{ width: 'fit-content' }}
                        placeholder="CEP"
                        onChange={(e: { target: { value: string; }; }) => {
                          console.log(maskCEP(e.target.value));
                          setValue('cep', maskCEP(e.target.value), { shouldDirty: true })
                          const unmaskedValue = unmaskValue(e.target.value);
                          fillAddressInputs(unmaskedValue);
                        }}
                        onBlur={(e) => {
                          if (!validateCEP(e.target.value)) {
                            setError("cep", { type: "invalid", message: "CEP inválido." })
                          } else {
                            clearErrors("cep")
                          }
                        }}
                      />
                    )}
                  />
                  {errors.cep && <HelperText>{errors.cep.message}</HelperText>}
                </InputContainer>

                <InputContainer style={{ flex: 1, width: '100%' }}>
                  <StyledField
                    style={{ flex: 1 }}
                    placeholder="Rua"
                    {...register('street', { required: 'Campo obrigatório' })}
                  />
                  {errors.street && <HelperText>{errors.street.message}</HelperText>}
                </InputContainer>

                <div>
                  <InputContainer>
                    <StyledField
                      type="number"
                      placeholder="Número"
                      {...register('number', { required: 'Campo obrigatório' })}
                    />
                    {errors.number && <HelperText>{errors.number.message}</HelperText>}
                  </InputContainer>

                  <ContainerInputWithText>
                    <ComplementField
                      id="complement"
                      placeholder="Complemento"
                      {...register('complement')}
                    />
                    <OptionalField>
                      <span>Opcional</span>
                    </OptionalField>
                  </ContainerInputWithText>
                </div>

                <div>
                  <InputContainer>
                    <StyledField
                      id="neighborhood"
                      placeholder="Bairro"
                      {...register('neighborhood', { required: 'Campo obrigatório' })}
                    />
                    {errors.neighborhood && <HelperText>{errors.neighborhood.message}</HelperText>}
                  </InputContainer>

                  <InputContainer style={{ flex: 1 }}>
                    <StyledField
                      style={{ flex: 1 }}
                      id="city"
                      placeholder="Cidade"
                      {...register('city', { required: 'Campo obrigatório' })}
                    />
                    {errors.city && <HelperText>{errors.city.message}</HelperText>}
                  </InputContainer>

                  <InputContainer>
                    <StyledField style={{ maxWidth: 60 }}
                      id="state"
                      placeholder="UF"
                      {...register('state', { required: 'Campo obrigatório' })}
                    />
                    {errors.state && <HelperText>{errors.state.message}</HelperText>}
                  </InputContainer>
                </div>
              </FormStyled>
            </CardContainer>

            <CardContainer>
              <TitleForm>
                <CurrencyDollar color='#8047F8' size={22} />
                <div>
                  <h4>
                    Pagamento
                  </h4>

                  <p>
                    O pagamento é feito na entrega. Escolha a forma que deseja pagar
                  </p>
                </div>
              </TitleForm>

              <PaymentContainer>
                <PaymentOptionButton
                  type="button"
                  selected={selectedPaymentMethod === "creditCard"}
                  onClick={() => {
                    setValue('paymentMethod', 'creditCard');
                    setSelectedPaymentMethod('creditCard');
                  }}
                >
                  <CreditCard color='#8047F8' size={16} />
                  Cartão de Crédito
                </PaymentOptionButton>

                <PaymentOptionButton
                  type="button"
                  selected={selectedPaymentMethod === "debitCard"}
                  onClick={() => {
                    setValue('paymentMethod', 'debitCard')
                    setSelectedPaymentMethod('debitCard');
                  }}
                >
                  <Bank color='#8047F8' size={16} />
                  Cartão de Débito
                </PaymentOptionButton>

                <PaymentOptionButton
                  type="button"
                  selected={selectedPaymentMethod === "money"}
                  onClick={() => {
                    setValue('paymentMethod', 'money')
                    setSelectedPaymentMethod('money');
                  }}
                >
                  <Money color='#8047F8' size={16} />
                  Dinheiro
                </PaymentOptionButton>
              </PaymentContainer>
            </CardContainer>
          </AddressContainer>

          <OrderContainer>
            <HeadTitle>
              Cafés Selecionados
            </HeadTitle>

            <CoffeeCard>
              {cart.length
                ?
                <>
                  {cart.map(item => (
                    <CoffeeCartItem item={item} />
                  ))}

                  <ResumeOrderValues>
                    <div>
                      <span>Total de items</span>
                      <span>{formatCurrency(productsPrice)}</span>
                    </div>
                    <div>
                      <span>Entrega</span>
                      <span>{deliveryPrice === 0 ? 'Grátis' : formatCurrency(deliveryPrice)}</span>
                    </div>

                    <div>
                      <h3>Total</h3>
                      <h3>{formatCurrency(totalPrice)}</h3>
                    </div>
                  </ResumeOrderValues>

                  <SubmitButton type="submit">
                    Confirmar Pedido
                  </SubmitButton>
                </>
                :
                <EmptyCartContainer>
                  <p>Carrinho Vazio!</p>
                  <a href="/">Clique aqui para ver nosso catálogo de cafés!</a>
                </EmptyCartContainer>
              }
            </CoffeeCard>
          </OrderContainer>
        </CheckoutContainer>
      </form>

      <CustomModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        goAction={handleCloseModal}
        title={modalTitle}
        hideCancelButton
      />
    </>
  );
}