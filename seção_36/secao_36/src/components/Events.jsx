import React from 'react'

const Events = () => {
    const handleClick = () => {
        console.log("executou")
    }

    const renderSomething = (x) => {
        if(x) return <h1>Renderizando isso</h1>
        else return <h1>Renderizando aquilo</h1>
    }
    
    return (
        <div>
            <div>
                <button onClick={handleClick}>Clique aqui</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}

export default Events