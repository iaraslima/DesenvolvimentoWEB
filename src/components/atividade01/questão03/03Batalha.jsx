import {Children, cloneElement} from 'react';

const Hero = ({name, arena}) => {
    return (
        <div>
            <hr width="95%"/>
            <h2>Olá, eu sou o herói {name}. Estou na Arena {arena}!</h2>
        </div>
    )
}

const Enemy = ({name, arena}) => {
    return (
        <div>
            <hr width="95%"/>
            <h2>Oi, eu sou {name}, o inimigo. Estou na Arena {arena}!</h2>
        </div>
    )
}

const Arena1  = ({name, children}) => {
    return (
        <div>
            <h1>Arena: {name} </h1>
            {
                Children.map(
                    children,
                    (child) => {
                        return cloneElement(child,{arena: name})
                    }
                )
            }
        </div>
    )
}


const Arena2 = ({name}) => {
    return (
        <div>
            <h1>Arena: {name}</h1>
            <Hero name = "Pirata do Vasco" />
            <img src = "https://i.pinimg.com/originals/39/11/e6/3911e621b85e6248a8812d02eeee0a80.jpg"
                 alt = "Pirata"
                 style = {{width: "200px"}}
            />

            <Enemy name = "Campeonato Série B"  />
            <img src = "https://upload.wikimedia.org/wikipedia/pt/f/f4/Campeonato_Brasileiro_S%C3%A9rie_B_logo.png"
                 alt = "Série B"
                 style = {{width: "200px"}}
            />
        </div>
    )
}

const World = (props) => {
    return(
        <div>
            {props.children}
        </div>
    )
}

export default {Hero, Enemy, Arena1, Arena2, World};