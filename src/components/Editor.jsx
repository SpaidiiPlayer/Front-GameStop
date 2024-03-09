import styles from './Editor.module.css';
import { PencilSimple } from 'phosphor-react';
import React, { useState } from 'react';


function Editor(props){
        const [formData, setFormData] = useState({
          name: props.location.state.dados.desc,
          conservation_status: props.location.state.dados.conservation,
          console: props.location.state.dados.console,
          release_year: props.location.state.dados.date,
          cover_url: props.location.state.dados.url,
        });
      
        const handleChange = (event) => {
          const { name, value } = event.target;
          setFormData({ ...formData, [name]: value });
        };
      
        const handleSubmit = (event) => {
          event.preventDefault();
          console.log('Dados da edicao:', formData);
        };
      

    return(
        <div className={styles.Forms}>
            <div className={styles.Title}>
                <PencilSimple size={32} /> Editor de Produtos
            </div>

            <div>
                <form onSubmit={handleSubmit}>
                    <div className={styles.LineItem}>
                        <label id="name" htmlFor="Name">Nome *</label>
                        <input className={styles.Input} type="text" id="Name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>

                    <div className={styles.LineItem}>
                        <label id="conservation_status" htmlFor="Conservation">Estado de Conservação *</label>
                        <input className={styles.Input} type="text" id="Conservation" name="conservation_status" value={formData.conservation_status} onChange={handleChange} required />
                    </div>

                    <div className={styles.LineItem}>
                        <label id="console" htmlFor="Console">Console *</label>
                        <input className={styles.Input} type="text" id="Console" name="console" value={formData.console} onChange={handleChange} required />
                    </div>
                    
                    <div className={styles.LineItem}>
                        <label id="release_year" htmlFor="Year">Ano de lançamento *</label>
                        <input className={styles.Input} type="text" id="Year" name="release_year" value={formData.release_year} onChange={handleChange} required />
                    </div>

                    <div className={styles.LineItem}>
                        <label id="cover_url" htmlFor="URL">URL da imagem *</label>
                        <input className={styles.Input} type="text" id="URL" name="cover_url" value={formData.cover_url} onChange={handleChange} required />
                    </div>

                    <div className={styles.LineButton}>
                        <input className={styles.Send} type="submit" value="Finalizar Cadastro" />
                    </div>
                    
                </form>
                </div>
        </div>
    );
}

export default Editor;