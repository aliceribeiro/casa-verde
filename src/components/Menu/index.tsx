import { Header, NavMenu } from './styles';

export function Menu() {
  return (
    <Header>
      <div>
        <img src="/images/logo-full.svg" alt="Casa Verde logo" />
      </div>

      <NavMenu>
        <li>
          <a href="/">Como fazer</a>/
        </li>
        <li>
          <a href="/">Ofertas</a>/
        </li>
        <li>
          <a href="/">Depoimentos</a>/
        </li>
        <li>
          <a href="/">Vídeos</a>/
        </li>
        <li>
          <a href="/">Meu carrinho</a>
        </li>
      </NavMenu>
    </Header>
  );
}
