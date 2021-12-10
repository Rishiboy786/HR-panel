console.log("This is my index.js");
// Data is an array of objects which contains information about the candidates
const data = [
    {
        name: 'Rishbh Pandey',
        age: 21,
        city: 'Rajsamand',
        language: 'C++',
        framework: 'anguler',
        image: 'https://media-exp1.licdn.com/dms/image/C5603AQFHYSa-q1xa5A/profile-displayphoto-shrink_100_100/0/1589170159268?e=1644451200&v=beta&t=eGXlw98yQ1XwF-CnjEsATtXdU3HhbR44wFCDxRa6zG4'
    },

    {
        name: 'Syed urooj kamal',
        age: 22,
        city: 'Bangalore',
        language: 'Rust',
        framework: 'django',
        image: 'https://media-exp1.licdn.com/dms/image/C5603AQGadb4tXn2NkQ/profile-displayphoto-shrink_100_100/0/1594055260392?e=1644451200&v=beta&t=02mPHyKwYDWTUAm96vUwulDccJ9NOHpRAcX0pC4xBzA'
    },

    {
        name: 'Amandeep singh',
        age: 23,
        city: 'punjab',
        language: 'python',
        framework: 'django',
        image: 'https://media-exp1.licdn.com/dms/image/C4E03AQF3U3rXfDBh0g/profile-displayphoto-shrink_100_100/0/1598617302234?e=1644451200&v=beta&t=6ZdLilazPEkxtzEzxpCMxu230e_QC5B7W2Ben0THrtA'
    },

    {
        name: 'saijal gulyani',
        age: 21,
        city: 'Mumbai',
        language: 'java',
        framework: 'Flask',
        image: 'https://media-exp1.licdn.com/dms/image/C4E03AQGhfNkMXNALYA/profile-displayphoto-shrink_100_100/0/1628837188788?e=1644451200&v=beta&t=V4YKyuSVmhy1KdF-t5JqyrIFws01_-wzjerIObOxlDs'
    },

    {
        name: 'Kanishka singh',
        age: 23,
        city: 'Jharkhand',
        language: 'Nothing',
        framework: 'no Framework',
        image: 'https:randomuser.me/api/portraits/women/57.jpg'
    }
]


// CV Iterator
function cvIterator(profiles){
    let nextIndex=0;
    return {
        next: function(){
            return nextIndex<profiles.length ?
            {value: profiles[nextIndex++], done: false} :
            {done: true}
        }
    };
}
const candidates = cvIterator(data);

nextCV();
// Button listener for next button
const next = document.getElementById('next');
next.addEventListener('click', nextCV);


function nextCV(){
    const currentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(currentCandidate != undefined){
    image.innerHTML = `<img src='${currentCandidate.image}'>`;
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} years old</li>
    <li class="list-group-item">Lives in ${currentCandidate.city}</li>
    <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
    <li class="list-group-item">Uses ${currentCandidate.framework} framework</li>
  </ul>`;
    }
    else{
        alert('End of candidate applications');
        window.location.reload();
    }

}

