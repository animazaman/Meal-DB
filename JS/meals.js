const loadMeals = (searchText) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayMeals(data.meals))
}

const displayMeals = meals =>{

    const mealsContainer = document.getElementById('meals-container');
    mealsContainer.innerHTML= '';
    meals.forEach(meal=>{
        console.log(meal.strMealThumb);
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML=`
                <div class="card h-100">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${meal.strMeal}</h5>
                        <p class="card-text">${meal.strInstructions}</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-body-secondary">Last updated 3 mins ago</small>
                    </div>
                </div>
        `;
        mealsContainer.appendChild(mealDiv);
    })
}

const searchMeal =() =>{
    //console.log('btn-clicked.');
    const searchText = document.getElementById('search-field').value;
    loadMeals(searchText);
}

// dynamic search key
loadMeals('pasta');
