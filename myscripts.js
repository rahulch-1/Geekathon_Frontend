// Basic JavaScript for functionality

// Example: Display recipes dynamically
const recipesSection = document.getElementById('recipes-section');

// Simulated recipe data (replace this with actual data from a database)
const recipes = [
    { title: 'Pasta Carbonara', cuisine: 'Italian', time: '30 minutes', cost: 'Low', /* other details */ },
    { title: 'Chicken Tacos', cuisine: 'Mexican', time: '45 minutes', cost: 'Medium', /* other details */ },
    // More recipe objects
];

// Function to display recipes
function displayRecipes(recipes) {
    recipesSection.innerHTML = ''; // Clear previous content

    recipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');

        recipeCard.innerHTML = `
            <h2>${recipe.title}</h2>
            <p>Cuisine: ${recipe.cuisine}</p>
            <p>Time: ${recipe.time}</p>
            <p>Cost: ${recipe.cost}</p>
            <!-- Other recipe details -->
        `;

        recipesSection.appendChild(recipeCard);
    });
}

// Call the function to display recipes on the page load (or when needed)
displayRecipes(recipes);
