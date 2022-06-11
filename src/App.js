import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {
    const [plase, setPlase] = useState(data);
    const text = 'Это город в котором я провела все свое летнее детсво.Это город - котов, даже при вьезде в город Три котика встречают Вас.В городе миллион памятников и графити посвященных кошкам.Вы увидите кошачий светофор, домики кошек, самих кошечек и кучу напоминаний о них.Город расположен на берегу Балтийского моря, да оно не горячее, но если вы его прочувствуете,то лучшего места вынайти не сможете.'
    const [showMore, setShowMore]=useState(false)
    const removePlase = (id) => {
      let newPlase = plase.filter(ex => ex.id !== id);
      setPlase(newPlase)
    }

  return (
    <div >
      <div className='center'>
        <h1>Мой любимый город. <br></br>Зеленоградск в Калининградской области.</h1>
        <h2>{plase.length} необычных музеев города</h2>
        <p>{showMore ? text : text.substring(0,90)+'...'} 
        <button onClick={()=>{setShowMore(!showMore)}}>{showMore ? 'Скрыть' : 'Подробнее'}</button></p>
      </div>
      {plase.map ((element => {
        const {id, name, image, sourse} =element;
        return (
          <div className='part'>
            <div key= {id} className='center bord'>
                <div className=''>
                  <h2> {id} - {name}</h2>
                </div>
                <div>
                  <img src= {image} width='300px' alt='photo' />
                </div>
                <div>
                  <button><a href='{sourse} target = _blank'>Подробнее </a></button>
                  <button onClick={() => removePlase(id)}>Убрать</button>
                </div>
            </div>
          </div>
        )
      }

      ))

      }
    </div>
  );
}

export default App;
