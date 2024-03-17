const random = document.getElementById('random_image');
const result = document.getElementById('image');
random.addEventListener('click', getRandomImage);

function getRandomImage() {
    fetch('https://picsum.photos/200/300')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.url; 
        })
        .then(imageUrl => {
                const img = document.createElement('img');
                img.src = imageUrl;
                img.alt = 'dog';
                result.textContent = ''; 
                result.appendChild(img);
            
        })
        .catch(error => {
            console.error('Error fetching image:', error);
        });
}
