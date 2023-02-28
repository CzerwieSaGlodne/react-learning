import React from 'react';

export default function DogList() {
    const dogList = [
        { name: 'Tobiro', age: 3 },
        { name: 'Rex', age: 5 },
        { name: 'Płotka', age: 3 },
        { name: 'Kama', age: 12 },
        { name: 'Bajbus', age: 9 },
    ];

    const dogsYoungerThanFive = dogList.filter((dog) => !(dog.age > 5));

    return (
        <div style={{ fontSize: 100, fontFamily: 'math' }}>
            {dogsYoungerThanFive.map((dog) => (
                <div key={dog.name}>{dog.name}</div>
            ))}
        </div>
    );
}
