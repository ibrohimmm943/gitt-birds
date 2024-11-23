export class AudioPlayer {
    constructor() {
        this.audio = null;
        this.updateInterval = null; // Progressni yangilash uchun interval
    }

    toggleAudio(button, progressBar, timeDisplay) {
        if (this.audio && !this.audio.paused) {
            this.audio.pause();
            button.textContent = "▶️"; // Tugmani play qilish uchun o'zgartirish
            clearInterval(this.updateInterval); // Progressni yangilashni to'xtatish
        } else {
            this.playAudio(button, progressBar, timeDisplay);
        }
    }

    playAudio(button, progressBar, timeDisplay) {
        if (!this.audio) {
            this.audio = new Audio(button.dataset.audio);
            this.audio.addEventListener("loadedmetadata", () => {
                // Umumiy davomiylik yuklanganda vaqtni yangilash
                this.updateProgress(progressBar, timeDisplay);
            });
        }

        this.audio.play();
        button.textContent = "❚❚"; // Tugmani pause qilish uchun o'zgartirish

        // Progress bar va vaqtni yangilash
        this.updateInterval = setInterval(() => {
            this.updateProgress(progressBar, timeDisplay);
        }, 500); // Har 500ms da yangilash
    }

    updateProgress(progressBar, timeDisplay) {
        if (this.audio && this.audio.duration) {
            const progressPercent = (this.audio.currentTime / this.audio.duration) * 100;
            progressBar.style.width = `${progressPercent}%`;

            const currentTime = this.formatTime(this.audio.currentTime);
            const duration = this.formatTime(this.audio.duration);
            timeDisplay.textContent = `${currentTime} / ${duration}`;
        }
    }

    formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60).toString().padStart(2, "0");
        return `${minutes}:${secs}`;
    }

    playSpecificAudio(audioPath) {
        // Har bir qushning o'z ovozini ijro etish
        if (this.audio) {
            this.audio.pause();
        }
        this.audio = new Audio(audioPath);
        this.audio.play();
    }
}








