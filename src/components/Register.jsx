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
                    <label htmlFor="Description">Descrição *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                    
                    <label htmlFor="Conservation">Estado de Conservação *</label>
                    <input type="text"  name="conservation_status" value={formData.conservation_status} onChange={handleChange} required />
                    
                    <label htmlFor="Console">Console *</label>
                    <input type="text"  name="console" value={formData.console} onChange={handleChange} required />
                    
                    <label htmlFor="Year">Ano de lançamento *</label>
                    <input type="text" name="release_year" value={formData.release_year} onChange={handleChange} required />
                    
                    <label htmlFor="URL">URL da imagem *</label>
                    <input type="text" name="cover_url" value={formData.cover_url} onChange={handleChange} required />
                    
                    <input type="submit" value="Finalizar Cadastro" />
                </form>
                </div>
        </div>
    );
}

export default Register;