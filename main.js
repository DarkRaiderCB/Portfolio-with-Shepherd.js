document.addEventListener("DOMContentLoaded", function() {
    const tour = new Shepherd.Tour({
        defaultStepOptions: {
            cancelIcon: {
                enabled: true
            },
            classes: 'shepherd-theme-arrows'
        }
    });

    tour.addStep({
        id: 'step1',
        text: 'Welcome to my portfolio!',
        attachTo: { element: '#a1', on: 'bottom' },
        buttons: [
            {
                text: 'Next',
                action: tour.next
            }
        ]
    });

    tour.addStep({
        id: 'step2',
        text: 'Explore my academic details here.',
        attachTo: { element: '#a2', on: 'top' },
        buttons: [
            {
                text: 'Next',
                action: tour.next
            }
        ]
    });

    tour.addStep({
        id: 'step3',
        text: 'Check out my projects.',
        attachTo: { element: '#a3', on: 'top' },
        buttons: [
            {
                text: 'Next',
                action: tour.next
            }
        ]
    });

    tour.addStep({
        id: 'step4',
        text: 'Discover my technical skills.',
        attachTo: { element: '#a4', on: 'top' },
        buttons: [
            {
                text: 'Next',
                action: tour.next
            }
        ]
    });

    tour.addStep({
        id: 'step5',
        text: 'Explore my achievements.',
        attachTo: { element: '#a5', on: 'top' },
        buttons: [
            {
                text: 'Next',
                action: tour.next
            }
        ]
    });

    tour.addStep({
        id: 'step6',
        text: 'Feel free to contact me!',
        attachTo: { element: '#a6', on: 'top' },
        buttons: [
            {
                text: 'Done',
                action: tour.complete
            }
        ]
    });

    document.getElementById('start-tour').addEventListener('click', function() {
        tour.start();
    });
});
