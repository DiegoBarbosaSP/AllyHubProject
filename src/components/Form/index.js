import './Form.css';
import TextField from '../TextField/index';
import ListSuspen from '../CountryList';
import Buttom from '../Buttom';
import { useState } from 'react';
import CityList from '../CityList';
import NumberField from '../NumberField/index';







const Form = (props) => {



    // Criar state no Form por ser mais elevado, criar state p/ cada input

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cel, setCel] = useState('');
    const [cpf, setCpf] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('')







    const Saved = (event) => {
        // Previne que a pag seja recarregada após a solicitacao
        event.preventDefault()
        props.countrySaved({
            name,
            email,
            cel,
            cpf,
            country,
            city
        })
    }

    return (
        <section className="forms">
            <form onSubmit={Saved} >
                <h2>Preencha os Dados Abaixo:</h2>
                <TextField
                    requiredField={true}
                    label="Nome:"
                    placeholder="Digite seu nome"
                    value={name}
                    unchanged={value => setName(value)}
                />
                <TextField
                    requiredField={true}
                    label="Email:"
                    placeholder="Digite seu email"
                    value={email}
                    unchanged={value => setEmail(value)}
                />
                <NumberField
                    requiredField={true}
                    label="Telefone:"
                    placeholder="Digite o seu telefone"
                    value={cel}
                    unchanged={value => setCel(value)}
                />
                <NumberField

                    requiredField={true}
                    label="CPF:"
                    placeholder="Digite o seu CPF"
                    value={cpf}
                    unchanged={value => setCpf(value)}
                />

                <ListSuspen
                    value={country}
                    unchanged={value => setCountry(value)}

                />

                <CityList
                    value={city}
                    unchanged={value => setCity(value)}

                />


                <Buttom>
                    Enviar
                </Buttom>
            </form>
        </section>
    )
}


export default Form