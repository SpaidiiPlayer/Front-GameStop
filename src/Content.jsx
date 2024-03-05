import styles from './Content.module.css';
import { Cards } from './GameCards.jsx'
import { PlusCircle } from 'phosphor-react';
import { Funnel } from 'phosphor-react';
import { PencilSimple } from 'phosphor-react';
import { Plus, Minus} from 'phosphor-react'; 

export function Content(){
    return (
        <div className={styles.Content}>
            <div className={styles.Title}>   
                <PlusCircle size={24} /> Produtos
            </div>
            <div className={styles.Buttons}>
                <button>Filtrar <Funnel size={24} /></button>
                <button>Editar <PencilSimple size={24} /></button>
                <button>Adicionar <Plus size={24} /></button>
                <button>Remover <Minus size={24} /></button>
            </div>

            <div className={styles.Cardlist}>
                <Cards 
                url = 'https://i.pinimg.com/564x/c4/65/7b/c4657be2b28a02cac60512ad2a746077.jpg'
                id = '1'
                desc = 'Super Mario'
                date = '10/06/2017'
                conservation = 'Bom'
                console = 'Nintendo Switch'
                />
                <Cards 
                url = 'https://i.pinimg.com/564x/c4/65/7b/c4657be2b28a02cac60512ad2a746077.jpg'
                id = '2'
                desc = 'Super Mario 2'
                date = '10/02/2010'
                conservation = 'Veterano de Guerra'
                console = 'Nintendo Switch'
                />
                <Cards 
                url = 'https://i.pinimg.com/564x/c4/65/7b/c4657be2b28a02cac60512ad2a746077.jpg'
                id = '3'
                desc = 'Super Mario 3'
                date = '31/08/2017'
                conservation = 'Novo'
                console = 'Nintendo Switch'
                />
            </div>
        </div>
    )
}