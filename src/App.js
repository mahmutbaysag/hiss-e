import React,{useState,useEffect} from 'react'
import axios from 'axios'

function App() {

  const [data, setData] = useState([{}])

  useEffect(()=>{
    axios.get('https://hisse-server.herokuapp.com/hisseler')
    .then(function(response){
      setData(response);
    }).catch(function(error){
      console.log(error);
    })

  }, [])

  

  return (
    <table id='hissetablo' className='table text-black table-stripped table-hover dt-responsive'>
     <thead className='text-light bg-dark'> <tr>
        <th>Hisse Adı</th>
        <th>Son Fiyatı</th>
        <th>Değişim Oranı</th>
        <th>Piyasa Hacmi</th>
      </tr>
      </thead>
    {(typeof data.hisseler === 'undefined') ? (
      <p>Yükleniyor...</p>
    ): (
      
      data.hisseler.map((hisse,i) =>(
        <tr key={i}>
          <td>{hisse.ad}</td>
          <td>{hisse.sonfiyat}</td>
          <td style={{background:"#f1f1f1"}}>{hisse.degisim}</td>
          <td>{hisse.hacim}</td>
        </tr>
      ))
    )}

    </table>
  )
}


export default App;