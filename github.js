
class Github {
    constructor() {
      this.client_id = '6f68fbd3b7aaecd55175';
      this.client_secret = 'e7dbec77c56041d3b6ce6e973ef99e916fabd392';
      this.repos_count = 5;
      this.repos_sort = 'created: asc';
    }
  
    async getUser(user) {
      const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
  
      const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
  
      const profile = await profileResponse.json();
      const repos = await repoResponse.json();
  
      return {
        profile,
        repos
      }
    }
  } 