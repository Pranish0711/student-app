import {useEffect, useState} from "react";
import "./App.css";


const App = () => {
    let [name, setName] = useState("")
    let[dateOfBirth,setDateOfBirth] = useState()
    let [className, setClassName] = useState()
    let[division,setDivision] = useState()
    let [gender,setGender] = useState("")
    let [users, setUsers] = useState([])
    const [message, setMessage] = useState("");


    const studentData = () => {
        fetch("http://localhost:8080/api/student")
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setUsers(data);
                            });
    }


    useEffect(() => {
        studentData();
    }, []);




    let button_onClick = async () => {
        try {
            let obj = {
                name: name,
                date: dateOfBirth,
                className: className,
                division:division,
                gender: gender,
            }
            setUsers(prevState => [...prevState, obj])
            let res = await fetch("http://localhost:8080/api/student", {
                method: "POST",




                headers: new Headers({'content-type': 'application/json'}),
                body: JSON.stringify({
                    "name": name,
                    "dateOfBirth": dateOfBirth,
                    "className": className,
                    "division": division,
                    "gender": gender
                }),
            });
            let resJson = await res.json();
            if (res.status === 200) {
                setMessage("User created successfully");
            } else {
                setMessage("Some error occured");
            }
        } catch (err) {
            console.log(err);
        }
    };








    return (
        <>
            <div style={{display:"flex", width:"350px",padding:"60px",margin:"50px", background:"lightblue",flexDirection:"column",justifyContent:"center"}}>




                <h1>Student Id</h1>
                <div><label style={{fontWeight:"500"}}>Name:</label>
                    <input onChange={ (event) => { setName(event.target.value) } } style={{margin:"20px"}} placeholder=" Enter your Name "></input>
                </div><div>
                <label style={{fontWeight:"500"}}>Date Of Birth :</label>
                <input type="date" onChange= {e=>setDateOfBirth(e.target.value)} style={{margin:"20px"}}/></div>
                <div>
                    <label style={{fontWeight:"500"}}>Class :</label>
                    <select value={className} onChange={e=>setClassName(e.target.value)} style={{margin:"15px"}}>
                        <option>Select</option>
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
                        <label style={{fontWeight:"500"}}>Division :</label>
                        <select value={division} onChange={e=>setDivision(e.target.value)} style={{margin:"20px"}}>
                            <option>Select</option>
                            <option>A</option>
                            <option>B</option>
                            <option>C</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label style={{fontWeight:"500"}}>Gender :</label>
                    <input type="radio" name="gender" value="Male" onChange={(e) =>setGender(e.target.value)} style={{margin:"15px"}}/>Male
                    <input type="radio" name="gender" value="Female" onChange={(e) =>setGender(e.target.value)} style={{margin:"15px"}}/>Female
                </div> <button
                style={{ padding: "10px", margin: "20px", width: "20%", background: "royalblue", borderRadius:"10%", color: "white",borderStyle:"none", fontSize: "12px" }}
                onClick={() => { button_onClick() }}
            >submit</button>
            </div>








            <div className="message">{message ? <p>{message}</p> : null}</div>












            <div>Users List:</div>
            <table border={1} width="40%" cellPadding={10}>
                <tr>
                    <th>User Name</th>
                    <th>User Date </th>
                    <th> User Gender</th>
                    <th>User Class</th>
                    <th>User Division</th>
                </tr>
                {users.map((data) => {
                    return(
                        <>
                            <tr>
                                <td> {data.name}</td>
                                <td>{data.dateOfBirth}</td>
                                <td>{data.division}</td>
                                <td> {data.className}</td>
                                <td>{data.gender}</td>
                            </tr>
                        </>
                    )
                })}
            </table>








        </>
    )}
export default App;

























