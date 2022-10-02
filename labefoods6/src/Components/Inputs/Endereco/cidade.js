import { InputStyled } from "./Styled"

export const CidadeInput = ({value, onChange}) =>{

    return(
        <InputStyled
            required
            id="outlined-required" 
            label="Cidade" 
            variant="outlined"
            name="city"
            type="text"
            value={value}
            onChange={onChange}
            placeholder="Cidade"
        />
    )

}