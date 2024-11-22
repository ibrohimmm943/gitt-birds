export class EventHandler {
    constructor(quizManager) {
        this.quizManager = quizManager;
    }

    init() {
        const startQuiz = document.querySelector('.start-button');
        const playButton = document.querySelector('.play-button');
        const progressBar = document.querySelector('.progress');
        const timeDisplay = document.querySelector('.time');

        startQuiz.addEventListener('click', () => {
            this.quizManager.startQuiz();
        });

        playButton.addEventListener('click', (e) => {
            this.quizManager.audioPlayer.toggleAudio(
                e.target,
                progressBar,
                timeDisplay
            );
        });
    }
}

