

// 카드 버튼 아이콘 변경
const cardBtn1 = document.querySelectorAll('.cardBtn1');
const cardBtn2 = document.querySelectorAll('.cardBtn2');
const cardBtn3 = document.querySelectorAll('.cardBtn3');
// cardBtn1

let bookMarkOnOff = 0;
for(let i = 0; i < cardBtn1.length; i++){
cardBtn1[i].addEventListener('click', () => {
  if(bookMarkOnOff === 0) {
    cardBtn1[i].innerHTML = '<i class="fa-solid fa-bookmark"></i>';
    bookMarkOnOff++;
  }else if (bookMarkOnOff === 1) {
    cardBtn1[i].innerHTML = '<i class="fa-regular fa-bookmark"></i>';
    bookMarkOnOff--;
  }
})
}

// cardBtn2, cardBtn3
// cardBtn2와 cardBtn3의 length가 무조건 같으므로 같은 for문에 작성
// 마우스 호버시 아이콘 변경
for(let i = 0; i < cardBtn2.length; i++){
  cardBtn2[i].addEventListener('mouseenter', () => {
    cardBtn2[i].innerHTML = '<i class="fa-solid fa-comment"></i>';
    cardBtn2[i].style.cursor = 'pointer';
  })
  cardBtn3[i].addEventListener('mouseenter', () => {
    cardBtn3[i].innerHTML = '<i class="fa-solid fa-share-from-square"></i>';
    cardBtn3[i].style.cursor = 'pointer';
  });
}

// 마우스가 떨어지면 아이콘 변경
for(let i = 0; i < cardBtn2.length; i++){
  cardBtn2[i].addEventListener('mouseleave', () => {
    cardBtn2[i].innerHTML = '<i class="fa-regular fa-comment">';
  })
  cardBtn3[i].addEventListener('mouseleave', () => {
    cardBtn3[i].innerHTML = '<i class="fa-regular fa-share-from-square"></i>';
  });
}

// cardBtn3
// 마우스 호버시 아이콘 변경
// for(let i = 0; i < cardBtn3.length; i++){
// }

// 마우스가 떨어지면 아이콘 변경
// for(let i = 0; i < cardBtn3.length; i++){
// }


// 카드 버튼 아이콘 변경 끝

// 모달
const modal = document.querySelector('.modal');
const btnOpenPopup = document.querySelector('.btnOpenPopup');
const body = document.querySelector('body');
const modalClose = document.querySelector('.modalCloseArea');

// 모달 on
btnOpenPopup.addEventListener('click', () => {
  modal.classList.toggle('show');
  body.style.overflow = 'hidden';
  btnOpenPopup.style.display = "none";
});
// 모달 off
modalClose.addEventListener('click', () => {
  modal.classList.toggle('show');
  body.style.overflow = 'auto';
  btnOpenPopup.style.display = "block";

});
// 모달 끝

