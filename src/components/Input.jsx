// import React, {useState} from "react";

// //const Input= ({transaction, setTransaction}) => {
//     // const[formData, setFormData] = useState({
//     //     date:"",
//     //     description:"",
//     //     category:"",
//     //     amount:""

//     // })
// const Input = ()=>{
//     const[date, setDate] = useState("")
//     const[description, setDescription] = useState("")
//     const[category, setCategory] = useState("")
//     const[amount, setAmount] = useState(0)

// }
    

//     // const handleSubmit = (event)=>{
//     //     event.preventDefault()
//     //     setTransaction([...transactions,formData])

//     // }
//     // const handleChange = (event) => {
//     //     formData[event.target.name] = event.target.value
//     //     setFormData({
//     //         ...formData,
//     //         [event.target.name]: event.target.value
//     //     })
//     // }

//     return(
//         <form className="row p-3">
//             <div className="col-3">
//             <input name="date" type="date" className="form-control form-control-sm" value={date} placeholder="date" aria-label=".form-control form-control-sm" />  
//             </div>
//              <div className="col-3">
//             <input type="text"   className="form-control form-control-sm" value={description} placeholder="description" aria-label="form-control form-control-sm" />  
//             </div>
//             <div className="col-3">
//             <input type="text"  className="form-control form-control-sm" value={category}  placeholder="category" aria-label="form-control form-control-sm" />  
//             </div>
//             <div className="col-3">
//             <input type="text" className="form-control form-control-sm" value={amount} placeholder="amount" aria-label="form-control form-control-sm" />  
//             </div>
//             <div className="col-3  mx-auto p-3">
//             <button className="btn btn-sm btn-success mx-auto" type="submit">Submit</button>
//             </div>
//             <div className="col-3  mx-auto p-3">
//             <button className="btn btn-sm btn-success mx-auto" type="button">Delete</button>
//             </div>
//             <div className="col-3  mx-auto p-3">
//             <button className="btn btn-sm btn-success mx-auto" type="submit">Collapse</button>
//             </div>

//         </form>
//     )


const Input = () =>{
    return(
        <div>
        <form className="row p-3">
            <div className="col-3">
             <input name="date" type="date" className="form-control form-control-sm"  placeholder="date" aria-label=".form-control form-control-sm" />  
             </div>
              <div className="col-3">
             <input type="text"   className="form-control form-control-sm"  placeholder="description" aria-label="form-control form-control-sm" />  
            </div>
             <div className="col-3">
            <input type="text"  className="form-control form-control-sm"   placeholder="category" aria-label="form-control form-control-sm" />  
            </div>
            <div className="col-3">
           <input type="text" className="form-control form-control-sm"  placeholder="amount" aria-label="form-control form-control-sm" />  
           </div>
           <div className="col-3  mx-auto p-3">
         <button className="btn btn-sm btn-success mx-auto" type="submit">Submit</button>
            </div>
           <div className="col-3  mx-auto p-3">
            <button className="btn btn-sm btn-success mx-auto" type="button">Delete</button>
            </div>
            <div className="col-3  mx-auto p-3">
            <button className="btn btn-sm btn-success mx-auto" type="submit">Collapse</button>
            </div>
              </form>
              </div>
    )
}


export default Input