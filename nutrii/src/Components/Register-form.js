'use client'

import React, { useContext, useEffect, useState } from 'react'
import { myContext } from '../../Helper/Context';
import Select from 'react-select';
import gsap from 'gsap';

function Register() {

    const { login, setLogin } = useContext(myContext);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const religiousRest = ['Jain', 'Halal', 'Kosher', 'Vegan', 'Gluten-Free', 'Vegetarian'];
    const [religiousDiet, setReligiousDiet] = useState();
    const allergyOptions = [
        "Nut Allergy",
        "Oral Allergy Syndrome",
        "Stone Fruit Allergy",
        "Insulin Allergy",
        "Allium Allergy",
        "Oral Allergy Syndrome",
        "Histamine Allergy",
        "Banana Allergy",
        "Gluten Allergy",
        "Legume Allergy",
        "Salicylate Allergy",
        "Legume Allergy",
        "Salicylate Allergy",
        "Histamine Allergy",
        "Legume Allergy",
        "Broccoli allergy",
        "Cruciferous Allergy",
        "Gluten Allergy",
        "Ragweed Allergy",
        "Milk allergy / Lactose intolerance",
        "Legume Allergy",
        "Mushroom Allergy",
        "Cruciferous Allergy",
        "Nightshade Allergy",
        "Fish Allergy",
        "Nightshade Allergy",
        "Fish Allergy",
        "Fish Allergy",
        "Poultry Allergy",
        "Thyroid",
        "Nut Allergy",
        "Allium Allergy",
        "Gluten Allergy",
        "Legume Allergy",
        "Potato Allergy",
    ];

    const [selectedAllergy, setSelectedAllergy] = useState([]);

    const handleAllergyChange = (selectedOption) => {
        setSelectedAllergy(selectedOption);
    };

    const options = allergyOptions.map((allergy) => ({
        value: allergy,
        label: allergy,
    }));

    const changeLoginState = () => {
        setLogin(!login);
    }

    const changeReligion = (e) =>
    {
        setReligiousDiet(e.target.value);
        console.log(religiousDiet);
    }

    useEffect(() => {
        console.log('Effect triggered');
        const t = gsap.timeline();

        t.to('.sign-in-title', {
            x: 10,
            opacity: 1,
            duration: 1,
        })
    }, [])



    return (
        <div className="s3">
            <div className="sign-header-section m-[10px] lg:m-[2vw]">
                <div className="sign-in-title">
                    Join us now!!
                </div>
            </div>
            <form className="input-container">
                <input type="email" required placeholder="Email"
                    onChange={(e) => { setUsername(e.target.value) }} />
                <div className="dropdown-container">
                    {/* <label htmlFor="dietaryRestrictions">Dietary Restrictions</label> */}
                    <Select
                        className="dietaryRestrictions"
                        options={options}
                        value={selectedAllergy}
                        onChange={handleAllergyChange}
                        placeholder="Select Allergy"
                        isSearchable
                        isMulti
                    />
                </div>

                <select className='fieldValue' value={religiousDiet} onChange={changeReligion}>

                    {religiousRest.map((diet, index) => {
                        return <option key={index} value={diet} >{diet}</option>
                    })}
                </select>

                <input type="text" required placeholder="Allergies"
                    onChange={(e) => { setPassword(e.target.value) }} />
                <input type="password" required placeholder="Passowrd"
                    onChange={(e) => { setPassword(e.target.value) }} />
                <a href="#" className="alt-f">
                    Forgot Password ?
                </a>
                <button className='hover:rounded-[2vw] rounded-[1vw]'>
                    Sign in
                </button>
                <div href="#" className="alt-f-full">
                    Already a Member?
                    <a className="p-[.2vw] transition-all duration-1 ease-out border-blue-300 hover:border-b alt-f ml-[0.2vw]"
                        onClick={changeLoginState}>
                        Sign in
                    </a>
                </div>
            </form>
        </div>
    )
}

export default Register