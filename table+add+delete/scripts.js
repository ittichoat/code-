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
    SelectedRow()
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

function CheckEnglish(name) {
    var english = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for (var n = 0; n < name.length; n++) {
        var check = 0
        for (var e = 0; e < english.length; e++) {
            if (name[n] == english[e]) {
                var check = 1
            }
        }
        if (check != 1) {
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
        if (CheckEnglish(name) && id != "" && age != "") {
            data.push({
                "id": id,
                "name": name,
                "age": age
            })
            ReTable()
        } else {
            alert("Name not english or Not have parameter")
        }
        SelectedRow()
    });
    $('#delete').click(function () {
        data.splice(index - 1, 1);
        ReTable()
        SelectedRow()
    });
});

Start()

