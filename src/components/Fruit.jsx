import { useState, useEffect } from 'react';

function Fruit({ symbol, title, name, value, reset, resetComplete, onChange }) {
    const [counter, setCounter] = useState(value);

    useEffect(() => {
        reset && (() => {
            setCounter(0);
            resetComplete();
        })();
    }, [reset, resetComplete]);

    const handleIncrement = () => {
        setCounter(counter + 1);
        onChange({
            target: {
                name,
                value: counter + 1,
            },
        });
    };

    const handleDecrement = () => {
        if (counter > 0) {
            setCounter(counter - 1);
            onChange({
                target: {
                    name,
                    value: counter - 1,
                },
            });
        }
    };

    return (
        <article>
            <h2>{symbol} {title}</h2>
            <button type="button" onClick={handleIncrement}>
                +
            </button>
            <span>{counter}</span>
            <button
                type="button"
                onClick={handleDecrement}
                disabled={counter === 0}
            >
                -
            </button>
        </article>
    );
}

export default Fruit;