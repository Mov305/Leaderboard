const date = document.getElementById('date');

const setDate = () => {
  let now = new Date();
  date.innerHTML = now.toUTCString();
  setInterval(() => {
    now = new Date();
    date.innerHTML = now.toUTCString();
  }, 60000);
};

export default setDate;
