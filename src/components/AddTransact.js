import React, {useState} from 'react'

export const AddTransact = () => {

    const [text, setText] = useState('');
    const [number, setAmount] = useState('');

    return (
        <>
            <h3>Add new transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="Amount">Amount <br />
                        <span className="amountDesc">(negative - expense, positive - income)</span>
                    </label>
                    <input type="number" placeholder="Enter amount..." />
                </div>

                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}
