//Template expression
const TemplaceExpression = () => {
    const name = "Lucas";
    const data = {
        age: 26,
        job: "Programador"
    }

    return (
        <div>
            <p>Olá {name}, a soma é {2+2}</p>
            <p>sua idade é {data.age} e trabalha como {data.job}</p>
        </div>
    )
}

export default TemplaceExpression