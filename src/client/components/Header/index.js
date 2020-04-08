import React from 'react';
import { PROJECT_TITLE } from '../../config/defaults';

const Header = (props) => {
  return(
    <div className="text-header">
      <nav>
        <header>
          <h1>
            { PROJECT_TITLE}
          </h1>
        </header>
      </nav>
    </div>
  );
}

export default Header;