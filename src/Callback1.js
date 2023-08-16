import React, { useCallback, useState } from 'react';
import Room from './Room';

function Callback1() {
    const [bathLight, setBathLight] = useState(false);
    const [kitchenLight, setKitchenLight] = useState(false);
    const [livingLight, setLivingLight] = useState(false);
    const [mainLight, setMainLight] = useState(false);
    const [allLight, setAllLight] = useState(false);

    const toggleBath = useCallback(() => {
        setBathLight(!bathLight);
    }, [bathLight])
    const toggleKitchen = useCallback(() => {
        setKitchenLight(!kitchenLight);
    }, [kitchenLight]);
    const toggleLiving = useCallback(() => {
        setLivingLight(!livingLight);
    }, [livingLight]);
    const toggleMain = useCallback(() => {
        setMainLight(!mainLight);
    }, [mainLight]);
    const toggleAll = useCallback(() => {
        setAllLight(!allLight);
    }, [allLight]);

    
    return (
        <div>
            <Room name="욕실" light={bathLight} toggle={toggleBath} />
            <Room name="주방" light={kitchenLight} toggle={toggleKitchen} />
            <Room name="거실" light={livingLight} toggle={toggleLiving} />
            <Room name="안방" light={mainLight} toggle={toggleMain}  />
            <Room name="전체" light={allLight} toggle={toggleAll}  />
        </div> 
    );
}

export default Callback1;