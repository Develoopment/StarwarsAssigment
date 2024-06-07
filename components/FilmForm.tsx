import React from 'react'

const FilmForm = () => {

  const handleSubmit = async (formData: FormData) => {

    "use server";

    try {

      const response = await fetch("https://eosm0cegtsul67e.m.pipedream.net", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      })

      if(response.status == 200){
        console.log("Success: " + response.status)
      }


    } catch{Error}{

      console.log(Error);

    }

  }

  return (
    <form action={handleSubmit}  className='bg-[#282828] shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-16'>
        <label className="text-white" htmlFor="title">Title</label>
        <input className="shadow appearance-none border-2 rounded w-full py-2 px-3 mb-5 text-gray-800 leading-tight focus:outline-none focus:shadow-outline" type="text" id="title" />

        <label className="text-white" htmlFor="director">Director</label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 mb-5 text-gray-800 leading-tight focus:outline-none focus:shadow-outline" type="text" id="director" />

        <label className="text-white" htmlFor="producer">Producer</label>
        <input className=" mb-5 shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline" type="text" id="producer" />

        <label className="text-white" htmlFor="release_date">Release Date</label>
        <input className=" mb-5 shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline" type="text" id="release_date" />

        <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Submit</button>
    </form>
  )
}

export default FilmForm