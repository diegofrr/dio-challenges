import styles from './App.module.css';
import { Calculator } from './components/Calculator';

const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Calculator />
      </div>
    </div>
  );
}

export default App;
