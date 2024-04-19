import styles from "./Login.module.css";
import { SignIn } from "phosphor-react";
import React, { useState } from 'react';
import { Link } from "react-router-dom"

function Login(){
    const [formData, setFormData] = useState({
        email: '',
        password: '',
      });
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        // Aqui você pode enviar os dados do formulário para o backend
        console.log('Dados do formulário:', formData);
      };


    return(
        <div className={styles.Forms}>
            <div className={styles.Title}>
                <SignIn size={32} /> Login
            </div>

            <div>
                <form onSubmit={handleSubmit}>
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

                    <div className={styles.LineButton}>
                        <input
                        className={styles.Send}
                        type="submit"
                        value="Entrar"
                        />
                        <Link to='/NewAccount'><button className={styles.Register}>Registrar-se </button></Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;