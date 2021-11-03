import React from 'react';
import './SplitButton.scss';
import { ReactComponent as ArrowDown } from '../../../public/svgs/arrow_down.svg';

export const SplitButton = () => {
  return (
    <div className="SplitButton">
      <button>View</button>
      <span>
        <ArrowDown className="ArrowDown" />
        <ul className="popup">
          <li>
            <button>
              {/* SVG */}
              option1
            </button>
        </li>
          <li>
            <button>
              {/* SVG */}
              option1
            </button>
          </li>
          <li>
            <button>
              {/* SVG */}
              option1
            </button>
          </li>
        </ul>
      </span>
    </div>
  );
};
