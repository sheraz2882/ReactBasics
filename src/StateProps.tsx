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

    return (
        <div className='user-info-card'>
            <p style={{backgroundColor: themeColor, color: '#fff'}} className="user-profile">{name.charAt(0).toUpperCase()}</p>
            <p className="user-name">{name}</p>
            <p className="user-role">{role}</p>

        </div>
    );

}


function StatePropsExample1() {

    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [theme, setTheme] = useState('');

    return (
        <div>
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


interface Country{
    code : string;
    name: string;
    population: string;
    capital: string;
}

const countries: Country[] = [
    {code : "PK", name: "Pakistan", population: "240 million", capital: "Islamabad"},
    {code : "US", name: "United States", population: "335 million", capital: "Washington, D.C."},
    {code : "IN", name: "India", population: "1.43 billion", capital: "New Delhi"},
]


function StatePropsExample2() {

    const [selectedCode , setSelectedCode] = useState('');


    const selectedCountry = countries.find(country => country.code === selectedCode);



    return(
        <div>   
            <h2>Check Countries Information</h2>

            <select
                className='input-field'
               value={selectedCode}
               onChange={(e) => {setSelectedCode(e.target.value)}}>

                <option value="">Select Country</option>
                {
                    countries.map((country) => (
                        <option key={country.code} value={country.code}>
                            {country.name}
                        </option>
                    ))
                }

            </select>

            {selectedCountry && (
                <div className='country-info'>
                    <h3>{selectedCountry.name}</h3>
                    <p><strong>Population:</strong> {selectedCountry.population}</p>
                    <p><strong>Capital:</strong> {selectedCountry.capital}</p>
                </div>
            )}
            
        </div>
    );


}


export const  StateProps = () => {
    

    

    return (
        <div>
            <h2>State and Props Live Examples</h2>
            <h3>Example One</h3>

            <StatePropsExample1 />

            <h3>Example Two</h3>

            <StatePropsExample2 />

        </div>
    );

}