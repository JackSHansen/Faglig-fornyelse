document.addEventListener('DOMContentLoaded', () => {
  const startButton = document.querySelector('.start-button') as HTMLButtonElement;
  const timerDisplay = document.querySelector('.timer-display') as HTMLElement;
  let startTime: Date | null = null;

  if (startButton && timerDisplay) {
    startButton.addEventListener('click', () => {
      if (startButton.textContent === 'Start') {
        startTime = new Date();
        const formattedStartTime = startTime.toLocaleString();

        // Her oprettes der et nyt p element til start tidspunktet
        const startTimeElement = document.createElement('p');
        startTimeElement.textContent = `Start time: ${formattedStartTime}`;
        timerDisplay.appendChild(startTimeElement);

        startButton.textContent = 'Stop';
      } else {
        if (startTime) {
          const endTime = new Date();
          const formattedEndTime = endTime.toLocaleString();

          // Her oprettes der et nyt p element til slut tidspunktet
          const endTimeElement = document.createElement('p');
          endTimeElement.textContent = `End time: ${formattedEndTime}`;
          timerDisplay.appendChild(endTimeElement);

          // Her beregnes der tidsforskelden mellem start og slut tidspunkterne
          const timeDifference = endTime.getTime() - startTime.getTime();
          const minutesDifference = Math.floor(timeDifference / 60000); // Forskellen i minutter
          const hoursDifference = Math.floor(minutesDifference / 60); // Forskellen i timer
          const remainingMinutes = minutesDifference % 60; // Resterende minutter

          // Her oprettes det et nyt p element til at give længden at timer og minutter fra start til slut
          const timeDifferenceElement = document.createElement('p');
          timeDifferenceElement.textContent = `Duration: ${hoursDifference} hours and ${remainingMinutes} minutes`;
          timerDisplay.appendChild(timeDifferenceElement);

          startButton.textContent = 'Start';
          startTime = null;
        }
      }
    });
  }
});
