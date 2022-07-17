import { useEffect, useState } from "react"

const useParts = () => {
    const [partsLoading, setPartsLoading] = useState(true);
    const [parts, setParts] = useState([]);
    useEffect(() => {
        fetch("https://sheltered-wave-82643.herokuapp.com/parts")
            .then(res => res.json())
            .then(data => {
                setPartsLoading(false);
                setParts(data);
            })
    }, []);

    return [parts, partsLoading]
}

export default useParts;