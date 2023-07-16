// import { useState } from 'react';
import Container from "react-bootstrap/Container";
import OrderEntry from "./pages/entry/OrderEntry";
import { OrderDetailsProvider } from "./contexts/OrderDetails";
// export function replaceCamelWithSpaces(colorName) {
//   return colorName.replace(/\B([A-Z])\B/g, ' $1');
// }

function App() {
  // const [buttonColor, setButtonColor] = useState('MediumVioletRed');
  // const [disabled, setDisabled] = useState(false);
  // const newButtonColor = buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';
  // const grayButtonColor = disabled ? 'gray' : buttonColor

  // const handleChangeButton = () => {
  //   setButtonColor(newButtonColor);
  // }

  return (
    // <div>
    //   <button
    //     style={{ backgroundColor: grayButtonColor, color: "#fff" }}
    //     onClick={handleChangeButton}
    //     disabled={disabled}
    //   >
    //     Change to {replaceCamelWithSpaces(newButtonColor)}
    //   </button>
    //   <br/>
    //   <input
    //     type='checkbox'
    //     id="disable-button-checkbox"
    //     defaultChecked={disabled}
    //     onChange={(e) => setDisabled(e.target.checked)}
    //   />
    //   <label htmlFor='disable-button-checkbox'>Disable button</label>
    // </div>
    <Container>
      <OrderDetailsProvider>
        {/* Summary page and entry page need provider */}
        <OrderEntry />
      </OrderDetailsProvider>
      {/* Confirmation page does not need provider */}
    </Container>
  );
}

export default App;
