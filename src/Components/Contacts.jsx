import React from 'react';
import ContactUserCard from './ContactUserCard';

const Contacts = () => {
    return (
        <div className='contactList'>
            <ul>
                <h1>Contacts</h1>
                <ContactUserCard />
                <ContactUserCard />
                <ContactUserCard />
                <ContactUserCard />
            </ul>
        </div>
    );
}

export default Contacts;
