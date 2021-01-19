class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.targetDate = targetDate;

    this.timer = document.querySelector(selector);
    this.days = this.timer.querySelector('[data-value="days"]');
    this.hours = this.timer.querySelector('[data-value="hours"]');
    this.mins = this.timer.querySelector('[data-value="mins"]');
    this.secs = this.timer.querySelector('[data-value="secs"]');
  }

  start() {
    setInterval(() => {
      const currentTime = Date.now();
      const deltatime = this.targetDate - currentTime;
      const time = this.getTime(deltatime);
      this.days.textContent = time.days;
      this.hours.textContent = time.hours;
      this.mins.textContent = time.mins;
      this.secs.textContent = time.secs;
    }, 1000);
  }

  getTime(time) {
    const days = this.pad(Math.floor(time / 1000 / 60 / 60 / 24));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return { days, hours, mins, secs };
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }
}

const countdownTillEndOfLockdown = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jan 24, 2021"),
});

countdownTillEndOfLockdown.start();
