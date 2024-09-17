import DarkModeToggler from "./examples/use-effect";
const ITEMS = [
  { name: "Apple", quantity: 3, inStock: true },
  { name: "Banana", quantity: 2, inStock: false },
  { name: "Orange", quantity: 5, inStock: true },
  { name: "Milk", quantity: 1, inStock: true },
  { name: "Bread", quantity: 0, inStock: false },
  { name: "Eggs", quantity: 12, inStock: true },
  { name: "Cheese", quantity: 4, inStock: true },
  { name: "Chicken Breast", quantity: 2, inStock: false },
  { name: "Rice", quantity: 10, inStock: true },
  { name: "Coffee", quantity: 1, inStock: true },
  { name: "Yogurt", quantity: 6, inStock: true },
  { name: "Pasta", quantity: 3, inStock: false },
  { name: "Tomatoes", quantity: 8, inStock: true },
  { name: "Lettuce", quantity: 0, inStock: false },
  { name: "Olive Oil", quantity: 1, inStock: true },
  { name: "Butter", quantity: 2, inStock: true },
];

function App() {
  return (
    <div>
      <DarkModeToggler />
    </div>
  );
}

export default App;
