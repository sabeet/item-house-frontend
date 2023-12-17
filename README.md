# Todo List App

This is a simple todo list web application built with React. It allows users to add, edit, and delete todo items.

## Features

- Add new todos with a title, description, and assignee
- Edit existing todos
- Mark todos as complete/incomplete
- Delete todos
- Assign owners of items
- Persist todo data to a backend API

## Usage

On the main page, users can:

- Type a title, description, and select an assignee from a dropdown for new todos
- Click the 'Add' button to add new todos
- Todos are displayed in a list with title, description, assignee, and completion status
- Click the edit to mark a todo as complete/incomplete, and update to update
- Click the 'X' button to remove a todo

The app persists all todos by syncing with a backend REST API using SpringBoot. Newly added, updated, and deleted todos are reflected when a new item is rendered.

## Stack

- TypeScript - Frontend Language
- React - Frontend framework
- Vite - Build tool
- Tailwind CSS - Styling
- Shadcn/ui - Component Library
- React Query - Data fetching & caching
- React Hook Form - Form management

## Deployment

To deploy this project run both the server and frontend.
Start of by git cloning and running the [backend](https://github.com/sabeet/Item-house-backend).
Afterwards, run the front end by doing this:

```bash
  npm run dev
```

It should all work after that.# item-house-frontend
