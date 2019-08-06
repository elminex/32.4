const formatDate = (timeInSeconds = 0) => {
  if (timeInSeconds <= 60) {
    return `${timeInSeconds}s`;
  }
  let hours = Math.floor(((timeInSeconds / 60) / 60));
  let minutes = Math.floor((timeInSeconds / 60) % 60);
  let seconds = Math.floor(timeInSeconds % 60);
  switch (true) {
    case (hours === 0 && seconds !== 0):
      return `${minutes}m ${seconds}s`;
    case (hours === 0 && seconds === 0):
      return `${minutes}m`;
    case (minutes === 0 && seconds !== 0):
      return `${hours}h ${seconds}s`;
    case (minutes === 0 && seconds === 0):
      return `${hours}h`;
    case (seconds === 0):
      return `${hours}h ${minutes}m`;
    default:
      return `${hours}h ${minutes}m ${seconds}s`;
  }
}

module.exports = formatDate;