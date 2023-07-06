import { useState } from "react";
import List from "./List";
import data from "./data"
const App = () => {
    const [people, pState]=useState(data)
  return (
      <main>
        <section className="container">
            <h3>{people.length} birthday today</h3>
            <List people={people}/>
            <button className="btn btn-block" onClick={()=>pState([])}
                type='button'>Clear all</button>
        </section>
      </main>
  )
};
export default App;
