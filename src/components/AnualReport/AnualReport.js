import React from 'react';
import anual from '../../images/anualreport.jpg';
import anual1 from '../../images/anualreport1.jpg';
import anual2 from '../../images/anualreport2.jpg';
import anual3 from '../../images/anualreport3.jpg';
import anual4 from '../../images/anualreport4.jpg';

const AnualReport = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold text-primary underline decoration-secondary text-center my-5'>Investor Relations</h1>
            <div className='px-28 py-9'>
                <h3 className='text-xl text-center'>The secret to our success is what we call “The Powertrain Difference”<br />
                    Propulsion product leadership that drives our growth. Customer and geographic diversity that minimizes our exposure to any single customer or market. A robust focus on cost reductions. And, financial strength and discipline.</h3>
            </div>
            <div className='px-9 py-9 flex flex-col justify-center items-center'>
                <img className='' src={anual} alt="" width={600} />
                <img className='' src={anual1} alt="" width={600} />
                <img className='' src={anual2} alt="" width={600} />
                <img className='' src={anual3} alt="" width={600} />
                <img className='' src={anual4} alt="" width={600} />
            </div>
        </div>
    );
};

export default AnualReport;