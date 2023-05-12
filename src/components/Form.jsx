import './Form.css';
import React, { useState } from 'react';
import axios from 'axios';


function Form() {
    const [formData, setFormData] = useState({
        observation_id: '',
        Type: '',
        Date: '',
        'Part of a policing operation': false,
        Latitude: '',
        Longitude: '',
        Gender: '',
        'Age range': '',
        'Officer-defined ethnicity': '',
        Legislation: '',
        'Object of search': '',
        station: ''
    });

    const [response, setResponse] = useState('');

    const handleChange = (event) => {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        setFormData({
            ...formData,
            [event.target.name]: value
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const result = await axios.get('https://test.com', formData);
            setResponse(result.data);
        } catch (error) {
            console.error('There was an error!', error);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Observation ID:
                    <input type="text" name="observation_id" value={formData.observation_id} onChange={handleChange} />
                </label>
                <br></br>
                <label>
                    Type:
                    <input type="text" name="Type" value={formData.Type} onChange={handleChange} />
                </label>
                <br></br>
                <label>
                    Date:
                    <input type="date" name="Date" value={formData.Date} onChange={handleChange} />
                </label>
                <br></br>
                <label className='Policing'>
                    Part of a policing operation:
                    <input type="checkbox" name="Part of a policing operation" checked={formData['Part of a policing operation']} onChange={handleChange} />
                </label>
                <br></br>
                <label>
                    Latitude:
                    <input type="number" step="0.00001" name="Latitude" value={formData.Latitude} onChange={handleChange} />
                </label>
                <br></br>
                <label>
                    Longitude:
                    <input type="number" step="0.00001" name="Longitude" value={formData.Longitude} onChange={handleChange} />
                </label>
                <br></br>
                <label>
                    Gender:
                    <div>
                        <label className='Gender' htmlFor="male">Male
                            <input className='Gender' type="radio" id="male" name="Gender" value="Male" checked={formData.Gender === "Male"} onChange={handleChange} />
                        </label>
                    </div>
                    <div>
                        <label className='Gender' htmlFor="female">Female
                            <input className='Gender' type="radio" id="female" name="Gender" value="Female" checked={formData.Gender === "Female"} onChange={handleChange} />
                        </label>
                    </div>
                </label>
                <br></br>
                <label>
                    Age range:
                    <input type="text" name="Age range" value={formData['Age range']} onChange={handleChange} />
                </label>
                <br></br>
                <label>
                    Officer-defined ethnicity:
                    <input type="text" name="Officer-defined ethnicity" value={formData['Officer-defined ethnicity']} onChange={handleChange} />
                </label>
                <br></br>
                <label>
                    Legislation:
                    <input type="text" name="Legislation" value={formData.Legislation} onChange={handleChange} />
                </label>
                <br></br>
                <label>
                    Object of search:
                    <input type="text" name="Object of search" value={formData['Object of search']} onChange={handleChange} />
                </label>
                <br></br>
                <label>
                    Station:
                    <input type="text" name="station" value={formData.station} onChange={handleChange} />
                </label>
                <br></br>
                <input type="submit" value="Submit" />
            </form>
            {response!=='' &&
                <div>
                    {response.map(key =>
                        <p key={key}>{key}: {response[key]}</p>
                    )}
                </div>
            }
        </div>
    );
}

export default Form;
