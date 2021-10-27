import React from 'react';
import Icon from '../../common/Icon/Icon';
import { Input } from '../../elements';
import cx from 'classnames';
import './SearchInput.scss';

export const SearchInput = () => {
  const classnames = cx('SearchInput');
  return (
    <div className={classnames}>
      <div>
        <Input
          leftIcon={<Icon name="search" />}
          rightIcon={<Icon name="close" />}
          placeholder="검색어를 입력하세요"
        />
      </div>
      <div>
        <span>취소</span>
      </div>
    </div>
  );
};
