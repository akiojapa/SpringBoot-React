import axios from 'axios';
import React from 'react';
import icon from '../../assets/img/notification-icon.svg';
import { BASE_URL } from '../../utils/request';
import './NotificationButton.css'

class Props {
    saleId = Number;
}

function handleClick(id = Number){
    axios(`${BASE_URL}/sales/${id}/notification`).then(response => {
        console.log("Ok")
    })
}

const NotificationButton = ({saleID = Props}) => {
    return ( 
        <div className="dsmeta-red-btn" onClick={() => handleClick(saleID)}>
            <img src= {icon} alt="Notificar" />
        </div>
     );
}
 
export default NotificationButton;