import { useState } from "react";
import styled from "styled-components"

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;

    h2 {
        font-size: 1rem;
    }

    button {
        background-color: #25D366;
        border: none;
        margin-top: 20px;
        padding: 5px 5px;
        font-weight: bold;
    }
`

const FormCustomerDetailsAndCompleteOrder = () => {

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        city: 'Juazeiro',
        neighborhood: '',
        street: '',
        number: '',
        referencePoint: ''
    });

    const handleInputChange = (event: any) => {
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value })
    };

    const handleSubmit = (event: any) => {
        event.preventDefault()
        console.log(formData)
    };

    return (
        <Form onSubmit={handleSubmit}>
            <h2>Preencha seus dados para finalizar o pedido</h2>

            <label htmlFor="name">Nome Completo*</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />

            <label htmlFor="phone">Telefone*</label>
            <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required />

            <label htmlFor="city">Cidade*</label>
            <select id="city" name="city" required value={formData.city} onChange={handleInputChange}>
                <option>Juazeiro</option>
                <option>Petrolina</option>
            </select>

            <label htmlFor="neighborhood">Bairro*</label>
            <input type="text" id="neighborhood" name="neighborhood" value={formData.neighborhood} onChange={handleInputChange} required />

            <label htmlFor="street">Rua*</label>
            <input type="text" id="street" name="street" value={formData.street} onChange={handleInputChange} required />

            <label htmlFor="number">Número*</label>
            <input type="text" id="number" name="number" value={formData.number} onChange={handleInputChange} required />

            <label htmlFor="referencePoint">Ponto de referência</label>
            <input type="text" id="referencePoint" name="referencePoint" value={formData.referencePoint} onChange={handleInputChange}/>
            
            <button type="submit" value="Enviar"><a href="https://api.whatsapp.com/send?phone=5574999658200&text=Ol%C3%A1%2C%20como%20vai%3F" target="_blank">Enviar mensagem pelo WhatsApp</a></button>
            

        </Form>
    )
}

export default FormCustomerDetailsAndCompleteOrder