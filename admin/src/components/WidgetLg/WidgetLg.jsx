import React from 'react';
import "./widgetLg.css";


const WidgetLg = () => {

    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}>{type}</button>
    };




    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest Transctions</h3>
            <table className="widgetLgTable">
                <tbody>
                    <tr className="widgetLgTr">
                        <th className="widgetLgTh">Customer</th>
                        <th className="widgetLgTh">Date</th>
                        <th className="widgetLgTh">Amount</th>
                        <th className="widgetLgTh">Status</th>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img src="https://images.pexels.com/photos/4511649/pexels-photo-4511649.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="img-user" className="widgetLgUserImg" />
                            <span className="widgetLgName">Johny Her</span>
                        </td>
                        <td className="widgetLgDate">12 July 2022</td>
                        <td className="widgetLgAmount">$1420.00</td>
                        <td className="widgetLgStatus"><Button type="Pending" /></td>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img src="./person/5.jpeg" alt="img-user" className="widgetLgUserImg" />
                            <span className="widgetLgName">Anita Joshi</span>
                        </td>
                        <td className="widgetLgDate">15 July 2021</td>
                        <td className="widgetLgAmount">$950.00</td>
                        <td className="widgetLgStatus"><Button type="Approved" /></td>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img src="./person/7.jpeg" alt="img-user" className="widgetLgUserImg" />
                            <span className="widgetLgName">Hinata Uchiha</span>
                        </td>
                        <td className="widgetLgDate">10 July 2021</td>
                        <td className="widgetLgAmount">$452.00</td>
                        <td className="widgetLgStatus"><Button type="Pending" /></td>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img src="./person/2.jpeg" alt="img-user" className="widgetLgUserImg" />
                            <span className="widgetLgName">Gojo Uzumaki</span>
                        </td>
                        <td className="widgetLgDate">16 July 2021</td>
                        <td className="widgetLgAmount">$550.00</td>
                        <td className="widgetLgStatus"><Button type="Declined" /></td>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img src="./person/9.jpeg" alt="img-user" className="widgetLgUserImg" />
                            <span className="widgetLgName">Ben Dover</span>
                        </td>
                        <td className="widgetLgDate">15 July 2021</td>
                        <td className="widgetLgAmount">$756.00</td>
                        <td className="widgetLgStatus"><Button type="Approved" /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default WidgetLg;
