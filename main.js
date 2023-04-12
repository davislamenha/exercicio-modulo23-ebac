$(document).ready(function () {
  const endpoint = 'https://api.github.com/users/davislamenha';
  fetch(endpoint)
    .then(function (resposta) {
      return resposta.json();
    })
    .then(function (json) {
      const {
        avatar_url,
        name,
        login,
        public_repos,
        following,
        followers,
        html_url,
      } = json;

      $('.profile-avatar').attr('src', avatar_url);
      $('.profile-name').text(name);
      $('.profile-username').text(login);
      $('.numbers-item-repos').append(public_repos);
      $('.numbers-item-followers').append(followers);
      $('.numbers-item-following').append(following);
      $('.profile-link').attr('href', html_url);
    })
    .catch(function (erro) {
      alert('Os dados não foram carregados, sinto muito pelo transtorno!');
    });
});
