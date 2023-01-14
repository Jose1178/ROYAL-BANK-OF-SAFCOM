

// function Table(){
//  const[transaction, setTransaction] = useState([])

//   useEffect(()=>{
//     fetch('http://localhost:3000/transactions')
//     .then(res=>res.json())
//     .then(data=>{
//       setTransaction(data)
      
//     })
//   },[])

//   const newTransaction = transaction.map((array)=>{
//       return(
//         <tr key={array.id}>
//           <td>{array.date}</td> 
//           <td>{array.description}</td>
//           <td>{array.category}</td>
//           <td>{array.amount}</td>
//         </tr>
//       )
//   })


//     return(
      
//        <table className="table table-striped table-hover">
        
//             <thead>
//               <tr>
//                 <th>Date</th>
//                 <th>Description</th>
//                 <th>Category</th>
//                 <th>Amount</th>
//               </tr>
//       </thead>
//             <tbody>
//             {
//               newTransaction
//             }
             
             
//            </tbody>
//       </table>


//     )
// }
import React,{useState, useEffect} from "react";

function Table(){
  const[transactions, setList] = useState([])

  useEffect(()=>{
    fetch('http://localhost:3000/transactions')
    .then(res=>res.json())
    .then(data=>{
      setList(data)
      
    })
  },[])

  const newList = transactions.map((array)=>{
      return(
        <tr key={array.id}>
      <td>{array.date}</td> 
      <td>{array.description}</td>
      <td>{array.category}</td>
      <td>{array.amount}</td>
      
      </tr>
      )
  })


    return(
      
       <table className="table table-spined table-hover">
        
            <thead>
                <tr>
                  <th>Date</th>
                  <th>Description</th>
                  <th>Category</th>
                  <th>Amount</th>
               </tr>
            </thead>
            <tbody>
            {newList}
            
            </tbody>
          </table>


    )
}
  
    

 
export default Table