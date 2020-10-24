
let AllPets = [];   // Array To store the data

//-------------- Requested Pets Class -------------------------------

interface ReqstedData{
    name:String;
    color:String;
    breed:String;
    age:Number;

} 

class RequestPets{
    Name:String;
    Color:String;
    Breed:String;
    Age:Number;

    constructor(ReqData:ReqstedData){
        this.Name = ReqData.name;
        this.Color = ReqData.color;
        this.Breed = ReqData.breed;
        this.Age = ReqData.age;
    }

    PetAvailability(name:String, quantity:Number):String{
        let count = 0
        for(let i=0; i<AllPets.length; i++){
            if(name.toLowerCase() === AllPets[i].Name.toLowerCase()){
                count += 1
            }
        }
        
        if(count >= quantity){
            return "Available"
        }else{
            return "Unavailable"
        }
    }
}

let RequestedPet = new RequestPets({name:"Dog",color:"White",breed:"Siberian Husky",age:5})
let Cat1 = new RequestPets({name:"Cat",color:"White",breed:"Persian cat",age:2})
let Dog2 = new RequestPets({name:"Dog",color:"Brown",breed:"Golden Retriever", age:4})
let Parrots1 = new RequestPets({name:"Parrot",color:"Blue&Yellow",breed:"Blue and Yellow Macaw", age:3})
AllPets.push(RequestedPet,Cat1,Dog2,Parrots1)


//-------------- Available Pets Class -------------------------------

interface AnimalsData{
    dog:Number;
    cat:Number;
    parrots:Number;
} 

class AvailabilePets{

    addpets(name:String, color:String, breed:String, age?:Number){
        let newObj = {Name:name, Color:color, Breed:breed, Age:age}
        AllPets.push(newObj)
    }

    getCounts(name:String):Number{
        let count = 0
        for(let i=0; i<AllPets.length; i++){
            if(name.toLowerCase() === AllPets[i].Name.toLowerCase()){
                count += 1
            }
        }
        return count
    }

}




let AllShopPets = new AvailabilePets()

let PetDiv = document.getElementById("PetDiv");

function CreateInputs(){
    let inputBox = document.createElement("input");
    inputBox.classList.add("form-control","text-center")
    return inputBox;
}


//---------------Add Pet------------------

let AddPetbtn = document.getElementById("AddPet");
let AddedResult = document.createElement("h3");

let PetName = CreateInputs()
PetName.setAttribute("placeholder","Enter Pet Type")
let PetColor = CreateInputs()
PetColor.setAttribute("placeholder","Enter Pet Color")
let PetBreed = CreateInputs()
PetBreed.setAttribute("placeholder","Enter Pet Breed")
let PetAge = CreateInputs()
PetAge.setAttribute("placeholder","Enter Pet Age (Optional)") 

let submitbutton = document.createElement("button")
submitbutton.innerText = "Add";
submitbutton.classList.add("btn","query")

AddPetbtn.addEventListener("click",function(){
    PetDiv.innerHTML = "";
    PetDiv.appendChild(PetName)
    PetDiv.appendChild(PetColor)
    PetDiv.appendChild(PetBreed)
    PetDiv.appendChild(PetAge)
    PetDiv.appendChild(submitbutton)
})

submitbutton.addEventListener("click", function(){
    PetDiv.innerHTML = "";
    AllShopPets.addpets(PetName.value,PetColor.value,PetBreed.value,parseInt(PetAge.value)) 
    Result.innerText = "Added Successfully...Thank you!!!"
    Result.classList.add("alert", "alert-success")
    PetDiv.appendChild(Result)
})


//---------------Check Availability------------------


let CheckQuantitybtn = document.getElementById("Quantity");

let Quantity = CreateInputs()
Quantity.setAttribute("placeholder","Enter Quantity")

let Result = document.createElement("h3");


let Quantitybtn = document.createElement("button")
Quantitybtn.innerText = "Check Quantity";
Quantitybtn.classList.add("btn","query")

CheckQuantitybtn.addEventListener("click",function(){
    PetDiv.innerHTML = "";
    PetDiv.appendChild(PetName)
    PetDiv.appendChild(Quantity)
    PetDiv.appendChild(Quantitybtn)
})

Quantitybtn.addEventListener("click", function(){
    PetDiv.innerHTML = "";
    let AvailResult = RequestedPet.PetAvailability(PetName.value,parseInt(Quantity.value))

    if(AvailResult === "Available"){
    Result.innerText = "The Requested Quantity is Available."
    Result.classList.add("alert", "alert-info")
    PetDiv.appendChild(Result)
    }else{
    Result.innerText = "Sorry Requested Quantity is not Available."
    Result.classList.add("alert", "alert-info")
    PetDiv.appendChild(Result)
    }

})

//---------------Check Count------------------

let checkCount = document.getElementById("Count");

let CountBtn = document.createElement("button")
CountBtn.innerText = "Check Count";
CountBtn.classList.add("btn","query")
let CountResult = document.createElement("h3");


checkCount.addEventListener("click",function(){
    PetDiv.innerHTML = "";
    PetDiv.appendChild(PetName)
    PetDiv.appendChild(CountBtn)
})

CountBtn.addEventListener("click", function(){
    PetDiv.innerHTML = "";
    AllShopPets.getCounts(PetName.value)
    console.log(AllShopPets.getCounts(PetName.value))
    CountResult.innerText = "Total Number of "+PetName.value+" in shop: "+String(AllShopPets.getCounts(PetName.value))
    CountResult.classList.add("alert", "alert-warning")
    PetDiv.appendChild(CountResult)

})

