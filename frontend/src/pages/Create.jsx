import React, { useState } from 'react';
import axios from 'axios';

const Create = () => {

  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [gender, setGender] = useState();
  const [contact, setContact] = useState();
  const [course, setCourse] = useState();
  const [address, setAddress] = useState();
  const [id_card, setIdCard] = useState();
  const [email, setEmail] = useState();
  const [dob, setDob] = useState(new Date());
  const [loading , setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isSuccess , setIsSuccess] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setIsSuccess(false);
    setError(null); // Clear the error on each submission
  
    const formData = {
      firstname,
      lastname,
      gender,
      contact,
      course,
      address,
      id_card,
      email,
      dob: dob.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      }),
    };
  
    try {
      const response = await axios.post('http://localhost:8000/api/students', formData);
      setIsSuccess(true);
  
      // Assuming your API response contains useful information, log it
      const responseData = response.data;
      console.log('API Response:', responseData);
  
      // Clear the form fields after a successful submission
      setFirstname('');
      setLastname('');
      setGender('');
      setContact('');
      setCourse('');
      setAddress('');
      setIdCard('');
      setEmail('');
      setDob(new Date());
    } catch (error) {
      if (error.response) {
        const { error: errorMessage, emptyFields } = error.response.data;
  
        if (emptyFields) {
          setError(`${emptyFields.join(', ')}`);
        } else {
          setError(errorMessage || 'An unknown error occurred');
        }
      } else if (error.request) {
        setError('No response from the server');
      } else {
        setError('Error sending the request');
      }
    } finally {
      setLoading(false);
  
      // Delay the removal of the success message for 2 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 2000);
    }
  }
  

  return (
    <div className="container mx-auto p-6 border-2">
      <h2 className="text-2xl font-bold mb-4">Dashboard - Create</h2>
      {error && 
        <div class="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg 0  dark:text-red-400 dark:border-red-800" role="alert">
        <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
        </svg>
        <span class="sr-only">Info</span>
        <div>
          <span class="font-medium">Please fill : {error} </span> 
        </div>
      </div>
      }
      {isSuccess && 
       <div id="alert-border-3" class="flex items-center p-4 mb-4 text-green-600 bg-gray-800 border-2 rounded-lg border-green-600" role="alert">
        <svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
        </svg>
        <div class="ms-3 text-sm font-medium">
         Student is successfully added !!!
        </div>
        <button type="button" class="ms-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700"  data-dismiss-target="#alert-border-3" aria-label="Close">
          <span class="sr-only">Dismiss</span>
          <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
          </svg>
        </button>
      </div> }
      <form onSubmit={handleSubmit}>
        <div className="grid lg:grid-cols-3 gap-4 ">
            <div className="mb-4">
              <label htmlFor="firstname" className="block text-sm font-semibold text-gray-600">First Name</label>
              <input type="text" id="firstname" className={` ${error && error.includes('firstname')? 'border-red-700' : '' }  mt-1 p-2 w-full border rounded-md`}
                value={firstname}
                onChange={((e) => setFirstname(e.target.value))}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="lastname" className="block text-sm font-semibold text-gray-600">Last Name</label>
              <input type="text" id="lastname" className={` ${error && error.includes('lastname')? 'border-red-700' : '' } mt-1 p-2 w-full border rounded-md `}
                value={lastname}
                onChange={((e) => setLastname(e.target.value))}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="gender" className="block text-sm font-semibold text-gray-600">Gender</label>
              <select id="gender" className={`${error && error.includes('gender')? 'border-red-700' : '' } mt-1 p-2 w-full border rounded-md`}
                value={gender}
                onChange={((e) => setGender(e.target.value))}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="contact" className="block text-sm font-semibold text-gray-600">Contact</label>
              <input type="text" id="contact" className="mt-1 p-2 w-full border rounded-md" 
                value={contact}
                onChange={((e) => setContact(e.target.value))}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="course" className="block text-sm font-semibold text-gray-600">Course</label>
              <input type="text" id="course" className="mt-1 p-2 w-full border rounded-md" 
                value={course}
                onChange={((e) => setCourse(e.target.value))}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block text-sm font-semibold text-gray-600">Address</label>
              <input type="text" id="address" className="mt-1 p-2 w-full border rounded-md" 
              value={address}
              onChange={((e) => setAddress(e.target.value))}
              />
            </div>
            {/* <div className="mb-4">
              <label htmlFor="attendance" className="block text-sm font-semibold text-gray-600">attendance</label>
              <input type="text" id="attendance" className="mt-1 p-2 w-full border rounded-md" 
                onChange={(e) => }
              />
            </div> */}
            <div className="mb-4">
              <label htmlFor="id_card" className="block text-sm font-semibold text-gray-600">Student's ID Card</label>
              <input type="text" id="id_card" className="mt-1 p-2 w-full border rounded-md" 
              value={id_card}
              onChange={((e) => setIdCard(e.target.value))}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="dob" className="block text-sm font-semibold text-gray-600">Date of Birth</label>
              <input type="date" id="dob" className="mt-1 p-2 w-full border rounded-md" 
              value={dob ? dob.toISOString().split('T')[0] : ''}
              onChange={((e) => setDob( new Date(e.target.value)))}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-600">Email</label>
              <input type="text" id="email" className="mt-1 p-2 w-full border rounded-md" 
              value={email}
              onChange={((e) => setEmail(e.target.value))}
              />
            </div>
        </div>        

        {/* Submit Button */}
        <div className="col-span-3 md:col-span-2 lg:col-span-1">
            <h4>{loading && <h5>Loading .....</h5>}</h4>
        </div>

        <div className="col-span-3 md:col-span-2 lg:col-span-1">
          <button
            className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-600 w-full"
          >
            {loading ? 'Loading....' : 'SAVE'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
