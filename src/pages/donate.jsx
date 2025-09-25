import React from 'react'

const donate = () => {
  return (
    <>
    {/*Donate for a cause and make the world a better place*/}
    <div className='flex justify-center items-center h-24 bg-black -800 text-white font-bold '>
      <h1 className='text-3xl font-bold'>DONATE FOR A CAUSE AND MAKE THE WORLD A BETTER PLACE</h1>
    </div>  <br /><br />
    <section className="p-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Support Our Mission</h2>
        <form className="space-y-6">
          <div>
            <label className="block mb-2 font-medium" htmlFor="name">Full Name</label>
            <input className="w-full p-3 border border-gray-300 rounded-lg" type="text" id="name" placeholder="Your full name" required />
          </div>
          <div>
            <label className="block mb-2 font-medium" htmlFor="email">Email Address</label>
            <input className="w-full p-3 border border-gray-300 rounded-lg" type="email" id="email" placeholder="Your email address" required />
          </div>
          <div>
            <label className="block mb-2 font-medium" htmlFor="amount">Donation Amount (USD)</label>
            <input className="w-full p-3 border border-gray-300 rounded-lg" type="number" id="amount" placeholder="Enter amount in USD" required />
          </div>
          <div>
            <label className="block mb-2 font-medium" htmlFor="message">Message (Optional)</label>
            <textarea className="w-full p-3 border border-gray-300 rounded-lg" id="message" rows="4" placeholder="Your message"></textarea>
          </div>
          <div className="text-center">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition" type="submit">Donate Now</button>
          </div>
        </form>
      </div>
    </section>
    <br /><br />
    <div className='flex justify-center items-center h-24 bg-black -800 text-white font-bold '>
      <h1 className='text-4xl font-bold'>THANK YOU FOR YOUR SUPPORT!</h1>
    </div>  <br /><br />
    </>
  )
}

export default donate