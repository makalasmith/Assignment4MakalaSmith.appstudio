
favBabyNames.onshow=function(){
  for (i = 0; i < favoriteBabyNames.length; i++) 
        selFavorite.addItem(favoriteBabyNames[i])
}

btnFavorite.onclick=function(){
  lblMessage.value = `Your favorite baby name is ${selFavorite.value}.`
}
