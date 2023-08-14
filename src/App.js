import React, { useState } from 'react'
import NavBar from './components/NavBar'
import TextForm from './components/TextForm';
import './App.css'
import Alert from './components/Alert';
const App = () => {
    const [mode, setMode] = useState('light');
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null)
        }, 1500);
    }
    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = 'black';
            document.body.style.color = 'white';
            showAlert("Dark mode has been enabled", "success");

        } else {
            setMode('light');
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
            showAlert("Light mode has been enabled", "success");

        }
    }
    return (
        <>
            <NavBar mode={mode} toggleMode={toggleMode} />
            <Alert alert={alert} />
            <TextForm showAlert={showAlert} mode={mode} />
        </>
    )
}

export default App