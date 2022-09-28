import React from 'react'
import Tables from './Components/Admin/Tables'
import dummyData from './containers/Dummydata'

const ex = () => {
const column = [
    {heading:"Name" , value:"name"},
    {heading:"Email" , value:"email"},
    {heading:"Phone" , value:"phone"},
    {heading:"city" , value:"adress.city"}
]

const data = [
    {
        id:"01",
        name:"nagasai",
        email:"nagasai@gmail.com",
        phone:"9941555",
        adress : {
            city:"tadepalligudem",
        }
    },
    {
        id:"02",
        name:"chaitanya",
        email:"chaitanay@gmail.com",
        phone:"991322255",
        adress : {
            city:"hyderabad",
        }
    },
    {
        id:"01",
        name:"swaru",
        email:"swaru@gmail.com",
        phone:"112345666",
        adress : {
            city:"pune",
        }
    },
]

  return (
    <div>
      <Tables column ={column} data ={data} />
    </div>
  )
}

export default ex
