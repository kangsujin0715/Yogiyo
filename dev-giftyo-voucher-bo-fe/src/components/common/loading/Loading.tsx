import styled from './Loadding.module.css';

const Loading = () => {
  return (
    <div className={styled.Loader}>
      <div className={styled.Loader_inner}>
        <div className={styled.leap_frog}>
          <div className={styled.leap_frog__dot} />
          <div className={styled.leap_frog__dot} />
          <div className={styled.leap_frog__dot} />
        </div>
      </div>
    </div>
  );
};

export default Loading;
