const input=document.querySelector('#input')
const btn=document.querySelector('.btn')
const ul=document.querySelector('ul')
const myeditbox=document.querySelector('myeditbox')
let id=''
// const texEdit=document.querySelector('.textEdit')
// console.log(textEdit)
let task=''
let index=0
btn.addEventListener('click',()=>{
    task =input.value
   console.log("input"+task)

   if(task==''){
    alert('por kon')
   }
   else{
    const li =document.createElement('li')
    li.innerHTML=`
    <input type="checkbox" onclick="Done(this)"></input>
    <b>${task}</b>
    <span onclick="Delet(this)"><i class="fa-solid fa-trash"></i></span>
    <span onclick="Edit(this)"><i class="fa-solid fa-pencil"></i></span>
    <div class="myEdit myeditbox">
       <span></span>
      <input type="text" class="textEdit">
      <span onclick="Update(this)">update</span>
      <span onclick="_close(this)" class="close" >X</span>
    </div>
    
    `
    li.setAttribute('id','item'+index)
    ul.appendChild(li)
    console.log(li)
    input.value=null
    input.focus()
   }
   index++
})
function Delet(self){
    // self.remove()
    // self.parentElement.style.opacity='0'
    self.parentElement.style.transform='translateX(500px)'
    setTimeout(() => {

        self.parentElement.remove()

    }, 1000);
}

function Done(self){
    // self.nextElementSibling.style.color='gray'
    self.nextElementSibling.classList.toggle('licolor')
}
function Edit(self) {
    self.nextElementSibling.classList.toggle('myeditbox')
   let x =self.previousElementSibling.previousElementSibling.innerText
   const texEdit=document.querySelector('.textEdit')
   console.log('for edit'+x)
   id=self.parentElement.getAttribute('id')
   console.log(id)
   texEdit.value=x
   console.log(texEdit.value)
}

function Update(self){
    const texEdit=document.querySelector('.textEdit')
    let x=texEdit.value
    console.log("update|"+x)
    
    document.querySelector('ul>li#'+id+">b").innerHTML=x
    
}
function _close(self){
    self.parentElement.classList.add('myeditbox')
}