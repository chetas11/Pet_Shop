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
function CreateInputs() {
    var inputBox = document.createElement("input");
    inputBox.classList.add("form-control", "text-center");
    return inputBox;
}
//---------------Add Pet------------------
var AddPetbtn = document.getElementById("AddPet");
var AddedResult = document.createElement("h3");
var AddDiv = document.getElementById("AddDiv");
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
    CountDiv.innerHTML = "";
    QuantityDiv.innerHTML = "";
    AddedResult.innerHTML = "";
    AddedResult.classList.remove("alert", "alert-success");
    AddDiv.appendChild(PetName);
    AddDiv.appendChild(PetColor);
    AddDiv.appendChild(PetBreed);
    AddDiv.appendChild(PetAge);
    AddDiv.appendChild(submitbutton);
});
submitbutton.addEventListener("click", function () {
    AddDiv.innerHTML = "";
    AddedResult.classList.remove("alert", "alert-success", "alert-danger");
    if (PetName.value && PetColor.value && PetBreed.value) {
        AllShopPets.addpets(PetName.value, PetColor.value, PetBreed.value, parseInt(PetAge.value));
        AddedResult.classList.add("alert", "alert-success");
        AddedResult.innerText = "Added Successfully...Thank you!!!";
        AddDiv.appendChild(AddedResult);
    }
    else {
        AddedResult.innerText = "Please Fill All the Details";
        AddedResult.classList.add("alert", "alert-danger");
        AddDiv.appendChild(AddedResult);
    }
});
//---------------Check Availability------------------
var CheckQuantitybtn = document.getElementById("Quantity");
var QuantityDiv = document.getElementById("AvailDiv");
var Result = document.createElement("h3");
var Quantity = CreateInputs();
Quantity.setAttribute("placeholder", "Enter Quantity");
var Quantitybtn = document.createElement("button");
Quantitybtn.innerText = "Check Quantity";
Quantitybtn.classList.add("btn", "query");
CheckQuantitybtn.addEventListener("click", function () {
    CountDiv.innerHTML = "";
    AddDiv.innerHTML = "";
    QuantityDiv.appendChild(PetName);
    QuantityDiv.appendChild(Quantity);
    QuantityDiv.appendChild(Quantitybtn);
});
Quantitybtn.addEventListener("click", function () {
    QuantityDiv.innerHTML = "";
    Result.classList.remove("alert", "alert-danger", "alert-success");
    var AvailResult = RequestedPet.PetAvailability(PetName.value, parseInt(Quantity.value));
    if (AvailResult === "Available") {
        Result.innerText = "The Requested Quantity is Available.";
        Result.classList.add("alert", "alert-success");
        QuantityDiv.appendChild(Result);
    }
    else {
        Result.innerText = "Sorry Requested Quantity is not Available.";
        Result.classList.add("alert", "alert-danger");
        QuantityDiv.appendChild(Result);
    }
});
//---------------Check Count------------------
var checkCount = document.getElementById("Count");
var CountDiv = document.getElementById("CountDiv");
var CountBtn = document.createElement("button");
CountBtn.innerText = "Check Count";
CountBtn.classList.add("btn", "query");
var CountResult = document.createElement("h3");
checkCount.addEventListener("click", function () {
    QuantityDiv.innerHTML = "";
    AddDiv.innerHTML = "";
    CountResult.innerHTML = "";
    CountResult.classList.remove("alert", "alert-success", "alert-danger");
    CountDiv.appendChild(PetName);
    CountDiv.appendChild(CountBtn);
});
CountBtn.addEventListener("click", function () {
    CountResult.innerHTML = "";
    CountDiv.innerHTML = "";
    CountResult.classList.remove("alert", "alert-info");
    if (PetName.value) {
        AllShopPets.getCounts(PetName.value);
        CountResult.innerText = "Total Number of " + PetName.value + "'s in shop: " + String(AllShopPets.getCounts(PetName.value));
        CountResult.classList.add("alert", "alert-success");
        CountDiv.appendChild(CountResult);
    }
    else {
        CountResult.innerHTML = "Enter Pet Type";
        CountResult.classList.add("alert", "alert-danger");
        CountDiv.appendChild(CountResult);
    }
});
