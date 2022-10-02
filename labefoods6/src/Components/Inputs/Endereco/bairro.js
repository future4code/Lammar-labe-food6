import { InputStyled } from "./Styled"

export const BairroInput = ({value, onChange}) =>{

    return(
        <InputStyled
            required
            id="outlined-required" 
            label="Bairro" 
            variant="outlined"
            name="neighbourhood"
            type="text"
            value={value}
            onChange={onChange}
            placeholder="Bairro"
        />
    )

}