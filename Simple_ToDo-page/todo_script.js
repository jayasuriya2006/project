let list = [];
    display();

  function in_val() {
    let valInput = document.querySelector('.input');
    let dateInput = document.querySelector('.dateinput');

    let val = valInput.value;
    let date = dateInput.value;
     if (!val || !date) {
        alert("Please enter both task and date");
        return;
    }

    list.push({
      val: val,
      date: date
    });

   document.querySelector('.input').value = '';
   document.querySelector('.dateinput').value = '';

    display();
  }

  function display() {
    let tem = '';

    for (let i = 0; i < list.length; i++) {
      let listobject = list[i];

      let val = listobject.val;
      let date = listobject.date;

      let s = `
        <div class="row">
          <p class="task">${val}</p>
          <p class="date">${date}</p>
          <button class="delete" onclick="
              list.splice(${i},1);
              display();
          ">Delete</button>
        </div>`;


      tem += s;
    }

    document.querySelector('.out').innerHTML = tem;

  }
 