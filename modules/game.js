class Game {
  Url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/oRDequUNooGhj1siyYYq/scores';

  async getFetch() {
    try {
      const response = await fetch(this.Url);
      const data = await response.json();
      this.render(data);
    } catch (error) {
      this.alert(error);
    }
  }

  async postFetch(user, score) {
    try {
      const req = await fetch(this.Url, {
        method: 'POST',
        body: JSON.stringify({ user, score }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });

      const data = await req.json();
      this.alert(data.result);
      this.getFetch();
    } catch (error) {
      this.alert(error);
    }
  }

  addUser() {
    const add = document.getElementById('addButton');
    add.addEventListener('click', (e) => {
      e.preventDefault();
      const user = document.getElementById('name');
      const score = document.getElementById('score');
      if (user.value !== '' && typeof parseInt(score.value, 10) === 'number') {
        this.postFetch(user.value, parseInt(score.value, 10));
        user.value = '';
        score.value = '';
      } else {
        this.alert('Please input valid data');
      }
    });
  }

  refresh() {
    const refresh = document.getElementById('refresh');
    const list = document.getElementById('listOfBooks');
    refresh.addEventListener('click', () => {
      list.innerHTML = '';
      setTimeout(() => this.getFetch(), 100);
    });
  }

  alert(data) {
    const alert = document.getElementById('alert');
    alert.textContent = data;
    alert.classList.remove('hide-alert');
    alert.addEventListener('click', () => alert.classList.add('hide-alert'));
    setTimeout(() => alert.classList.add('hide-alert'), 2000);
  }

  render({ result }) {
    const ul = document.getElementById('listOfBooks');
    ul.innerHTML = '';
    result
      .sort((a, b) => b.score - a.score)
      .forEach((ele, rank) => {
        const li = document.createElement('li');
        const span1 = document.createElement('span');
        const span2 = document.createElement('span');
        const span3 = document.createElement('span');
        const div = document.createElement('div');
        const p = document.createElement('p');

        span1.textContent = rank + 1;
        p.textContent = ele.user;
        span2.textContent = ele.score;

        [span3, p].forEach((element) => div.append(element));
        [span1, div, span2].forEach((element) => li.append(element));

        ul.append(li);
      });
  }
}

const game = new Game();

export default game;
