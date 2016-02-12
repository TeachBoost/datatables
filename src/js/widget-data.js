var widgetData = {
    options: {
        tree: true,
        header: {
            title: "{{framework}} Summary",
            options: [
                'toggle-framework'
            ]
        },
        filters: [ "date", "tag", "grade", "observer", "topic" ],
        actions: [
            'download-csv', 'print'
        ]
    },
    columns: [
        {
            id: 1,
            position: 1,
            label: "Competency",
            type: "competency",
            options: {}
        },
        {
            id: 2,
            position: 2,
            label: "% > Proficient",
            type: "percentage",
            options: {
                precision: 0
            }
        },
        {
            id: 3,
            position: 3,
            label: "Average Rating",
            type: "average-rating",
            options: {}
        },
        {
            id: 4,
            position: 4,
            label: "Progress",
            type: "progress-chart",
            options: {
                maxPoints: 25
            }
        },
        {
            id: 5,
            position: 5,
            label: "Insights",
            type: "insight-links",
            options: {
                insights: [ 'competency-report', 'competency-timeline' ]
            }
        }
    ],
    data: [
        {
            1: {
                label: "1. Planning and Preparation",
                id: "380-1",
                parent: null,
                code: "1"
            },
            2: 0.2,
            3: {
                score: 3,
                label: "Effective"
            },
            4: [
                3, 2, 3, 4, 4, 2, 1, 4
            ],
            5: [
                '/insights/competency/380-1/0/10/0',
                'insights/group/comptimeline/10/380-1/0'
            ]
        },
        {
            1: {
                label: "1a. Knowledge of Content and Pedagogy",
                id: "380-1.1",
                parent: "380-1",
                code: "1a"
            },
            2: 0.18,
            3: {
                score: 2,
                label: "Developing"
            },
            4: [
                1, 2, 4, 2, 1, 3
            ],
            5: [
                '/insights/competency/380-1.1/0/10/0',
                'insights/group/comptimeline/10/380-1.1/0'
            ]
        },
        {
            1: {
                label: "2. The Classroom Environment",
                id: "380-2",
                parent: null,
                code: "2"
            },
            2: 0.5,
            3: {
                score: 4,
                label: "Highly Effective"
            },
            4: [
                3, 4, 3, 4, 4, 2, 4, 4
            ],
            5: [
                '/insights/competency/380-2/0/10/0',
                'insights/group/comptimeline/10/380-2/0'
            ]
        },
        {
            1: {
                label: "2a. Creating an Environment of Respect and Rapport",
                id: "380-2.1",
                parent: "380-2",
                code: "2a"
            },
            2: 0.18,
            3: {
                score: 2,
                label: "Developing"
            },
            4: [
                1, 2, 4, 2, 1, 3
            ],
            5: [
                '/insights/competency/380-2.1/0/10/0',
                'insights/group/comptimeline/10/380-2.1/0'
            ]
        }
    ]
};