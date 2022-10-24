import React from 'react';
import CenterBlock from '../../components/centerBlock/CenterBlock';
import SideLink from '../../components/sideLink/SideLink';

const MainPage = () => {
  return (
    <>
      <div>
        <div>
          <SideLink />
        </div>
        <div>
          <CenterBlock />
        </div>
      </div>
    </>
  );
};

export default MainPage;
