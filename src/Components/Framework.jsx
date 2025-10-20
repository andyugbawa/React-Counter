import React,{useState,useEffect} from 'react'
import "./style.css"

 function Framework() {
  const [count, setCount] = useState(0);
   const [theme, setTheme] = useState("light");

  //   useEffect(() => {
  //   const savedCount = localStorage.getItem("count");
  //   const savedTheme = localStorage.getItem("theme");

  //   if (savedCount) setCount(Number(savedCount));
  //   if (savedTheme) setTheme(savedTheme);
  // }, []);

   useEffect(() => {
    document.body.className = theme; // this sets <body class="light"> or <body class="dark">
  }, [theme]);

  const increment = () => setCount(count + 1);

  
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const saveCount = () => {
    localStorage.setItem("count", count);
    alert("Count saved successfully!");
  };
  const resetCount = () => {
    setCount(0);
    localStorage.removeItem("count");
    alert("Counter reset to 0!");
  };

  
  const deleteSavedCount = () => {
    localStorage.removeItem("count");
    alert("🗑️ Saved count deleted!");
  };

  const deleteAllData = () => {
    const confirmDelete = window.confirm("⚠️ Are you sure you want to delete ALL data? (Count + Theme)");
    if (confirmDelete) {
      localStorage.clear();
      setCount(0);
      setTheme("light");
      document.body.className = "light";
      alert("🔥 All data deleted!");
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };
  return (
    <div className='CounterApp'>
        <div>
      <h1>React Counter</h1>
      <h1>{count}</h1>
      <div className='content'>
        <button className='increment' onClick={increment}>Increment</button>
        <button className='decrement' onClick={decrement}>Deccrement</button>
          <button className='save' onClick={saveCount}>Save</button>
           <button className='reset' onClick={resetCount}>Reset</button>
           <button className='delete' onClick={deleteSavedCount}>Delete Count</button>
          <button className='delete-all' onClick={deleteAllData}>Delete All</button>
          <button className='theme-toggle' onClick={toggleTheme}>
            {theme === "light" ? "Switch to Dark" : "Switch to Light"}
          </button>
      </div>

        </div>
      
    </div>
  )
}
export default Framework

