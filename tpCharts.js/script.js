const ctx = document.getElementById('Graph');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['haitam', 'yannis', 'karim', 'jeremy'],
        datasets: [
            {
                label: 'Exam 1 Results',
                backgroundColor: '#f87979',
                data: [90, 85, 80, 95]
            },
            {
                label: 'Exam 2 Results',
                backgroundColor: '#ff4',
                data: [80, 70, 60, 75]
            },
            {
                label: 'Exam 3 Results',
                backgroundColor: '#000',
                data: [70, 60, 90, 80]
            },

            {
                label: 'Exam 4 Results',
                backgroundColor: '#0f0f',
                data: [84, 65, 40, 74]
            }
        ]
    }
});