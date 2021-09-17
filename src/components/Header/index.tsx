import { Container } from "./styles";
import Logo from "../../assets/logo.svg";
import { FiPlusSquare } from "react-icons/fi";

import { HeaderProps } from "../../types";

export const Header: React.FC<HeaderProps> = ({ openModal }): JSX.Element => (
  <Container>
    <header>
      <img src={Logo} alt="GoRestaurant" />
      <nav>
        <div>
          <button type="button" onClick={openModal}>
            <div className="text">Novo Prato</div>
            <div className="icon">
              <FiPlusSquare size={24} />
            </div>
          </button>
        </div>
      </nav>
    </header>
  </Container>
);
