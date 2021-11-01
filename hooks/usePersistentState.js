import { useState, useEffect } from "react";

function usePersistentState(key, defautlValue) {
    const [state, setState] = useState(
        JSON.parse(localStorage.getItem(key)) || defautlValue
    )
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [key, state])

    return [state, setState]
}

export default usePersistentState;