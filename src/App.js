import { useState } from "react";
import "./App.css";


const App = () => {


  let [name, setName] = useState("")
  
  let[date,setDate] = useState()
  let [select, setSelect] = useState()
  let[selects,setSelects] = useState()
  let [gender,setGender] = useState("")
  

  
  
  


  let [users, setUsers] = useState([])

  const button_onClick = () => {
    let obj = {
      user_name: name,
      user_date: date,
      user_select: select,
      user_selects:selects,
      user_gender: gender,
    
    }

    setUsers(prevState => [...prevState, obj])

  }



  return (

    <>
       
      <div style={{display:"flex", width:"400px",padding:"50px",margin:"175px", background:"lightblue",flexDirection:"column",justifyContent:"center"}}>
        <h1>Student Id</h1>
        <label>Name:</label>
       <input  onChange={ (event) => { setName(event.target.value) } }style={{margin:"20px",fontWeight:"300px"}}  placeholder=" Enter your Name "></input>
       <label>Date Of Birth  :</label>
       <input type="date"onChange={e=>setDate(e.target.value)}style={{margin:"20px"}}/>
       <div>
        <label>Class  :</label>
         <select value={select}onChange={e=>setSelect(e.target.value)}style={{margin:"15px"}}>
          <option>I</option>
          <option>II</option>
          <option>III</option>
          <option>IV</option>
          <option>V</option>
          <option>VI</option>
          <option>VII</option>
          <option>VIII</option>
          <option>IX</option>
          <option>X</option>
          <option>XI</option>
          <option>XII</option>
        </select>
        <div>
        <label>Division :</label>
      <select value={selects}onChange={e=>setSelects(e.target.value)}style={{margin:"20px"}}>
       <option>A</option>
        <option>B</option>
        <option>C</option>
         </select>
       </div>
      </div>
       <div>
       <label>Gender  :</label>
      <input type="radio" name="gender"value="Male" onChange={(e) =>setGender(e.target.value)}style={{margin:"15px"}}/>Male
       <input type="radio" name="gender"value="Female" onChange={(e) =>setGender(e.target.value)}style={{margin:"15px"}}/>Female
       </div>

        
      

      <button
        style={{ padding: "10px", margin: "25px", width: "20%", background: "blue", color: "white", fontSize: "12px" }}
        onClick={() => { button_onClick() }}
      >submit</button>

</div>
      <div>
        <div>Users List:</div>
      
          
            
            
              <table border={1}width="40%"cellPadding={10}>
                <tr>
                <th>User Name</th>
                <th>User Date  </th>
                <th> Usergender</th>
                <th>User Class</th>
                <th>User Division</th>
                </tr>
                {users.map((data) => {
                return(
                  <>
                  <tr>
                <td>  {data.user_name}</td>
                <td>{data.user_date}</td>
                <td>{data.user_gender}</td>
                <td> {data.user_select}</td>
                <td>{data.user_selects}</td>
                </tr>
        
              </>
                )
                
          })}
        </table>
      
      
      



    
  

</div>
</>
  )}


export default App;

