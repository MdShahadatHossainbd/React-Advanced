import React from 'react';

export default function ClickCounterRenderProps({ count, incrementCount }) {
    return (
        <div>
            <button type="button" onClick={incrementCount}>
                Clicked {count} times
            </button>
        </div>
    );
}