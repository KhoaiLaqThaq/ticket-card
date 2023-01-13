import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAll } from './../../store/actions/ticketCardAction'

import Loading from '../../components/common/Loading/index'
import TicketCard from '../../components/TicketCard/index'
import SwipeButton from '../../components/TicketCard/SwipeButton';
import styles from '../../styles/Home.module.css'

function TicketList(props) {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <TicketCard></TicketCard>
        <SwipeButton></SwipeButton>
      </div>
    </main>
  )
}

export default TicketList;