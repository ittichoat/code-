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

function Start() {
    var row_length = document.getElementById("myTable").rows.length;
    if (row_length < 2) {
        ReTable()
    }
    
}

function ReTable() {
    var table = document.getElementById("myTable")
    for (var r = table.rows.length; r > 1; r--) {
        document.getElementById("myTable").deleteRow(r - 1);
    }
    for (let d in data) {
        if (d % 2 == 0) {
            var text = "<tr bgcolor=\"#dddddd\"><td>" + (Number(d) + Number(1)) + "</td><td>" + data[d].id + "</td><td>" + data[d].name + "</td><td>" + data[d].age + "</td></tr>"
        }
        else {
            var text = "<tr><td>" + (Number(d) + Number(1)) + "</td><td>" + data[d].id + "</td><td>" + data[d].name + "</td><td>" + data[d].age + "</td></tr>"
        }
        $("#myTable").append(text)
    }
    SelectedRow()
}

function SelectedRow() {
    var table = document.getElementById("myTable")
    index = 0
    for (let r = 1; r < table.rows.length; r++) {
        table.rows[r].onclick = function () {
            if (typeof index !== "undefined" && index != 0) {
                table.rows[index].classList.toggle("selected");
            }
            index = this.rowIndex
            if (index != 0) {
                this.classList.toggle("selected")
            }
        }
    }
}

function CheckOnly(text,check) {
    for (var t = 0; t < text.length; t++) {
        for (var c = 0; c < check.length; c++) {
            if (text[t] == check[c]) {
                break
            } else if (c + 1 == check.length) {
                return false
            }
        }
    }
    return true
}

$(document).ready(function () {
    $('#add').click(function () {
        var english = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        var number = "0123456789"
        var engnum = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
        var name = $("#name").val();
        var id = $("#id").val();
        var age = $("#age").val();
        if (CheckOnly(name,english) && CheckOnly(id,engnum) && CheckOnly(age,number) && id != "" && age != "") {
            if (Number(age) >= 0) {
                data.push({
                    "id": id,
                    "name": name,
                    "age": age
                })
                ReTable()
            }
        }else if(!CheckOnly(name,english)){
            alert("Name english only!!")
        }else if(CheckOnly(id,engnum)){
            alert("ID english or number only!!")
        }else if(CheckOnly(age,number)){
            alert("Age number only and Age greater than or equal to zero!!")
        }else {
            alert("Not have parameter")
        }
    });
    $('#delete').click(function () {
        data.splice(index - 1, 1);
        ReTable()
    });
});

Start()

