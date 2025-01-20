import './RandomColor.css'


//#123456
//rgb(25,45,68)

const colorTypeMap = {
    hex: 'Hex',
    rgb: 'Rgb',
}

function RandomColor() {


    const [colorType, setColorType] = useState(colorTypeMap.hex)

    const [color, setColor] = useState('#000')

    function getRandomIndex(length) {
        return Math.floor(Math.random() * length)
    }

    function generateHexRandomColor() {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        const hexColorMaxLength = 6

        let hexColor = "#";
        for (let i = 0; i < hexColorMaxLength; i++) {
            hexColor += hex[getRandomIndex(hex.length)]
        }

        setColor(hexColor);
    }

    function generateRgbRandomColor() {
        const maxRgbColorLength = 256;

        const r = getRandomIndex(maxRgbColorLength);
        const g = getRandomIndex(maxRgbColorLength);
        const b = getRandomIndex(maxRgbColorLength);

        const rgbColor = `rgb(${r},${g},${b})`;

        setColor(rgbColor);
    }

    return (
        <>
            <h1>Random Hex</h1>

            <div className="randomColor-container">


                <div
                    className="randomColor-actions-container"

                >
                    <button
                        onClick={() => setColorType(colorTypeMap.hex)}
                    >
                        Create Hex Color
                    </button>
                    <button
                        onClick={() => setColorType(colorTypeMap.rgb)}
                    >
                        Create Rgb Color
                    </button>
                    <button
                        onClick={
                            colorType === colorTypeMap.hex
                                ? generateHexRandomColor
                                : generateRgbRandomColor
                        }
                    >
                        Generate Random Color
                    </button>
                </div>

                <div
                    className="randomColor-content"
                    style={{
                        backgroundColor: color,
                    }}
                >
                    <div className="randomColor-content__title">

                        <p>{colorType + ' Color'}</p>
                        <p>{color}</p>
                    </div>
                </div>
            </div>
        </>

    );
}

export default RandomColor;