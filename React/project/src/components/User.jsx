import React from 'react'
import useFetch from '../hooks/useFetch'


function User({ data }) {
  const users = useFetch('https://jsonplaceholder.typicode.com/users')
  console.log(users);

  const show = () => {
    alert()
  }
  const display = (data) => {
    alert(data)

  }
  
  return (
    <>
      <p className='text-primary' style={{ textAlign: 'center' }}>{data}</p>
      <button onClick={() => show("btnclicked")} className='btn btn-primary'>click here</button>
      <input onChange={(e) => display(e.target.value)} type="text" placeholder='enter data' className='form-control m-5' />

      <table className='table'>
        <thead>
          <tr>
            <th>SL.No</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            users?.map((user, index)=>(
              <tr key={index}>
                <td>{index+1}</td>
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>)
}

export default User