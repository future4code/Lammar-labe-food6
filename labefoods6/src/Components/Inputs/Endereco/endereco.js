import { InputStyled } from "./Styled"

export const EnderecoInput = ({value, onChange}) =>{

    return(
        <InputStyled
            required
            id="outlined-required" 
            label="Logradouro" 
            variant="outlined"
            name="street"
            type="text"
            value={value}
            onChange={onChange}
            placeholder="Rua / Av."
        />
    )

}