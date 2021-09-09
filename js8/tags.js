// const tagsContainer = document.querySelector('.js-tags')
// let selectedTag = null;

// tagsContainer.addEventListener('click', onTagsContainerClick)

// function onTagsContainerClick(e) {
//     if (e.target.nodeName !== 'BUTTON') {
//         return
//     }

//     const currentActiveBtn = document.querySelector('tags__btn--active')

// // console.log(currentActiveBtn);

// //     if (currentActiveBtn) {
// //         currentActiveBtn.classList.remove('tags__btn--active');
// //     }

//     currentActiveBtn?.classList.remove('tags__btn--active');

 
// const nextActiveBtn = e.target

//     nextActiveBtn.classList.add('tags__btn--active');
//     selectedTag = nextActiveBtn.dataset.value;

//     console.log(selectedTag);
// }

// 2

const tagsContainer2 = document.querySelector('.js-tags')
let selectedTag2 = new Set();

tagsContainer2.addEventListener('click', onTagsContainerClick2)

function onTagsContainerClick2(e) {
    if (e.target.nodeName !== 'BUTTON') {
        return
    }

    const btn = e.target
const tag = btn.dataset.value
    const isActive = btn.classList.contains('tags__btn--active')
  
    if (isActive) {
        selectedTag2.delete(tag) 
    } else {
          selectedTag2.add(tag);
    }

    btn.classList.toggle('tags__btn--active');

    console.log(selectedTag2);

    // console.log(selectedTag2);
}

