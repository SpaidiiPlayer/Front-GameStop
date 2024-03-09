import styles from './Register.module.css';
import { PlusCircle } from 'phosphor-react';
import React, { useState } from 'react';

function Register(){
        const [formData, setFormData] = useState({
          name: '',
          conservation_status: '',
          console: '',
          release_year: '',
          cover_url: ''
        });
      
        const handleChange = (event) => {
          const { name, value } = event.target;
          setFormData({ ...formData, [name]: value });
        };
      
        const handleSubmit = (event) => {
          event.preventDefault();
          console.log('Dados do formulário:', formData);
          setFormData({
            name: '',
            conservation_status: '',
            console: '',
            release_year: '',
            cover_url: ''
          })
        };
      

    return(
        <div className={styles.Forms}>
            <div className={styles.Title}>
                <PlusCircle size={32} /> Cadastro de Produtos
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

export default Register;