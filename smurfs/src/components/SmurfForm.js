
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Field, withFormik } from "formik";

const SmurfForm = ({ status }) => {

    const [smurf, setSmurf] = useState([]);

    useEffect( () => {
        if (status) {
            setSmurf([...smurf, status]);
        }
    }, [status]);

    return (
        <div className='smurf-form'>
            <h3>Add a Smurf!</h3>
            <Form>
                <Field type="text" name="name" placeholder="Name" />

                <Field type="text" name="age" placeholder="Age" />

                <Field type="text" name="height" placeholder="Height" />

                {/* <Field type="text" name="id" placeholder="id" /> */}

                <button type='submit' 
                    onClick={()=> window.location.reload()}>
                    Submit!</button>
            </Form>
        </div>
    )
}

  const FormikUserForm = withFormik({

    mapPropsToValues({ name, age, height}) {
      return {
        name: name || "",
        age: age || '',
        height: height || "",
        id: Date.now(),
      };
    },
  
    handleSubmit(values, { setStatus }) {

    axios
      .post("http://localhost:3333/smurfs", values)
      .then(res => {
        setStatus(res.data);
      })
      .catch(err => console.log(err.response));
  }

  })(SmurfForm);
  
  export default FormikUserForm;


// import React, { useState } from "react";
// import axios from "axios";

// const Form = () => {
  
//   const [smurf, setSmurf] = useState({
//     name:'',
//     age:'',
//     height:'',
//     id:''
//   });
//   const handleChanges = event => {
    
//     setSmurf({ ...smurf, [event.target.name]: event.target.value });
//     console.log(smurf);
//   };
//   const submitForm = event => {
//     event.preventDefault();
//     const newSmurf = {
//       // id: Date.now(),
//       name: smurf.name,
//       age: smurf.age,
//       height:smurf.height,
//     };
//     setSmurf(newSmurf);
//     // setSmurf({ name: "", age: "" , height: "" , id:"",});
//     console.log(event.target.value);
//   };

//   return (
//     <form onSubmit={submitForm}>
//       <label htmlFor="Name">Name</label>
//       <input
//         id="name"
//         type="text"
//         name="name"
//         onChange={handleChanges}
//         value={smurf.name}
//       />
//       <label htmlFor="Age">Age</label>
//       <input
//         id="age"
//         type="text"
//         name="age"
//         onChange={handleChanges}
//         value={smurf.age}
//       />
//       <label htmlFor="Height">Height</label>
//       <input
//         id="height"
//         type="text"
//         name="height"
//         onChange={handleChanges}
//         value={smurf.height}
//       />
//       {/* <label htmlFor="ID">ID</label>
//       <input
//         id="id"
//         type="text"
//         name="id"
//         onChange={handleChanges}
//         value={smurf.id}
//       /> */}

//       <button type="submit">Add Smurf</button>
//     </form>
//   );
// };

// export default Form;
