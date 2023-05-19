let allUsers = [
    {
        name: 'jatin',
        age: 20,
        skill: 'web developer',
        id: 1,
        img: 'https://img.freepik.com/free-vector/cute-bad-cat-wearing-suit-sunglasses-with-baseball-bat-cartoon-icon-illustration-animal-fashion-icon-concept-isolated-flat-cartoon-style_138676-2170.jpg?w=2000'
    },
    {
        name: 'ashish',
        age: 26,
        skill: 'front-end developer',
        id: 2,
        img: 'https://img.freepik.com/free-vector/cute-astronaut-dance-cartoon-vector-icon-illustration-technology-science-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3851.jpg?w=2000'
    },
    {
        name: 'dhruvin',
        age: 20,
        skill: 'react developer',
        id: 3,
        img: 'https://images.template.net/wp-content/uploads/2015/04/Cartoon-Mickey-Mouse-Drawing-Template.jpg'
    },
    {
        name: 'sandip',
        age: 21,
        skill: 'backend developer',
        id: 4,
        img: 'https://w.forfun.com/fetch/50/5081f28733ce69397d496a2dfdcedc2d.jpeg'
    },
    {
        name: 'bhavik',
        age: 22,
        skill: 'Ui designer',
        id: 5,
        img: 'https://easydrawingguides.com/wp-content/uploads/2022/01/how-to-draw-a-cartoon-bunny-featured-image-1200-550x1024.png'
    }
]

let usersContainer = document.getElementById('users')
let selected = document.getElementById('selected')
let selecteduser = []

usersContainer.innerHTML = allUsers.map((user) => {
    return `  <div class="card col-3 cardfull"  >
<img src="${user.img}" class="card-img-top user-img" alt="...">
<div class="card-body">
    <h5 class="card-title">${user.name}</h5>
    <p class="card-text">${user.skill}</p>
    <p class="card-text">${user.age}</p>
     <button onclick="userselect(${user.id})" class="btn btn-primary">select</button>
    
</div>
</div>`
}).join('')


const OpenUserSelected = () => {
    if (selected.style.left == '-1000px') {
        selected.style.left = '0'
    } else {
        selected.style.left = '-1000px'
    }
}


const userselect = (userid) => {
    let user = allUsers.find((x) => {
        return x.id == userid
    })
    selecteduser.push(user)

    selected.innerHTML = selecteduser.map((user) => {
        return ` <div class="card cardfull" >
    <img src="${user.img}" class="card-img-top user-img" alt="...">
    <div class="card-body">
        <h5 class="card-title">${user.name}</h5>
        <p class="card-text">${user.skill}</p>
        <p class="card-text">${user.age}</p>
         <button onclick="userreject(${user.id})" class="btn btn-primary">Reject</button>
        
    </div>
    </div>`
    })
}

const userreject = (userid) => {
    selecteduser = selecteduser.filter((user) => user.id != userid)
    selected.innerHTML = selecteduser.map((user) => {
        return ` <div class="card cardfull" >
    <img src="${user.img}" class="card-img-top user-img" alt="...">
    <div class="card-body">
        <h5 class="card-title">${user.name}</h5>
        <p class="card-text">${user.skill}</p>
        <p class="card-text">${user.age}</p>
         <button onclick="userreject(${user.id})" class="btn btn-primary">Reject</button>
        
    </div>
    </div>`
    })
}