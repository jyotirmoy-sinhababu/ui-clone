import NavBar from '../navBar/NavBar';
import Header from '../utils/Header';

// import BarChat from '../utils/barChat/BarChat';

const CenterBlock = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <div>
          <Header />
        </div>
        <div>{/* <BarChat /> */}</div>
      </div>
    </div>
  );
};

export default CenterBlock;
