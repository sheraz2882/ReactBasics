import React, { useState } from 'react';

type UserInfoCardProps = {
    name: string;
    role: string;
    theme: string;
}

function UserInfoCard({name, role, theme} : UserInfoCardProps) {

    var themeColor = '';

    if(theme === 'orange') {
        themeColor = '#ff5722';
    }else if(theme === 'blue') {
        themeColor = '#2196f3';
    }else if(theme === 'green') {
        themeColor = '#4caf50';
    }else{
        themeColor = '#9e9e9e';
    }

    console.log(themeColor);

    return (
        <div className='user-info-card'>
            <p style={{backgroundColor: themeColor, color: '#fff'}} className="user-profile">{name.charAt(0).toUpperCase()}</p>
            <p className="user-name">{name}</p>
            <p className="user-role">{role}</p>

        </div>
    );

}



export const  StateProps = () => {
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [theme, setTheme] = useState('');

    

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
                <br/>
                <br/>

            <label style={{fontWeight: 'bold', marginRight: '10px'}}>
                Theme
            </label>

            <select
            className='input-field'
            value={theme}
            onChange={(e) => {
                setTheme(e.target.value);
            }}>

                    <option value="">Select Theme</option>
                    <option value="orange">Orange</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>


            </select>
            

            {UserInfoCard({name, role, theme})}


        </div>
    );

}