// DOM Elements
const mainPage = document.querySelector('.main-page');
const loginPage = document.querySelector('.login-page');
const login_btn = document.querySelector('.log-in');
const middle_content = document.querySelector('.middle-content');
const feedsPage = document.querySelector('.feeds-page');
const topBtn = document.querySelector('.btn-top');
const loginModal = document.querySelector('.login-modal');
const modalX = document.querySelector('.login-modal i');
const loginFormBtn = document.querySelector('.login-form-btn');
const postBtn = document.querySelector('.post-btn');
const modalWrapper = document.querySelector('.modal-wrapper');
const modal = document.querySelector('.modal');

const postModalX = document.querySelector('.modal-header i');
const modalPostBtn = document.querySelector('.modal-header button');
const modalFooterPlus = document.querySelector('.modal-footer span');
const modalInput = document.querySelector('.modal-input');
const user = document.querySelector('.user');
const sidebar = document.querySelector('.sidebar');
const sidebar_wrapper= document.querySelector('.sidebar-wrapper');
const sidebarX = document.querySelector('.sidebar-header i')
const toggle= document.querySelector('.toggle');
const circle= document.querySelector('.circle');



/**************************************************************
 ***************************************************************/

const goToLoginPage = ()=> {

    mainPage.style.display = 'none';
    loginPage.style.display='grid';
}

// Event

middle_content.addEventListener('click' , e =>{

    if(e.target.classList[1]==='main-btn'){
        goToLoginPage();
    }
})
//login_btn.addEventListener('click' , goToLoginPage());

topBtn.addEventListener('click' , ()=>{
    const inputPassword = document.querySelector('.password');
    const inputUserInfo = document.querySelector('.user-info');

    if(inputPassword.value !=="" && inputUserInfo.value !==""){
        mainPage.style.display = 'none';
        feedsPage.style.display='block';

    }

    else{
        goToLoginPage();
        loginModal.style.display='block';
    }
})


// Login page

modalX.addEventListener('click' , ()=>{
    loginModal.style.display='none';
})

loginFormBtn.addEventListener('click' , ()=>{
    const loginUserInfo = document.querySelector('.login-user-info');
    const loginPassword = document.querySelector('.login-password');

    if(loginUserInfo.value !==""  && loginPassword.value !==""){
        loginPage.style.display ='none';
        feedsPage.style.display='block';

    }

    else{
        loginModal.style.display='block';
    }
})

// Feeds page
// post modal

postBtn.addEventListener('click' , ()=>{
    modal.style.display='block';
    modalWrapper.classList.add('modal-wrapper-display');
})

const changeOpacity = (x)=>{
    modalFooterPlus.style.opacity= x;
    modalPostBtn.style.opacity= x;
};

postModalX.addEventListener('click' ,()=>{
    modal.style.display='none';
    modalWrapper.classList.remove('modal-wrapper-display');

    if(modalInput.value!== ''){
        modalInput.value='';
        changeOpacity(.5);
    }
})



modalInput.addEventListener('keypress' , e =>{
     if(e.target.value !== ""){
        changeOpacity(1);
     }
     
});

modalInput.addEventListener('blur' , e =>{
    if(e.target.value === ""){
       changeOpacity(.5);
    }
    
});

// Sidebar
user.addEventListener('click' ,()=>{
     
    sidebar.classList.add('sidebar-display');
    sidebar_wrapper.classList.add('sidebar-wrapper-display');
} );

sidebarX.addEventListener('click' , ()=>{
    sidebar.classList.remove('sidebar-display');
    sidebar_wrapper.classList.remove('sidebar-wrapper-display');
});

// dark mode

const darkElement1 = document.querySelectorAll('.dark-mode-1');
const darkElement2 = document.querySelectorAll('.dark-mode-2');
const darkElement3 = document.querySelectorAll('.light-text');
const border = document.querySelectorAll('.border');

toggle.addEventListener('click' , ()=>{

    circle.classList.toggle('move');   // add and remove in next click
    
    Array.from(darkElement1).map(
        (darkEl1)=>
        darkEl1.classList.toggle('dark-1')
    );

    Array.from(darkElement2).map(
        (darkEl2)=>
        darkEl2.classList.toggle('dark-2')
    );

    Array.from(darkElement3).map(
        (darkEl3)=>
        darkEl3.classList.toggle('light')
    );

    Array.from(border).map(
        (darkEl4)=>
        darkEl4.classList.toggle('border-light')
    );
    
})