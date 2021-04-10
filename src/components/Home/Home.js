import React, { useEffect, useState } from 'react';
import DrinkShowByName from '../DrinkShowByName/DrinkShowByName';

import './Home.css'
const Home = () => {
    const [popularDrinks, setPopularDrinks] = useState([])
    const [popularIngredients, setPopularIngredient] = useState([])
    const [latestDrinks, setLatestDrinks] = useState([])
    const [randomIngredients, setRandomIngredients] = useState([])
    const [randomDrinks, setRandomDrinks] = useState([])
    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        fetch('https://sleepy-plains-42535.herokuapp.com/PopularDrinks')
            .then(res => res.json())
            .then(data => {
                setPopularDrinks(data)
                setSpinner(false)
            })

        fetch('https://sleepy-plains-42535.herokuapp.com/PopularIngredients')
            .then(res => res.json())
            .then(data => setPopularIngredient(data))

        fetch('https://sleepy-plains-42535.herokuapp.com/LatestDrinks')
            .then(res => res.json())
            .then(data => setLatestDrinks(data))

        fetch('https://sleepy-plains-42535.herokuapp.com/RandomIngredients')
            .then(res => res.json())
            .then(data => setRandomIngredients(data))

        fetch('https://sleepy-plains-42535.herokuapp.com/RandomDrinks')
            .then(res => res.json())
            .then(data => setRandomDrinks(data))
    }, [])


    return (
        <div className="containerColor">
            { spinner ?
            <div className="text-center  mb-5 pt-5 pb-5">
                 <div className="spinner-grow spinnerColor" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow spinnerColor" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow spinnerColor" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                </div>
                :
                <div className="container pt-5">
                    <h5 className="text-center bgHomeStyle p-3 fw-bold mb-3">Popular Drinks</h5>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4 pt-1">
                        {
                            popularDrinks.map(drink => <DrinkShowByName drink={drink} state={true}></DrinkShowByName>)
                        }
                    </div>
                    <h5 className="text-center mt-5  bgHomeStyle  p-3 fw-bold mb-3">Popular Ingredients</h5>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4 pt-1">
                        {
                            popularIngredients.map(drink => <DrinkShowByName drink={drink} state={false}></DrinkShowByName>)
                        }
                    </div>
                    <h5 className="text-center mt-5  bgHomeStyle  p-3 fw-bold mb-3">Latest Drinks</h5>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4 pt-1">
                        {
                            latestDrinks.map(drink => <DrinkShowByName drink={drink} state={true}></DrinkShowByName>)
                        }
                    </div>
                    <h5 className="text-center mt-5  bgHomeStyle p-3 fw-bold mb-3">Random Ingredients</h5>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4 pt-1">
                        {
                            randomIngredients.map(drink => <DrinkShowByName drink={drink} state={false}></DrinkShowByName>)
                        }
                    </div>
                    <h5 className="text-center mt-5  bgHomeStyle p-3 fw-bold mb-3">Random  Drinks</h5>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4 pt-1">
                        {
                            randomDrinks.map(drink => <DrinkShowByName drink={drink} state={true}></DrinkShowByName>)
                        }
                    </div>
                </div>
            }
        </div>

    );
};

export default Home;