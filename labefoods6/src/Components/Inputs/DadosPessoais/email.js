import { InputStyled } from "../Endereco/Styled"

export const EmailInput = ({value, onChange}) =>{
    return(
        <InputStyled
            required
            id="outlined-required" 
            label="E-mail" 
            variant="outlined"
            name="email"
            type="email"
            value={value}
            onChange={onChange}
            placeholder="email@email.com"
        />
    )
}