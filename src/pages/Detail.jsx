import React from 'react'
import { useParams } from 'react-router-dom'

export default function Detail(props) {
  // 파라미터값을 받아오기
  const {data} = props;
  const params = useParams();
  console.log(params.id);

  return (
    <>
      <div className='container'>
        <img src={data[params.id].flags.svg} />
        <p>Population: {data[params.id].population}</p>
        <p>Region: {data[params.id].region}</p>
        <p>Capital: {data[params.id].capital}</p>
      </div>
    </>
  )
}
