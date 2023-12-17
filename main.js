const button = document.getElementById('btn');
const personsWrapper = document.querySelector('.persons');
const defaultUserPhoto = 'https://cdn-icons-png.flaticon.com/512/1077/1077114.png';

button.addEventListener('click', () => {
    button.disabled = true; // блокируем кнопку, чтобы избежать повторных запросов

    const persons = [
        { name: 'Звёздный Лорд', age: '37', photo: 'https://upload.wikimedia.org/wikipedia/ru/7/77/Star-Lord.png' },
        { name: 'Ракета', age: '35', photo: 'https://masterpiecer-images.s3.yandex.net/62b847f07daf11ee835dbaea8797b5f2:upscaled' },
        { name: 'Гамора', age: '29', photo: 'https://news.store.rambler.ru/img/1df47fc01a311582ef6dfeac1fa21700?img-1-resize=width%3A1280%2Cheight%3A720%2Cfit%3Acover&img-format=auto' },
        { name: 'Дракс', age: '49', photo: 'https://i.ytimg.com/vi/_kO9Gx3rGhs/maxresdefault.jpg' },
        { name: 'Грут', age: '25', photo: 'https://wikicomics.ru/uploads/posts/2020-08/1596968600_grutgroot.jpg' }
    ];

    setTimeout(() => { // имитация задержки загрузки данных
        persons.forEach(person => {
            const personCard = document.createElement('div');
            personCard.setAttribute('class', 'personCard');

            personCard.innerHTML = `
                <div class="personImage">
                    <img src="${person.photo || defaultUserPhoto}" alt="${person.name}">
                </div>
                <p>${person.name}</p>
                <p>Age: ${person.age}</p>
            `;

            personsWrapper.append(personCard);
        });
    }, 1000);
});

let xhr = new XMLHttpRequest();
xhr.open('GET', 'data/peoples.json', true);
xhr.onload = function() {
    if (xhr.status === 200) {
        let data = JSON.parse(xhr.responseText);
        console.log(data);
    }
};
xhr.send();






