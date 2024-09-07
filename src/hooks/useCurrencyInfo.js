import { useEffect , useState } from "react";

function useCurrencyInfo(currency){
    const [data , setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
        .then((res) => {return res.json()})
        .then((res) => {return setData(res[currency])})
    } , [currency])
    // console.log(data);
    return data;
}

export default useCurrencyInfo;