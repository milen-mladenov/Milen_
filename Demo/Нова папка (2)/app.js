function solve() {


    let input = {
        recipient: document.getElementById("recipientName"),
        title: document.getElementById("title"),
        message: document.getElementById("message")
    }

    let lists = {
        list: document.getElementById("list"),
        send: document.getElementsByClassName("sent-list")[0],
        trash: document.getElementsByClassName("delete-list")[0]
    }

    let addButton = document.getElementById("add");
    let resetButton = document.getElementById("reset");

    addButton.addEventListener("click", add)
    resetButton.addEventListener("click", reset)

    function add(e) {
        e.preventDefault();
        let recepient = input.recipient.value;
        let title = input.title.value;
        let message = input.message.value;
        
        let listElement = document.createElement("li");

        if(recepient == "" || title == "" || message == ""){
            return
        }

        listElement.innerHTML = listElement.innerHTML = `
        <h4>Title: ${title}</h4>
        <h4>Recipient Name: ${recepient}</h4>
        <span>${message}</span>
        <div id="list-action">
        <button type="submit" id="send">Send</button>
        <button type="submit" id="delete">Delete</button>
        </div>`

        lists.list.appendChild(listElement);

        let sendButton = listElement.querySelector("#send");
        let deleteButton = listElement.querySelector("#delete");

        sendButton.addEventListener("click", send);
        deleteButton.addEventListener("click", deleteLi)


        function send() {
            let sendListItem = document.createElement("li");
            sendListItem.innerHTML = `
            <span>To: ${recepient}</span>
            <span>Title: ${title}</span>
            <div class="btn">
            <button type="submit" class="delete">Delete</button>
            </div>`
            lists.send.appendChild(sendListItem);
            sendListItem.querySelector(".delete").addEventListener("click", deleteLi);
            listElement.remove();
            
        }

        function deleteLi(e) {
            let deleteLi = document.createElement('li');       
              deleteLi.innerHTML = `
              <span>To: ${recepient}</span>
        <span>Title: ${title}</span>`;
        console.log("deleted");
        lists.trash.appendChild(deleteLi);    
        e.target.parentNode.parentNode.remove();
        }
    }
    
    function reset(e){
        e.preventDefault();
        input.message.value = "";
        input.recipient.value = "";
        input.title.value = "";
    }

}

solve()

// function solve() {
//     let input = {
//       recipient: document.getElementById("recipientName"),
//       title: document.getElementById("title"),
//       message: document.getElementById("message"),
//     };
//     let lists = {
//       listOfMails: document.getElementById("list"),
//       sent: document.getElementsByClassName("sent-list")[0],
//       trash: document.getElementsByClassName("delete-list")[0],
//     };
   
//     let addBtn = document.getElementById("add");
//     let resetBtn = document.getElementById("reset");
   
//     addBtn.addEventListener("click", add);
//     resetBtn.addEventListener("click", reset);
   
//     function add(e) {
//       e.preventDefault();
//       let rec = input.recipient.value;
//       let title = input.title.value;
//       let message = input.message.value;
   
//       let li = document.createElement("li");
   
//       if (rec == '' || title == '' || message == '') {
//           return
//       }
   
//       li.innerHTML = `
//           <h4>Title: ${title}</h4>
//           <h4>Recipient Name: ${rec}</h4>
//           <span>${message}</span>
//           <div id="list-action">
//               <button type="submit" id="send">Send</button>
//               <button type="submit" id="delete">Delete</button>
//           </div>`;
//       lists.listOfMails.appendChild(li);
   
//       let sendBtn = li.querySelector('#send');
//       let deleteBtn = li.querySelector('#delete');
   
//       sendBtn.addEventListener('click', send);
//       deleteBtn.addEventListener('click', deleteLi);
   
//       function send(){
//           let sendLi = document.createElement('li');
//           sendLi.innerHTML = `<span>To: ${rec}</span>
//           <span>Title: ${title}</span>
//           <div class="btn">
//               <button type="submit" class="delete">Delete</button>
//           </div>`;
//           lists.sent.appendChild(sendLi);
//           sendLi.querySelector('.delete').addEventListener('click', deleteLi);
//           li.remove();
//       }
//       function deleteLi(e){
//         let deleteLi = document.createElement('li');
//         deleteLi.innerHTML = `<span>To: ${rec}</span>
//         <span>Title: ${title}</span>`;
//         lists.trash.appendChild(deleteLi);    
//         e.target.parentNode.parentNode.remove();
//       }
//     }

//     function reset(e) {
//       e.preventDefault();
//       input.recipient.value = '';
//       input.title.value = '';
//       input.message.value= '';
//     }
//   }
//   solve();