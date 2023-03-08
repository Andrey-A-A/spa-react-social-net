import Frends from './Frends';
import { connect } from 'react-redux/es/exports';

// let state = store.getState();
// return <Frends frendsData={state.sidebar.frendsData} />;

let mapStateToProps = (state) => {
  return {
    frendsData: state.sidebar.frendsData,
  };
};
//превращаем часть стейта в пропсы

const FrendsContainer = connect(mapStateToProps)(Frends);

export default FrendsContainer;
