import React from 'react';

import { FiPlusSquare } from 'react-icons/fi';
import { MdLocalBar, MdRestaurant } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface IHeaderProps {
  openModal: () => void;
  page: string;
}

const Header: React.FC<IHeaderProps> = ({ openModal, page }) => (
  <Container>
    <header>
      <img src={Logo} alt="GoRestaurant" />
      <nav>
        <div>
          <button
            type="button"
            onClick={() => {
              /* TODO OPEN MODAL */
              openModal();
            }}
          >
            {page === 'drinks' && <div className="text">Nova Bebida</div>}
            {page === 'dashboard' && <div className="text">Nova Comida</div>}
            <div className="icon">
              <FiPlusSquare size={24} />
            </div>
          </button>
        </div>
      </nav>
      <nav>
        <div>
          {page === 'drinks' && (
            <Link to="/">
              <button type="button">
                <div className="text">Comidas</div>
                <div className="icon">
                  <MdRestaurant size={24} />
                </div>
              </button>
            </Link>
          )}
          {page === 'dashboard' && (
            <Link to="/drinks">
              <button type="button">
                <div className="text">Drinks</div>
                <div className="icon">
                  <MdLocalBar size={24} />
                </div>
              </button>
            </Link>
          )}
        </div>
      </nav>
      <nav>
        <div />
      </nav>
    </header>
  </Container>
);

export default Header;
