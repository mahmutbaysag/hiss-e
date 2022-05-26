import React,{useState,useEffect} from 'react'


function App() {

  const [data, setData] = useState([{}])

  useEffect(()=>{
    fetch("/hisseler").then(
      res => res.json()
    ).then(
      data=>{
        setData(data)
        console.log(data)
      }
    )
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