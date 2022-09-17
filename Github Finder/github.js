class GitHub{
  constructor(){
    this.client_id='6aa0f351afbdd5380d86'
    this.client_secret='de25d32eb8847be979b524d661e13f8459166c08';
    this.repos_count=5;
    this.repos_sort='created:asc';
  }
  async getUser(user){
    const profileResponse=await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile=await profileResponse.json();
    const repos=await repoResponse.json();
    return{
       profile,
       repos
    }
  }
}