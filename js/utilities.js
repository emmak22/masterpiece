function getRandomColor()
{
    //on va devoir génerer une couleur rgba au hasard en tirant 3 fois un chiffre au hasard entre 0 et 255 et retourner la valeur et une opacity entre 0 et 1
    const red = getRandomInteger(0, 255);
    const blue = getRandomInteger(0, 255);
    const green = getRandomInteger(0, 255);

    const opacity = Math.random();

    return 'rgba('+ red +', '+ green +', '+ blue +', '+ opacity +')';
}

function getRandomInteger(min, max)
{
    // Renvoie un nombre entier aléatoire compris entre les arguments min et max inclus.
    return Math.floor(Math.random() * (max - min + 1)) + min;
}