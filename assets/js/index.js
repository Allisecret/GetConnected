function getJobs() {
    const token = localStorage.getItem('token');
    console.log(token);
    if (!token) {
        alert('You need to be logged in to view jobs.');
        return;
    }

    fetch('http://localhost:5000/api/jobs', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // or response.text() if the response is not JSON
    })
    .then(job_data => {
        console.log('Jobs data:', job_data);
        console.log('Jobs name:', job_data.data[0].name);
        // Optional: Navigate to jobs page or do something with the data
        navigateTo('jobs'); // Call your navigation function
    })
    .catch(error => {
        console.error('Error fetching jobs:', error);
    });
}

function getEstimates() {
    const token = localStorage.getItem('token');

    if (!token) {
        alert('You need to be logged in to view jobs.');
        return;
    }

    fetch('http://localhost:5000/api/estimates', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json(); // or response.text() if the response is not JSON
        })
        .then(estimates_data => {
            console.log('estimates data:', estimates_data);
            // console.log('Jobs name:', job_data.data[0].name);
            // Optional: Navigate to jobs page or do something with the data
            navigateTo('estimates'); // Call your navigation function
        })
        .catch(error => {
            console.error('Error fetching jobs:', error);
        });
}

function getCalender() {
    const token = localStorage.getItem('token');

    if (!token) {
        alert('You need to be logged in to view jobs.');
        return;
    }

    fetch('http://localhost:5000/api/calendar/events', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json(); // or response.text() if the response is not JSON
        })
        .then(calender_data => {
            console.log('Jobs data:', calender_data);
            // console.log('Jobs name:', job_data.data[0].name);
            // Optional: Navigate to jobs page or do something with the data
            navigateTo('calendar'); // Call your navigation function
        })
        .catch(error => {
            console.error('Error fetching jobs:', error);
        });
}


// Added Contact API
function getContacts() {
    const token = localStorage.getItem('token');

    if (!token) {
        alert('You need to be logged in to view contacts.');
        return;
    }

    contact_res = fetch('http://localhost:5000/api/contacts', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(contact_data => {
            console.log('Contacts data:', contact_data);
            // Optional: Navigate to contacts page or render data
            navigateTo('contacts', contact_data);
        })
        .catch(error => {
            console.error('Error fetching contacts:', error);
        });

}