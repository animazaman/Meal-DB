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
                        <!-- Button trigger modal -->
                        <button onclick="loadMealDetail(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetails-modal">
                            Details
                        </button>
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

const loadMealDetail = idMeal => {
    //console.log(idMeal);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayMealDetails(data.meals[0]))
}

const displayMealDetails = meal =>{
    document.getElementById('mealDetails-label').innerText = meal.strMeal;
    const mealDetails = document.getElementById('mealDetailsBody');
    mealDetails.innerHTML=`
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <h4>${meal.strCategory}</h4>
        <p><span class="fw-bold">Tag:</span> ${meal.strTags}</p>
    `;
}

// dynamic search key
loadMeals('pasta');
