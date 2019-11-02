var data = [{
    "id": "E001",
    "name": "heng",
    "age": 26
}, {
    "id": "E002",
    "name": "seng",
    "age": 23
}, {
    "id": "E003",
    "name": "peang",
    "age": 20
}]
var index = 0
var english = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

function Start() {
    var row_length = document.getElementById("myTable").rows.length;
    if (row_length < 2) {
        var text = ""
        for (let d in data) {
            text = "<tr><td>" + (Number(d) + Number(1)) + "</td><td>" + data[d].id + "</td><td>" + data[d].name + "</td><td>" + data[d].age + "</td><tr>"
            document.getElementById("myTable").insertRow(document.getElementById("myTable").rows.length).innerHTML = text
        }
    }
}

function SelectedRow() {
    var table = document.getElementById("myTable")
    for (let r in table.rows) {
        table.rows[r].onclick = function () {
            if (typeof index !== "undefined") {
                table.rows[index].classList.toggle("selected");
            }
            index = this.rowIndex
            this.classList.toggle("selected")
        }
    }
}

function CheckEnglish(name) {
    for (var n = 0; n < name.length; n++) {
        var check = 0
        for (var e = 0; e < english.length; e++) {
            if(name[n] == english[e]){
                var check = 1
            }
        }
        if(check != 1){
            return false
        }
    }
    return true
}

$(document).ready(function () {
    $('#add').click(function () {
        var name = $("#name").val();
        var id = $("#id").val();
        var age = $("#age").val();
        console.log(CheckEnglish(name))
        if (CheckEnglish(name) && id != "" && age != "") {
            var text = "<tr><td>" + (Number(data.length) + Number(1)) + "</td><td>" + id + "</td><td>" + name + "</td><td>" + age + "</td><tr>"
            data.push({
                "id": id,
                "name": name,
                "age": age
            })
            $("#myTable").append(text)
        } else {
            alert("Name not english or Not have parameter")
        }
    });
    $('#delete').click(function () {
        data.splice(index - 1, index - 1);
        var table = document.getElementById("myTable")
        for (var r = table.rows.length; r > 1; r--) {
            document.getElementById("myTable").deleteRow(r - 1);
        }
        var text = ""
        for (let d in data) {
            text = "<tr><td>" + (Number(d) + Number(1)) + "</td><td>" + data[d].id + "</td><td>" + data[d].name + "</td><td>" + data[d].age + "</td><tr>"
            document.getElementById("myTable").insertRow(document.getElementById("myTable").rows.length).innerHTML = text
        }
    });
});

Start()
SelectedRow()
