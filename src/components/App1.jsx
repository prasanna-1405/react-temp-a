import styles from "./App1.module.css"

import "./App1.css";

export default function App1() {

  const mystyle = {

    color:'red',

    backgroundColor:'black',

  }

    return (

      <div>

        <h3>This is App1</h3>

        <p style={{backgroundColor:'pink',color:'blue'}}>This is a paragraph</p>

        <p style={mystyle}>This is 2nd paragraph</p>

        <p className="txtPara">This is 3rd paragraph</p>
        <p className={styles.txtPara}>hi</p>

        

      </div>

    );

  }