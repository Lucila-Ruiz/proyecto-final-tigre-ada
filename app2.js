const tarjetas = document.getElementById('tarjetas')

const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail';


fetch(url)
  .then((resp) => resp.json())
  .then((data) => printData(data.drinks))
  .catch((error) =>  console.log(error))

const printData = (arr) =>{
    let str = '';
    for( let i = 0; i < arr.length; i ++){
       const idDrink = arr[i].idDrink 
       const strDrink = arr[i].strDrink
       const strDrinkThumb = arr[i].strDrinkThumb
       str = str +`
       <div id="tarjetas">
                <div class="tarjeta">
                    <figure>
                        <img src="${strDrinkThumb}" alt="${strDrink}" width="300px">
                    </figure>
                    <p>Nombre: ${strDrink}</p>
                    <p> id: ${idDrink}</p>
                </div>
            </div>
            `
    };
    tarjetas.innerHTML = str;
}

  
