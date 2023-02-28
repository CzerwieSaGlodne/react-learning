import React from 'react';

export default function ToDos() {
    const toDos = [
        { value: 'Wyprowadzić psa', done: false },
        { value: 'Poćwiczyć', done: true },
        // jak najedziecie myszką na done/value to pokaże że to jest property
        { value: 'Umyć zęby', done: false },
    ];

    const doneTodos = toDos.filter((el) => el.done);
    const notDoneTodos = toDos.filter((el) => !el.done);
    console.table(doneTodos);
    console.table(notDoneTodos);

    function test() {
        return <span>TOBIRO</span>;
    }

    return (
        <div style={{ fontSize: 40 }}>
            {/* <div>
                <input type='text'></input>
            </div>
            <button>Click me!</button> */}
            {/* jak coś zrobimy w klamrach to można tam uzywać JS */}
            {/* {test()} */}
            {doneTodos.map((value) => (
                <div key={value.value} style={{ backgroundColor: '#45ff04' }}>
                    {value.value}
                </div>
            ))}
            {notDoneTodos.map((value) => (
                <div key={value.value} style={{ color: 'red' }}>
                    {value.value}
                </div>
            ))}
            {toDos.map((element) => {
                const { value, done } = element;
                // "none"/"line-through"
                console.log(element);
                // let textDecoration;
                // if (element.done) {
                //     textDecoration = 'line-through';
                // } else {
                //     textDecoration = 'none';
                // }
                // ternary operator, tak zwany operator trójargumentowy którym można zastąpić powyższe linijki
                // const textDecoration = done ? 'line-through' : 'none';

                return (
                    <div style={{ textDecoration: done ? 'line-through' : 'none' }} key={value}>
                        {value} {done ? 'done' : 'not done'}
                    </div>
                );
            })}
        </div>
    ); // wyprowadzić psa - done
}
