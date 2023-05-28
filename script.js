 const apiUrls = [
      "https://jsonplaceholder.typicode.com/todos/1",
      "https://jsonplaceholder.typicode.com/todos/2",
      "https://jsonplaceholder.typicode.com/todos/3",
      "https://jsonplaceholder.typicode.com/todos/4",
      "https://jsonplaceholder.typicode.com/todos/5",
      "https://jsonplaceholder.typicode.com/todos/6",
      "https://jsonplaceholder.typicode.com/todos/7",
      "https://jsonplaceholder.typicode.com/todos/8",
      "https://jsonplaceholder.typicode.com/todos/9",
      "https://jsonplaceholder.typicode.com/todos/10",
    ];

    async function fetchDataWithPromises() {
      const startTime = Date.now();

      const allPromises = apiUrls.map(url => fetch(url));
      const anyPromise = Promise.any(allPromises);

      try {
        const responses = await Promise.all(allPromises);
        const allEndTime = Date.now();
        const timetakenbyall = allEndTime - startTime;
        const tdall = document.getElementById('output-all');
        tdall.innerText = timetakenbyall;
       
      } catch (error) {
        console.error(error);
      }

      try {
        const response = await anyPromise;
        const anyEndTime = Date.now();
        const timetakenbyany = anyEndTime - startTime;
        const tdany = document.getElementById('output-any');
        tdany.innerText = timetakenbyany;
       
      } catch (error) {
        console.error(error);
      }
    }

    fetchDataWithPromises();

