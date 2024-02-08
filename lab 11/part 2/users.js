document.addEventListener('DOMContentLoaded', function() {
    fetchUserData();
  });
  
  async function fetchUserData() {
    try {
      const response = await fetch('https://reqres.in/api/users?page=2');
      const data = await response.json();
      displayUserData(data.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }
  
  function displayUserData(users) {
    const userContainer = document.getElementById('userContainer');
    
    users.forEach(user => {
      const userCard = document.createElement('div');
      userCard.classList.add('user-card');
  
      const avatar = document.createElement('img');
      avatar.src = user.avatar;
      avatar.alt = 'User Avatar';
      avatar.classList.add('user-avatar');
  
      const email = document.createElement('p');
      email.textContent = user.email;
      email.classList.add('user-email');
  
      userCard.appendChild(avatar);
      userCard.appendChild(email);
  
      userContainer.appendChild(userCard);
    });
  }
  