import "./App.css";
import FormMessage from "./components/FormMessage";
import ListMessages from "./components/ListMessages";

function App() {
    return (
        <div className="App">
            <ListMessages />
            <FormMessage />
        </div>
    );
}

export default App;
