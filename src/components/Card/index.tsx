import { H2 } from '../Typography/header';
import { TextLarge } from '../Typography/text';
import { CardContainer, CardContent, Item, ItemIcon } from './styles';

export function Card() {
  return (
    <CardContainer>
      {/* TODO: a imagem é +- 60% do card - ajustar/ */}
      <img src="/images/plant.png" />
      <CardContent>
        <TextLarge>Como conseguir</TextLarge>
        <H2>minha planta</H2>
        <Item>
          <ItemIcon>
            <img src="/icons/mouse.svg" />
          </ItemIcon>
          <TextLarge>Escolha suas plantas</TextLarge>
        </Item>
        <Item>
          <ItemIcon>
            <img src="/icons/cart.svg" />
          </ItemIcon>
          <TextLarge>Faça seu pedido</TextLarge>
        </Item>
        <Item>
          <ItemIcon>
            <img src="/icons/truck.svg" />
          </ItemIcon>
          <TextLarge>Aguarde na sua casa</TextLarge>
        </Item>
      </CardContent>
    </CardContainer>
  );
}
