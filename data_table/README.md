# DataTable Component

A simple and interactive React component for managing a data table with functionalities for adding, editing, deleting, searching, and paginating entries.

## Features

- **Add Entries**: Add new entries with fields for name, gender, and age.
- **Edit Entries**: Edit existing entries directly in the table.
- **Delete Entries**: Delete entries from the table.
- **Search**: Filter entries by name.
- **Pagination**: Paginate the entries for easy navigation.

## Installation

1. Clone the repository:

```sh
git clone <repository-url>
```

2. Navigate to the project directory and install dependencies:

```sh
cd <project-directory>
npm install
```

## Usage

Import and use the DataTable component in your project:

```jsx
import React from 'react';
import DataTable from './DataTable';

function App() {
  return (
    <div className="App">
      <DataTable />
    </div>
  );
}

export default App;
```
