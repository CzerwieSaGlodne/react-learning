import './App.css';
import React from 'react';
import ToDos from './components/ToDos';
import DogList from './components/DogList';

function App() {
    return (
        <React.Fragment>
            <ToDos />
            <DogList />
        </React.Fragment>
    );
}
export default App;
