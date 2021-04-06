let topBabyNames = ["Liam", "Olivia", "Noah", "Emma", "Oliver", "Ava", "William", "Sophia", "Elijah", "Isabella", "James", "Charlotte", "Benjamin", "Amelia", "Lucas", "Mia", "Mason", "Harper", "Ethan", "Evelyn"]
let favoriteBabyNames = []

babyNames.onshow=function(){
    for (i = 0; i < topBabyNames.length; i++) 
        selBabyNames.addItem(topBabyNames[i])
}

btnDone.onclick=function(){
  favoriteBabyNames.push(selBabyNames.value)
  console.log(favoriteBabyNames)
}

btnChange.onclick=function(){
ChangeForm(favBabyNames)
}
