const addbtn = document.querySelector(".add");
const main = document.querySelector(".main");


addbtn.addEventListener(
    "click",
    function(){
        addnote();
    }
    
    )

const saveNotes = ()=>{
    const notearray = document.querySelectorAll(".container textarea");
    console.log(notearray);
    const data = [];
    notearray.forEach(
        (note)=>{
            data.push(note.value);
        }
    )


    if (data.length === 0) {
        localStorage.removeItem("notes")
    } else {
        localStorage.setItem("notes", JSON.stringify(data))
    }

}

const addnote = (text = "")=>{
    
        const notes = document.createElement("div");
        notes.classList.add("container");
        notes.innerHTML = ` <nav>
        <i class="fa-solid fa-trash trash"></i>
        <i class="fa-solid fa-floppy-disk save"></i>
        
    </nav>
    <textarea>${text}</textarea>`;

    notes.querySelector(".save").addEventListener(
        "click",
        function() {
            saveNotes()
        }
    )

    notes.querySelector(".trash").addEventListener(
        "click",
        function(){
            notes.remove();
            saveNotes();
        }
    )

    notes.querySelector("textarea").addEventListener(
        "focusout",
        function() {
            saveNotes()
        }
    )

    main.appendChild(notes);
    saveNotes();

}


    
(
    function() {
        const lsNotes = JSON.parse(localStorage.getItem("notes"));
        if (lsNotes === null) {
            addnote()
        } else {
            lsNotes.forEach(
                (lsNote) => {
                    addnote(lsNote)
                }
            )
        }

    }
)()

   









    