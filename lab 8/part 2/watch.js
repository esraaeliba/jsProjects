function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('digital-clock').textContent = `${hours}:${minutes}:${seconds}`;
  }
  
  function setAlarm() {
    const alarmTime = document.getElementById('alarm-time').value;
    if (!alarmTime) {
      alert('Please set a valid alarm time.');
      return;
    }
  
    const now = new Date();
    const currentHours = now.getHours();
    const currentMinutes = now.getMinutes();
    const [alarmHours, alarmMinutes] = alarmTime.split(':').map(Number);
  
    const alarmDate = new Date();
    alarmDate.setHours(alarmHours);
    alarmDate.setMinutes(alarmMinutes);
    alarmDate.setSeconds(0);
  
    const timeDiff = alarmDate - now;
  
    if (timeDiff > 0) {
      setTimeout(() => {
        alert('Alarm! It is time!');
      }, timeDiff);
      alert(`Alarm set for ${alarmTime}`);
    } else {
      alert('Please set a future alarm time.');
    }
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  
  // Initial clock update
  updateClock();
  