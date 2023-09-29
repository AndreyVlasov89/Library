//console.log('- Вёрстка соответствует макету. Ширина экрана 768px +26 \n\
//- Ни на одном из разрешений до 640px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +12 \n\
//- На ширине экрана 768рх реализовано адаптивное меню +12 \n\
//- Всего 50; \n\
//')


//=====================BURGER_MENU=================================


document.getElementById("burger").addEventListener("click", function () {
   document.querySelector(".header").classList.toggle("open")
})

document.getElementById("nav").addEventListener('click', (event) => {
   event._isClickWithInMenu = true;
})
document.getElementById("burger").addEventListener('click', (event) => {
   event._isClickWithInMenu = true;
})
document.body.addEventListener('click', event => {
   if (event._isClickWithInMenu) return;
   document.querySelector(".header").classList.remove("open")
});



//====================SLIDER_ABOUT================

let sliderLine = document.querySelector('.slider__line');
let prevButton = document.querySelector('.button-prev');
let nextButton = document.querySelector('.button-next');
let dots = document.querySelectorAll('.dot');
let position = 0;
let dotIndex = 0;


const nextSlide = () => {
   if (position < ((dots.length - 1) * 475)) {
      position += 475;
      dotIndex++
   }


   sliderLine.style.left = -position + 'px';
   dotActive(dotIndex)
}
nextButton.addEventListener('click', nextSlide)


const prevSlide = () => {
   if (position > 0) {
      position -= 475;
      dotIndex--
   }
   sliderLine.style.left = -position + 'px';
   dotActive(dotIndex)
}
prevButton.addEventListener('click', prevSlide)


const dotActive = (index) => {
   for (let dot of dots) {
      dot.classList.remove('active')
   }
   dots[index].classList.add('active')
}




dots.forEach((dot, index) => {
   dot.addEventListener('click', () => {
      position = 475 * index;
      sliderLine.style.left = -position + 'px';
      dotIndex = index
      dotActive(dotIndex)
   })
})



//==================SLIDER_FAVORITES======================


const inputWinter = document.querySelector('.input__winter')
const inputSpring = document.querySelector('.input__spring')
const inputSummer = document.querySelector('.input__summer')
const inputAutumn = document.querySelector('.input__autumn')
const inputsAll = document.querySelectorAll('.input')


const bookWinter = document.querySelector('.book__winter')
const bookSpring = document.querySelector('.book__spring')
const bookSummer = document.querySelector('.book__summer')
const bookAutumn = document.querySelector('.book__autumn')


let winter = () => {
   //inputWinter.classList.toggle('current')
   inputWinter.addEventListener('animationend', (endtAnimationIn) => {
      bookWinter.classList.remove('current')
   })
   bookWinter.classList.remove('hidden');
   bookWinter.classList.add('fade-in')
   bookWinter.addEventListener('animationend', (endtAnimationIn) => {
      bookWinter.classList.remove('fade-in')
   })
   bookSpring.classList.add('hidden')
   bookSummer.classList.add('hidden');
   bookAutumn.classList.add('hidden');
}
inputWinter.addEventListener('click', winter)



let spring = () => {
   bookWinter.classList.add('hidden');
   //inputSpring.classList.toggle('current')
   bookSpring.classList.remove('hidden')
   bookSpring.classList.add('fade-in')
   bookSpring.addEventListener('animationend', (endtAnimationIn) => {
      bookSpring.classList.remove('fade-in')
   })
   bookSummer.classList.add('hidden');
   bookAutumn.classList.add('hidden');
}
inputSpring.addEventListener('click', spring)


let summer = () => {
   bookWinter.classList.add('hidden');
   bookSpring.classList.add('hidden')
   bookSummer.classList.remove('hidden');
   bookSummer.classList.add('fade-in')
   bookSummer.addEventListener('animationend', (endtAnimationIn) => {
      bookSummer.classList.remove('fade-in')
   })
   bookAutumn.classList.add('hidden');
}
inputSummer.addEventListener('click', summer)


let autumn = () => {
   bookWinter.classList.add('hidden');
   bookSpring.classList.add('hidden')
   bookSummer.classList.add('hidden');
   bookAutumn.classList.remove('hidden');
   bookAutumn.classList.add('fade-in')
   bookAutumn.addEventListener('animationend', (endtAnimationIn) => {
      bookAutumn.classList.remove('fade-in')
   })
}
inputAutumn.addEventListener('click', autumn)

//inputsAll.forEach((item) => {
//   if (item.classList.contains('current'))
//      console.log('IM HERE')
//})


//=================PROFILE_NO_AUTH=================================

const profileIcon = document.querySelector('.profile__icon')
const profileNoAuth = document.querySelector('.profile__no-auth')

const menuNoAuth = () => {
   profileNoAuth.classList.toggle('show')
}
profileIcon.addEventListener('click', menuNoAuth)


