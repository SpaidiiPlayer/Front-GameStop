import styles from "./NewAccount.module.css";
import { SignIn } from "phosphor-react";
import React, { useState } from 'react';

function NewAccount(){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        is_flamengo: false,
        watch_one_piece: false,
        is_from_sousa: false
      });
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };

      const handleTrue = (event) => {
        const { name, checked} = event.target;
        
        setFormData({ ...formData, [name]: checked });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        // Aqui você pode enviar os dados do formulário para o backend
        console.log('Dados do formulário:', formData);
      };


    return(
        <div className={styles.Forms}>
            <div className={styles.Title}>
                <SignIn size={32} /> Registre-se
            </div>

            <div>
                <form onSubmit={handleSubmit}>
                    <div className={styles.LineItem}>
                        <label id="name" htmlFor="name">
                        Nome *
                        </label>
                        <input
                            className={styles.Input}
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className={styles.LineItem}>
                        <label id="email" htmlFor="email">
                        Email *
                        </label>
                        <input
                            className={styles.Input}
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    
                    <div className={styles.LineItem}>
                        <label id="password" htmlFor="password">
                            Senha *
                            </label>
                            <input
                                className={styles.Input}
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                    </div>

                    <div className={styles.LineItem}>
                        <span>Torcedor do flamengo:</span>
                        <label className={styles.Switch}>
                            <div className={styles.SwitchWapper}>
                                <input type="checkbox" name='is_flamengo' onChange={handleTrue}/>
                                <span className={styles.SwitchButton}></span>
                            </div>
                        </label>
                    </div>

                    <div className={styles.LineItem}>
                        <span>Assiste One Piece:</span>
                        <label className={styles.Switch}>
                            <div className={styles.SwitchWapper}>
                                <input type="checkbox" name='watch_one_piece' onChange={handleTrue}/>
                                <span className={styles.SwitchButton}></span>
                            </div>
                        </label>
                    </div>

                    <div className={styles.LineItem}>
                        <span>Nasceu em Sousa-PB:</span>
                        <label className={styles.Switch}>
                            <div className={styles.SwitchWapper}>
                                <input type="checkbox" name='is_from_sousa' onChange={handleTrue}/>
                                <span className={styles.SwitchButton}></span>
                            </div>
                        </label>
                    </div>
                    

                    <div className={styles.LineButton}>
                        <input
                        className={styles.Send}
                        type="submit"
                        value="Registrar-se"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewAccount;