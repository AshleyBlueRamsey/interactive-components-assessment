import React, { useState } from "react";

function CountButton () {
    const [clicked, setClicked] = useState(0);
    return (
        <button onClick={() => setClicked(clicked + 1)}>
            Click Count: {clicked}
        </button>
    );
}

export default CountButton;