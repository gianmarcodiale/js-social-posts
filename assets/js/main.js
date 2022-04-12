/* Milestone 1
Creiamo il nostro array di oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
id del post, numero progressivo da 1 a n
nome autore,
foto autore,
data in formato americano (mm-gg-yyyy),
testo del post,
immagine (non tutti i post devono avere una immagine),
numero di likes. */

const card_info = [
    {
        id: 1,
        author: 'Light Yagami',
        author_photo: 'https://www.satyrnet.it/wp-content/uploads/2009/10/Light-Yagami-1.jpg',
        caption: 'Sono pronto a diventare il Dio del Nuovo Mondo',
        date: '29/10/2022',
        image:  'https://nospoiler.it/storage/posts/featured/052a2448-e6aa-4abc-8176-cedd04ce119a.png',
        likes: 58
    },
    {
        id: 2,
        author: 'Ryuk',
        author_photo: 'https://www.hallofseries.com/wp-content/uploads/2021/03/sdwedwe.png',
        date: '10/08/2022',
        caption: 'Ma quanto sono buone le mele sulla Terra?',
        image:  'https://i0.wp.com/www.meganerd.it/wp-content/uploads/2020/06/ryuk-death-note-terrorizza-fan-fedele-cosplay-v3-419585.jpg?resize=840%2C473&ssl=1',
        likes: 70
    },
    {
        id: 3,
        author: 'Elle',
        author_photo: 'https://www.animeclick.it/prove/upload/img/News42343.png',
        date: '13/12/2021',
        caption: 'Le due cose che mi piacciono di più sono i dolci e cercare di catturare Kira',
        image: 'https://i.ytimg.com/vi/HmRZmovhEyM/sddefault.jpg',
        likes: 100
    },
];

const likes_div = document.getElementById('like_counter');
const likes = [];


for (let i = 0; i <= card_info.length; i++) {
    const post = card_info[i];
    let likes = post.likes;
    let id = post.id;
}
