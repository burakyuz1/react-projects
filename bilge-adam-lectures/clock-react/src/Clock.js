import React, { useEffect, useState } from 'react'
import './Clock.css';

function Clock() {
    const [zaman, setZaman] = useState(new Date());

    const guncelle = function () {
        console.log('guncelleniyor');
        setZaman(new Date());
    }

    useEffect(() => {
        console.log('burası ilk render sonrası çalışır. aşağıya bir kere çalışması için boş array geçtik');
         const timerId = setInterval(guncelle, 1000)


        // return (()=> console.log("Unmount olurken çalısır"));
        //Dolayısıyla olmayan nesnenin useEffectini kullanabilmek için timerId temizlemek lazım.
        return (() => clearInterval(timerId))
    }, [])


    return (
        <div className='Clock'>
            {zaman.toLocaleTimeString()}
        </div>
    )
}

export default Clock;