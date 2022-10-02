import { useState } from "react"
import { InputStyled } from "../Endereco/Styled"

export const CpfInput = ({value, onChange}) =>{

    return(
        <InputStyled
            required
            id="outlined-required"
            label="CPF"
            name="cpf"
            value={value}
            onChange={onChange}
            placeholder="000.000.000-00"
        />
    )
}