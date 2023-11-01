function send(msg) {
    let message = document.createElement('div');
    message.className = 'message';
    message.innerHTML = `
    <input type='checkbox'>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
  <path
   d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
</svg>
    
<p>${msg.subject}</p>
<p>${msg.body}</p>
    `;

    document.getElementById('messageBox').appendChild(message);

}

send({
    subject: 'Gmail clone',
    body: 'Watch now on Youtube'
});

send({
    subject:'Linkenln',
    body: '3 new jobs for web development int...'
});

send({
    subject: 'Amazon',
    body: 'Amazon.in: Online Shopping India - Buy mobiles, laptops, cameras,Free Shipping & Cash on Delivery...'
});


send({
    subject: 'Swiggy',
    body: 'Swiggy superfast delivery to the rescue!'
});

send({
    subject: 'Instagram',
    body: 'Create account on instagram explore the world.....'
});

send({
    subject: 'Itvedant',
    body: 'Hi Sakshi , Your dream career in Master In Full Stack Web Development with AWS.'
});

send({
    subject: 'IRCTC Ltd.',
    body: 'Book Ticket Fast.....'
});

send({
    subject: 'GitHub',
    body: 'GitHub Eduction, New academic year is rolling in, and we github education are all set to fuel...'
});

send({
    subject: 'Uber',
    body: 'Explore advertising surfaces on the Uber app and in-car..'
});

send({
    subject: 'Youtube Music',
    body: 'Watch songs on  Youtube for free'
});

send({
    subject: 'Youtube',
    body: 'Watch..... Youtube for free'
});


send({
    subject: 'bootstrap',
    body: 'Ever wish you could just write HTML emails with Bootstrap and have it actually work?..you can.'
});