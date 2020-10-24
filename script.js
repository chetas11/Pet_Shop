var AllPets = []; // Array To store the data
var RequestPets = /** @class */ (function () {
    function RequestPets(ReqData) {
        this.Name = ReqData.name;
        this.Color = ReqData.color;
        this.Breed = ReqData.breed;
        this.Age = ReqData.age;
    }
    RequestPets.prototype.PetAvailability = function (name, quantity) {
        var count = 0;
        for (var i = 0; i < AllPets.length; i++) {
            if (name.toLowerCase() === AllPets[i].Name.toLowerCase()) {
                count += 1;
            }
        }
        if (count >= quantity) {
            return "Available";
        }
        else {
            return "Unavailable";
        }
    };
    return RequestPets;
}());
var RequestedPet = new RequestPets({ name: "Dog", color: "White", breed: "Siberian Husky", age: 5 });
var Cat1 = new RequestPets({ name: "Cat", color: "White", breed: "Persian cat", age: 2 });
var Dog2 = new RequestPets({ name: "Dog", color: "Brown", breed: "Golden Retriever", age: 4 });
var Parrots1 = new RequestPets({ name: "Parrot", color: "Blue&Yellow", breed: "Blue and Yellow Macaw", age: 3 });
AllPets.push(RequestedPet, Cat1, Dog2, Parrots1);
console.log(AllPets);
var AvailabilePets = /** @class */ (function () {
    function AvailabilePets() {
    }
    AvailabilePets.prototype.addpets = function (name, color, breed, age) {
        var newObj = { Name: name, Color: color, Breed: breed, Age: age };
        AllPets.push(newObj);
    };
    AvailabilePets.prototype.getCounts = function (name) {
        var count = 0;
        for (var i = 0; i < AllPets.length; i++) {
            if (name.toLowerCase() === AllPets[i].Name.toLowerCase()) {
                count += 1;
            }
        }
        return count;
    };
    return AvailabilePets;
}());
var AllShopPets = new AvailabilePets();
// PetsCount.addpets("Dog","Red","bullDog");
// console.log(PetsCount.getCounts("Dog", "Red"))
// PetsCount.getCounts("Cat")
// PetsCount.getCounts("Parrot")
var PetDiv = document.getElementById("PetDiv");
function CreateInputs() {
    var inputBox = document.createElement("input");
    inputBox.classList.add("form-control", "text-center");
    return inputBox;
}
//---------------Add Pet------------------
var AddPetbtn = document.getElementById("AddPet");
var AddedResult = document.createElement("h3");
var PetName = CreateInputs();
PetName.setAttribute("placeholder", "Enter Pet Type");
var PetColor = CreateInputs();
PetColor.setAttribute("placeholder", "Enter Pet Color");
var PetBreed = CreateInputs();
PetBreed.setAttribute("placeholder", "Enter Pet Breed");
var PetAge = CreateInputs();
PetAge.setAttribute("placeholder", "Enter Pet Age (Optional)");
var submitbutton = document.createElement("button");
submitbutton.innerText = "Add";
submitbutton.classList.add("btn", "query");
AddPetbtn.addEventListener("click", function () {
    PetDiv.innerHTML = "";
    PetDiv.appendChild(PetName);
    PetDiv.appendChild(PetColor);
    PetDiv.appendChild(PetBreed);
    PetDiv.appendChild(PetAge);
    PetDiv.appendChild(submitbutton);
});
submitbutton.addEventListener("click", function () {
    PetDiv.innerHTML = "";
    AllShopPets.addpets(PetName.value, PetColor.value, PetBreed.value, parseInt(PetAge.value));
    Result.innerText = "Added Successfully...Thank you!!!";
    Result.classList.add("alert", "alert-success");
    PetDiv.appendChild(Result);
});
//---------------Check Availability------------------
var CheckQuantitybtn = document.getElementById("Quantity");
var Quantity = CreateInputs();
Quantity.setAttribute("placeholder", "Enter Quantity");
var Result = document.createElement("h3");
var Quantitybtn = document.createElement("button");
Quantitybtn.innerText = "Check Quantity";
Quantitybtn.classList.add("btn", "query");
CheckQuantitybtn.addEventListener("click", function () {
    PetDiv.innerHTML = "";
    PetDiv.appendChild(PetName);
    PetDiv.appendChild(Quantity);
    PetDiv.appendChild(Quantitybtn);
});
Quantitybtn.addEventListener("click", function () {
    PetDiv.innerHTML = "";
    var AvailResult = RequestedPet.PetAvailability(PetName.value, parseInt(Quantity.value));
    if (AvailResult === "Available") {
        Result.innerText = "The Requested Quantity is Available.";
        Result.classList.add("alert", "alert-info");
        PetDiv.appendChild(Result);
    }
    else {
        Result.innerText = "Sorry Requested Quantity is not Available.";
        Result.classList.add("alert", "alert-info");
        PetDiv.appendChild(Result);
    }
});
//---------------Check Count------------------
var checkCount = document.getElementById("Count");
var CountBtn = document.createElement("button");
CountBtn.innerText = "Check Count";
CountBtn.classList.add("btn", "query");
var CountResult = document.createElement("h3");
checkCount.addEventListener("click", function () {
    PetDiv.innerHTML = "";
    PetDiv.appendChild(PetName);
    PetDiv.appendChild(CountBtn);
});
CountBtn.addEventListener("click", function () {
    PetDiv.innerHTML = "";
    AllShopPets.getCounts(PetName.value);
    console.log(AllShopPets.getCounts(PetName.value));
    CountResult.innerText = "Total Number of " + PetName.value + " in shop: " + String(AllShopPets.getCounts(PetName.value));
    CountResult.classList.add("alert", "alert-warning");
    PetDiv.appendChild(CountResult);
});
