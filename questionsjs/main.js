function toggleAnswer(cardNumber) {
    const answer = document.getElementById(`answer${cardNumber}`);
    answer.style.display = (answer.style.display === 'none' || answer.style.display === '') ? 'block' : 'none';
  }
  