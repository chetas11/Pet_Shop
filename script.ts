
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


function CreateInputs(){
    let inputBox = document.createElement("input");
    inputBox.classList.add("form-control","text-center")
    return inputBox;
}


//---------------Add Pet------------------

let AddPetbtn = document.getElementById("AddPet");
let AddedResult = document.createElement("h3");
let AddDiv = document.getElementById("AddDiv");

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
    CountDiv.innerHTML = "";
    QuantityDiv.innerHTML = "";
    AddedResult.innerHTML = "";
    AddedResult.classList.remove("alert", "alert-success")
    AddDiv.appendChild(PetName)
    AddDiv.appendChild(PetColor)
    AddDiv.appendChild(PetBreed)
    AddDiv.appendChild(PetAge)
    AddDiv.appendChild(submitbutton)
})

submitbutton.addEventListener("click", function(){
    AddDiv.innerHTML = "";
    AddedResult.classList.remove("alert", "alert-success","alert-danger")
    if(PetName.value && PetColor.value && PetBreed.value){
        AllShopPets.addpets(PetName.value,PetColor.value,PetBreed.value,parseInt(PetAge.value)) 
        AddedResult.classList.add("alert", "alert-success")
        AddedResult.innerText = "Added Successfully...Thank you!!!"
        AddDiv.appendChild(AddedResult)
    }else{
        AddedResult.innerText = "Please Fill All the Details"
        AddedResult.classList.add("alert", "alert-danger")
        AddDiv.appendChild(AddedResult)
    }
    
})


//---------------Check Availability------------------


let CheckQuantitybtn = document.getElementById("Quantity");
let QuantityDiv = document.getElementById("AvailDiv");
let Result = document.createElement("h3");

let Quantity = CreateInputs()
Quantity.setAttribute("placeholder","Enter Quantity")

let Quantitybtn = document.createElement("button")
Quantitybtn.innerText = "Check Quantity";
Quantitybtn.classList.add("btn","query")

CheckQuantitybtn.addEventListener("click",function(){
    CountDiv.innerHTML = "";
    AddDiv.innerHTML = "";
    QuantityDiv.appendChild(PetName)
    QuantityDiv.appendChild(Quantity)
    QuantityDiv.appendChild(Quantitybtn)
})

Quantitybtn.addEventListener("click", function(){
    QuantityDiv.innerHTML = "";
    Result.classList.remove("alert", "alert-danger","alert-success")
    let AvailResult = RequestedPet.PetAvailability(PetName.value,parseInt(Quantity.value))

    if(AvailResult === "Available"){
    Result.innerText = "The Requested Quantity is Available."
    Result.classList.add("alert", "alert-success")
    QuantityDiv.appendChild(Result)
    }else{
    Result.innerText = "Sorry Requested Quantity is not Available."
    Result.classList.add("alert", "alert-danger")
    QuantityDiv.appendChild(Result)
    }

})

//---------------Check Count------------------

let checkCount = document.getElementById("Count");
let CountDiv = document.getElementById("CountDiv");

let CountBtn = document.createElement("button")
CountBtn.innerText = "Check Count";
CountBtn.classList.add("btn","query")
let CountResult = document.createElement("h3");


checkCount.addEventListener("click",function(){
    QuantityDiv.innerHTML = "";
    AddDiv.innerHTML = "";
    CountResult.innerHTML = "";
    CountResult.classList.remove("alert", "alert-success","alert-danger")
    CountDiv.appendChild(PetName)
    CountDiv.appendChild(CountBtn)
})

CountBtn.addEventListener("click", function(){
    CountResult.innerHTML = "";
    CountDiv.innerHTML = "";
    CountResult.classList.remove("alert", "alert-info")
    if(PetName.value){
        AllShopPets.getCounts(PetName.value)
        CountResult.innerText = "Total Number of "+PetName.value+"'s in shop: "+String(AllShopPets.getCounts(PetName.value))
        CountResult.classList.add("alert", "alert-success")
        CountDiv.appendChild(CountResult)
    }else{
        CountResult.innerHTML = "Enter Pet Type";
        CountResult.classList.add("alert", "alert-danger")
        CountDiv.appendChild(CountResult)
    }
    

})

