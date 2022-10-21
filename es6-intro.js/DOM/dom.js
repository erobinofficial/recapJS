document.getElementById('add-border').addEventListener('click', function(){
    const container = document.getElementById('friend-container');
    container.style.border = '3px solid red';
});
document.getElementById('add-bg').addEventListener('click', function(){
    const friends = document.getElementsByClassName('friend');
        for(const friend of friends){
            friend.style.backgroundColor = 'lightblue';
        }
});
document.getElementById('add-friend').addEventListener('click', function(){
    const container = document.getElementById('friend-container');
    const friendDiv = document.createElement('div');
    friendDiv.classList.add('friend');
    friendDiv.innerHTML = `
            <h1 class="friend-name">Friend-5</h1>
            <p>Lorem, ipsum dolor.</p>
            `;
    container.appendChild(friendDiv);
});