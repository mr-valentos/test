const data = {
  category: [
    {
      name: 'Targeted panels',
      title: '',
      text: `Panels are often used in clinical settings because they’re low cost and provide high quality coverage 
      of specific, pre-defined genomic regions of interest. While useful in certain settings, such assays are limited by their narrow focus.
      With ≥ 99.5% call rate across ~600 genes relevant 
      to many disease states, the Exome+ assay enables you to run multiple panel-grade analyses with a single sample.`,

      img: 'https://uc0d5fb8aef96b67703e5bbb24cd.previews.dropboxusercontent.com/p/thumb/ABtyLDKD4xW7dXEJ-pCrz95zS1qqcqKnqO9POM4_w1hqLg1d-ZG8HpJw8VWo6b8Td_1hIPYHdqof_QmGWf5jyUWjAM4yia9VssCKOLuVOb2mMtknyE7gwzpyHio7BimkceE_QRjXvo-EFBJ_y8lP8j8HTw6Fa6S2LxbH_le18s5Bg8TV-Hj26s7qbra393myeVuF37nxOLVwMy-X955RgYhXIjyzT6cmBDLQG90emTihxNKOVZLLCL6Mj1-my5mQW9jlry7ZJTzEyVAuGEZ05mphsOuTaxBEr6e0ESoGu6EDwLK256mKvBgFBNV3TeZSGTeGi-983u7id2ByXV7LaB7NxOM3u14ciM3g5tV9oy_v2tzhsQ5I1QkdyotmsoXmwZ2Kk7gkQK6qCQLjq768poB8uezLZcWp6tqKrjfj-_3eKWK79lz0tOlBnC5XSctTaLg/p.png'
    },
    {
      name: 'Whole Exome Sequensing',
     text: `Panels are often used in clinical settings because they’re low cost and provide high quality coverage 
      of specific, pre-defined genomic regions of interest. While useful in certain settings, such assays are limited by their narrow focus.
      With ≥ 99.5% call rate across ~600 genes relevant 
      to many disease states, the Exome+ assay enables you to run multiple panel-grade analyses with a single sample.`,
      img: 'https://uc42dce7fa1351c59f57a5bc3843.previews.dropboxusercontent.com/p/thumb/ABusUEKhUOF6PW6RowBQ9076LTf5m7wIA-qHtAAf9mZvoEggIu2DYKRYa_IUs_O01RoLHZBCaYgd7NAeQOY3PAYIQ5wvw45rzRmVwVKMXUvUhagNecCkLG5FuL4MneDCKt2sKQixpDvtZUOBNBvWEugp-zPWE-l407SGD9DvCuqMaBqBWiSubIbOpirSaHMZi3ueFpMxikQpyNnC30_MO-cCHaUZZX0ZvNLi6I-rZgUs54CZiuTcsuGCqvf8LaOzMotpG2sjLq3rMSNaCYvA5B7ukLqQVNyFMV_XGsg1IfKFkMS8RhV1OQE51HCSr3xT4V-99-_12hWjgzsKgsohZErKFtLXrqlQjupfa18yl6nu9HYrYmTqQS4BUd0MqhfoZ3iCEsRgjAFlVLSD4LjpprYUiq1jov0wYFPh3QCvB2Gbew/p.png'
    },
    {
      name: 'IcWGS and Micriarreys',
      text: `Panels are often used in clinical settings because they’re low cost and provide high quality coverage 
      of specific, pre-defined genomic regions of interest. While useful in certain settings, such assays are limited by their narrow focus.
      With ≥ 99.5% call rate across ~600 genes relevant 
      to many disease states, the Exome+ assay enables you to run multiple panel-grade analyses with a single sample.`,
      img: 'https://ucbe1bb15a0fd9a5039042be8e27.previews.dropboxusercontent.com/p/thumb/ABvT0wuFg2EAAF_g8mpQDmamfY5GwLJZQZm46KrNsCDXr2TrhHenBNcRgCqD-YJ9Otq8S4zDHJhaDOTTI28qPeVLJNzYKMnByZsWfMYP1s3lzLUOp9vJOKMi7lYxjG4I6LmynDQ8pU_qKnAnG_9TXRuIFECcQdg4fQzFTmYgpkY6PY40k7g3cj4cle8NoZsjVThPjfXA3DKEM1OGwVpwwPvSfvPglr2kPve9f1uaKA0gnXmVEWqvdrS1S0nsQllkZluwNfcyYxLg5GUtLBozfrTblTf2AcwbePDNLg-WXD7ZUCdW93mGfjruqg4XLtTv6epWHLcqqP1YAEm1NZOHT7AvzlvsAuds_ScZs5b8oTT4roJHiXkJYZ-a1qF6bV9u3AFV7E4LhUs-FZE69-mmDXxlq0AfR1Rtq1s-nHzK-q5zUQ/p.png'
    },
  ]
}

// let slides = document.querySelector('.slider__slides')
for (let i = 0; i < data.category.length; i++){
  $('.slider__battons').append(`
  <button class="slider__button slider__button--${i + 1}">${data.category[i].name}</button>`
  )
}

console.log(data.category.length)

for (let info of data.category){
  $('.slider__slides').append(`
    <article class="slider__slide">
      <div class="slider__text-content">
        <h1>${info.name}</h1>
        <p>
        ${info.text}
        </p>
      </div>
      <img 
        src="${info.img}"
        class="slider__img"
        alt="some img"
      >
    </article>`
  )
}




$('.slider__button--1').click(function(){ shiftSlide(0) })
$('.slider__button--2').click(function(){ shiftSlide(1) })
$('.slider__button--3').click(function(){ shiftSlide(2) })

$(`.slider__button--1`).addClass('slider__button--active')

let activeSlide = 0;


function shiftSlide(direction) {
  if ($('.slider__slide').hasClass('animation')) {
    return;
  }
  $('.slider__button--active').removeClass('slider__button--active')
   
  activeSlide = direction;
  
  $(`.slider__button--${activeSlide + 1}`).addClass('slider__button--active')

  $('.slider__slide').addClass('animation-break').css('transform','translateX(' + (-direction * 100) + '%)'); 
  $('.slider__text-content').addClass('animation')
  $('.slider__img').addClass('animation')
  setTimeout(() => {
    $('.slider__slide').removeClass('animation-break')
    $('.slider__text-content').removeClass('animation')
    $('.slider__img').removeClass('animation')
  }, 1000)
  
}




setInterval(() => {
  if (activeSlide === 2) {
    activeSlide = 0;
    shiftSlide(activeSlide);
    return;
  }
  activeSlide++;
  shiftSlide(activeSlide);
}, 5000)