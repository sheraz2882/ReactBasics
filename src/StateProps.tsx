import React, { useState } from 'react';

type UserInfoCardProps = {
    name: string;
    role: string;
}

function UserInfoCard({name, role} : UserInfoCardProps) {

    return (
        <div className='user-info-card'>
            <p style={{backgroundColor: '#007bff', color: '#fff'}} className="user-profile">{name.charAt(0).toUpperCase()}</p>
            <p className="user-name">{name}</p>
            <p className="user-role">{role}</p>

        </div>
    );

}



export const  StateProps = () => {
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    

    return (
        <div>
            <h2>State and Props Live Examples</h2>

            <label style={{fontWeight: 'bold', marginRight: '10px'}}>
                Name
            </label>

            <input 
            className='input-field'
            type="text"
                    value={name}
                    placeholder='Enter Name'
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />

                <br/>
                <br/>

<label style={{fontWeight: 'bold', marginRight: '10px'}}>
                Role
            </label>

            <input 
            className='input-field'
            type="text"
                    value={role}
                    placeholder='Enter Role'
                    onChange={(e) => {
                        setRole(e.target.value);
                    }}
                />
                
            

            {UserInfoCard({name, role})}


        </div>
    );

}