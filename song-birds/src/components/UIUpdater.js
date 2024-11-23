export class UIUpdater {
    startQuizUi() {
        const quizPage = document.querySelector('.quiz-page');
        const startPage = document.querySelector('.start-page');

        startPage.classList.remove('active');
        quizPage.classList.add('active');
    }

    updateBirdList(categoryBird) {
        const birdList = document.querySelector('#birdList');
        birdList.innerHTML = ""; // Eski ro'yxatni tozalash

        categoryBird.forEach((bird) => {
            const li = document.createElement('li');
            li.classList.add('bird-option');
            li.textContent = bird.name;
            li.dataset.bird = bird.name;

            birdList.appendChild(li);
        });
    }

    updateScore(score) {
        const scoreElement = document.querySelector('.score'); // Score elementi
        scoreElement.textContent = `Score: ${score}`; // Yangilangan score
    }
}


