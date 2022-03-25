const scores = document.querySelectorAll('.number');

scores.forEach((score) => {
    score.addEventListener('click', () => {
      scores.forEach((score) => score.classList.remove('scoreClicked'))
      score.classList.add('scoreClicked')
      //extracting number of rating of each button
      rating = score.textContent
    })
})


//submited active state
document.querySelector('.submit').addEventListener('click', submitted);

function submitted() {
  document.querySelector('.ratingbox').classList.add('hidden');
  document.querySelector('.thankyoubox').classList.remove('hidden');
  //displaying the picked rating number
  document.querySelector('.score-msg').innerText = `You selected ${rating} out of 5`;
}