let closeProfileNoAuth = (event) => {
   if (event.target.classList.contains('welcome')) {
      profileNoAuth.classList.remove('show')
   }
   if (event.target.classList.contains('nav')) {
      profileNoAuth.classList.remove('show')
   }
   if (event.target.classList.contains('header__container')) {
      profileNoAuth.classList.remove('show')
   }
   if (event.target.classList.contains('about__container')) {
      profileNoAuth.classList.remove('show')
   }
   if (event.target.classList.contains('header__title')) {
      profileNoAuth.classList.remove('show')
   }
   if (event.target.classList.contains('welcome__title')) {
      profileNoAuth.classList.remove('show')
   }
   if (event.target.classList.contains('menu__burger-btn')) {
      profileNoAuth.classList.remove('show')
   }

   //console.log(event)
}
document.body.addEventListener('click', closeProfileNoAuth)



//======================POP-UP_REGISTER=========================


const popupRegisterLink = document.querySelector('.register-link')
const popupRegisterMenu = document.querySelector('.pop-up__register')
const buttonSignUp = document.querySelector("#library-card > div > div.library-card__cards.cards > div.cards__get-a-cards.get-a-cards > div.get-a-cards__buttons > button:nth-child(1)")
const buttonRegisterClose = document.querySelector('.register__close')
const bodyRegister = document.querySelector('.register__body')


let openRegisterPopup = () => {
   popupRegisterMenu.classList.toggle('pop-up-open')
}
popupRegisterLink.addEventListener('click', openRegisterPopup)
buttonSignUp.addEventListener('click', openRegisterPopup)


let closeRegisterPopup = () => {
   popupRegisterMenu.classList.remove('pop-up-open')
   profileNoAuth.classList.remove('show')

}
buttonRegisterClose.addEventListener('click', closeRegisterPopup)


let close = (event) => {
   if (event.target.classList.contains('register__body') || (event.target.classList.contains('login__body'))) {
      popupRegisterMenu.classList.remove('pop-up-open')
      profileNoAuth.classList.remove('show')
      popupLoginMenu.classList.remove('pop-up-open')
   }
   //console.log(event)
}

document.body.addEventListener('click', close)




const registrationButton = document.getElementById('register-button')
const lS = localStorage;
const registerFirstName = document.getElementById('first-name')
const registerLastName = document.getElementById('last-name')
const registerEmail = document.getElementById('email')
const registerPassword = document.getElementById('password')


registrationButton.addEventListener('click', (event) => {
   let formData = [];
   let user = {};

   user[registerFirstName.name] = registerFirstName.value
   user[registerLastName.name] = registerLastName.value
   user[registerEmail.name] = registerEmail.value
   user[registerPassword.name] = registerPassword.value

   //formData.push(user)
   console.log(registerFirstName)
   //lS.setItem('formData', JSON.stringify(formData))

   //const result = 
})
console.log(registerFirstName.name)




//==================POP-UP_LOGIN=======================


const popupLoginLink = document.querySelector('.login-link')
const popupLoginMenu = document.querySelector('.pop-up__login')
const buttonLogin = document.querySelector("#library-card > div > div.library-card__cards.cards > div.cards__get-a-cards.get-a-cards > div.get-a-cards__buttons > button:nth-child(2)")
const buttonLoginClose = document.querySelector('.login__close')
const bodyLogin = document.querySelector('.login__body')
const booksButton = document.querySelectorAll('.book__button')

//console.log(booksButton)

//booksButton.forEach = (event) => {
//   if (event.target.classList.contains('.book__button')) {
//      popupLoginMenu.classList.toggle('pop-up-open')
//      console.log(event)
//   }
//}



let openLoginPopup = () => {
   popupLoginMenu.classList.toggle('pop-up-open')
}
buttonLogin.addEventListener('click', openLoginPopup)
popupLoginLink.addEventListener('click', openLoginPopup)


let closeLoginPopup = () => {
   popupLoginMenu.classList.toggle('pop-up-open')
   profileNoAuth.classList.remove('show')
}
buttonLoginClose.addEventListener('click', closeLoginPopup)



//==================POP-UP_MY-PROFILE=======================


const popupMyProfile = document.querySelector('.pop-up_my-profile')
const buttonMyProfileClose = document.querySelector('.right-block__close')
const bodyMyProfile = document.querySelector('.my-profile__body')


let closeMyProfilePopup = () => {
   popupMyProfile.classList.remove('show')
}
buttonMyProfileClose.addEventListener('click', closeMyProfilePopup)


popupMyProfile.addEventListener('click', (event) => {
   if (event.target.classList.contains('my-profile__body'))
      popupMyProfile.classList.remove('show')
})


//===================POP-UP_BY_A_LIBRARY_CARD===================

const popupByALibraryCard = document.querySelector('.buy-a-library-card')
const buttonByALibraryCardClose = document.querySelector('.by-card__close')
const bodyByALibraryCard = document.querySelector('.by-card__body')

let closeByALibraryCardClose = () => {
   popupByALibraryCard.classList.remove('show')
}

buttonByALibraryCardClose.addEventListener('click', closeByALibraryCardClose)

popupByALibraryCard.addEventListener('click', (event) => {
   if (event.target.classList.contains('by-card__body')) {
      popupByALibraryCard.classList.remove('show')
   }
})




//================EMAIL_VALIDATION========================

const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const emailField = document.querySelector('.email-field')

function isEmailValid(value) {
   return EMAIL_REGEXP.test(value);
}

function onInput() {
   if (isEmailValid(emailField.value)) {
      emailField.style.borderColor = 'green';
   }
   else {
      emailField.style.borderColor = 'red';
   }
}

emailField.addEventListener('input', onInput)