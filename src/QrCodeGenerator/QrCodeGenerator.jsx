import './QrCodeGenerator.css'
import QRCode from "react-qr-code";
import {useState} from "react";

function QrCodeGenerator() {

    const [qrCode, setQrCode] = useState('');
    const [inputValue, setInputValue] = useState('')

    function handleOnChangeInputValue(e) {
        setInputValue(e.target.value)
    }

    function handleOnSubmitQRValue(e) {
        e.preventDefault();
        setQrCode(inputValue);
        setInputValue('');
    }

    return (
        <>
            <h1>Generate your own QR Code😎</h1>
            <form
                onSubmit={handleOnSubmitQRValue}
                className="qr-code-generator__form"
            >
                <input
                    type="text"
                    className="qr-code-generator__input"
                    id="qr-content"
                    name="qr-content"
                    placeholder="insert your QR Content"
                    value={inputValue}
                    onChange={handleOnChangeInputValue}
                    required
                />
                <button
                    className="qr-code-generator__form__submitButton"
                >Get my QR
                </button>
            </form>

            <div className="QrCode-container">
                <QRCode
                    id="qr-code-value"
                    value={qrCode}
                />
            </div>
        </>
    );
}

export default QrCodeGenerator;