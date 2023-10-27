# React + Vite

This is a full-stack React Application with a firebase back-end.
The goal of the assignment was to gain a mastery over OOP (Object
Oriented Progamming) principals. Which I definetly did.

A Todo project

There is actually a lot going on with this project. It's initial purpose is to work
with and explore Object Oriented Programming principals. To do this the data structure
of the app is organized in way that requires the ability to manipulate state across
multiple components within the application.

Third-party libraries:
-materialUI
-date-fns for date formatting
-uuid for unique id's

[
    {
      id: '1',
      title: 'Project 1',
      description: 'A placeholder project',
      displayToMain: true,
      taskArray: [
        {
          id: '101',
          taskTitle: 'Take out the trash',
          dueDate: '2023-10-31',
          priority: 'Low Priority',
        },
        {
          id: '102',
          taskTitle: 'Wash clothes',
          dueDate: '2023-10-31',
          priority: 'Low Priority',
        },
        {
          id: '103',
          taskTitle: 'Do the dishes',
          dueDate: '2023-10-31',
          priority: 'Low Priority',
        },
      ],
    },
    {
      id: '2',
      title: 'Project 2',
      description: 'Another placeholder project',
      displayToMain: false,
      taskArray: [
        {
          id: '201',
          taskTitle: 'Mow the Grass',
          dueDate: '2023-10-31',
          priority: 'Low Priority',
        },
        {
          id: '202',
          taskTitle: ' Do the dishes',
          dueDate: '2023-10-31',
          priority: 'Low Priority',
        },
        {
          id: '203',
          taskTitle: 'Wash clothes',
          dueDate: '2023-10-31',
          priority: 'Low Priority',
        },
        {
          id: '204',
          taskTitle: 'Change the Oil',
          dueDate: '2023-10-31',
          priority: 'Low Priority',
        },
      ],
    },
  ]