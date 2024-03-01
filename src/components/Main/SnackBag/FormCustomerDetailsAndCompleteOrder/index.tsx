import { useEffect, useState } from "react";
import styled from "styled-components"
import { useBag } from "../../../../context/BagContext";

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

    const { bag } = useBag()

    const [messageToWhatsapp, setMessageToWhatsapp] = useState('')

    const handleInputChange = (event: any) => {
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value })
    };

    const handleSubmitForm = (event: any) => {
        event.preventDefault()
        setMessageToWhatsapp(() => {
            const message = `Cliente: ${formData.name}%0ATelefone: ${formData.phone}%0ACidade: ${formData.city}%0ABairro: ${formData.neighborhood}%0ARua: ${formData.street}%0ANúmero: ${formData.number}%0APonto de referência: ${formData.referencePoint}%0A%0APedido%0A%0A${bag.snacks.map(snack => {

                const price = (snack.price * snack.amount).toFixed(2)

                return `${snack.amount}x ${snack.name} R$ ${price.replace('.', ',')}`
            }).reduce((prev, curr) => prev + '%0A' + curr)}%0A%0A*Valor total: R$ ${bag.totalPriceSnacks.toFixed(2).toString().replace('.', ',')}*
            `
            return message
        })
    };

    useEffect(() => {
        if (messageToWhatsapp) {
            window.open(`https://api.whatsapp.com/send?phone=5574999258446&text=${messageToWhatsapp}`, '_blank')
        }
    }, [messageToWhatsapp])

    const formatTheCustomerName = (input: any) => {
        const costumerName = removeNumbersTypedInInput(input)
        setFormData({ ...formData, name: costumerName })
    }

    const phoneNumberFormat = (input: any) => {
        let valueWithJustNumbers = removeCharactersTypedInInput(input)

        let numberFormat = /^(\d{2})(\d{5})(\d{4})$/;
        if (valueWithJustNumbers.length === 11) {
            input.target.value = valueWithJustNumbers.replace(numberFormat, '($1) $2-$3');
        } else {
            input.target.value = valueWithJustNumbers
        }

        setFormData({ ...formData, phone: input.target.value })
    }

    const houseNumberFormat = (input: any) => {
        const houseNumber = removeCharactersTypedInInput(input)
        setFormData({ ...formData, number: houseNumber })
    }

    const removeCharactersTypedInInput = (input: any) => {
        const resultWithJustNumbers = input.target.value.replace(/\D/g, '')
        return resultWithJustNumbers
    }

    const removeNumbersTypedInInput = (input: any) => {
        const resultWithJustLetters = input.target.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, '')
        return resultWithJustLetters
    }

    return (
        <Form onSubmit={handleSubmitForm}>
            <h2>Preencha seus dados para finalizar o pedido</h2>

            <label htmlFor="name">Nome Completo*</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} onKeyUp={(event) => formatTheCustomerName(event)} required />

            <label htmlFor="phone">Telefone*</label>
            <input type="text" id="phone" name="phone" maxLength={15} value={formData.phone} onChange={handleInputChange} onKeyUp={(event) => phoneNumberFormat(event)} required />

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
            <input type="text" id="number" name="number" value={formData.number} onChange={handleInputChange} onKeyUp={(event) => houseNumberFormat(event)} required />

            <label htmlFor="referencePoint">Ponto de referência</label>
            <input type="text" id="referencePoint" name="referencePoint" value={formData.referencePoint} onChange={handleInputChange} />

            <button type="submit" value="Enviar">Enviar pedido pelo WhatsApp</button>

        </Form>
    )
}

export default FormCustomerDetailsAndCompleteOrder