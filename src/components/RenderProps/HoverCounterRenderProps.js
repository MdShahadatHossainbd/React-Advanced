import React from 'react';

export default function HoverCounterRenderProps({ count, incrementCount }) {
    return (
        <div>
            <h1 onMouseOver={incrementCount}>Hovered {count} times</h1>
        </div>
    );
}