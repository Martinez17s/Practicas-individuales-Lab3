import { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [showAlert, setShowAlert] = useState('');

    const handleInputChange = (e) => {
        const value = e.target.value;

        if (value.toLowerCase().includes('o')) {
            setShowAlert(true);
        } else {
            setShowAlert(false);
        }

        setUsername(value);
    };

    const handleRegister = () => {
        if (username == '') {
            alert("Ususario Invalido para registrarse");
        }else if (username.toLowerCase().includes('o')) {
            alert("Por favor, ¡Nombres de usuario sin la letra o!")
        }else {
            alert("¡Usuario registrado correctamente!"); 
        }
    };

    return (
        <div>
            <h2>Log In</h2>
            <input 
                type="text"
                value={username}
                onChange={handleInputChange}
                placeholder="Usuario"
            />
            <button onClick={handleRegister}>Login</button>

            {showAlert && (
                <p style={{color: 'red'}}>Por favor, ¡Nombres de usuario sin la letra o!</p>
            )}

            <p>Valor Ingresado: {username}</p>
        </div>
    );
};

export default Login;