import { useEffect, useState } from 'react'
import { MultiSelect } from "react-multi-select-component"
import './CountryList.css'

const ListSuspen = () => {






    const [country, setCountry] = useState([])
    const [select, setSelect] = useState([])



    useEffect(() => {


        setCountry({ loading: true })
        const apiUrl = `https://amazon-api.sellead.com/country`
        fetch(apiUrl)
            .then((res) => res.json())
            .then((repos) => {
                const dataList = []
                repos.map(country => dataList.push({ label: country.name, value: country.code }))
                console.log(dataList)
                setCountry(dataList)
            })
    }, [])


        return (


            <div className='style-select'>


                <h3>País:</h3>
                {/* <pre>{JSON.stringify(select)}</pre> */}

                {/* <input value={props.value} required={props.requiredField} placeholder={props.placeholder} /> */}
                <MultiSelect

                    options={country}
                    value={select}
                    onChange={setSelect}
                    

                />

            </div>



        )
    
        }
    export default ListSuspen
