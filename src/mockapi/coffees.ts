import latte from '../assets/coffee-images-svg/latte.svg';
import arabe from '../assets/coffee-images-svg/arabe.svg';
import cubano from '../assets/coffee-images-svg/cubano.svg';
import irlandes from '../assets/coffee-images-svg/irlandes.svg';
import havaiano from '../assets/coffee-images-svg/havaiano.svg';
import expresso from '../assets/coffee-images-svg/expresso.svg';
import americano from '../assets/coffee-images-svg/americano.svg';
import capuccino from '../assets/coffee-images-svg/capuccino.svg';
import macchiato from '../assets/coffee-images-svg/macchiato.svg';
import mocaccino from '../assets/coffee-images-svg/mocaccino.svg';
import cafe_gelado from '../assets/coffee-images-svg/cafe_gelado.svg';
import cafe_com_leite from '../assets/coffee-images-svg/cafe_com_leite.svg';
import expresso_cremoso from '../assets/coffee-images-svg/expresso_cremoso.svg';
import chocolate_quente from '../assets/coffee-images-svg/chocolate_quente.svg';

const coffees = [
  {
    id: 1,
    title: 'Expresso Tradicional',
    tags: ['Tradicional'],
    description: 'O tradicional café feito com água quente e grãos moídos',
    srcImg: expresso,
    price: '5,00',
    amount: 0,
  },
  {
    id: 2,
    title: 'Expresso Americano',
    tags: ['Tradicional'],
    description: 'Expresso diluído, menos intenso que o tradicional',
    srcImg: americano,
    price: '4,00',
    amount: 0,
  },
  {
    id: 3,
    title: 'Expresso Cremoso',
    tags: ['Tradicional'],
    description: 'Café expresso tradicional com espuma cremosa',
    srcImg: expresso_cremoso,
    price: '6,00',
    amount: 0,
  },
  {
    id: 4,
    title: 'Expresso Gelado',
    tags: ['Tradicional', 'Gelado'],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    srcImg: cafe_gelado,
    price: '7,00',
    amount: 0,
  },
  {
    id: 5,
    title: 'Café com Leite',
    tags: ['Tradicional', 'Com Leite'],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    srcImg: cafe_com_leite,
    price: '6,00',
    amount: 0,
  },
  {
    id: 6,
    title: 'Latte',
    tags: ['Tradicional', 'Com Leite'],
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    srcImg: latte,
    price: '8,00',
    amount: 0,
  },
  {
    id: 7,
    title: 'Capuccino',
    tags: ['Tradicional', 'Com Leite'],
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    srcImg: capuccino,
    price: '10,00',
    amount: 0,
  },
  {
    id: 8,
    title: 'Macchiato',
    tags: ['Tradicional', 'Com Leite'],
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    srcImg: macchiato,
    price: '9,00',
    amount: 0,
  },
  {
    id: 9,
    title: 'Mocaccino',
    tags: ['Tradicional', 'Com Leite'],
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    srcImg: mocaccino,
    price: '9,00',
    amount: 0,
  },
  {
    id: 10,
    title: 'Chocolate Quente',
    tags: ['Especial', 'Com Leite'],
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    srcImg: chocolate_quente,
    price: '10,00',
    amount: 0,
  },
  {
    id: 11,
    title: 'Cubano',
    tags: ['Especial', 'Alcoólico', 'Gelado'],
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    srcImg: cubano,
    price: '10,00',
    amount: 0,
  },
  {
    id: 12,
    title: 'Havaiano',
    tags: ['Especial'],
    description: 'Bebida adocicada preparada com café e leite de coco',
    srcImg: havaiano,
    price: '9,00',
    amount: 0,
  },
  {
    id: 13,
    title: 'Árabe',
    tags: ['Especial'],
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    srcImg: arabe,
    price: '8,00',
    amount: 0,
  },
  {
    id: 14,
    title: 'Irlandês',
    tags: ['Especial', 'Alcoólico'],
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    srcImg: irlandes,
    price: '11,00',
    amount: 0,
  }
];

export default coffees;
