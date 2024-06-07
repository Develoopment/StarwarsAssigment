import React from 'react'

// the shape of the film object (contains the properties of title etc)
interface Film{
    title: string;
    producer: string;
    director: string;
    release_date: string;
}

// the shape of the props that will be passed to this child component - it is an array of objects, of which each object is in the shape of Film (as defined above)
// WHY DO I NEED TO DO IT THIS WAY? Why can't I set React.FC<Film[]> ?
interface FilmProps{
    filmlist: Film[];
}

// explicitly typing FilmTable as a react functional component that has FilmProps passed into it
const FilmTable: React.FC<FilmProps> = ({filmlist}, id) => {
  return (
    <div className='px-8'>

    <table className='w-full border-collapse text-[white]'>
        <tbody>
        <tr className='text-left bg-[#4eeafb] text-[white]'>
            <th className="border p-2 border-solid border-[#ddd]">Title</th>
            <th className="border p-2 border-solid border-[#ddd]">Producer</th>
            <th className="border p-2 border-solid border-[#ddd]">Director</th>
            <th className="border p-2 border-solid border-[#ddd]">Release Date</th>
        </tr>

        {filmlist.map(film => 
            (
                <tr key={id} className='hover:bg-[#95fbff89] '>
                    <td key={id + 1} className="border p-2 border-solid border-[#ddd]">{film.title}</td>
                    <td key={id + 2} className="border p-2 border-solid border-[#ddd]">{film.producer}</td>
                    <td key={id + 3} className="border p-2 border-solid border-[#ddd]">{film.director}</td>
                    <td key={id + 4} className="border p-2 border-solid border-[#ddd]">{film.release_date}</td>
                </tr>
            )
        )}
        </tbody>
    </table>

    </div>
    
  )
}

export default FilmTable