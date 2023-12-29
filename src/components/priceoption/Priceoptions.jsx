import { useEffect, useState } from "react";
import Priceoption from "./Priceoption";

const Priceoptions = () => {
    const [prices, setprices] = useState([])
    useEffect(() => {
        fetch('price.json')
        .then(res => res.json())
        .then(data => setprices(data))
    },[])
    return (
        <div className="m-4">
            <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4">
            {prices.map(price => <Priceoption key={price.id} priced={price}></Priceoption>)}
            </div>
        </div>
    );
};

export default Priceoptions;