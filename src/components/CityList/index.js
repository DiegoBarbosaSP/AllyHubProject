import { useEffect, useState } from 'react';
import './CityList.css'
import { MultiSelect } from "react-multi-select-component"





const CityList = (props) => {



    const [city, setCity] = useState([])
    const [select, setSelect] = useState([])


    useEffect(() => {


        setCity({ loading: true })
        const apiUrl = `https://amazon-api.sellead.com/city`
        fetch(apiUrl)
            .then((res) => res.json())
            .then((repos) => {
                const dataList = []
                repos.map(city => dataList.push({label: city.name_ptbr, value: city.code}))
                console.log(dataList)
                setCity(dataList)
            })
    }, [])



    return (


        <div className='style-select'>

            <h3>Cidade:</h3>
            {/* <pre>{JSON.stringify(select)}</pre> */}
            <MultiSelect

                options={city}
                value={select}
                onChange={setSelect}
                

            />

        </div>



    )

}


export default CityList;
