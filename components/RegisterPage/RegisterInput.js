
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function RegisterInput() {
  const axios = require('axios');
  const [email, setEmail] = useState('');
  const [salutaion, setSalutation] = useState('');
  const [title, setTitle] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [birthday, setBirthday] = useState('');
  //YYYY-MM-DD
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);



  function submitForm(e) {
    e.preventDefault();

    axios
      .post("https://swipeback.fulda.dev/api/user/register", {
        email: email,
        password: password,
        firstname: first_name,
        lastname: last_name,
        birthDate: birthday,

      })
      .then((response) => displayOutput(response))
      .catch((err) => console.log(err));


    {
      this.state.errorMessage &&
        <h3 className="error"> {this.state.errorMessage} </h3>
    }

  };









  return (


    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8 bg-gray-500 p-10 bg-opacity-60 border border-double shadow-md">
          <div >
            <img
              className="mx-auto  "
              src='/logo.png'
              alt="SportSwipe Logo"
            />

          </div>
          <form onSubmit={(e) => submitForm(e)}>
            <div className="shadow sm:overflow-hidden sm:rounded-md">
              <div className="space-y-6 bg-transparent py-6 px-4 sm:p-6">
                <div>
                  <h3 className="text-lg font-medium leading-6 text-gray-100">Registriere dich, um Kurse erstellen zu können.</h3>
                </div>
                <div className="grid grid-cols-4 gap-3">




                  <div className="col-span-4">
                    <label htmlFor="email-address" className="block text-sm font-medium text-gray-200">
                      E-Mail Adresse
                    </label>
                    <input
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      type="text"
                      name="email-address"
                      id="email-address"
                      placeholder='@'
                      autoComplete="email"
                      className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500  sm:text-sm"
                    />
                  </div>

                  <div className="col-span-2">
                    <label htmlFor="salutaion" className="block text-sm font-medium text-gray-100">
                      Anrede
                    </label>
                    <input
                      value={salutaion}
                      onChange={e => setSalutation(e.target.value)}
                      type="text"
                      name="salutaion"
                      id="salutaion"
                      placeholder='Herr/Frau/Divers'
                      autoComplete="given-salutaion"
                      className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-2">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-100">
                      Title
                    </label>
                    <input
                      value={title}
                      onChange={e => setTitle(e.target.value)}
                      type="text"
                      name="title"
                      id="title"
                      placeholder='Dr/Prof/Master'
                      autoComplete="given-title"
                      className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-2 ">
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-100">
                      Vorname
                    </label>
                    <input
                      value={first_name}
                      onChange={e => setFirstName(e.target.value)}
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-2">
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-100">
                      Nachname
                    </label>
                    <input
                      value={last_name}
                      onChange={e => setLastName(e.target.value)}
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-2">
                    <label htmlFor="birthday" className="block text-sm font-medium text-gray-200">
                      Geburtstag
                    </label>
                    <input
                      value={birthday}
                      onChange={e => setBirthday(e.target.value)}
                      type="text"
                      name="birthday"
                      id="birthday"
                      autoComplete="birthday"
                      className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-3">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                      Passwort
                    </label>
                    <input
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      type="password"
                      name="password"
                      id="password"
                      autoComplete="password"
                      className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>




                </div>
              </div>
              <div className="bg-gray-50 bg-opacity-40 px-4 py-3 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Registrieren
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
