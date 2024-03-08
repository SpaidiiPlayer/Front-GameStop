import styles from './Content.module.css';
import { Cards } from './GameCards.jsx'
import { PlusCircle } from 'phosphor-react';
import { Funnel } from 'phosphor-react';
import { PencilSimple } from 'phosphor-react';
import { Plus, Minus} from 'phosphor-react'; 

export function Content(){
    const cardlist = [{
        id: '1',
        url: 'https://i.pinimg.com/564x/c4/65/7b/c4657be2b28a02cac60512ad2a746077.jpg',
        desc: 'Super Mario w',
        date: '21/11/2019',
        conservation: 'Bom',
        console: 'PS2',
    },
    {
        id: '2',
        url: 'https://archive.org/download/super-mario-moto/screenshot_02.png',
        desc: 'Super Mario Moto',
        date: '12/02/1999',
        conservation: 'Ruim',
        console: 'Nintendo Switch',
    },
    {
        id: '3',
        url: 'https://cdn.sistemawbuy.com.br/arquivos/c30f3cdb5ede193830560f4c44f96b28/produtos/6496190606606/20230623191333-6496190d7c41a_mini.jpg',
        desc: 'Sonic X',
        date: '05/03/2000',
        conservation: 'Aceitável',
        console: 'XboX',
    },
    {
        id: '4',
        url: 'https://archive.org/download/super-mario-moto/screenshot_02.png',
        desc: 'Mario Moto',
        date: '15/04/2003',
        conservation: 'Novo',
        console: 'XboX',
    },
    {
        id: '5',
        url: 'https://cdn.sistemawbuy.com.br/arquivos/c30f3cdb5ede193830560f4c44f96b28/produtos/6496190606606/20230623191333-6496190d7c41a_mini.jpg',
        desc: 'Sonic X',
        date: '05/10/2010',
        conservation: 'Veterano de Guerra',
        console: 'PSP',
    },
    {
        id: '6',
        url: 'https://i.pinimg.com/564x/c4/65/7b/c4657be2b28a02cac60512ad2a746077.jpg',
        desc: 'Super Mario W',
        date: '10/12/2001',
        conservation: 'Aceitável',
        console: 'XboX',
    },
    {
        id: '7',
        url: 'https://cdn.sistemawbuy.com.br/arquivos/c30f3cdb5ede193830560f4c44f96b28/produtos/6496190606606/20230623191333-6496190d7c41a_mini.jpg',
        desc: 'Sonic X',
        date: '05/03/2000',
        conservation: 'Aceitável',
        console: 'XboX',
    }

]


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
            {cardlist.map((gamecard, index) => (
                <>
                    <Cards 
                        url={gamecard.url}
                        id={gamecard.id}
                        desc={gamecard.desc}
                        date={gamecard.date}
                        conservation={gamecard.conservation}
                        console={gamecard.console}
                    />
                </>
            ))}


                
            </div>
        </div>
    )
}