import React, { useState, useEffect } from 'react';
import FingerprintScanner from 'react-native-fingerprint-scanner';

function ReactNativeLogin() {
    const [errorMessageLegacy, setErrorMessageLegacy] = useState(undefined);
    const [biometricLegacy, setBiometricLegacy] = useState(undefined);

    const authCurrent = () => {
        FingerprintScanner
            .authenticate({ title: 'Log in with Biometrics' })
            .then((res) => {
                console.log('res', res);
            });
    }
    useEffect(() => {
        authCurrent();

        return (() => {
            FingerprintScanner.release();
        })
    }, []);

    
    return (
        <div className="ReactNativeLogin">
            <h1>This is React Native Login</h1>
        </div>
    );
}

export default ReactNativeLogin;
