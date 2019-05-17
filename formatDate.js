const formatDate = (timeInSeconds) => {
  if (timeInSeconds) {
    var days = Math.floor(timeInSeconds / 86400);
    var hours = Math.floor((timeInSeconds % 86400) / 3600);
    var minutes = Math.floor(((timeInSeconds % 86400) % 3600) / 60);
    var seconds = ((timeInSeconds % 86400) % 3600) % 60;

    var result = [
      days ? (days + 'd') : null,
      hours ? (hours + 'h') : null,
      minutes ? (minutes + 'm') : null,
      seconds ? (seconds + 's') : null,
    ];

    result = result.filter(((element) => element !== null));
    return result.join(' ');
  }
  return '0s';
}

module.exports = formatDate;
