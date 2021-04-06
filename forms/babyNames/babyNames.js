let babyNames = ["Liam", "Olivia", "Noah", "Emma", "Oliver", "Ava", "William", "Sophia", "Elijah", "Isabella", "James", "Charlotte", "Benjamin", "Amelia", "Lucas", "Mia", "Mason", "Harper", "Ethan", "Evelyn"]
babyNames.onshow=function(){
    for (i = 0; i < babyNames.length; i++) 
        selBabyNames.addItem(babyNames[i])
}
