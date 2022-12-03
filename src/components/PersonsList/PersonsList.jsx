import persons from '../../data/persons';
import Person from '../Persons/Person';

function PersonsList() {
    return <div className='cards'>
        {persons.map((person) => {
      return <Person {...person} key={person.id}/>
    })
      
    }
    </div>
}

export default PersonsList