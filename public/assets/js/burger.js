
document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
        console.info('DOM loaded');
    }
    const btns = document.querySelectorAll('.devour');
    console.log('in burger.js')
    //Event listener for all of the devour buttons
    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = e.target.getAttribute('data-burger-id');
            console.log(id);
            const newDevourState = {
                devoured: true
            }
            fetch(`/api/devour/${id}`, {
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newDevourState)
            }).then(res => {
                // Check that the response is all good
                // Reload the page so the user can see the new quote
                if (res.ok) {
                    console.log(`changed devoured to: ${newDevourState}`);
                    location.reload('/');
                } else {
                    alert('something went wrong!');
                }
            })
        })
    });

});
