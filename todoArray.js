let todoArray = [];

const form = document.getElementById("todoForm");
const count = document.getElementById("count");
const input = document.getElementById("input");
const iplist = document.getElementById("ipList");
const counter = document.getElementById("counter");


const uniID = () => {
    const str = "bhdiwmzjunlo753@#$%&*lmn";
    const arr = [];

    while (arr.length < 16) {
        const rindx = Math.floor(Math.random() * str.length);
        const rltr = str[rindx];
        arr.push(rltr);
    }

    return arr.join("");
}


const getTodo = () => {
    return todoArray;
}


const createTodo = (todo) => {
    const dateTime = new Date().toLocaleString();

    const todoObj = {
        id: uniID(),
        title: todo,
        createdAt: dateTime,
        updatedAt: dateTime,
        status: "Pending"
    };

    todoArray.push(todoObj);

    return todoObj;
}


const handleRemove = (id) => {
    todoArray = todoArray.filter((todo) => todo.id != id);

    console.log(todoArray);

    reloadData();
}


const toggleStatus = (id) => {

    todoArray.map((todo) => {

        if (todo.id == id) {
            todo.status = todo.status == "Pending"
                ? "Completed"
                : "Pending";
        }

        return todo;
    });

    reloadData();
}


const reloadData = () => {

    iplist.innerHTML = "";

    todoArray.forEach((todo) => {
        updateList(todo);
    });

    if (todoArray.length == 0) {
        iplist.innerHTML = "There are no items to show";
        iplist.style.textAlign = "center";
        iplist.style.marginTop = "20px";
    }
}


form.addEventListener("input", () => {

    counter.innerHTML = input.value.length;

    count.innerHTML = "";
});


const handleUpdateTask = (todo) => {

    const edit_input = document.getElementById("edit_input");

    todo.title = edit_input.value;

    todo.updatedAt = new Date().toLocaleString();

    const updated = todoArray.map((todoItem) => {

        if (todoItem.id == todo.id) {
            return todo;
        }

        return todoItem;
    });

    todoArray = updated;

    reloadData();
}


const updateList = (todo) => {

    const li = document.createElement("li");

    li.innerHTML =
        "<div><b>Task:</b> " + todo.title + "</div>" +
        "<div><b>Status:</b> " + todo.status + "</div>" +
        "<div><b>Time:</b> " + todo.createdAt + "</div>";

    li.classList.add("todo_item");


    // DELETE BUTTON

    const deleteButton = document.createElement("button");

    deleteButton.innerHTML = "Delete";

    deleteButton.classList.add("deleteBtn");

    deleteButton.addEventListener("click", () => {

        handleRemove(todo.id);

    });


    // EDIT BUTTON

    const editButton = document.createElement("button");

    editButton.innerHTML = "Edit";

    editButton.classList.add("editBtn");

    editButton.addEventListener("click", () => {

        li.innerHTML =
            "<div><b>Task:</b> " +
            "<input type='text' id='edit_input' value='" +
            todo.title +
            "' /></div>" +

            "<div><b>Status:</b> " +
            todo.status +
            "</div>" +

            "<div><b>Time:</b> " +
            todo.createdAt +
            "</div>" +

            "<br>" +

            "<button class='update-btn' id='update_btn'>Update</button>";


        const updateButton = document.getElementById("update_btn");
        updateButton.innerHTML = "Update";
        updateButton.classList.add("updtBtn");

        updateButton.addEventListener("click", () => {

            handleUpdateTask(todo);

        });

    });


    // STATUS BUTTON

    const statusButton = document.createElement("button");

    statusButton.innerHTML = "Completed";

    statusButton.classList.add("stsBtn");

    statusButton.addEventListener("click", () => {

        toggleStatus(todo.id);

    });


    // BUTTON CONTAINER

    const btnContainer = document.createElement("div");

    btnContainer.appendChild(deleteButton);

    btnContainer.appendChild(editButton);

    btnContainer.appendChild(statusButton);

    btnContainer.classList.add("btnContainer");


    li.appendChild(btnContainer);

    iplist.appendChild(li);
};


// SUBMIT

form.addEventListener("submit", (event) => {

    event.preventDefault();

    const todo = input.value;


    if (!todo) {

        count.innerHTML = "Please Enter a Task";

        return;
    }


    if (todo.length < 5) {

        count.innerHTML = "Atleast 5 characters are needed";

        return;
    }


    createTodo(todo);

    reloadData();

    input.value = "";

    counter.innerHTML = 0;
});