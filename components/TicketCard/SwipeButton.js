import React from 'react';
import { useDispatch } from 'react-redux';

import { HashLoader } from 'react-spinners';

function SwipeButton() {
  const dispatch = useDispatch();

  const refresh = () => {
    dispatch({ type: 'refresh' })
  }

  return <>
    <div className='swipeButtons'>
      <div className='swipeButtons__repeat' onClick={refresh}>
        <HashLoader color="#36d7b7" loading={true} size={20} /> <span className='ps-2'>Refresh</span>
      </div>
      {/* <div className="swipeButtons__left">
        Back
      </div>
      <div className="swipeButtons__right">
        Next
      </div> */}
    </div>
  </>;
}

export default SwipeButton;
