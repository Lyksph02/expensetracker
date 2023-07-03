import React from 'react';

export const Transaction = () => {
    return (
        <>
            <h3>Transaction History</h3>
                <ul className="listTransact">
                    <li className="transactMinus"> 
                        Cash <span> - ₱ 3.00</span>
                        <button className="deleteBtn">x</button>
                    </li>
                </ul>
        </>
    )
}
