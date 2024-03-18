const Temperatura = () => {
    function celsiusParaFahrenheit(c) {
        return 9 / 5 * c + 32
    }

    function fahrenheitParaCelsius(f) {
        return (f - 32) * 5 / 9
    }

    function kelvin(k) {
        const celsius = (k - 273)
        const fahrenheit = (k - 273) * 9 / 5 + 32
        return {celsius, fahrenheit}
    }

    return <div>
        <h2>Celsius Para Fahrenheit: {celsiusParaFahrenheit(35)}</h2>
        <h2>Fahrenheit Para Celsius: {fahrenheitParaCelsius(35)}</h2>
        <h2>Kelvin Para Celsius: {kelvin(35).celsius}</h2>
        <h2>Kelvin Para Fahrenheit: {kelvin(35).fahrenheit}</h2>
    </div>
}
export default Temperatura