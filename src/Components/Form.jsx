import React, {useState} from "react";

const Form = (props) => {

    const initialValues = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmpassword: ''
    }
    const [state, setState] = useState(initialValues);
    const{firstname, lastname, email, password, confirmpassword} = state;
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);


    const errores = {
        errorfirstname: '',
        errorlastname: '',
        erroremail: '',
        errorpassword: '',
        errorconfirmpassword: ''
    }
    const [errorstate, setErrorstate] = useState(errores);
    const{errorfirstname, errorlastname, erroremail, errorpassword, /*errorconfirmpassword*/} = errorstate;

    const handleInputs = (e) =>{
        setState({
            ...state,
            [e.target.name] : e.target.value,
        });

        if (e.target.name==='firstname' && e.target.value.length<= 2)  {
            setErrorstate({
                ...errorstate,
                errorfirstname: 'First Name: Debe contener más de 2 caracteres'});

        }else if (e.target.name==='lastname' && e.target.value.length <= 2) {
            setErrorstate({
                ...errorstate,
                errorlastname: 'Last Name: Debe contener más de 2 caracteres'});
        }else if (e.target.name==='email' && e.target.value.length <= 5) {
            setErrorstate({
                ...errorstate,
                erroremail: 'Email Adress: Debe contener más de 5 caracteres'});
        }else if (e.target.name==='password' && e.target.value.length <= 7) {
            setErrorstate({
                ...errorstate,
                errorpassword: 'Password: Debe contener al menos 8 caracteres'});
        }else {
            setErrorstate('');
        }
        
        if ( e.target.name==='firstname' && e.target.value.length=== 0){
            setErrorstate('');
        }else if ( e.target.name==='lastname' && e.target.value.length=== 0){
            setErrorstate('');
        }else if ( e.target.name==='email' && e.target.value.length=== 0){
            setErrorstate('');
        }else if ( e.target.name==='password' && e.target.value.length=== 0){
            setErrorstate('');
        }
    }   


    const createUser = (e) => {
        e.preventDefault();
        const newUser = {
            firstname,
            lastname,
            email,
            password,
            confirmpassword
        }
        console.log("Welcome", newUser);
        setHasBeenSubmitted( true );
    };

    const limpiar = () => {
        setState(initialValues);
    }

    const formMessage = () => {
        if( hasBeenSubmitted ) {
        return "Gracias por enviar el formulario!";
	} else {
        return "Bienvenido, por favor completa y envía el formulario";
	}
    };

    return (
        <>
            <form onSubmit={ createUser }>
                <h3 className="mensaje">{ formMessage() }</h3>
                <div className="inputLabel">
                    <label className="label">First Name</label>
                    <input className="input"  type="text"  name="firstname" value={state.firstname} onChange={handleInputs}/>
                    {
                    errorfirstname ?
                    <p style={{color:'red'}}>{ errorfirstname }</p> :
                    ''
                    }
                </div>
                <div  className="inputLabel">
                    <label className="label">Last Name</label>
                    <input className="input"  name="lastname" type="text" value={state.lastname}  onChange={handleInputs}/>
                    {
                    errorlastname ?
                    <p style={{color:'red'}}>{ errorlastname }</p> :
                    ''
                    }
                </div>
                <div  className="inputLabel">
                    <label className="label">Email Adress</label>
                    <input className="input"  name="email" type="text" value={state.email} onChange={handleInputs}/>
                    {
                    erroremail ?
                    <p style={{color:'red'}}>{ erroremail }</p> :
                    ''
                    }
                </div>
                <div className="inputLabel" >
                    <label className="label">Password</label>
                    <input className="input"  name="password" type="text" value={state.password}  onChange={handleInputs}/>
                    {
                    errorpassword ?
                    <p style={{color:'red'}}>{ errorpassword }</p> :
                    ''
                    }
                </div>
                <div  className="inputLabel">
                    <label className="label">Confirm Password</label>
                    <input className="input" name="confirmpassword" type="text" value={state.confirmpassword} onChange={handleInputs}/>
                    <p style={{color:'red'}}>
                        {password === confirmpassword|| confirmpassword.length===0?" ": "No Coincide con Password"}
                    </p>

                </div>
                <div className="botones">
                    <input className= "btn" type="submit" value="Create User" />
                    <button className= "btn" type="button" onClick={limpiar}>Limpiar</button>
                </div>

            </form>
        </>
        
    )
}

export default Form;