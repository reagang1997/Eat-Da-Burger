
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
                    location.reload();
                } else {
                    alert('something went wrong!');
                }
            })
        })
    });

    const createBtn = document.getElementById('create-burger');

    if (createBtn) {
        createBtn.addEventListener('submit', (e) => {
            e.preventDefault();

            const newBurger = {
                burger_name: document.getElementById('new-burger').value.trim(),
            };

            console.log(newBurger);

            fetch('/api/createBurger', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                // Make sure to serialize the JSON body
                body: JSON.stringify(newBurger)
            }).then(() => {
                document.getElementById('new-burger').value = '';

                console.log('Created New Burger!');
                location.reload();
            })
        })
    }

});
