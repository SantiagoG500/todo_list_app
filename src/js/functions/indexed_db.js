export const IndexedDB = (() => {
  let db;

  const init = () => {
    const indexedDB = window.indexedDB;
    if (indexedDB) {
      const request = indexedDB.open('Todo List App', 1);

      request.onsuccess = () => {
        db = request.result;
      };

      request.onupgradeneeded = () => {
        db = request.result;
        db.createObjectStore('Projects', {
          keyPath: 'title',
        });
        console.log('DB CREATE', db);
      };

      request.onerror = (err) => console.error(`DB ERROR: ${err}`);
    }
  };

  const addProject = (project) => {
    const transaction = db.transaction(['Projects'], 'readwrite');

    transaction.onerror = (event) =>
      console.log(`Transaction Failed: ${event}`);

    const objStore = transaction.objectStore('Projects');
    const request = objStore.add(project);

    request.onerror = (event) =>
      console.log(`DB: New project failed: ${event}`);
  };

  const getProjects = (projectList = []) => {
    if (projectList.length === 0) return;

    const transaction = db.transaction(['Projects'], 'readwrite');
    transaction.onnError = (error) =>
      console.error(`Get Project error: ${error}`);

    for (const project of projectList) {
      const { data, todoList } = project;
      const { todos } = todoList;

      const obj = { ...data, todos };
      const objStore = transaction.objectStore('Projects');

      const request = objStore.add(obj);
      request.onnError = (error) =>
        console.error(`Get Project error: ${error}`);
    }
  };

  return {
    init,
    addProject,
    getProjects,
  };
})();
